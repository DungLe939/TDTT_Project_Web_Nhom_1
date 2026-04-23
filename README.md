# 🔥 Hướng dẫn Firebase Data Connect — Dự án Smart Tourism

> Tài liệu này dành cho **tất cả thành viên trong nhóm**, giúp bạn thiết lập và chạy được môi trường phát triển với Firebase Data Connect (GraphQL + PostgreSQL). Nếu các bạn có gặp bug hay có lỗi trong quá trình config hãy liên hệ ngay hệ tác giả để tác giả update tài liệu :v

---

## 📋 Mục lục

0. [Cấu trúc file hiện tại](#0-Cấu trúc file hiện tại)
1. [Yêu cầu hệ thống](#1-yêu-cầu-hệ-thống)
2. [Cài đặt ban đầu (Lần đầu clone về)](#2-cài-đặt-ban-đầu)
3. [Chạy Emulator](#3-chạy-emulator)
4. [Seed dữ liệu mẫu](#4-seed-dữ-liệu-mẫu)
5. [Chạy Frontend React](#5-chạy-frontend-react)
6. [Cấu trúc thư mục quan trọng](#6-cấu-trúc-thư-mục-quan-trọng)
7. [Cách sử dụng SDK trong React](#7-cách-sử-dụng-sdk-trong-react)
8. [Thêm Query / Mutation mới](#8-thêm-query--mutation-mới)
9. [Xử lý lỗi thường gặp](#9-xử-lý-lỗi-thường-gặp)

---
## 0. Cấu trúc file hiện tại

- Phía dưới là những folder chính mà tác giả push lên github.

```
TDTT_PROJECT_WEB_NHOM1/
│
├── .agents/skills/                    # Chứa các skill hỗ trợ AI agent
├── Data/                              # Dữ liệu thô crawl từ ShopeeFood
│   ├── shopeefood_flat.json           
│   └── shopeefood_shops.json          
│
├── dataconnect/                       # Cấu hình Firebase Data Connect
│   ├── example/                       # Connector định nghĩa các query/mutation
│   │   ├── connector.yaml             # Cấu hình connector (tên, output SDK...)
│   │   ├── mutations.gql              # Các thao tác ghi, update dữ liệu 
│   │   └── queries.gql                # Các thao tác đọc dữ liệu (SELECT)
│   │
│   ├── schema/
│   │   └── schema.gql                 # Định nghĩa cấu trúc database
│   └── dataconnect.yaml               # Cấu hình service Data Connect
│
├── scripts/                           
│   ├── clean-data.mjs                 # Xóa và reset dữ liệu trong emulator
│   ├── seed-data.mjs                  # Seed dữ liệu vào emulator
│   └── test-endpoint.mjs              # Kiểm tra các endpoint Data Connect
│
├── TDTT_NestJS_Nhom_1/                # Backend (NestJS) 
├── TDTT_ReactJS_Nhom_1/               # Frontend (ReactJS) 
│
├── .firebaserc                        # Liên kết project với Firebase project ID
├── .gitignore                         # Các file/folder không đưa lên Git
├── .npmrc                             # Cấu hình npm (registry, auth token...)
├── firebase.json                      # Cấu hình tổng Firebase (emulators, hosting, ports...)
├── guideFirebase.md                   # Hướng dẫn setup và sử dụng Firebase cho dự án
└── skills-lock.json                   # File lock của AI skills (tương tự package-lock.json)
```

> ⚠️ **Điểm lưu ý**: Điểm lưu ý ở đây bạn chú ý đây là folder nó chưa 2 dự án đang làm là Frontend với Backend chúng ta đang làm. Hãy đọc mục 1 -> 2 -> 3 trước rồi quay lên đọc lại cái này một lần nữa sẽ hiểu hơn.

## 1. Yêu cầu hệ thống

- Trước khi để làm việc với Firebase connect thì ta nói về phiên bản node.
- Tác giả đã thử xài với node phiên bản 25+ nhưng vì nó quá mới nên extension cần thiết `Firebase SQL Connect` trên Visual Code nó không hoạt động.
- Hiện tại phiên bản node đang sử dụng là `22.22.2` nếu phiên bản của bạn quá cao thì bắt buộc phải hạ phiên bản xuống (Must tìm hiểu về NVM để quản lý phiên bản node, các bạn nên config NVM để xài cho tiện)

| Công cụ     | Phiên bản      | Kiểm tra bằng lệnh |
| ----------- | -------------- | ------------------ |
| **Node.js** | nên là 22.22.2 | `node -v`          |
| **npm**     | 9+             | `npm -v`           |

> ⚠️ **Lưu ý**: Về hệ điều hành mà tác giả xài là Window. Nên các hệ điều hành khác như MacOS hay Linux thì tác giả không biết @@ chắc sẽ update sau.

---

## 2. Cài đặt ban đầu

- Khi pull repo về thì các bạn chỉ cần vô các dự án NestJS và ReactJS rồi `npm install` để có được thư viện mới nhất là ổn.

---

## 3. Chạy Emulator

Có **2 cách** để chạy Data Connect Emulator. Chọn cách nào tiện cho bạn:

### Cách 1: Dùng Terminal (CLI)

**Mở Terminal 1** — tại **thư mục gốc** của project (chứa `firebase.json`):

```bash
npx -y firebase-tools@latest emulators:start --project smart-tourism-abf26
```

Chờ đến khi thấy:
```
┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
└─────────────────────────────────────────────────────────────┘
```

### Cách 2: Dùng Extension "Firebase Data Connect" trên VS Code (khuyên dùng)

Đây là cách **dễ hơn** và có giao diện trực quan.

**Bước 1: Cài Extension**
1. Mở VS Code → vào tab **Extensions** (`Ctrl+Shift+X`)
2. Tìm kiếm **"Firebase Data Connect"** (publisher: Google)
3. Nhấn **Install**

**Bước 2: Khởi động Emulator**
1. Sau khi cài, bạn sẽ thấy icon **Firebase Data Connect** ở thanh sidebar bên trái (hình cơ sở dữ liệu)
2. Nhấn vào icon đó → Panel Firebase Data Connect mở ra
3. Nhấn nút **"Start Emulators"**
4. Extension sẽ tự động:
   - Khởi động PostgreSQL emulator
   - Apply schema từ `dataconnect/schema/schema.gql`
   - Hiển thị trạng thái kết nối

![[Pasted image 20260423063620.png]]

> ⚠️ **Điểm lưu ý**: Nếu các bạn thấy nó chạy quay vòng vòng thì hãy đợi hoặc lâu lâu Refresh Emulator View tại vì bật database lên cũng mất khá thời gian (thấy quá 5p là có điềm).

---

### Thông tin chung về cách hoạt động

- Về firebase connect các bạn có thể hiểu như là cái chúng ta đang làm từ nãy đến giờ nó mới chỉ ở trên local thôi có nghĩa là nó start trên máy của các bạn chứ chưa phải ở trên cloud firebase trên web. Điều này có nghĩa là cái này chỉ mới test trên local nếu muốn đẩy dữ liệu lên cloud để cho việc deploy thì phải làm theo cách khác.

- Nhưng có dữ liệu trên cloud của firebase rồi thì chạy local để làm gì sao không lấy data trực tiếp trên cloud để chạy? Lý do mà khiến các bạn nên thử nghiệm và test trên local tại vì trên cloud nó sẽ bị giới hạn số lượng đọc và ghi, bị limit nếu như ta xài hết thì khi các thành viên khác test sẽ bị hết quota.

- Sau khi khởi động Emulators thì các bạn sẽ thấy cách mà firebase trên local nó hoạt động.

Emulator sẽ tạo ra:
- **Emulator Hub** tại `127.0.0.1:4400`
- **PostgreSQL** tại `127.0.0.1:5433` (đáng ra phải là 5432 nhưng trên máy của tác giả có cài một phiên bản postgre khác nên nó nhảy qua 5433 để không bị conflict).
- **Data Connect API** tại `127.0.0.1:9399`

```
┌─────────────────────────────────────────────────────────────┐
│                    Emulator Hub :4400                       │
│                   (Trung tâm điều phối)                     │
│                                                             │
│  • Biết emulator nào đang chạy                              │
│  • Biết emulator nào đang ở port nào                        │
│                                                             │
└───────────────────────┬─────────────────────────────────────┘
                        │
           ┌────────────┴────────────┐
           ↓                         ↓
┌──────────────────┐       ┌──────────────────┐
│  Data Connect    │──────→│   PostgreSQL     │
│  API :9399       │       │   :5433          │
└────────┬─────────┘       └──────────────────┘
         ↑
┌────────┴─────────┐
│    React App     │ hoặc Backend NestJS 
└──────────────────┘
```

- Ta sẽ bỏ qua Emulator Hub nó chỉ là cung cấp 2 cái Data Connect và DB chứ không có gì để nói

- Cách mà `Firebase Connect` hoạt động thì nó các cái App mà muốn chọc được vô database thì nó sẽ phải đi qua cục `Data Connect`. Đây là cửa duy nhất để React app gọi vào, nó nhận GraphQL query/mutation, xử lý logic, rồi mới xuống PostgreSQL lấy dữ liệu.

```
┌─────────────┐        ┌──────────────────────┐        ┌─────────────┐
│             │        │                      │        │             │
│  React App  │──────→ │  Data Connect API    │──────→ │ PostgreSQL  │
│             │        │  :9399               │        │ :5433       │
│             │        │                      │        │             │
└─────────────┘        └──────────────────────┘        └─────────────┘
   Code của bạn           Xử lý GraphQL,            Lưu data, sửa đổi data
                          kiểm tra quyền,
                          validate query
```

- Khi mà triển khai lên product thì nó cũng hoạt động tương tự như vậy.

```
React App  ──→  Firebase Data Connect API  ──→  Cloud SQL PostgreSQL
                    (Google quản lý)              (Google quản lý)
```

> 💡 **Dữ liệu được lưu lại**: `dataconnect/.dataconnect/pgliteData`. Bạn chỉ cần seed (thêm) dữ liệu một lần là được nó sẽ lưu local trên đó.

---

## 4. Seed dữ liệu mẫu vào local

- Về định nghĩa schema cho bảng (table) thì các bạn có thể định nghĩa ở phần `dataconnect/schema/schema.gql` khi bạn viết kiểu định nghĩa vô đó thì lúc start cái emulator thì nó sẽ được khởi tạo trong database

- Khi tạo schema xong ta cần đổ dữ liệu vào. Chỉ cần làm bước này **1 lần** sau khi bắt đầu lần đầu. Nó sẽ được lưu ở `dataconnect/.dataconnect/pgliteData`.

- Cách làm:
**Mở Terminal 2** — tại thư mục gốc `TDTT_Project_Web_1` (trong khi Emulator đang chạy):

```bash
# Seed tất cả dữ liệu (26 categories, 56 shops, 592 food items)
node scripts/seed-data.mjs
```

Kết quả mong đợi:
```
📊 TỔNG KẾT SEED DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   📂 Categories : 26/26
   🏪 Shops      : 56/56
   🍜 FoodItems  : 592/592
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎉 Seed data thành công!
```

### Nếu muốn xóa sạch dữ liệu và seed lại:

```bash
# Xóa toàn bộ dữ liệu
node scripts/clean-data.mjs

# Seed lại
node scripts/seed-data.mjs
```


---

## 5. Hiểu cách sử dụng dữ liệu

- Khi đã có data rồi ta sẽ cần phải hiểu thêm cơ chế của Firbase Connection này. Khi mà chúng ta có scheme và data có sẵn đó rồi vậy bây giờ làm sao react có thể xài được?
- Trong folder `dataconnect` bạn sẽ thấy phần scheme và có thêm một folder nữa là example. Cái folder `example` này thực chất nó là 1 connector, hiểu đơn giản connector là **1 nhóm query/mutation** phục vụ cho 1 mục đích nhất định.
- 1 connector nó có 2 file:
	- Truy vấn dữ liệu: `queries.gql`
	- Ghi, sửa đổi dữ liệu: `mutations.gql`
- Ta sẽ viết những đoạn mã gql sẵn trong những file này. Khi mà đã xây dựng xong ta chạy thì đầu tiên nó sẽ mò đến `dataconnect.yaml` để xem project này có bao nhiêu connector. Sau đó nó vô từng connector để Generate ra SDK (Software Development Kit) cho các dự án. SDK là sao? Bạn tưởng tượng firebase họ làm để thích ứng được nhiều ngôn ngữ như python hay js, ts thì từ cái connector đó nó đọc cấu hình thì nó sinh ra bộ mã tương thích với từng ngôn ngữ đó và trong cái project dự án app (reactjs, nestjs) thì chỉ cần gọi hàm ra là xài đc, toàn bộ cách convert từ gql sang mã để project ta gọi được hàm để truy vấn, sửa data thì nó được gọi là SDK. Đó là ví dụ vì sao bạn sẽ thấy một folder là `dataconnect-generated` trong dự án react

![[Pasted image 20260423082824.png]]

```
Bạn viết:              Connector generate ra:
─────────────          ──────────────────────────
GetAllShops     →      function getAllShops() { ... }
CreateShop      →      function createShop(name, address) { ... }
```

- Còn cách viết hay syntax và cách sinh ra SDK thì phần dưới sẽ nói thêm.


---

## 6. Cấu trúc thư mục quan trọng


### Database Schema (4 bảng)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  CrawlBatch  │     │    Shop      │     │   Category   │
│──────────────│     │──────────────│     │──────────────│
│ id (PK)      │◄────│ crawlBatchId │     │ id (PK)      │
│ city         │     │ name         │     │ name (unique)│
│ sourceName   │     │ address      │     │ slug (unique)│
│ totalShops   │     │ rating       │     └──────┬───────┘
│ totalFoods   │     │ coverImage   │            │
└──────────────┘     │ url (unique) │     ┌──────┴───────┐
                     │ priceMin/Max │     │   FoodItem   │
                     └──────┬───────┘     │──────────────│
                            │             │ id (PK)      │
                            └─────────────│ shopId (FK)  │
                                          │ categoryId   │
                                          │ name         │
                                          │ price        │
                                          │ imageUrl     │
                                          │ isPopular    │
                                          │ totalLike    │
                                          └──────────────┘
```

---

## 7. Cách sử dụng SDK trong React (Cái này AI nó viết)

SDK đã generate sẵn React hooks. Import từ:

```tsx
import {
  useListFoods,
  useListCategories,
  useListFoodsByCategory,
  useGetFoodDetail,
  useListShops,
  useGetShopDetail,
} from '../dataconnect-generated/react';
```

### Ví dụ 1: Lấy danh sách món ăn

```tsx
function FoodList() {
  const { data, isLoading, error } = useListFoods({ limit: 50 });

  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error.message}</p>;

  return (
    <div>
      {data?.foodItems?.map(food => (
        <div key={food.id}>
          <h3>{food.name}</h3>
          <p>{food.priceDisplay}</p>
          <p>Quán: {food.shop?.name} ⭐ {food.shop?.rating}</p>
        </div>
      ))}
    </div>
  );
}
```

### Ví dụ 2: Lấy danh sách categories

```tsx
function CategoryFilter() {
  const { data } = useListCategories();

  return (
    <div>
      {data?.categories?.map(cat => (
        <button key={cat.id}>{cat.name}</button>
      ))}
    </div>
  );
}
```

### Ví dụ 3: Lọc món theo category

```tsx
function FoodByCategory({ categoryId }: { categoryId: string }) {
  const { data } = useListFoodsByCategory({ categoryId });

  return (
    <div>
      {data?.foodItems?.map(food => (
        <p key={food.id}>{food.name} - {food.priceDisplay}</p>
      ))}
    </div>
  );
}
```

### Các hooks có sẵn (AI viết nên không chắc)

| Hook                       | Mô tả                                    | Tham số                    |
| -------------------------- | ----------------------------------------- | -------------------------- |
| `useListCategories()`      | Lấy tất cả categories                    | không cần                  |
| `useListFoods(vars)`       | Lấy danh sách món ăn                     | `{ limit?, offset? }`     |
| `useListFoodsByCategory()` | Lọc món theo category                    | `{ categoryId, limit?, offset? }` |
| `useGetFoodDetail()`       | Chi tiết 1 món ăn                        | `{ id }`                   |
| `useListShops(vars)`       | Lấy danh sách shops                      | `{ limit?, offset? }`     |
| `useGetShopDetail()`       | Chi tiết 1 shop + menu                   | `{ id }`                   |
| `useCreateCategory()`      | Tạo category mới (mutation)              | gọi `.mutate({ name, slug })` |
| `useCreateShop()`          | Tạo shop mới (mutation)                  | gọi `.mutate({ ... })`     |
| `useCreateFoodItem()`      | Tạo food item mới (mutation)             | gọi `.mutate({ ... })`     |

---

## 8. Thêm Query / Mutation mới

Nếu cần thêm query hay mutation:

### Bước 1: Viết GraphQL

Thêm vào `dataconnect/example/queries.gql` hoặc `mutations.gql`:

```graphql
# Ví dụ: thêm query tìm kiếm theo tên
query SearchFoods($keyword: String!, $limit: Int) @auth(level: PUBLIC) {
  foodItems(
    where: { name: { contains: $keyword } }
    orderBy: [{ totalLike: DESC }]
    limit: $limit
  ) {
    id
    name
    price
    priceDisplay
    imageUrl
    shop { name }
  }
}
```

### Bước 2: Regenerate SDK

```bash
# Tại thư mục gốc (emulator phải đang chạy)
npx -y firebase-tools@latest dataconnect:sdk:generate
```

SDK mới sẽ tự sinh ra trong `dataconnect-generated/` với hook `useSearchFoods()` mới.

### Bước 3: Sử dụng trong React

```tsx
import { useSearchFoods } from '../dataconnect-generated/react';

const { data } = useSearchFoods({ keyword: "phở", limit: 20 });
```

---

## 9. Xử lý lỗi thường gặp

### ❌ Lỗi `ECONNRESET` khi tắt Emulator
```
Error: read ECONNRESET
```
👉 **Không sao.** Đây là lỗi bình thường khi Emulator shutdown. Dữ liệu vẫn được lưu an toàn.

### ❌ Lỗi `No QueryClient set`
```
Error: No QueryClient set, use QueryClientProvider to set one
```
👉 Đã được fix trong `App.tsx`. Nếu gặp lại, kiểm tra `App.tsx` có wrap `<QueryClientProvider>`:
```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

// Trong return:
<QueryClientProvider client={queryClient}>
  {/* ... */}
</QueryClientProvider>
```

### ❌ Lỗi `Cannot find module '@tanstack-query-firebase/react/data-connect'`
👉 Cần cài dependency:
```bash
cd TDTT_ReactJS_Nhom_1
npm install @tanstack-query-firebase/react @tanstack/react-query
```

### ❌ Lỗi `Cannot find module './pages/Store'` (gạch đỏ trong IDE)
👉 Restart TypeScript Server: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

### ❌ Port 5432 đã bị chiếm
```
postgres server unable to start on port 5432, starting on 5433
```
👉 Không sao, emulator tự chuyển sang port 5433. App sẽ tự kết nối đúng.

### ❌ Seed data bị trùng
👉 Xóa sạch rồi seed lại:
```bash
node scripts/clean-data.mjs
node scripts/seed-data.mjs
```

---

## 📌 Lưu ý quan trọng

1. **KHÔNG chỉnh sửa thủ công** các file trong `dataconnect-generated/`. Chúng sẽ bị ghi đè khi regenerate SDK.
2. **Dữ liệu emulator** được lưu trong `dataconnect/.dataconnect/pgliteData` (đã có trong `.gitignore`). Mỗi người cần tự seed dữ liệu khi clone repo mới.
3. Khi thay đổi `schema.gql`, cần chạy lại emulator để apply migration tự động.
4. Emulator phải chạy **trước** khi mở React app, nếu không các hook sẽ fail.
