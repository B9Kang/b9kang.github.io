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
        <p>I’m a postdoctoral researcher in the Department of Artificial Intelligence at Korea University, working with Hyunseok Seo. I study how AI systems can make reliable decisions with limited compute and measurements.</p>
        <p>My research spans physics-informed learning and optimization, active sensing, and efficient inference for large language models. I develop methods for deciding what to measure, what information to keep, and how to use it in medical imaging and other inverse problems.</p>
        <p>I’m also interested in applying these ideas to multimodal and generative AI.</p>
        <ul class="profile-links" aria-label="Profile links">
          <li><a href="mailto:{{ site.data.socials.email }}">Email</a></li>
          <li><a href="https://github.com/{{ site.data.socials.github_username }}">GitHub</a></li>
          <li><a href="{{ '/cv/' | relative_url }}">CV</a></li>
        </ul>
      </div>
      <img class="research-portrait" src="{{ '/assets/img/beomgu-kang.jpg' | relative_url }}" alt="Beomgu Kang" width="600" height="840">
    </div>
  </section>

  <section aria-labelledby="news-heading">
    <h2 id="news-heading">News</h2>
    <ul class="research-news">
      <li><time datetime="2026">2026</time><span>Work on active probabilistic subsampling appeared at ICLR. <a href="https://github.com/B9Kang/PGADPS">Code</a></span></li>
      <li><time datetime="2025-11">Nov 2025</time><span>Joined Korea University as a postdoctoral researcher in the Department of Artificial Intelligence.</span></li>
      <li><time datetime="2025">2025</time><span>Named an <a href="https://www.ismrm.org/25m/junior-fellows/">ISMRM Junior Fellow</a>.</span></li>
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
