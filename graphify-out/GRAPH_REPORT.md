# Graph Report - .  (2026-04-30)

## Corpus Check
- Large corpus: 255 files · ~223,424 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 618 nodes · 516 edges · 37 communities detected
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 45 edges (avg confidence: 0.8)
- Token cost: 1,000 input · 500 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Data Connect SDK & API Operations|Data Connect SDK & API Operations]]
- [[_COMMUNITY_User Input & Schedule Management|User Input & Schedule Management]]
- [[_COMMUNITY_Quests & Achievement Services|Quests & Achievement Services]]
- [[_COMMUNITY_Post Creation & Admin Forms|Post Creation & Admin Forms]]
- [[_COMMUNITY_Travel Scheduler Service|Travel Scheduler Service]]
- [[_COMMUNITY_Authentication & Blog Logic|Authentication & Blog Logic]]
- [[_COMMUNITY_Sidebar Navigation Component|Sidebar Navigation Component]]
- [[_COMMUNITY_Blog & Social Controller|Blog & Social Controller]]
- [[_COMMUNITY_Social Post Interactions|Social Post Interactions]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Project Documentation & Schema|Project Documentation & Schema]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 80|Community 80]]

## God Nodes (most connected - your core abstractions)
1. `main()` - 11 edges
2. `listFoods()` - 7 edges
3. `listCategories()` - 6 edges
4. `listShops()` - 6 edges
5. `SchedulerService` - 6 edges
6. `Alert()` - 6 edges
7. `createCategory()` - 5 edges
8. `createShop()` - 5 edges
9. `createFoodItem()` - 5 edges
10. `SchedulerController` - 5 edges

## Surprising Connections (you probably didn't know these)
- `handleClearCategory()` --calls--> `listFoods()`  [INFERRED]
  TDTT_ReactJS_Nhom_1\src\pages\FoodMarket.tsx → TDTT_ReactJS_Nhom_1\src\dataconnect-generated\esm\index.esm.js
- `handleGetLocation()` --calls--> `Alert()`  [INFERRED]
  TDTT_ReactJS_Nhom_1\src\modules\group-taste\components\UserInputForm.tsx → TDTT_ReactJS_Nhom_1\src\common\components\ui\alert.tsx
- `handleAddSnack()` --calls--> `Alert()`  [INFERRED]
  TDTT_ReactJS_Nhom_1\src\modules\schedule\components\DailyPlanView\DailyPlanView.tsx → TDTT_ReactJS_Nhom_1\src\common\components\ui\alert.tsx
- `handleSubmit()` --calls--> `Alert()`  [INFERRED]
  TDTT_ReactJS_Nhom_1\src\modules\schedule\components\ScheduleFilterModal\ScheduleFilterModal.tsx → TDTT_ReactJS_Nhom_1\src\common\components\ui\alert.tsx
- `handleGenerateSubmit()` --calls--> `Alert()`  [INFERRED]
  TDTT_ReactJS_Nhom_1\src\modules\schedule\pages\SchedulePage\SchedulePage.tsx → TDTT_ReactJS_Nhom_1\src\common\components\ui\alert.tsx

## Communities

### Community 0 - "Data Connect SDK & API Operations"
Cohesion: 0.08
Nodes (37): createCategory(), createCategoryRef(), createFoodItem(), createFoodItemRef(), createShop(), createShopRef(), getFoodDetail(), getFoodDetailRef() (+29 more)

### Community 1 - "User Input & Schedule Management"
Cohesion: 0.06
Nodes (7): handleAddUser(), handleGetLocation(), handleAddSnack(), handleSpin(), handleGenerateSubmit(), Alert(), generateId()

### Community 2 - "Quests & Achievement Services"
Cohesion: 0.11
Nodes (6): handleSubmit(), handleSubmit(), createAchievement(), createReward(), redeemVoucher(), handleRedeem()

### Community 3 - "Post Creation & Admin Forms"
Cohesion: 0.15
Nodes (6): compressImage(), handleImageChange(), handleSubmit(), onSubmit(), calculateDays(), handleSubmit()

### Community 4 - "Travel Scheduler Service"
Cohesion: 0.2
Nodes (3): SchedulerService, fakeRemainingData(), fetchNearbyRestaurants()

### Community 5 - "Authentication & Blog Logic"
Cohesion: 0.2
Nodes (5): AuthGuardCard(), AuthProvider(), useAuth(), useBlog(), AdminLogin()

### Community 7 - "Sidebar Navigation Component"
Cohesion: 0.22
Nodes (2): SidebarMenuButton(), useSidebar()

### Community 9 - "Blog & Social Controller"
Cohesion: 0.22
Nodes (2): getCachedRestaurants(), getRestaurants()

### Community 10 - "Social Post Interactions"
Cohesion: 0.25
Nodes (2): handleKeyDown(), handleSubmitComment()

### Community 18 - "Community 18"
Cohesion: 0.43
Nodes (4): getFirebaseErrorMessage(), handleGithubLogin(), handleGoogleLogin(), handleSubmit()

### Community 20 - "Community 20"
Cohesion: 0.38
Nodes (3): handleCapture(), handleDrop(), handleFileChange()

### Community 21 - "Community 21"
Cohesion: 0.33
Nodes (1): SchedulerController

### Community 23 - "Community 23"
Cohesion: 0.53
Nodes (4): FormControl(), FormDescription(), FormMessage(), useFormField()

### Community 27 - "Community 27"
Cohesion: 0.6
Nodes (5): clearStore(), getAllItems(), getCount(), initDB(), saveItems()

### Community 28 - "Community 28"
Cohesion: 0.53
Nodes (4): parseScanContent(), removeDiacritics(), toListItems(), toParagraphs()

### Community 29 - "Community 29"
Cohesion: 0.4
Nodes (2): extractPredictPayload(), isRecord()

### Community 30 - "Community 30"
Cohesion: 0.6
Nodes (3): gql(), main(), toSlug()

### Community 31 - "Community 31"
Cohesion: 0.5
Nodes (2): CarouselNext(), useCarousel()

### Community 36 - "Community 36"
Cohesion: 0.5
Nodes (1): AppController

### Community 37 - "Community 37"
Cohesion: 0.5
Nodes (1): ClusteringHelper

### Community 38 - "Community 38"
Cohesion: 0.5
Nodes (1): SortingHelper

### Community 39 - "Community 39"
Cohesion: 0.5
Nodes (1): GeminiGenerateScheduleHelper

### Community 40 - "Community 40"
Cohesion: 0.5
Nodes (1): GeminiScoringHelper

### Community 41 - "Community 41"
Cohesion: 0.5
Nodes (1): ScoringHelper

### Community 50 - "Community 50"
Cohesion: 0.67
Nodes (1): AppService

### Community 51 - "Community 51"
Cohesion: 0.67
Nodes (1): GuestSessionMiddleware

### Community 52 - "Community 52"
Cohesion: 0.67
Nodes (1): SchedulerModule

### Community 53 - "Community 53"
Cohesion: 0.67
Nodes (1): RawFilterHelper

### Community 67 - "Community 67"
Cohesion: 1.0
Nodes (2): formatDate(), toDate()

### Community 70 - "Project Documentation & Schema"
Cohesion: 0.67
Nodes (3): Smart Tourism Project, Coding Rules, Database Schema

### Community 72 - "Community 72"
Cohesion: 1.0
Nodes (1): AppModule

### Community 74 - "Community 74"
Cohesion: 1.0
Nodes (1): MenuItemDto

### Community 75 - "Community 75"
Cohesion: 1.0
Nodes (1): RestaurantDto

### Community 77 - "Community 77"
Cohesion: 1.0
Nodes (1): ClusterDto

### Community 78 - "Community 78"
Cohesion: 1.0
Nodes (1): LocationDto

### Community 79 - "Community 79"
Cohesion: 1.0
Nodes (1): RouteRequestDto

### Community 80 - "Community 80"
Cohesion: 1.0
Nodes (1): SearchLocationDto

## Knowledge Gaps
- **9 isolated node(s):** `AppModule`, `MenuItemDto`, `RestaurantDto`, `ClusterDto`, `LocationDto` (+4 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Sidebar Navigation Component`** (10 nodes): `sidebar.tsx`, `cn()`, `handleKeyDown()`, `SidebarFooter()`, `SidebarHeader()`, `SidebarMenu()`, `SidebarMenuButton()`, `SidebarMenuItem()`, `SidebarSeparator()`, `useSidebar()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Blog & Social Controller`** (10 nodes): `addComment()`, `createPost()`, `getCachedRestaurants()`, `getPosts()`, `getRestaurants()`, `setCachedRestaurants()`, `toggleLikeComment()`, `toggleLikePost()`, `visitRestaurant()`, `blogController.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Social Post Interactions`** (9 nodes): `addEmoji()`, `formatRelativeTime()`, `getUser()`, `handleFileChange()`, `handleKeyDown()`, `handleLike()`, `handlePhotoUpload()`, `handleSubmitComment()`, `PostCard.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (6 nodes): `SchedulerController`, `.constructor()`, `.generatePlan()`, `.getRoute()`, `.searchLocation()`, `scheduler.controller.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (6 nodes): `ensureScanApiConfigured()`, `extractPredictPayload()`, `isRecord()`, `normalizePredictContent()`, `normalizePredictStatus()`, `api.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (5 nodes): `carousel.tsx`, `Carousel()`, `CarouselNext()`, `cn()`, `useCarousel()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (4 nodes): `AppController`, `.constructor()`, `.getHello()`, `app.controller.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (4 nodes): `ClusteringHelper`, `.clusteringStep()`, `.getDistance()`, `k-means.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (4 nodes): `SortingHelper`, `.getBestDish()`, `.sortForSession()`, `sorting.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (4 nodes): `gemini-generate-schelude.ts`, `GeminiGenerateScheduleHelper`, `.constructor()`, `.finalizeScheduleWithAI()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (4 nodes): `gemini-scoring.ts`, `GeminiScoringHelper`, `.constructor()`, `.scoreRestaurantsWithAI()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (4 nodes): `scoring.ts`, `ScoringHelper`, `.constructor()`, `.generateFinalPlan()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (3 nodes): `AppService`, `.getHello()`, `app.service.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (3 nodes): `GuestSessionMiddleware`, `.use()`, `guest-session.middleware.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (3 nodes): `SchedulerModule`, `.configure()`, `scheduler.module.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (3 nodes): `raw-filter.ts`, `RawFilterHelper`, `.rawData()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (3 nodes): `VoucherCard.tsx`, `formatDate()`, `toDate()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (2 nodes): `AppModule`, `app.module.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (2 nodes): `MenuItemDto`, `menu-item.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (2 nodes): `RestaurantDto`, `restaurant.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 77`** (2 nodes): `ClusterDto`, `cluster.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 78`** (2 nodes): `LocationDto`, `location.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 79`** (2 nodes): `RouteRequestDto`, `route-request.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 80`** (2 nodes): `SearchLocationDto`, `search-location.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Alert()` connect `User Input & Schedule Management` to `Post Creation & Admin Forms`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `handleSubmit()` connect `Post Creation & Admin Forms` to `User Input & Schedule Management`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `main()` (e.g. with `createCategory()` and `listCategories()`) actually correct?**
  _`main()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `listFoods()` (e.g. with `main()` and `fetchData()`) actually correct?**
  _`listFoods()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `listCategories()` (e.g. with `main()` and `fetchData()`) actually correct?**
  _`listCategories()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `listShops()` (e.g. with `main()` and `fetchData()`) actually correct?**
  _`listShops()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `AppModule`, `MenuItemDto`, `RestaurantDto` to the rest of the system?**
  _9 weakly-connected nodes found - possible documentation gaps or missing edges._