// Login demo: check the registered email/name stored by registration.js.
const accountKey = "skillswapAccount";
function handleLogin(event) {
  event.preventDefault();
  const fields = event.currentTarget.querySelectorAll("input");
  const username = fields[0].value.trim();
  const password = fields[1].value;
  const account = JSON.parse(localStorage.getItem(accountKey) || "null");
  if (!account || (username.toLowerCase() !== account.name.toLowerCase() && username.toLowerCase() !== account.email.toLowerCase())) {
    alert("No matching demo account. Please register first, or use your registered name/email."); return;
  }
  if (password.length < 4) { alert("For this demo, enter at least 4 characters for the password."); return; }
  localStorage.setItem("skillswapSignedIn", "true");
  alert(`Welcome back, ${account.name}!`);
  window.location.href = "dashboard.html";
}
document.addEventListener("DOMContentLoaded", () => document.querySelector("form")?.addEventListener("submit", handleLogin));
