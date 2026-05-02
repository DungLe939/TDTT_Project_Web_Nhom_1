import json

with open(r'd:\TDTT_Project_Web_Nhom_1\TDTT_NestJS_Nhom1\data\shopeefood_geocoded.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

shops = data.get('shops', [])
missing = []
for s in shops:
    oh = s.get('opening_hours')
    if not oh or not oh.get('open') or not oh.get('close'):
        missing.append(s['name'])

print(f"Total shops: {len(shops)}")
print(f"Shops missing opening_hours: {len(missing)}")
for name in missing:
    print(f"- {name}")
