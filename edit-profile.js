// Profile editor: values live in browser storage, so this is a frontend demo.
const profileStorageKey = "skillswapProfile";
function getProfile() { return JSON.parse(localStorage.getItem(profileStorageKey) || "null"); }
function fillProfileForm() {
  const saved = getProfile();
  if (!saved) return;
  const fields = { name: "full-name", university: "university", department: "department", semester: "semester", bio: "bio", skills: "skills" };
  Object.entries(fields).forEach(([key, id]) => { const field = document.getElementById(id); if (field && saved[key] !== undefined) field.value = saved[key]; });
}
function saveProfile(event) {
  event.preventDefault();
  const profile = { name: document.getElementById("full-name").value.trim(), university: document.getElementById("university").value.trim(), department: document.getElementById("department").value.trim(), semester: document.getElementById("semester").value.trim(), bio: document.getElementById("bio").value.trim(), skills: document.getElementById("skills").value.trim() };
  localStorage.setItem(profileStorageKey, JSON.stringify(profile));
  alert("Profile saved on this browser.");
  window.location.href = "profile.html";
}
document.addEventListener("DOMContentLoaded", () => { fillProfileForm(); document.querySelector("form")?.addEventListener("submit", saveProfile); });
