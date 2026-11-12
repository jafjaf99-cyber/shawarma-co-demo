// Garden City / Livonia / Sterling Heights menu, as published on shawarmaco1.com/menu
const MENU = [
  { name: "Shawarma on Saj", note: "Order as a sandwich, a meal or a double.", items: [
    ["Chicken Shawarma", "Chicken, garlic, pickles", "$9.00 · $14.99 · $23.99"],
    ["Beef Shawarma", "Beef, onions, tomatoes, pickles, parsley, tahini sauce", "$9.99 · $15.99 · $24.99"],
    ["Mix Shawarma", "Chicken and beef, onions, tomatoes, pickles, parsley, garlic, tahini sauce", "$9.99 · $15.99 · $24.99"],
  ]},
  { name: "Sandwiches", note: "Make it a combo with fries and a pop for $6.50 more.", items: [
    ["Beef Shawarma", "Beef, onions, tomatoes, pickles, parsley, tahini sauce", "$7.99"],
    ["Chicken Shawarma", "Chicken, garlic sauce, pickles", "$7.50"],
    ["Shish Tawook", "Chicken, garlic sauce, pickles, tomatoes", "$7.50"],
    ["Falafel", "Falafel, lettuce, tomatoes, pickles, tahini sauce", "$6.99", "V"],
    ["Shish Kabob", "Tenderloin beef, onion, pickles, tomatoes, tahini sauce", "$8.99"],
    ["Kafta", "Ground beef, onion, pickles, tomatoes, tahini sauce", "$7.99"],
    ["Batata Sandwich", "Fries, tomatoes, lettuce, pickles, garlic sauce, ketchup", "$6.99", "V"],
    ["Jumbo Chicken Shawarma", "Chicken, garlic, pickles, fries", "$7.50"],
    ["Jumbo Beef Shawarma", "Beef, fries, onions, tomatoes, pickles, parsley, tahini sauce", "$7.99"],
    ["Mix Shawarma", "Chicken, beef, onions, tomatoes, pickles, parsley, garlic, tahini sauce", "$8.50"],
    ["Zinger Wrap", "Crispy chicken, lettuce, tomatoes, pickles, cheese, garlic sauce, zinger sauce", "$10.00"],
  ]},
  { name: "Bowls", note: "Served with rice and hummus.", items: [
    ["Chicken Shawarma Bowl", "Chicken, pickles, mixed bell peppers, garlic sauce", "$15.99"],
    ["Beef Shawarma Bowl", "Beef, tomatoes, onions, pickles, mixed bell peppers, tahini sauce", "$16.99"],
    ["Mixed Bowl", "Chicken, beef, tomatoes, onions, pickles, mixed bell peppers, garlic and tahini sauce", "$17.99"],
    ["Shish Tawook Bowl", "Chicken, tomatoes, pickles, mixed bell peppers, garlic sauce", "$15.99"],
    ["Shish Kabob Bowl", "Tenderloin beef, tomatoes, onions, mixed bell peppers", "$20.99"],
    ["Kafta Bowl", "Ground beef, tomatoes, onions, pickles, mixed bell peppers, tahini sauce", "$17.99"],
    ["Vegetarian Bowl", "Falafel, tomatoes, onions, pickles, mixed bell peppers, tahini sauce", "$14.99", "V"],
    ["Zinger Bowl", "Crispy chicken, salad, tomatoes, bell peppers, pickles, garlic and zinger sauce. Not served with hummus.", "$15.99"],
    ["Exotic Shrimp Bowl", "Crispy fried shrimp, onions, mixed bell peppers, exotic sauce", "$18.99"],
    ["Shrimp Kabob Bowl", "Sautéed shrimp, onions, mixed bell peppers, garlic, exotic sauce", "$18.99"],
  ]},
  { name: "Chef's Table", note: "Served with rice and soup or salad.", items: [
    ["Lamb Chops", "", "3 pcs $24.99 · 5 pcs $32.99"],
    ["Mixed Kabob Grill", "One kafta, one kabob, one shish tawook", "$23.99"],
    ["Deboned Chicken", "Two charred chicken breasts, mixed bell peppers, rice", "$19.99"],
    ["Mixed Kabob Grill for Two", "Two kafta, two kabob, two shish tawook", "$43.99"],
  ]},
  { name: "Appetizers", note: "", items: [
    ["Hummus", "", "Sm $6.99 · Lg $11.99", "V"],
    ["Baba Ghanouj", "", "Sm $6.99 · Lg $11.99", "V"],
    ["Hummus with Beef", "", "$15.99"],
    ["Hummus with Chicken", "", "$14.99"],
    ["Falafel Plate (6 pcs)", "", "$8.99", "V"],
    ["Fried Kibbeh (4 pcs)", "", "$12.99"],
    ["Chicken Wings (8 pcs)", "", "$12.99"],
    ["Chicken Tenders and Fries (3 pcs)", "", "$11.99"],
    ["Exotic Shrimp (8 pcs)", "", "$14.99"],
    ["Loaded Fries", "", "$15.99"],
    ["Grape Leaves", "", "Half $8.99 · Full $13.99", "V"],
  ]},
  { name: "Salad, Soup & Sides", note: "Add chicken to any salad for $5.99.", items: [
    ["House Salad", "", "Sm $6.99 · Lg $10.99"],
    ["Fatoush Salad", "", "Sm $6.99 · Lg $10.99"],
    ["Tabbouleh", "", "Sm $7.99 · Lg $12.99"],
    ["Lentil Soup Bowl", "", "$4.99"],
    ["Rice", "", "Sm $4.99 · Lg $7.99"],
    ["Fries", "Cajun or house", "Sm $5.50 · Lg $6.99"],
    ["Garlic Cup", "", "Sm $0.50 · Lg $4.99"],
    ["Pita Bread", "", "$0.50"],
  ]},
  { name: "Desserts & Drinks", note: "", items: [
    ["Baklava", "", "$5.00"],
    ["Cheese Cake", "", "$5.00"],
    ["Chocolate Cake", "", "$5.00"],
    ["Carrot Cake", "", "$5.50"],
    ["Mango Juice", "", "$5.00"],
    ["Strawberry Mango Smoothie", "", "$5.00"],
    ["Canned Pop", "", "$1.89"],
  ]},
];

const tabs = document.getElementById("menuTabs");
const panel = document.getElementById("menuPanel");

function show(i, focus) {
  [...tabs.children].forEach((b, j) => {
    b.setAttribute("aria-selected", j === i);
    b.tabIndex = j === i ? 0 : -1;
  });
  if (focus) tabs.children[i].focus();
  const c = MENU[i];
  panel.setAttribute("aria-labelledby", "tab" + i);
  panel.innerHTML =
    (c.note ? `<p class="menu-note">${c.note}</p>` : "") +
    `<ul class="menu-list">` +
    c.items.map(([n, d, p, v]) =>
      `<li><div><h3>${n}${v ? ' <span class="veg" title="Vegetarian">Vegetarian</span>' : ""}</h3>${d ? `<p>${d}</p>` : ""}</div><b>${p}</b></li>`
    ).join("") + `</ul>`;
}

MENU.forEach((c, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.role = "tab";
  b.id = "tab" + i;
  b.textContent = c.name;
  b.setAttribute("aria-controls", "menuPanel");
  b.addEventListener("click", () => show(i));
  tabs.appendChild(b);
});

tabs.addEventListener("keydown", (e) => {
  const cur = [...tabs.children].findIndex((b) => b.getAttribute("aria-selected") === "true");
  const n = MENU.length;
  let next = null;
  if (e.key === "ArrowRight") next = (cur + 1) % n;
  if (e.key === "ArrowLeft") next = (cur - 1 + n) % n;
  if (e.key === "Home") next = 0;
  if (e.key === "End") next = n - 1;
  if (next !== null) { e.preventDefault(); show(next, true); }
});

show(0);
