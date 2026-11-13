---
layout: research-home
title: Home
permalink: /
---

<div class="research-home">
  <section aria-labelledby="home-heading">
    <h1 id="home-heading">Beomgu Kang</h1>
    <div class="intro-grid">
      <div class="intro-text">
        <p>I’m a postdoctoral researcher in the Department of Artificial Intelligence at Korea University, working with <a href="https://impel.korea.ac.kr/members/principal-investigator">Hyunseok Seo</a>. I develop reliable and resource-efficient AI methods that decide what information to use and how much computation to spend under uncertainty.</p>
        <p>During my Ph.D. in electrical engineering at KAIST, I developed physics-informed learning and self-supervised denoising methods for quantitative MRI. This work led me to study measurement selection more broadly. In my postdoctoral research, I developed active probabilistic subsampling that chooses measurements based on the input and the downstream task, from reconstruction to classification and segmentation.</p>
        <p>I now apply these ideas to foundation models. My work on risk-controlled KV-cache eviction studies how to reduce memory use in large language models while meeting explicit targets for predictive risk. I’m also exploring when visual references should guide generation and how to allocate inference-time computation for reliable multimodal outputs.</p>
      </div>
      <div class="portrait-frame"><img class="research-portrait" src="{{ '/assets/img/beomgu-kang.jpg' | relative_url }}" alt="Beomgu Kang" width="600" height="840"></div>
    </div>
    <ul class="profile-links" aria-label="Profile links">
      <li><a href="mailto:{{ site.data.socials.email }}">Email</a></li>
      <li><a href="https://github.com/{{ site.data.socials.github_username }}">GitHub</a></li>
      <li><a href="{{ '/assets/pdf/CV_BeomguKang.pdf' | relative_url }}" aria-label="CV (PDF)">CV</a></li>
    </ul>
  </section>

  <section aria-labelledby="news-heading">
    <h2 id="news-heading">News</h2>
    <ul class="research-news">
      <li><time datetime="2026-09">Sep 2026</time><span>Our paper (Sparse Support Grounding for Heterogeneous MIL) was accepted at <strong>NeurIPS</strong>.</span></li>
      <li><time datetime="2026-05">May 2026</time><span>Our paper (Robust MRI Protocol Optimization) was accepted at the <strong>ICML Workshop</strong>.</span></li>
      <li><time datetime="2026-02">Feb 2026</time><span>Our paper (Physics-Informed Optimization of Saturation-Transfer MRI Protocols) was accepted for publication in <strong>Physics in Medicine &amp; Biology (PMB)</strong>.</span></li>
      <li><time datetime="2026-01">Jan 2026</time><span>Our paper (Active Probabilistic Subsampling) was accepted at <strong>ICLR</strong>. <a href="https://github.com/B9Kang/PGADPS">Code</a></span></li>
      <li><time datetime="2025-11">Nov 2025</time><span>Joined Korea University as a postdoctoral researcher in the Department of Artificial Intelligence.</span></li>
      <li><time datetime="2025-05">May 2025</time><span>Named an <a href="https://www.ismrm.org/25m/junior-fellows/">ISMRM Junior Fellow</a>.</span></li>
    </ul>
  </section>

  <section aria-labelledby="selected-heading">
    <div class="research-section-heading">
      <h2 id="selected-heading">Selected publications</h2>
      <a href="{{ '/publications/' | relative_url }}">All publications</a>
    </div>
    <div class="publications selected-publications">
      {% bibliography --group_by none --query @*[selected=true] %}
    </div>
  </section>
</div>
<script src="{{ '/assets/js/selected-paper-links.js' | relative_url }}" defer></script>
