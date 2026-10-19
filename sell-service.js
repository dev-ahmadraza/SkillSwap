// Service listing: validate inputs, estimate a fee, then save a demo listing locally.
function bindServiceForm() {
  const form = document.querySelector("form");
  const price = document.getElementById("service-price");
  if (!form || !price) return;
  const message = document.getElementById("form-message");
  const fee = document.createElement("p"); fee.className = "form-help"; price.closest(".form-field")?.append(fee);
  function updateFee() { const amount = Number(price.value) || 0; fee.textContent = amount > 0 ? `Estimated platform fee (5%): Rs. ${(amount * 0.05).toFixed(0)} · You receive Rs. ${(amount * 0.95).toFixed(0)}.` : "Enter a price to see an estimated 5% platform fee."; }
  price.addEventListener("input", updateFee); updateFee();
  form.addEventListener("submit", event => {
    event.preventDefault();
    const listing = { title: document.getElementById("service-title").value.trim(), category: document.getElementById("service-category").value, price: Number(price.value), description: document.getElementById("service-description").value.trim(), delivery: Number(document.getElementById("delivery-time").value), createdAt: new Date().toISOString() };
    if (!listing.title || listing.price <= 0 || listing.description.length < 15) { alert("Add a title, a positive price, and a description of at least 15 characters."); return; }
    const listings = JSON.parse(localStorage.getItem("skillswapListings") || "[]"); listings.push(listing); localStorage.setItem("skillswapListings", JSON.stringify(listings));
    if (message) { message.hidden = false; message.innerHTML = `<strong>Demo listing saved.</strong> “${listing.title.replace(/[&<>"']/g, "")}” is stored in this browser only.`; }
    form.reset(); updateFee();
  });
}
document.addEventListener("DOMContentLoaded", bindServiceForm);
