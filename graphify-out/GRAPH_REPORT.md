# Graph Report - TDTT_Project_Web_Nhom_1  (2026-05-10)

## Corpus Check
- 226 files · ~587,706 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 755 nodes · 661 edges · 56 communities detected
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 51 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 86|Community 86]]
- [[_COMMUNITY_Community 90|Community 90]]
- [[_COMMUNITY_Community 93|Community 93]]
- [[_COMMUNITY_Community 94|Community 94]]
- [[_COMMUNITY_Community 96|Community 96]]
- [[_COMMUNITY_Community 97|Community 97]]
- [[_COMMUNITY_Community 98|Community 98]]
- [[_COMMUNITY_Community 99|Community 99]]
- [[_COMMUNITY_Community 100|Community 100]]
- [[_COMMUNITY_Community 101|Community 101]]
- [[_COMMUNITY_Community 140|Community 140]]

## God Nodes (most connected - your core abstractions)
1. `SchedulerService` - 10 edges
2. `RestaurantsController` - 9 edges
3. `SchedulerController` - 9 edges
4. `listFoods()` - 8 edges
5. `PlanCacheHelper` - 8 edges
6. `Alert()` - 8 edges
7. `GeminiScoringHelper` - 7 edges
8. `ShopeeFoodLoader` - 7 edges
9. `geocodeWithRetry()` - 5 edges
10. `executeMutation()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `handleGetLocation()` --calls--> `Alert()`  [INFERRED]
  TDTT_ReactJS_Nhom_1\src\modules\group-taste\components\FormSection\UserInputForm.tsx → TDTT_ReactJS_Nhom_1\src\common\components\ui\alert.tsx
- `listFoods()` --calls--> `handleClearCategory()`  [INFERRED]
  TDTT_ReactJS_Nhom_1\src\dataconnect-generated\esm\index.esm.js → TDTT_ReactJS_Nhom_1\src\pages\FoodMarket.tsx
- `Alert()` --calls--> `handleAddSnack()`  [INFERRED]
  TDTT_ReactJS_Nhom_1\src\common\components\ui\alert.tsx → TDTT_ReactJS_Nhom_1\src\modules\schedule\components\DailyPlanView\DailyPlanView.tsx
- `handleOpenSwap()` --calls--> `Alert()`  [INFERRED]
  TDTT_ReactJS_Nhom_1\src\modules\schedule\components\DailyPlanView\DailyPlanView.tsx → TDTT_ReactJS_Nhom_1\src\common\components\ui\alert.tsx
- `handleSearchSelect()` --calls--> `Alert()`  [INFERRED]
  TDTT_ReactJS_Nhom_1\src\modules\schedule\components\LocationPickerModal\LocationPickerModal.tsx → TDTT_ReactJS_Nhom_1\src\common\components\ui\alert.tsx

## Communities

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (39): createCategory(), createCategoryRef(), createFoodItem(), createFoodItemRef(), createShop(), createShopRef(), getFoodDetail(), getFoodDetailRef() (+31 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (7): calculateDistance(), getGroupAllergies(), getGroupBudget(), getGroupDistanceTolerance(), getGroupMinRating(), EngineService, RestaurantsController

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (6): handleAddSnack(), handleOpenSwap(), handleSearchSelect(), handleSpin(), handleGenerateSubmit(), Alert()

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (6): handleSubmit(), handleSubmit(), createAchievement(), createReward(), redeemVoucher(), handleRedeem()

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (6): compressImage(), handleImageChange(), handleSubmit(), onSubmit(), calculateDays(), handleSubmit()

### Community 5 - "Community 5"
Cohesion: 0.2
Nodes (6): handleAddUser(), handleGetLocation(), startEditUser(), tastesToVector(), vectorToTastes(), generateId()

### Community 6 - "Community 6"
Cohesion: 0.2
Nodes (1): SchedulerService

### Community 7 - "Community 7"
Cohesion: 0.2
Nodes (5): AuthGuardCard(), AuthProvider(), useAuth(), useBlog(), AdminLogin()

### Community 9 - "Community 9"
Cohesion: 0.2
Nodes (1): SchedulerController

### Community 10 - "Community 10"
Cohesion: 0.22
Nodes (2): SidebarMenuButton(), useSidebar()

### Community 12 - "Community 12"
Cohesion: 0.22
Nodes (2): getCachedRestaurants(), getRestaurants()

### Community 13 - "Community 13"
Cohesion: 0.27
Nodes (4): buildHealthSummary(), getModelStateLabel(), getServiceStatusLabel(), isRecord()

### Community 14 - "Community 14"
Cohesion: 0.22
Nodes (8): AggregationWeightsDto, DishInfoDto, GroupRecommendationDto, GroupRecommendationResponseDto, LocationDto, RestaurantInfoDto, UserPreferenceDto, UserScoreDetailDto

### Community 15 - "Community 15"
Cohesion: 0.36
Nodes (1): PlanCacheHelper

### Community 16 - "Community 16"
Cohesion: 0.25
Nodes (2): handleKeyDown(), handleSubmitComment()

### Community 17 - "Community 17"
Cohesion: 0.36
Nodes (1): GeminiScoringHelper

### Community 18 - "Community 18"
Cohesion: 0.32
Nodes (1): ShopeeFoodLoader

### Community 21 - "Community 21"
Cohesion: 0.38
Nodes (5): Dịch English → Vietnamese, Dịch Vietnamese → English, smart_tourism_ai(), translate_en2vi(), translate_vi2en()

### Community 22 - "Community 22"
Cohesion: 0.33
Nodes (2): getAIResponse(), handleSend()

### Community 28 - "Community 28"
Cohesion: 0.43
Nodes (4): getFirebaseErrorMessage(), handleGithubLogin(), handleGoogleLogin(), handleSubmit()

### Community 29 - "Community 29"
Cohesion: 0.6
Nodes (5): delay(), extractAddressParts(), geocodeWithRetry(), main(), nominatimSearch()

### Community 30 - "Community 30"
Cohesion: 0.4
Nodes (1): TranslationService

### Community 32 - "Community 32"
Cohesion: 0.53
Nodes (4): FormControl(), FormDescription(), FormMessage(), useFormField()

### Community 37 - "Community 37"
Cohesion: 0.6
Nodes (5): clearStore(), getAllItems(), getCount(), initDB(), saveItems()

### Community 38 - "Community 38"
Cohesion: 0.53
Nodes (4): parseScanContent(), removeDiacritics(), toListItems(), toParagraphs()

### Community 39 - "Community 39"
Cohesion: 0.4
Nodes (2): extractPredictPayload(), isRecord()

### Community 40 - "Community 40"
Cohesion: 0.6
Nodes (3): gql(), main(), toSlug()

### Community 41 - "Community 41"
Cohesion: 0.5
Nodes (2): CarouselNext(), useCarousel()

### Community 47 - "Community 47"
Cohesion: 0.83
Nodes (3): delay(), geocodeAddress(), main()

### Community 48 - "Community 48"
Cohesion: 0.5
Nodes (1): AppController

### Community 49 - "Community 49"
Cohesion: 0.5
Nodes (1): ClusteringHelper

### Community 50 - "Community 50"
Cohesion: 0.5
Nodes (1): SortingHelper

### Community 51 - "Community 51"
Cohesion: 0.5
Nodes (1): RawFilterHelper

### Community 52 - "Community 52"
Cohesion: 0.5
Nodes (1): ScoringHelper

### Community 53 - "Community 53"
Cohesion: 0.5
Nodes (1): TranslationController

### Community 58 - "Community 58"
Cohesion: 0.67
Nodes (2): addAllergy(), handleKeyDown()

### Community 59 - "Community 59"
Cohesion: 0.67
Nodes (2): FoodDetailModal(), getDishImageUrl()

### Community 62 - "Community 62"
Cohesion: 1.0
Nodes (2): getCoordinates(), main()

### Community 63 - "Community 63"
Cohesion: 0.67
Nodes (1): AppService

### Community 64 - "Community 64"
Cohesion: 0.67
Nodes (1): GuestSessionMiddleware

### Community 65 - "Community 65"
Cohesion: 0.67
Nodes (1): RestaurantsModule

### Community 66 - "Community 66"
Cohesion: 0.67
Nodes (1): SchedulerModule

### Community 67 - "Community 67"
Cohesion: 0.67
Nodes (2): DistanceMatrixDto, PointDto

### Community 68 - "Community 68"
Cohesion: 1.0
Nodes (2): calculateDistance(), toRadians()

### Community 82 - "Community 82"
Cohesion: 1.0
Nodes (2): formatDate(), toDate()

### Community 86 - "Community 86"
Cohesion: 1.0
Nodes (1): AppModule

### Community 90 - "Community 90"
Cohesion: 1.0
Nodes (1): EngineModule

### Community 93 - "Community 93"
Cohesion: 1.0
Nodes (1): MenuItemDto

### Community 94 - "Community 94"
Cohesion: 1.0
Nodes (1): RestaurantDto

### Community 96 - "Community 96"
Cohesion: 1.0
Nodes (1): ClusterDto

### Community 97 - "Community 97"
Cohesion: 1.0
Nodes (1): LocationDto

### Community 98 - "Community 98"
Cohesion: 1.0
Nodes (1): RouteRequestDto

### Community 99 - "Community 99"
Cohesion: 1.0
Nodes (1): SearchLocationDto

### Community 100 - "Community 100"
Cohesion: 1.0
Nodes (1): TranslationModule

### Community 101 - "Community 101"
Cohesion: 1.0
Nodes (1): TranslateDto

### Community 140 - "Community 140"
Cohesion: 1.0
Nodes (2): Smart Tourism Project, Coding Rules

## Knowledge Gaps
- **24 isolated node(s):** `AppModule`, `EngineModule`, `UserPreferenceDto`, `AggregationWeightsDto`, `LocationDto` (+19 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 6`** (11 nodes): `SchedulerService`, `.constructor()`, `.createSingleDayPlan()`, `.getAllDishes()`, `.getCoordsFromKeyword()`, `.getLocationSuggestions()`, `.getShortestPath()`, `.getSwapOptions()`, `.preparePlanData()`, `.processSearchLocation()`, `scheduler.service.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (10 nodes): `SchedulerController`, `.autocompleteLocation()`, `.constructor()`, `.generateDayPlan()`, `.getAllDishes()`, `.getRoute()`, `.preparePlan()`, `.searchLocation()`, `.swapOptions()`, `scheduler.controller.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (10 nodes): `sidebar.tsx`, `cn()`, `handleKeyDown()`, `SidebarFooter()`, `SidebarHeader()`, `SidebarMenu()`, `SidebarMenuButton()`, `SidebarMenuItem()`, `SidebarSeparator()`, `useSidebar()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (10 nodes): `addComment()`, `createPost()`, `getCachedRestaurants()`, `getPosts()`, `getRestaurants()`, `setCachedRestaurants()`, `toggleLikeComment()`, `toggleLikePost()`, `visitRestaurant()`, `blogController.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (9 nodes): `plan-cache.ts`, `PlanCacheHelper`, `.cleanup()`, `.get()`, `.getDayScores()`, `.isExpired()`, `.saveDayScores()`, `.set()`, `.updateUsedCategories()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (9 nodes): `addEmoji()`, `formatRelativeTime()`, `getUser()`, `handleFileChange()`, `handleKeyDown()`, `handleLike()`, `handlePhotoUpload()`, `handleSubmitComment()`, `PostCard.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (8 nodes): `gemini-scoring.ts`, `GeminiScoringHelper`, `.buildPrompt()`, `.callGemini()`, `.callGroq()`, `.constructor()`, `.scoreChunkWithRetry()`, `.scoreRestaurantsWithAI()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (8 nodes): `shopeefood-loader.ts`, `ShopeeFoodLoader`, `.getAllRestaurants()`, `.getCount()`, `.loadData()`, `.onModuleInit()`, `.transformDbShop()`, `.transformJsonShop()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (7 nodes): `clearHistory()`, `formatTime()`, `getAIResponse()`, `getDateLabel()`, `handleSend()`, `scrollToBottom()`, `Chatbot.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (6 nodes): `translation.service.ts`, `TranslationService`, `.onModuleDestroy()`, `.onModuleInit()`, `.startPythonProcess()`, `.translate()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (6 nodes): `ensureScanApiConfigured()`, `extractPredictPayload()`, `isRecord()`, `normalizePredictContent()`, `normalizePredictStatus()`, `api.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (5 nodes): `carousel.tsx`, `Carousel()`, `CarouselNext()`, `cn()`, `useCarousel()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (4 nodes): `AppController`, `.constructor()`, `.getHello()`, `app.controller.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (4 nodes): `ClusteringHelper`, `.clusteringStep()`, `.getDistance()`, `k-means.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (4 nodes): `SortingHelper`, `.getBestDish()`, `.sortForSession()`, `sorting.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (4 nodes): `raw-filter.ts`, `RawFilterHelper`, `.constructor()`, `.rawData()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (4 nodes): `scoring.ts`, `ScoringHelper`, `.constructor()`, `.generateSingleDayPlan()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (4 nodes): `translation.controller.ts`, `TranslationController`, `.constructor()`, `.translate()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 58`** (4 nodes): `addAllergy()`, `handleKeyDown()`, `removeAllergy()`, `AllergyInput.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 59`** (4 nodes): `FoodDetailModal()`, `formatOpeningHours()`, `getDishImageUrl()`, `DishDetail.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 62`** (3 nodes): `getCoordinates()`, `main()`, `fetch-coordinates.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 63`** (3 nodes): `AppService`, `.getHello()`, `app.service.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 64`** (3 nodes): `GuestSessionMiddleware`, `.use()`, `guest-session.middleware.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 65`** (3 nodes): `RestaurantsModule`, `.configure()`, `restaurants.module.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (3 nodes): `SchedulerModule`, `.configure()`, `scheduler.module.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (3 nodes): `DistanceMatrixDto`, `PointDto`, `distance-matrix.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 68`** (3 nodes): `haversine.util.ts`, `calculateDistance()`, `toRadians()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 82`** (3 nodes): `VoucherCard.tsx`, `formatDate()`, `toDate()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 86`** (2 nodes): `AppModule`, `app.module.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 90`** (2 nodes): `EngineModule`, `engine.module.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 93`** (2 nodes): `MenuItemDto`, `menu-item.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 94`** (2 nodes): `RestaurantDto`, `restaurant.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 96`** (2 nodes): `ClusterDto`, `cluster.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 97`** (2 nodes): `LocationDto`, `location.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 98`** (2 nodes): `RouteRequestDto`, `route-request.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 99`** (2 nodes): `SearchLocationDto`, `search-location.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 100`** (2 nodes): `translation.module.ts`, `TranslationModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 101`** (2 nodes): `TranslateDto`, `translate.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 140`** (2 nodes): `Smart Tourism Project`, `Coding Rules`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Alert()` connect `Community 2` to `Community 4`, `Community 5`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `handleSubmit()` connect `Community 4` to `Community 2`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Why does `handleGetLocation()` connect `Community 5` to `Community 2`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `listFoods()` (e.g. with `.findByGuestId()` and `.findDishesByGuestId()`) actually correct?**
  _`listFoods()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `AppModule`, `EngineModule`, `UserPreferenceDto` to the rest of the system?**
  _24 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._