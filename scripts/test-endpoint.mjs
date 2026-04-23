// Quick test: insert a category via executeGraphql
const PROJECT = "smart-tourism-abf26";
const LOCATION = "asia-southeast1";
const SERVICE = "smart-tourism-abf26-service";
const URL = `http://127.0.0.1:9399/v1alpha/projects/${PROJECT}/locations/${LOCATION}/services/${SERVICE}:executeGraphql`;

// Test 1: Insert without return fields
console.log("=== Test 1: Insert without return ===");
let r = await fetch(URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: 'mutation { category_insert(data: {name: "Pho", slug: "pho"}) }',
  }),
});
console.log(r.status, await r.text());

// Test 2: Query categories
console.log("\n=== Test 2: Query categories ===");
r = await fetch(URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: "query { categories { id name slug } }",
  }),
});
console.log(r.status, await r.text());

// Test 3: Insert with variables
console.log("\n=== Test 3: Insert with variables ===");
r = await fetch(URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: "mutation($name: String!, $slug: String!) { category_insert(data: {name: $name, slug: $slug}) }",
    variables: { name: "Tra", slug: "tra" },
  }),
});
console.log(r.status, await r.text());

// Test 4: Query all again
console.log("\n=== Test 4: Query all categories ===");
r = await fetch(URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: "query { categories { id name slug } }",
  }),
});
console.log(r.status, await r.text());
