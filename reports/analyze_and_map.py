import os
import glob
import csv
import json
import re
from collections import defaultdict, Counter

vs_dir = r"c:\Users\clanm\OneDrive\Desktop\iptvprovider-8k.com\vs"
reports_dir = r"c:\Users\clanm\OneDrive\Desktop\iptvprovider-8k.com\reports"
os.makedirs(reports_dir, exist_ok=True)

csv_files = glob.glob(os.path.join(vs_dir, "*.csv"))

records = []
keyword_data = defaultdict(lambda: {
    "records": [],
    "competitors": set(),
    "best_pos": 999,
    "best_url": "",
    "search_volume": 0,
    "kd": 0.0,
    "cpc": 0.0,
    "intents": set(),
})

for file_path in sorted(csv_files):
    fname = os.path.basename(file_path)
    comp_domain = fname.split("-organic")[0]
    
    with open(file_path, mode="r", encoding="utf-8-sig", errors="replace") as f:
        reader = csv.DictReader(f)
        for row in reader:
            kw_raw = row.get("Keyword", "").strip()
            if not kw_raw:
                continue
            
            norm_kw = " ".join(kw_raw.lower().split())
            pos = int(row.get("Position", 0)) if row.get("Position", "").isdigit() else 999
            sv = int(row.get("Search Volume", 0)) if row.get("Search Volume", "").isdigit() else 0
            kd = float(row.get("Keyword Difficulty", 0)) if row.get("Keyword Difficulty", "") else 0.0
            cpc = float(row.get("CPC", 0)) if row.get("CPC", "") else 0.0
            url = row.get("URL", "").strip()
            intent_str = row.get("Keyword Intents", "").strip().lower()
            
            kd_entry = keyword_data[norm_kw]
            kd_entry["records"].append(row)
            kd_entry["competitors"].add(comp_domain)
            kd_entry["raw_kw"] = kw_raw
            if sv > kd_entry["search_volume"]:
                kd_entry["search_volume"] = sv
            if kd > 0:
                kd_entry["kd"] = kd
            if cpc > 0:
                kd_entry["cpc"] = cpc
            if pos and pos < kd_entry["best_pos"]:
                kd_entry["best_pos"] = pos
                kd_entry["best_url"] = url
            if intent_str:
                for i in intent_str.split(","):
                    clean_i = i.strip()
                    if clean_i:
                        kd_entry["intents"].add(clean_i)

# Competitor brand names to detect
competitor_brands = [
    "360iptv", "360 iptv", "smartvpro", "smar tv pro", "pillariptv", "pillar iptv",
    "greatiptv", "great iptv", "iptvprimeus", "prime iptv", "iptvsubscription",
    "iptvus", "usiptvprovider", "iptvsmartersapp", "vsee", "superbox", "apollo group",
    "tivi mate", "tivimate", "bous", "king iptv", "xtream", "strong iptv", "falcon iptv",
    "reseller", "reseller iptv", "panel"
]

def classify_cluster(kw):
    k = kw.lower()
    
    # Check branded competitor or hardware box
    for brand in competitor_brands:
        if brand in k:
            return "Competitor Brands & Irrelevant"
    
    # Setup & Devices
    if any(w in k for w in ["firestick", "fire stick", "fire tv"]):
        return "Device Setup - Firestick"
    if any(w in k for w in ["smart tv", "samsung", "lg tv", "apple tv"]):
        return "Device Setup - Smart TV"
    if any(w in k for w in ["android", "shield", "chromecast"]):
        return "Device Setup - Android"
    if any(w in k for w in ["setup", "install", "how to", "tutorial", "guide", "device", "devices"]):
        return "Device Setup - General"
    
    # App / Player
    if any(w in k for w in ["smarters", "player", "m3u", "playlist", "app", "apk", "download"]):
        return "App & Player Support"
        
    # USA Regional
    if any(w in k for w in ["usa", "us ", " us", "american", "united states"]):
        if any(w in k for w in ["plan", "price", "pricing", "cost", "subscription", "buy", "subscribe"]):
            return "Plans & Subscription (USA)"
        return "USA Regional Service"
        
    # Plans & Subscriptions
    if any(w in k for w in ["plan", "price", "pricing", "cost", "subscription", "buy", "subscribe", "package", "trial", "free trial", "month", "year"]):
        return "Plans & Subscription"
        
    # Channels & Content
    if any(w in k for w in ["channel", "channels", "sports", "movie", "live tv", "stream", "streaming", "4k", "8k"]):
        return "Features & Content Compatibility"
        
    # Core Service / Provider
    if any(w in k for w in ["iptv provider", "iptv service", "best iptv", "top iptv", "iptv online", "reliable iptv"]):
        return "Core Service & Provider"
        
    return "General / Informational"

def map_target_page(cluster, kw):
    k = kw.lower()
    if cluster == "Competitor Brands & Irrelevant":
        return "N/A (Exclude / Do Not Target)"
    
    if cluster == "Device Setup - Firestick":
        return "/setup/firestick"
    if cluster == "Device Setup - Smart TV":
        return "/setup/smart-tv"
    if cluster == "Device Setup - Android":
        return "/setup/android"
    if cluster == "Device Setup - General":
        return "/devices"
    if cluster == "App & Player Support":
        return "/devices"
    
    if cluster == "USA Regional Service":
        return "/iptv-usa"
    
    if cluster in ["Plans & Subscription", "Plans & Subscription (USA)"]:
        return "/plans"
        
    if "faq" in k or "what is" in k or "how does" in k or "legit" in k or "legal" in k or "safe" in k:
        return "/faq"
        
    if "contact" in k or "support" in k or "customer service" in k or "phone number" in k:
        return "/contact"
        
    # Core Service keywords default to Homepage
    if cluster == "Core Service & Provider":
        return "/"
        
    if cluster == "Features & Content Compatibility":
        return "/"
        
    return "/iptv-usa"

def assign_priority(sv, kd, comp_count, cluster):
    if cluster == "Competitor Brands & Irrelevant":
        return "Exclude"
    if comp_count >= 3:
        if sv >= 100:
            return "High"
        else:
            return "Medium"
    if sv >= 200:
        return "High" if kd <= 35 else "Medium"
    if sv >= 50:
        return "Medium" if kd <= 30 else "Low"
    return "Low"

keyword_map_rows = []
initial_candidates = [
    "iptv service",
    "iptv services",
    "iptv subscription",
    "iptv provider",
    "iptv usa",
    "iptv service provider",
    "iptv service providers",
    "iptv plans usa",
    "iptv subscribe"
]

cluster_summary = defaultdict(lambda: {"count": 0, "total_sv": 0, "keywords": []})

for kw_norm, data in sorted(keyword_data.items(), key=lambda x: -x[1]["search_volume"]):
    cluster = classify_cluster(kw_norm)
    target_page = map_target_page(cluster, kw_norm)
    intent_list = sorted(list(data["intents"]))
    intent_str = ", ".join(intent_list) if intent_list else "unknown"
    comp_list = sorted(list(data["competitors"]))
    comp_count = len(comp_list)
    priority = assign_priority(data["search_volume"], data["kd"], comp_count, cluster)
    
    notes = []
    if comp_count >= 4:
        notes.append(f"High multi-competitor overlap ({comp_count} competitors: {', '.join(comp_list)})")
    elif comp_count > 1:
        notes.append(f"{comp_count} competitors rank")
        
    if data["best_pos"] <= 5:
        notes.append(f"Top 5 position ({data['best_pos']}) by {comp_list[0]}")
    if data["kd"] <= 20 and data["search_volume"] >= 50:
        notes.append("High volume / low difficulty opportunity")
        
    if cluster == "Competitor Brands & Irrelevant":
        notes.append("Competitor brand / off-scope query - do not target directly")
        
    note_str = "; ".join(notes) if notes else "Standard long-tail"
    
    row = {
        "Keyword": data["raw_kw"],
        "Topic Cluster": cluster,
        "Search Volume": data["search_volume"],
        "Keyword Difficulty": data["kd"],
        "CPC": f"{data['cpc']:.2f}",
        "Search Intent": intent_str,
        "Ranking Competitors": ", ".join(comp_list),
        "Best Observed Ranking URL": data["best_url"],
        "Recommended Target Page": target_page,
        "Priority": priority,
        "Notes": note_str
    }
    keyword_map_rows.append(row)
    
    cluster_summary[cluster]["count"] += 1
    cluster_summary[cluster]["total_sv"] += data["search_volume"]
    cluster_summary[cluster]["keywords"].append({
        "kw": data["raw_kw"],
        "sv": data["search_volume"],
        "kd": data["kd"],
        "competitors": len(comp_list)
    })

# Write keyword_map.csv
map_csv_path = os.path.join(reports_dir, "keyword_map.csv")
with open(map_csv_path, mode="w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=[
        "Keyword", "Topic Cluster", "Search Volume", "Keyword Difficulty",
        "CPC", "Search Intent", "Ranking Competitors", "Best Observed Ranking URL",
        "Recommended Target Page", "Priority", "Notes"
    ])
    writer.writeheader()
    writer.writerows(keyword_map_rows)
print(f"Generated {map_csv_path} with {len(keyword_map_rows)} mapped keywords.")

# Initial candidates verification
initial_report = {}
for cand in initial_candidates:
    match = keyword_data.get(cand)
    if match:
        initial_report[cand] = {
            "found": True,
            "search_volume": match["search_volume"],
            "kd": match["kd"],
            "cpc": match["cpc"],
            "intents": list(match["intents"]),
            "competitors": list(match["competitors"]),
            "best_pos": match["best_pos"],
            "best_url": match["best_url"]
        }
    else:
        initial_report[cand] = {"found": False}

with open(os.path.join(reports_dir, "initial_candidates_validation.json"), "w", encoding="utf-8") as f:
    json.dump(initial_report, f, indent=2)

# Multi competitor overlap analysis
multi_comp = {k: v for k, v in keyword_data.items() if len(v["competitors"]) > 1}
multi_comp_sorted = sorted(multi_comp.items(), key=lambda x: -len(x[1]["competitors"]))

multi_comp_summary = []
for k, v in multi_comp_sorted:
    multi_comp_summary.append({
        "keyword": k,
        "competitor_count": len(v["competitors"]),
        "competitors": list(v["competitors"]),
        "search_volume": v["search_volume"],
        "kd": v["kd"],
        "cpc": v["cpc"],
        "best_pos": v["best_pos"]
    })

with open(os.path.join(reports_dir, "multi_competitor_keywords.json"), "w", encoding="utf-8") as f:
    json.dump(multi_comp_summary, f, indent=2)

# Top opportunities (SV >= 50, KD <= 35, non-brand)
opportunities = [
    r for r in keyword_map_rows
    if r["Priority"] in ["High", "Medium"] and r["Topic Cluster"] != "Competitor Brands & Irrelevant"
]
opportunities = sorted(opportunities, key=lambda x: -int(x["Search Volume"]))

with open(os.path.join(reports_dir, "top_seo_opportunities.json"), "w", encoding="utf-8") as f:
    json.dump(opportunities[:50], f, indent=2)

# Page to keyword allocation summary
page_allocation = defaultdict(lambda: {"count": 0, "total_sv": 0, "sample_keywords": []})
for r in keyword_map_rows:
    p = r["Recommended Target Page"]
    page_allocation[p]["count"] += 1
    page_allocation[p]["total_sv"] += int(r["Search Volume"])
    if len(page_allocation[p]["sample_keywords"]) < 10:
        page_allocation[p]["sample_keywords"].append({
            "keyword": r["Keyword"],
            "sv": r["Search Volume"],
            "kd": r["Keyword Difficulty"],
            "cluster": r["Topic Cluster"]
        })

with open(os.path.join(reports_dir, "page_architecture_allocation.json"), "w", encoding="utf-8") as f:
    json.dump(page_allocation, f, indent=2)

print("Analysis and reports generation complete!")
