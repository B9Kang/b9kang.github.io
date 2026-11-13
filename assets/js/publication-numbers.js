const publicationCounts = { J: 0, C: 0 };

for (const badge of document.querySelectorAll(".publications-by-year .publication-type")) {
  const type = badge.textContent.trim();
  publicationCounts[type] += 1;
  badge.textContent = type + publicationCounts[type];
}
