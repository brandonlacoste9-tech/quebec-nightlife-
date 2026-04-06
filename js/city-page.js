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

  const media = window.ONTARIO_MEDIA;
  const heroSrc = media ? media.cityImageUrl(city.slug, 1600) : "";
  const locations = media ? media.locationsForCity(city) : [];

  const locationsHtml =
    locations.length && media
      ? `
    <section class="section-block" aria-labelledby="locations-heading">
      <h2 id="locations-heading">Where to explore</h2>
      <p class="section-lead">Named districts and strips — open the map to browse the area (not individual venue listings).</p>
      <div class="location-grid">
        ${locations
          .map(
            (loc) => `
        <article class="location-card">
          <h3>${escapeHtml(loc.name)}</h3>
          <p class="location-kind">${escapeHtml(loc.kind)}</p>
          <p class="location-desc">${escapeHtml(loc.desc)}</p>
          <a class="location-map" href="${escapeHtml(media.mapsSearchUrl(loc.mapsQuery))}" target="_blank" rel="noopener noreferrer">Open in Google Maps<span class="sr-only"> (opens new tab)</span></a>
        </article>`
          )
          .join("")}
      </div>
    </section>`
      : "";

  const heroMediaHtml =
    heroSrc && media
      ? `
    <figure class="city-hero-media">
      <img
        src="${escapeHtml(heroSrc)}"
        alt="${escapeHtml(city.name + " nightlife — illustrative stock image, not a specific venue")}"
        width="1600"
        height="857"
        loading="eager"
        decoding="async"
      />
      <figcaption class="photo-credit">${media.photoCreditHtml}</figcaption>
    </figure>`
      : "";

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
    ${heroMediaHtml}
    <header class="city-hero">
      <p class="region">${escapeHtml(city.region)}</p>
      <h1>${escapeHtml(city.name)}</h1>
      <p class="intro">${escapeHtml(city.intro)}</p>
    </header>

    ${locationsHtml}

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
      ${escapeHtml(city.name)}. Map links search a district or area — not endorsements of specific businesses.
      Photos are stock images, not venue photos. Hours, licences, and cover charges change — confirm before you go.
    </p>
  `;
})();
