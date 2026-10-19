// Home page: record visits to the main page for this browser.
const visitKey = "skillswapHomeVisits";
const readVisitCount = () => Number(localStorage.getItem(visitKey) || 0);
function showVisitCount() {
  const nextCount = readVisitCount() + 1;
  localStorage.setItem(visitKey, nextCount);
  const intro = document.querySelector(".detail");
  if (intro) intro.insertAdjacentHTML("afterend", `<p class="home-visit-count">You have visited SkillSwap ${nextCount} time(s) on this browser.</p>`);
}
// Closure keeps a private count of sign-up clicks during this page visit.
const countSignUpClicks = (() => { let clicks = 0; return () => ++clicks; })();
document.addEventListener("DOMContentLoaded", () => {
  showVisitCount();
  document.querySelectorAll('.btn[href="registration.html"]').forEach(link => link.addEventListener("click", () => { countSignUpClicks(); }));
});
