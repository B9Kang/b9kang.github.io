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
        <p>During my Ph.D. at KAIST, I developed physics-informed learning methods for quantitative MRI. I used models of MR signal formation to optimize acquisition protocols and implemented those protocols on MRI scanners, reducing scan time while preserving quantitative accuracy.</p>
        <p>As a postdoc, I extended this work to active sensing, where the model chooses which measurements to acquire based on the input and the downstream task. I now apply the same principle to large language models, where I study which cached information to retain to reduce memory use while keeping prediction risk within a specified limit. These projects share a question: How many measurements or how much memory does a model need to perform reliably?</p>
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
