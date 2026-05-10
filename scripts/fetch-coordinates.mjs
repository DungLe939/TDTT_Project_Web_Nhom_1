
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "..", "..", "TDTT_NestJS_Nhom1", ".env") });

const API_KEY = process.env.LOCATIONIQ_KEY;
const DATA_PATH = resolve(__dirname, "..", "Data", "shopeefood_shops.json");

async function getCoordinates(address) {
  const url = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${encodeURIComponent(address + ", Ho Chi Minh City, Vietnam")}&format=json&limit=1`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    }
  } catch (err) {
    console.error(`Lỗi khi lấy tọa độ cho: ${address}`);
  }
  return null;
}

async function main() {
  console.log("Bắt đầu lấy tọa độ thật từ LocationIQ...");
  
  const rawData = JSON.parse(readFileSync(DATA_PATH, "utf-8"));
  const { shops } = rawData;
  let successCount = 0;

  for (let i = 0; i < shops.length; i++) {
    const shop = shops[i];
    
    // Nếu quán đã có tọa độ thì bỏ qua (tránh tốn API call)
    if (shop.location && shop.location.lat && shop.location.lat !== 10.762622) {
        continue;
    }

    console.log(`🔍 [${i + 1}/${shops.length}] Đang tìm tọa độ cho: ${shop.name}...`);
    const coords = await getCoordinates(shop.address);
    
    if (coords) {
      shop.location = coords;
      successCount++;
      console.log(`Đã tìm thấy: ${coords.lat}, ${coords.lng}`);
    } else {
      console.log(`Không tìm thấy tọa độ, giữ mặc định.`);
    }

    // Delay 1 giây giữa các lần gọi để tránh bị khóa API (Rate limit)
    await new Promise(r => setTimeout(r, 1000));
  }

  writeFileSync(DATA_PATH, JSON.stringify(rawData, null, 2));
  console.log(`\nXong! Đã cập nhật tọa độ thật cho ${successCount} quán ăn.`);
  console.log("Bây giờ bạn hãy chạy: node scripts/seed-data.mjs để đưa tọa độ vào Database.");
}

main().catch(console.error);
