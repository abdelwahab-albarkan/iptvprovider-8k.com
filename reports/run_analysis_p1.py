import os
import glob
import csv
import json
from collections import defaultdict, Counter

vs_dir = r"c:\Users\clanm\OneDrive\Desktop\iptvprovider-8k.com\vs"
reports_dir = r"c:\Users\clanm\OneDrive\Desktop\iptvprovider-8k.com\reports"
os.makedirs(reports_dir, exist_ok=True)

csv_files = glob.glob(os.path.join(vs_dir, "*.csv"))
print(f"Found {len(csv_files)} CSV files in {vs_dir}")

all_records = []
competitor_counts = defaultdict(int)
raw_keywords = set()
exact_record_signatures = set()
exact_duplicates_count = 0

for file_path in sorted(csv_files):
    fname = os.path.basename(file_path)
    comp_domain = fname.split("-organic")[0]
    
    with open(file_path, mode="r", encoding="utf-8-sig", errors="replace") as f:
        reader = csv.DictReader(f)
        for row in reader:
            kw_raw = row.get("Keyword", "").strip()
            if not kw_raw:
                continue
            
            # create signature for exact duplicate row detection
            sig = (comp_domain, kw_raw, row.get("Position"), row.get("URL"), row.get("Timestamp"))
            if sig in exact_record_signatures:
                exact_duplicates_count += 1
            else:
                exact_record_signatures.add(sig)

            raw_keywords.add(kw_raw)
            competitor_counts[comp_domain] += 1
            
            rec = {
                "competitor": comp_domain,
                "file": fname,
                "keyword": kw_raw,
                "keyword_norm": " ".join(kw_raw.lower().split()),
                "position": int(row.get("Position", 0)) if row.get("Position", "").isdigit() else None,
                "prev_position": int(row.get("Previous position", 0)) if row.get("Previous position", "").isdigit() else None,
                "search_volume": int(row.get("Search Volume", 0)) if row.get("Search Volume", "").isdigit() else 0,
                "keyword_difficulty": float(row.get("Keyword Difficulty", 0)) if row.get("Keyword Difficulty", "") else 0.0,
                "cpc": float(row.get("CPC", 0)) if row.get("CPC", "") else 0.0,
                "url": row.get("URL", "").strip(),
                "traffic": float(row.get("Traffic", 0)) if row.get("Traffic", "") else 0.0,
                "traffic_percent": float(row.get("Traffic (%)", 0)) if row.get("Traffic (%)", "") else 0.0,
                "traffic_cost": float(row.get("Traffic Cost", 0)) if row.get("Traffic Cost", "") else 0.0,
                "competition": float(row.get("Competition", 0)) if row.get("Competition", "") else 0.0,
                "number_of_results": row.get("Number of Results", "").strip(),
                "trends": row.get("Trends", "").strip(),
                "timestamp": row.get("Timestamp", "").strip(),
                "serp_features": row.get("SERP Features by Keyword", "").strip(),
                "intents": row.get("Keyword Intents", "").strip().lower(),
                "position_type": row.get("Position Type", "").strip()
            }
            all_records.append(rec)

total_records = len(all_records)
total_unique_raw_keywords = len(raw_keywords)
unique_norm_keywords = len(set(r["keyword_norm"] for r in all_records))

print(f"Total keyword records: {total_records}")
print(f"Unique raw keyword phrases (before norm): {total_unique_raw_keywords}")
print(f"Unique normalized keyword phrases: {unique_norm_keywords}")
print(f"Exact duplicate records: {exact_duplicates_count}")
print("Competitor breakdown:")
for comp, cnt in competitor_counts.items():
    print(f"  {comp}: {cnt} records")

# Save consolidated dataset
cons_csv_path = os.path.join(reports_dir, "consolidated_dataset.csv")
with open(cons_csv_path, mode="w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=[
        "competitor", "keyword", "keyword_norm", "position", "prev_position",
        "search_volume", "keyword_difficulty", "cpc", "url", "traffic",
        "traffic_cost", "competition", "timestamp", "intents", "serp_features", "file"
    ], extrasaction="ignore")
    writer.writeheader()
    writer.writerows(all_records)
print(f"Saved consolidated dataset to {cons_csv_path}")
