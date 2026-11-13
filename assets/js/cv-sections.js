function revealCvSection() {
  const section = document.getElementById(window.location.hash.slice(1));
  if (section instanceof HTMLDetailsElement) {
    section.open = true;
  }
}

revealCvSection();
window.addEventListener("hashchange", revealCvSection);
