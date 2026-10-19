// Dashboard: calculate service and order totals and show the saved profile name.
const sampleOrders = [{status:"In Progress"},{status:"In Progress"},{status:"Completed"},{status:"Completed"}];
function updateDashboard() {
  const statValues = document.querySelectorAll(".stats-grid .stat-card strong");
  const completed = sampleOrders.filter(order => order.status === "Completed").length;
  const active = sampleOrders.filter(order => order.status === "In Progress").length;
  const values = [3, active, completed, "4.8 ★"];
  statValues.forEach((element, index) => { if (values[index] !== undefined) element.textContent = values[index]; });
  const profile = JSON.parse(localStorage.getItem("skillswapProfile") || "null");
  const name = profile?.name || JSON.parse(localStorage.getItem("skillswapAccount") || "null")?.name;
  if (name) { const title = document.querySelector(".profile-intro h2"); if (title) title.textContent = name; }
}
document.addEventListener("DOMContentLoaded", updateDashboard);
