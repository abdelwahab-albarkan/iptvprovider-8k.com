import urllib.request
import re

routes = [
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
    "/refund-policy",
    "/sitemap.xml",
    "/robots.txt"
]

base_url = "http://localhost:3000"
print(f"Testing routes against {base_url}...\n")

all_passed = True
results = []

for r in routes:
    url = f"{base_url}{r}"
    try:
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            code = resp.getcode()
            body = resp.read().decode("utf-8", errors="replace")
            
            # Extract title
            title_match = re.search(r"<title>(.*?)</title>", body, re.IGNORECASE)
            title = title_match.group(1) if title_match else "N/A"
            
            # Check canonical
            canonical_match = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]*)"', body, re.IGNORECASE)
            canonical = canonical_match.group(1) if canonical_match else "N/A"
            
            # Check JSON-LD
            has_jsonld = 'application/ld+json' in body
            
            status_str = f"PASS ({code})" if code == 200 else f"FAIL ({code})"
            print(f"[{status_str}] {r}")
            print(f"        Title: {title}")
            print(f"        Canonical: {canonical}")
            print(f"        JSON-LD Present: {has_jsonld}")
            print(f"        Body Size: {len(body)} bytes\n")
            
            results.append({
                "route": r,
                "code": code,
                "title": title,
                "canonical": canonical,
                "has_jsonld": has_jsonld,
                "size": len(body),
                "passed": code == 200
            })
    except Exception as e:
        all_passed = False
        print(f"[ERROR] {r} -> {e}\n")
        results.append({
            "route": r,
            "error": str(e),
            "passed": False
        })

print(f"\nSummary: {sum(1 for r in results if r.get('passed'))}/{len(routes)} routes passed.")
