const menu = [
  { category: "doener", title: "Döner Klein", price: "6,00 €" },
  { category: "doener", title: "Döner Normal", price: "8,00 €" },
  { category: "doener", title: "Döner mit Käse", price: "9,00 €" },
  { category: "doener", title: "Jumbo Döner", description: "Mit extra Fleisch", price: "9,50 €" },
  { category: "doener", title: "DönerBox", price: "8,00 €" },
  { category: "doener", title: "Gemüse Döner", description: "Mit gebratenem Gemüse", price: "9,00 €" },
  { category: "doener", title: "Halloumie Döner", description: "Mit Halloumi Käse", price: "9,00 €" },
  { category: "doener", title: "Hawai Döner", description: "Mit Ananas", price: "9,00 €" },
  { category: "doener", title: "Mais Döner", description: "Mit Mais", price: "9,00 €" },
  { category: "doener", title: "Döner Teller mit Salat", price: "9,50 €" },
  { category: "doener", title: "Döner Teller mit Pommes", price: "11,00 €" },
  { category: "doener", title: "Döner Teller mit Reis", price: "11,00 €" },
  { category: "doener", title: "Döner Teller Hallomie", description: "Mit Hallomiekäse", price: "10,50 €" },
  { category: "pide", title: "Dürüm", price: "9,00 €" },
  { category: "pide", title: "Süper Dürüm", description: "Mit extra Fleisch", price: "10,00 €" },
  { category: "pide", title: "Dürüm mit Käse", price: "10,00 €" },
  { category: "pide", title: "Dürüm mit Mais", price: "10,00 €" },
  { category: "pide", title: "Hallomie Dürüm", price: "10,00 €" },
  { category: "pide", title: "Hawai Dürüm", description: "Mit Ananas", price: "10,00 €" },
  { category: "pide", title: "Lahmacun mit Salat", price: "9,00 €" },
  { category: "pide", title: "Lahmacun mit Dönerfleisch", price: "10,00 €" },
  { category: "pide", title: "Lahmacun Döner und Hallomie", price: "11,00 €" },
  { category: "pide", title: "Pide mit Weichkäse", tag: "Vegetarisch", price: "9,50 €" },
  { category: "pide", title: "Pide Spinat und Käse", tag: "Vegetarisch", price: "10,00 €" },
  { category: "pide", title: "Pide mit Döner", price: "10,50 €" },
  { category: "pide", title: "Pide Salami-Schinken", price: "10,50 €" },
  { category: "pide", title: "Pide Hackfleisch", price: "10,50 €" },
  { category: "pide", title: "Pide Hellim", description: "Hallomie, Oliven, Zwiebel", tag: "Vegetarisch", price: "10,50 €" },
  { category: "pide", title: "Pide Veggie", description: "Mit gebratenem Gemüse", tag: "Vegan", price: "10,00 €" },
  { category: "pizza", title: "Margharita", price: "9,00 €" },
  { category: "pizza", title: "Salami", price: "10,00 €" },
  { category: "pizza", title: "Schinken", price: "10,00 €" },
  { category: "pizza", title: "Funghi", tag: "Vegetarisch", price: "10,00 €" },
  { category: "pizza", title: "Venezia", description: "Schinken, Pilze", price: "10,50 €" },
  { category: "pizza", title: "Spezial", description: "Salami, Schinken, Pilze", price: "11,00 €" },
  { category: "pizza", title: "BABO", description: "Dönerfleisch, Zwiebel, Peperoni", price: "11,50 €" },
  { category: "pizza", title: "Vierjahreszeiten", description: "Salami, Schinken, Pilze, Broccoli", price: "11,50 €" },
  { category: "pizza", title: "Tono", price: "10,50 €" },
  { category: "pizza", title: "Hawaii", description: "Schinken, Ananas", price: "10,50 €" },
  { category: "pizza", title: "Rucola", description: "Schinken, Tomaten, Mozzarella, Rucola", price: "11,00 €" },
  { category: "pizza", title: "Döner", price: "11,00 €" },
  { category: "pizza", title: "Sucuk", description: "Türkische Knoblauchwurst", price: "11,00 €" },
  { category: "pizza", title: "Frutti Di Mare", description: "Meeresfrüchte", price: "11,50 €" },
  { category: "pizza", title: "Hellas", description: "Hallomie, Peperoni, Oliven, Knoblauch", price: "11,50 €" },
  { category: "pizza", title: "Holland", description: "Schinken, Broccoli, Soße Hollandaise", price: "11,50 €" },
  { category: "pizza", title: "Bolognese", description: "Hackfleisch, Mais, Paprika", price: "12,00 €" },
  { category: "pizza", title: "Alaska", description: "Lachsfilet, Spinat, Knoblauch", price: "12,00 €" },
  { category: "pizza", title: "Athen", description: "Dönerfleisch, Weichkäse, Peperoni, Oliven", price: "12,00 €" },
  { category: "pizza", title: "Salmone", description: "Lachsfilet, Broccoli, Soße Hollandaise", price: "12,50 €" },
  { category: "pizza", title: "Calzone", description: "Salami, Schinken, Pilze", price: "11,50 €" },
  { category: "pizza", title: "Napolitana", description: "Tomaten, Mozzarella, Basilikum", tag: "Vegetarisch", price: "10,50 €" },
  { category: "pizza", title: "Vegetaria", description: "Verschiedene Gemüsesorten", tag: "Vegan", price: "10,50 €" },
  { category: "pizza", title: "Halloumi", description: "Halloumi Käse, Spinat", tag: "Vegetarisch", price: "10,50 €" },
  { category: "pizza", title: "Spinaci", description: "Spinat", tag: "Vegetarisch", price: "10,00 €" },
  { category: "pizza", title: "Broccoli", tag: "Vegan", price: "10,00 €" },
  { category: "pizza", title: "Vier Käsesorten", description: "Halloumi, Gorgonzola, Weichkäse, Edamer", tag: "Vegetarisch", price: "11,50 €" },
  { category: "pizza", title: "Verde Al Gorgonzola", description: "Gebr. Gemüse, Gorgonzola", tag: "Vegetarisch", price: "11,50 €" },
  { category: "pizza", title: "Verde Halloumi", description: "Gebr. Gemüse, Halloumi Käse", tag: "Vegetarisch", price: "11,50 €" },
  { category: "pizza", title: "Napoli", description: "Sardellen, Kapern", price: "11,50 €" },
  { category: "pizza", title: "Spinaci Al Gorgonzola", description: "Spinat, Gorgonzola", price: "11,50 €" },
  { category: "salat", title: "Gemischter Salat", price: "6,50 €" },
  { category: "salat", title: "Gemischter Salat mit Käse", price: "7,50 €" },
  { category: "salat", title: "Salat Tono", price: "8,00 €" },
  { category: "salat", title: "Döner Salat", price: "8,50 €" },
  { category: "salat", title: "Mozzerella Salat", price: "8,50 €" },
  { category: "salat", title: "Halloumi Salat", price: "8,50 €" },
  { category: "salat", title: "Veggie Teller", description: "Gem. Salat, Falafel, Halloumi, Sigara Börek", price: "9,50 €" },
  { category: "salat", title: "Saganaki", description: "Gem. Salat mit paniertem Käse", price: "9,50 €" },
  { category: "snacks", title: "Pommes", price: "4,00 €" },
  { category: "snacks", title: "Chicken Nuggets 6st", description: "Mit Pommes", price: "7,50 €" },
  { category: "snacks", title: "Sigara Börek 4st", description: "Mit Salat", price: "7,00 €" },
  { category: "snacks", title: "Mozzarella Sticks 4 St", description: "Mit Pommes", price: "7,00 €" },
  { category: "snacks", title: "Pizza Brötchen", description: "Mit Käsefüllung", price: "9,50 €" },
  { category: "snacks", title: "Pizza Brötchen mit Döner", price: "9,50 €" },
  { category: "snacks", title: "Pizza Brötchen Salami", price: "9,50 €" },
  { category: "snacks", title: "Pizza Brötchen Schinken", price: "9,50 €" }
];

const categoryLabels = {
  doener: "Döner",
  pizza: "Pizza",
  pide: "Pide & Lahmacun",
  salat: "Salat",
  snacks: "Snacks"
};

const grid = document.querySelector("#menu-grid");
const buttons = document.querySelectorAll(".category-button");

function renderMenu(category = "all") {
  const items = category === "all" ? menu : menu.filter((item) => item.category === category);
  const grouped = category === "all"
    ? Object.keys(categoryLabels).map((key) => ({ key, items: items.filter((item) => item.category === key) }))
    : [{ key: category, items }];

  grid.innerHTML = grouped.map((group) => `
    <div class="category-title">${categoryLabels[group.key]}</div>
    ${group.items.map((item) => `
      <article class="menu-card">
        <div class="menu-card-top"><h3>${item.title}</h3><span class="price">${item.price}</span></div>
        ${item.description ? `<p class="description">${item.description}</p>` : ""}
        ${item.tag ? `<span class="tag">● ${item.tag}</span>` : ""}
      </article>
    `).join("")}
  `).join("");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    renderMenu(button.dataset.category);
  });
});

renderMenu();
