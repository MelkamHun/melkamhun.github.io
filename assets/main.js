"use strict";

// All content and project disclosures remain accessible without JavaScript.
const filterGroup = document.querySelector(".publication-filters");
const papers = [...document.querySelectorAll(".publication-list > li")];
if (filterGroup && papers.length) {
  filterGroup.hidden = false;
  filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    const topic = button.dataset.filter;
    for (const option of filterGroup.querySelectorAll("button")) {
      option.setAttribute("aria-pressed", String(option === button));
    }
    for (const paper of papers) {
      paper.hidden = topic !== "all" && paper.dataset.topic !== topic;
    }
    const count = papers.filter((paper) => !paper.hidden).length;
    document.getElementById("publication-status").textContent = `${count} publications shown.`;
  });
}

// Highlight the navigation section nearest the top of the reading area.
const navLinks = [...document.querySelectorAll("nav a[href^='#']")];
const navSections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
let scheduled = false;
function updateNavigation() {
  const threshold = document.querySelector(".masthead").offsetHeight + 65;
  let active = navSections[0];
  for (const section of navSections) {
    if (section.getBoundingClientRect().top <= threshold) active = section;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    active = navSections[navSections.length - 1];
  }
  for (const link of navLinks) {
    if (link.hash === `#${active.id}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
  scheduled = false;
}
window.addEventListener("scroll", () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
}, { passive: true });
window.addEventListener("resize", updateNavigation);
updateNavigation();
