// Profile page: display saved values when the student has edited their profile.
function loadProfile() {
  const data = JSON.parse(localStorage.getItem("skillswapProfile") || "null");
  if (!data) return;
  const heading = document.querySelector(".profile-intro h2");
  const details = document.querySelectorAll(".profile-details .detail-value");
  if (heading) heading.textContent = data.name || "Student";
  if (details[0]) details[0].textContent = data.university || "Not set";
  if (details[1]) details[1].textContent = data.department || "Not set";
  if (details[2]) details[2].textContent = data.semester || "Not set";
  const about = document.querySelector(".profile-layout > div > .card p");
  if (about && data.bio) about.textContent = data.bio;
  const skills = document.querySelector(".skills");
  if (skills && data.skills) { skills.replaceChildren(...data.skills.split(",").map(skill => { const tag = document.createElement("span"); tag.className = "skill"; tag.textContent = skill.trim(); return tag; })); }
}
document.addEventListener("DOMContentLoaded", loadProfile);
