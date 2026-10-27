expected_prices = [
    ("3 Months", "1 Account", "$39.99"),
    ("3 Months", "2 Accounts", "$59.99"),
    ("3 Months", "3 Accounts", "$79.99"),
    ("3 Months", "4 Accounts", "$99.99"),
    ("6 Months", "1 Account", "$56.99"),
    ("6 Months", "2 Accounts", "$84.99"),
    ("6 Months", "3 Accounts", "$109.99"),
    ("6 Months", "4 Accounts", "$134.99"),
    ("12 Months", "1 Account", "$79.99"),
    ("12 Months", "2 Accounts", "$119.99"),
    ("12 Months", "3 Accounts", "$149.99"),
    ("12 Months", "4 Accounts", "$179.99"),
]

with open("components/PricingSection.tsx", "r", encoding="utf-8") as f:
    code = f.read()

missing = []
for dur, acc, pr in expected_prices:
    pattern = f'"{pr}"'
    if pattern not in code:
        missing.append((dur, acc, pr))

if not missing:
    print(f"VERIFIED: All {len(expected_prices)} prices exist in components/PricingSection.tsx with exact dollar formatting!")
    for dur, acc, pr in expected_prices:
        print(f"  [OK] {dur.ljust(10)} | {acc.ljust(11)}: {pr}")
else:
    print("FAILED! Missing:", missing)
