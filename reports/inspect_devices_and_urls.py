import csv
import json
from urllib.parse import urlparse
from collections import Counter, defaultdict

with open('reports/keyword_map.csv', encoding='utf-8') as f:
    rows = list(csv.DictReader(f))

device_terms = ['firestick', 'fire stick', 'smart tv', 'android', 'device', 'setup', 'smarters', 'm3u', 'player', 'faq', 'contact', 'support']
matched = [r for r in rows if any(t in r['Keyword'].lower() for t in device_terms)]
print(f"Total matched setup/device/player keywords: {len(matched)}")
for m in matched:
    print(f"- {m['Keyword']} (SV: {m['Search Volume']}, KD: {m['Keyword Difficulty']}, Page: {m['Recommended Target Page']}, Cluster: {m['Topic Cluster']})")

# Also inspect competitor URL patterns
with open('reports/consolidated_dataset.csv', encoding='utf-8') as f:
    c_rows = list(csv.DictReader(f))

url_patterns = Counter()
urls_by_comp = defaultdict(set)
for r in c_rows:
    u = r['url'].strip()
    if u:
        path = urlparse(u).path
        url_patterns[path] += 1
        urls_by_comp[r['competitor']].add(path)

print("\nTop Competitor URL Paths ranking across dataset:")
for path, count in url_patterns.most_common(20):
    print(f"  {path or '/'}: {count} occurrences")

print("\nCompetitor ranking paths by domain:")
for comp, paths in urls_by_comp.items():
    print(f"  {comp}: {list(paths)[:5]}")
