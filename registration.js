// Registration demo: save a small account record in this browser only.
function saveAccount(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const contact = document.getElementById("contact").value.trim();
  if (name.length < 2 || contact.length < 7) { alert("Enter a name and a valid contact number."); return; }
  const account = { name, email, contact, joinedAt: new Date().toISOString() };
  localStorage.setItem("skillswapAccount", JSON.stringify(account));
  localStorage.setItem("skillswapProfile", JSON.stringify({ name, university: "Example University", department: "Computer Science", semester: "", bio: "", skills: "" }));
  alert("Registration saved in this browser. You can now use your name or email to log in.");
  window.location.href = "login.html";
}
document.addEventListener("DOMContentLoaded", () => document.querySelector("form.form")?.addEventListener("submit", saveAccount));
