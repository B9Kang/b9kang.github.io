const publicationLinks = {
  "kang-active-subsampling": "https://openreview.net/pdf/d65069ded160e53c7d338ff8320d2f428f71f85b.pdf",
  "kang-mri-protocols": "https://doi.org/10.1088/1361-6560/ae4285",
  "kang-mri-denoising": "https://doi.org/10.1002/mrm.30197",
  "2023-onlytrainonce-mrm": "https://doi.org/10.1002/mrm.29629",
  "2021-unsupervised-learning-for-magnetization": "https://doi.org/10.1002/mrm.28573",
  "2026-unleashing-the-potential-of": "https://doi.org/10.1007/s10334-026-01428-6",
  "2025-saturation-transfer-mr-fingerprinting": "https://doi.org/10.1002/mrm.30532",
  "2024-a-noise-robust-image": "https://doi.org/10.1002/mp.17066",
  "2022-learningbased-optimization-of-acquisition": "https://doi.org/10.1002/nbm.4662",
  "2022-multimodal-characteristic-guided-depth": "https://openaccess.thecvf.com/content/ACCV2022/html/Lee_Multi-modal_Characteristic_Guided_Depth_Completion_Network_ACCV_2022_paper.html",
  "2022-onlytrainonce-mr-fingerprinting-for": "https://doi.org/10.1007/978-3-031-16446-0_37",
  "2023-onlytrainonce-ismrm": "https://archive.ismrm.org/2023/0424.html",
  "2023-a-noiserobust-accelerated-mri": "https://archive.ismrm.org/2023/0832.html",
  "2023-a-noise-robust-image": "https://archive.ismrm.org/2023/3717.html",
  "2023-constraint-function-for-ivim": "https://archive.ismrm.org/2023/5193.html",
  "2023-brain-tumor-segmentation-using": "https://archive.ismrm.org/2023/4356.html",
  "2022-learningbased-prediction-of-encoding": "https://archive.ismrm.org/2022/2517.html"
};

for (const title of document.querySelectorAll(".publications .bibliography [id] > .title, .preprint-title")) {
  const paperUrl = publicationLinks[title.parentElement.id];
  const link = document.createElement("a");
  link.textContent = title.textContent.trim();
  link.href = paperUrl || "https://scholar.google.com/scholar?q=" + encodeURIComponent('"' + link.textContent + '"');
  if (!paperUrl) link.title = "Search Google Scholar for this title";
  title.replaceChildren(link);
}
