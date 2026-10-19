// Orders: show totals from the sample rows plus orders created in the service detail demo.
function refreshOrderSummary() {
  const rows = [...document.querySelectorAll("#orders tbody tr")];
  const extra = JSON.parse(localStorage.getItem("skillswapOrders") || "[]");
  const pending = extra.filter(order => order.status === "Pending").length;
  const totals = [rows.length + extra.length, rows.filter(row => row.textContent.includes("In Progress")).length, rows.filter(row => row.textContent.includes("Completed")).length];
  document.querySelectorAll(".summary-card h2").forEach((element, index) => { element.textContent = totals[index] || 0; });
  if (extra.length) {
    const body = document.querySelector("#orders tbody");
    extra.forEach((order, index) => { const row = document.createElement("tr"); const cells = [`#SS${105 + index}`, order.title, "SkillSwap student", order.price, new Date(order.createdAt).toLocaleDateString(), order.status, "Demo order"]; cells.forEach(value => { const cell = document.createElement("td"); cell.textContent = value; row.append(cell); }); body.append(row); });
    const progress = document.querySelectorAll(".summary-card h2")[1]; if (progress) progress.textContent = Number(progress.textContent) + pending;
  }
}
function handleContact(event) { event.preventDefault(); const form = event.currentTarget; const name = form.querySelector("#name").value.trim(); alert(`Thanks, ${name}. Your message is ready in this frontend demo; it was not sent to a server.`); form.reset(); }
document.addEventListener("DOMContentLoaded", () => { refreshOrderSummary(); document.querySelector('#contact form')?.addEventListener("submit", handleContact); });
