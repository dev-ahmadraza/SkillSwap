// Category cards link to the marketplace with a category filter selected.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".category-card").forEach(card => card.addEventListener("click", event => {
    const category = card.querySelector("h3")?.textContent.trim();
    if (category) { event.preventDefault(); window.location.href = `services.html?category=${encodeURIComponent(category)}`; }
  }));
});
