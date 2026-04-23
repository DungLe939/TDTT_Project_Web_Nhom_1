// Xóa tất cả data test cũ và seed lại
const PROJECT = "smart-tourism-abf26";
const LOCATION = "asia-southeast1";
const SERVICE = "smart-tourism-abf26-service";
const URL = `http://127.0.0.1:9399/v1alpha/projects/${PROJECT}/locations/${LOCATION}/services/${SERVICE}:executeGraphql`;

async function gql(query) {
  const r = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  return r.json();
}

// Xóa tất cả food_items trước (vì có FK)
console.log("🗑️  Xóa tất cả FoodItems...");
const foods = await gql("query { foodItems { id } }");
for (const f of foods.data?.foodItems || []) {
  await gql(`mutation { foodItem_delete(id: "${f.id}") }`);
}
console.log(`   Đã xóa ${foods.data?.foodItems?.length || 0} food items`);

// Xóa tất cả shops
console.log("🗑️  Xóa tất cả Shops...");
const shops = await gql("query { shops { id } }");
for (const s of shops.data?.shops || []) {
  await gql(`mutation { shop_delete(id: "${s.id}") }`);
}
console.log(`   Đã xóa ${shops.data?.shops?.length || 0} shops`);

// Xóa tất cả categories
console.log("🗑️  Xóa tất cả Categories...");
const cats = await gql("query { categories { id name } }");
for (const c of cats.data?.categories || []) {
  await gql(`mutation { category_delete(id: "${c.id}") }`);
  console.log(`   🗑️  "${c.name}"`);
}
console.log(`   Đã xóa ${cats.data?.categories?.length || 0} categories`);

console.log("\n✅ Đã xóa sạch tất cả data! Chạy lại seed-data.mjs");
