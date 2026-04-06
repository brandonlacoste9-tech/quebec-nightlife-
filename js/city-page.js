(function () {
  const cities = window.ONTARIO_CITIES || [];
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("city");
  const main = document.getElementById("main");
  const breadcrumb = document.getElementById("breadcrumb");

  if (!main) return;

  document.title = slug ? `Loading… — Ontario After Dark` : "Choose a city — Ontario After Dark";

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const city = cities.find((c) => c.slug === slug);

  if (!slug || !city) {
    document.title = "City not found — Ontario After Dark";
    breadcrumb.innerHTML = `<a href="index.html">Ontario After Dark</a>`;
    main.innerHTML = `
      <div class="city-hero">
        <h1>City not found</h1>
        <p class="intro">We don’t have a guide for that link yet. Use the city list to pick a destination.</p>
        <p class="intro"><a href="index.html#cities">← Back to all cities</a></p>
      </div>`;
    return;
  }

  document.title = `${city.name} nightlife — Ontario After Dark`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    const m = document.createElement("meta");
    m.name = "description";
    m.content = `${city.name}, ${city.region}: ${city.blurb}`;
    document.head.appendChild(m);
  } else {
    metaDesc.setAttribute("content", `${city.name}, ${city.region}: ${city.blurb}`);
  }

  breadcrumb.innerHTML = `
    <a href="index.html">Ontario After Dark</a>
    <span aria-hidden="true">/</span>
    <span>${escapeHtml(city.name)}</span>
  `;

  const categoriesHtml = (city.categories || [])
    .map(
      (cat) => `
      <div class="category-card">
        <h3>${escapeHtml(cat.title)}</h3>
        <p>${escapeHtml(cat.body)}</p>
      </div>`
    )
    .join("");

  const tipsHtml =
    city.tips && city.tips.length
      ? `<ul class="tips-list">${city.tips.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>`
      : "";

  main.innerHTML = `
    <header class="city-hero">
      <p class="region">${escapeHtml(city.region)}</p>
      <h1>${escapeHtml(city.name)}</h1>
      <p class="intro">${escapeHtml(city.intro)}</p>
    </header>

    <section class="section-block" aria-labelledby="scene-heading">
      <h2 id="scene-heading">What you’ll find</h2>
      <div class="category-grid">${categoriesHtml}</div>
    </section>

    ${
      tipsHtml
        ? `<section class="section-block" aria-labelledby="tips-heading">
      <h2 id="tips-heading">Practical tips</h2>
      ${tipsHtml}
    </section>`
        : ""
    }

    <p class="disclaimer">
      <strong>Note:</strong> This page describes typical nightlife categories and how they tend to show up in
      ${escapeHtml(city.name)}. It is not a list of venues or endorsements. Hours, licences, and cover charges
      change — check with individual businesses before you go.
    </p>
  `;
})();
