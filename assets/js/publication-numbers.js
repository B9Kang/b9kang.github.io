const publicationCounts = { J: 0, C: 0 };

const badges = document.querySelectorAll(".publications-by-year .publication-type");

for (const badge of Array.from(badges).reverse()) {
  const type = badge.textContent.trim();
  publicationCounts[type] += 1;
  badge.textContent = type + publicationCounts[type];
}
