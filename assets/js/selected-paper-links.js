const selectedPaperLinks = {
  "2026-not-all-instances-should": "/publications/#2026-not-all-instances-should",
  "kang-active-subsampling": "https://openreview.net/pdf/d65069ded160e53c7d338ff8320d2f428f71f85b.pdf",
  "kang-mri-protocols": "https://doi.org/10.1088/1361-6560/ae4285",
  "kang-mri-denoising": "https://doi.org/10.1002/mrm.30197",
  "2021-unsupervised-learning-for-magnetization": "https://doi.org/10.1002/mrm.28573"
};

for (const [id, url] of Object.entries(selectedPaperLinks)) {
  const title = document.querySelector(`.selected-publications #${CSS.escape(id)} .title`);
  if (title) {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = title.textContent.trim();
    title.replaceChildren(link);
  }
}
