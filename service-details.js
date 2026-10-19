// Service details: simulate adding this sample service to My Orders.
function placeDemoOrder() {
  const orders = JSON.parse(localStorage.getItem("skillswapOrders") || "[]");
  const service = { title: document.querySelector(".detail-main h1")?.textContent.trim() || "Website Development", price: document.querySelector(".order-card-top strong")?.textContent.trim() || "Rs. 2,500", status: "Pending", createdAt: new Date().toISOString() };
  orders.push(service); localStorage.setItem("skillswapOrders", JSON.stringify(orders));
  alert("Demo order added. You can see it on the My Orders page.");
  window.location.href = "order.html";
}
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".order-card .button");
  if (button) { button.href = "#"; button.addEventListener("click", event => { event.preventDefault(); placeDemoOrder(); }); }
});
