/**
 * ============================================================
 * Seed Data Script cho Firebase Data Connect Emulator
 * ============================================================
 *
 * Script đọc file shopeefood_shops.json và seed data vào
 * Data Connect emulator qua executeGraphql endpoint.
 *
 * Chạy: node scripts/seed-data.mjs
 *
 * Yêu cầu: Emulator đang chạy (npx firebase-tools emulators:start)
 * ============================================================
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env từ thư mục gốc
config({ path: resolve(__dirname, "..", ".env") });

// ============================================================
// Cấu hình (Lấy từ .env)
// ============================================================
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const LOCATION = process.env.FIREBASE_LOCATION;
const SERVICE_ID = process.env.FIREBASE_SERVICE_ID;

const GRAPHQL_URL = `http://127.0.0.1:9399/v1alpha/projects/${PROJECT_ID}/locations/${LOCATION}/services/${SERVICE_ID}:executeGraphql`;

// ============================================================
// Helper: gọi GraphQL qua REST
// ============================================================
async function gql(query, variables = {}) {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors && json.errors.length > 0) {
    const errMsg = json.errors.map((e) => e.message).join("; ");
    throw new Error(errMsg);
  }

  return json.data;
}

// ============================================================
// Helper: tạo slug từ tên tiếng Việt
// ============================================================
function toSlug(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// ============================================================
// Helper: delay
// ============================================================
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log("🚀 Bắt đầu seed data vào Data Connect Emulator...\n");

  // ----------------------------------------------------------
  // 1. Đọc file dữ liệu
  // ----------------------------------------------------------
  const dataPath = resolve(__dirname, "..", "Data", "shopeefood_all.json");
  console.log(`📖 Đọc file: ${dataPath}`);
  const rawData = JSON.parse(readFileSync(dataPath, "utf-8"));

  const { shops } = rawData;
  console.log(
    `   → ${shops.length} shops, tổng foods: ${rawData.total_foods}\n`
  );

  // ----------------------------------------------------------
  // 2. Extract unique categories
  // ----------------------------------------------------------
  const categorySet = new Set();
  for (const shop of shops) {
    for (const food of shop.foods || []) {
      if (food.category) {
        categorySet.add(food.category);
      }
    }
  }
  const categoryNames = [...categorySet].sort();
  console.log(
    `📂 Tìm thấy ${categoryNames.length} categories: ${categoryNames.join(", ")}\n`
  );

  // ----------------------------------------------------------
  // 3. Seed Categories
  // ----------------------------------------------------------
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📂 BƯỚC 1: Tạo Categories...");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  for (const name of categoryNames) {
    const slug = toSlug(name);
    try {
      await gql(
        `mutation($name: String!, $slug: String!) {
          category_insert(data: { name: $name, slug: $slug })
        }`,
        { name, slug }
      );
      console.log(`   ✅ "${name}" (slug: ${slug})`);
    } catch (err) {
      console.log(`   ⚠️  "${name}" - ${err.message.substring(0, 100)}`);
    }
  }

  // Query lại tất cả categories để lấy ID map
  const catResult = await gql("query { categories { id name } }");
  const categoryMap = new Map();
  for (const cat of catResult.categories) {
    categoryMap.set(cat.name, cat.id);
  }
  console.log(`\n   📊 Tổng categories trong DB: ${categoryMap.size}\n`);

  // ----------------------------------------------------------
  // 4. Seed Shops
  // ----------------------------------------------------------
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🏪 BƯỚC 2: Tạo Shops...");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  const SHOP_MUTATION = `
    mutation(
      $externalId: String!,
      $name: String!,
      $address: String!,
      $city: String!,
      $rating: Float,
      $coverImage: String,
      $url: String!,
      $openTime: String,
      $closeTime: String,
      $priceMin: Int,
      $priceMax: Int,
      $priceDisplay: String,
      $lat: Float,
      $lng: Float
    ) {
      shop_insert(data: {
        externalId: $externalId,
        name: $name,
        address: $address,
        city: $city,
        rating: $rating,
        coverImage: $coverImage,
        url: $url,
        openTime: $openTime,
        closeTime: $closeTime,
        priceMin: $priceMin,
        priceMax: $priceMax,
        priceDisplay: $priceDisplay,
        lat: $lat,
        lng: $lng
      })
    }
  `;

  let shopCount = 0;
  let shopErrors = 0;

  for (const shop of shops) {
    const variables = {
      externalId: String(shop.id),
      name: shop.name,
      address: shop.address,
      city: shop.city || "ho-chi-minh",
      rating: shop.rating ?? null,
      coverImage: shop.cover_image ?? null,
      url: shop.url,
      openTime: shop.opening_hours?.open ?? null,
      closeTime: shop.opening_hours?.close ?? null,
      priceMin: shop.price_range?.min ?? null,
      priceMax: shop.price_range?.max ?? null,
      priceDisplay: shop.price_range?.display ?? null,
      lat: shop.location?.lat ?? 10.762622,
      lng: shop.location?.lng ?? 106.660172
    };

    try {
      await gql(SHOP_MUTATION, variables);
      shopCount++;
      console.log(`   ✅ [${shopCount}/${shops.length}] ${shop.name}`);
    } catch (err) {
      shopErrors++;
      console.log(
        `   ❌ ${shop.name} - ${err.message.substring(0, 100)}`
      );
    }
  }

  // Query lại tất cả shops để lấy URL -> ID map (thêm limit để lấy hết 123 quán)
  const shopResult = await gql("query { shops(limit: 1000) { id url } }");
  const shopMap = new Map();
  for (const s of shopResult.shops) {
    shopMap.set(s.url, s.id);
  }
  console.log(
    `\n   📊 Shops: ${shopCount} tạo mới, ${shopErrors} lỗi. Tổng trong DB: ${shopMap.size}\n`
  );

  // ----------------------------------------------------------
  // 5. Seed FoodItems
  // ----------------------------------------------------------
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🍜 BƯỚC 3: Tạo FoodItems...");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  const FOOD_MUTATION = `
    mutation(
      $name: String!,
      $description: String,
      $price: Int!,
      $priceDisplay: String,
      $imageUrl: String,
      $thumbnailUrl: String,
      $groupName: String,
      $isPopular: Boolean!,
      $totalLike: Int!,
      $shopId: UUID!,
      $categoryId: UUID!,
      $tags: [String!]
    ) {
      foodItem_insert(data: {
        name: $name,
        description: $description,
        price: $price,
        priceDisplay: $priceDisplay,
        imageUrl: $imageUrl,
        thumbnailUrl: $thumbnailUrl,
        groupName: $groupName,
        isPopular: $isPopular,
        totalLike: $totalLike,
        shopId: $shopId,
        categoryId: $categoryId,
        tags: $tags
      })
    }
  `;

  let foodCount = 0;
  let foodErrors = 0;
  let foodSkipped = 0;
  let totalFoods = 0;

  for (const shop of shops) {
    const shopId = shopMap.get(shop.url);
    if (!shopId) {
      console.log(
        `   ⏭️  Bỏ qua foods của "${shop.name}" (shop không tìm thấy)`
      );
      foodSkipped += (shop.foods || []).length;
      continue;
    }

    for (const food of shop.foods || []) {
      totalFoods++;
      const categoryId = categoryMap.get(food.category);
      if (!categoryId) {
        console.log(
          `   ⏭️  "${food.name}" - category "${food.category}" không tìm thấy`
        );
        foodSkipped++;
        continue;
      }

      const variables = {
        name: food.name,
        description: food.description || null,
        price: food.price_value || food.price,
        priceDisplay: food.price_display || null,
        imageUrl: food.image_url || null,
        thumbnailUrl: food.thumbnail_url || food.photo_id || null,
        groupName: food.group_name || null,
        isPopular: food.is_popular || false,
        totalLike: food.total_like || 0,
        shopId,
        categoryId,
        tags: food.tags || [],
      };

      try {
        await gql(FOOD_MUTATION, variables);
        foodCount++;
        if (foodCount % 50 === 0 || foodCount === 1) {
          console.log(
            `   ✅ [${foodCount}] ${food.name} (${shop.name})`
          );
        }
      } catch (err) {
        foodErrors++;
        if (foodErrors <= 5) {
          console.log(
            `   ❌ "${food.name}" - ${err.message.substring(0, 120)}`
          );
        }
      }
    }
  }

  // ----------------------------------------------------------
  // 6. Tổng kết
  // ----------------------------------------------------------
  console.log(
    "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  );
  console.log("📊 TỔNG KẾT SEED DATA");
  console.log(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  );
  console.log(`   📂 Categories : ${categoryMap.size}/${categoryNames.length}`);
  console.log(`   🏪 Shops      : ${shopCount}/${shops.length}`);
  console.log(
    `   🍜 FoodItems  : ${foodCount}/${totalFoods} (${foodErrors} lỗi, ${foodSkipped} bỏ qua)`
  );
  console.log(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  );

  if (foodErrors === 0 && shopErrors === 0) {
    console.log(
      "\n🎉 Seed data thành công! Bạn có thể vào React xài luôn rồi."
    );
  } else {
    console.log("\n⚠️  Có một số lỗi, kiểm tra lại log ở trên.");
  }
}

main().catch((err) => {
  console.error("\n💥 Lỗi nghiêm trọng:", err);
  process.exit(1);
});
