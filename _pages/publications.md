---
layout: page
permalink: /publications/
title: Publications
description: Journal articles, conference papers, and workshop presentations.
nav: true
nav_order: 1
---

## Preprint

**Risk-Controlled KV-Cache Eviction: From Memory Budgets to Risk Targets**  
**Beomgu Kang**, SoJin Yun, Hojoon Kim, and Hyunseok Seo

## Journal and conference papers

<link rel="stylesheet" href="{{ '/assets/css/research-home.css' | relative_url | append: '?v=publication-years' }}">

{% include bib_search.liquid %}

<p><strong>J</strong> Journal · <strong>C</strong> Conference and workshop</p>

<div class="publications publications-by-year">

{% bibliography %}

</div>

## ISMRM presentations

<div class="publications">

{% bibliography --file ismrm --group_by none %}

</div>

<script src="{{ '/assets/js/publication-numbers.js' | relative_url | append: '?v=oldest-first' }}" defer></script>
