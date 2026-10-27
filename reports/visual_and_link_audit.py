import urllib.request
import re
import os
import sys

BASE_URL = "http://localhost:3000"
PUBLIC_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public"))

ROUTES = [
    "/",
    "/iptv-usa",
    "/plans",
    "/devices",
    "/setup/firestick",
    "/setup/smart-tv",
    "/setup/android",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/refund-policy"
]

def audit():
    print("=== STARTING COMPREHENSIVE LINK & ASSET AUDIT ===")
    errors = []
    warnings = []
    
    total_imgs = 0
    total_links = 0
    
    for route in ROUTES:
        url = f"{BASE_URL}{route}"
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req) as resp:
                status = resp.status
                html = resp.read().decode("utf-8")
        except Exception as e:
            errors.append(f"[{route}] Failed to fetch: {e}")
            continue
        
        # Check for obsolete email
        if "support@iptvprovider-8k.com" in html:
            errors.append(f"[{route}] Contains outdated email support@iptvprovider-8k.com!")
            
        # Check for correct contact details in rendered HTML
        if "streamb4.com" not in html and route not in ["/robots.txt", "/sitemap.xml"]:
            warnings.append(f"[{route}] support@streamb4.com not found in page HTML.")
            
        # Extract images
        img_srcs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
        for src in img_srcs:
            total_imgs += 1
            # Next.js optimized images look like /_next/image?url=%2Fimages%2F... or direct /images/...
            clean_path = src
            if clean_path.startswith("/_next/image?url="):
                match = re.search(r'url=([^&]+)', clean_path)
                if match:
                    clean_path = urllib.parse.unquote(match.group(1))
            
            if clean_path.startswith("/"):
                file_disk_path = os.path.join(PUBLIC_DIR, clean_path.lstrip("/").replace("/", os.sep))
                if not os.path.exists(file_disk_path):
                    errors.append(f"[{route}] Broken image asset: {clean_path} -> Disk file not found: {file_disk_path}")
                    
        # Extract all href links
        hrefs = re.findall(r'<a[^>]+href=["\']([^"\']+)["\']', html)
        for href in hrefs:
            total_links += 1
            if href.startswith("tel:"):
                if href != "tel:+212625218443":
                    errors.append(f"[{route}] Invalid tel link: {href}")
            elif "wa.me" in href:
                if href != "https://wa.me/212625218443":
                    errors.append(f"[{route}] Invalid WhatsApp link: {href}")
            elif href.startswith("mailto:"):
                if href.startswith("mailto:support@streamb4.com"):
                    pass # valid
                else:
                    errors.append(f"[{route}] Invalid mailto link: {href}")
            elif href.startswith("#") or href.startswith("http"):
                pass
            elif href.startswith("/"):
                # Internal link
                # ignore query params for route validation
                path_only = href.split("?")[0]
                # verify internal path is one of the valid routes
                if path_only not in ROUTES and path_only not in ["/", "/sitemap.xml", "/robots.txt"]:
                    warnings.append(f"[{route}] Link points to unindexed route: {href}")

    # Verify Pricing on /plans
    plans_url = f"{BASE_URL}/plans"
    req = urllib.request.Request(plans_url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req) as resp:
        plans_html = resp.read().decode("utf-8")
        
    expected_prices = [
        "$39.99", "$59.99", "$79.99", "$99.99",
        "$56.99", "$84.99", "$109.99", "$134.99",
        "$79.99", "$119.99", "$149.99", "$179.99"
    ]
    for p in expected_prices:
        if p not in plans_html:
            errors.append(f"Expected price {p} not found in /plans HTML table/data!")

    print(f"Total images checked: {total_imgs}")
    print(f"Total links checked: {total_links}")
    print(f"Total warnings: {len(warnings)}")
    print(f"Total errors: {len(errors)}")
    
    for w in warnings:
        print(f"  [WARN] {w}")
    for e in errors:
        print(f"  [ERROR] {e}")
        
    if not errors:
        print("ALL AUDIT CHECKS PASSED PERFECTLY!")
        return 0
    else:
        return 1

if __name__ == "__main__":
    sys.exit(audit())
