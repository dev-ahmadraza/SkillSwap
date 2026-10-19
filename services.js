// Marketplace: filter the six sample service cards by keyword, category, and price.
function filterServices() {
  const cards = [...document.querySelectorAll(".service-card")];
  const query = document.querySelector('input[type="search"]').value.trim().toLowerCase();
  const category = document.querySelectorAll(".select-box select")[0].value;
  const budget = document.querySelectorAll(".select-box select")[1].value;
  let shown = 0;
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    const priceMatch = card.querySelector(".price-label strong")?.textContent.match(/[\d,]+/);
    const price = Number((priceMatch?.[0] || "0").replaceAll(",", ""));
    const matchesCategory = category === "All categories" || text.includes(category.toLowerCase());
    const matchesBudget = budget === "Any price" || (budget === "Under Rs. 1,000" ? price < 1000 : budget === "Rs. 1,000–3,000" ? price >= 1000 && price <= 3000 : price > 3000);
    const visible = text.includes(query) && matchesCategory && matchesBudget;
    card.hidden = !visible; if (visible) shown++;
  });
  const count = document.querySelector(".results-row p span");
  if (count) count.textContent = `· ${shown} service${shown === 1 ? "" : "s"} found`;
}
// Private closure counts searches for this page visit.
const searchCounter = (() => { let total = 0; return () => ++total; })();
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".search-button")?.addEventListener("click", () => { searchCounter(); filterServices(); });
  document.querySelector('input[type="search"]')?.addEventListener("input", filterServices);
  document.querySelectorAll(".select-box select").forEach(select => select.addEventListener("change", filterServices));
  const requestedCategory = new URLSearchParams(window.location.search).get("category");
  const categorySelect = document.querySelectorAll(".select-box select")[0];
  if (requestedCategory && categorySelect && [...categorySelect.options].some(option => option.text === requestedCategory)) categorySelect.value = requestedCategory;
  filterServices();
});
