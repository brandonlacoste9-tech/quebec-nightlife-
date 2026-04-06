(function () {
  const cities = window.ONTARIO_CITIES || [];
  const grid = document.getElementById("city-grid");
  const search = document.getElementById("city-search");
  const regionWrap = document.getElementById("region-filters");
  const meta = document.getElementById("results-meta");
  const empty = document.getElementById("empty-state");

  const regions = [...new Set(cities.map((c) => c.region))].sort((a, b) => a.localeCompare(b));

  let activeRegion = "all";

  function normalize(s) {
    return (s || "").toLowerCase().trim();
  }

  function matches(city, q, region) {
    const nq = normalize(q);
    if (region !== "all" && city.region !== region) return false;
    if (!nq) return true;
    const blob = `${city.name} ${city.region} ${city.blurb}`.toLowerCase();
    return blob.includes(nq);
  }

  function render() {
    const q = search.value;
    const list = cities.filter((c) => matches(c, q, activeRegion));
    grid.innerHTML = "";
    if (list.length === 0) {
      empty.hidden = false;
      meta.textContent = "";
      return;
    }
    empty.hidden = true;
    meta.textContent = `Showing ${list.length} of ${cities.length} cities${
      activeRegion !== "all" ? ` in ${activeRegion}` : ""
    }`;

    const frag = document.createDocumentFragment();
    for (const city of list) {
      const a = document.createElement("a");
      a.className = "city-card";
      a.href = `city.html?city=${encodeURIComponent(city.slug)}`;
      a.innerHTML = `
        <p class="region">${escapeHtml(city.region)}</p>
        <h2>${escapeHtml(city.name)}</h2>
        <p class="blurb">${escapeHtml(city.blurb)}</p>
        <span class="arrow">View guide →</span>
      `;
      frag.appendChild(a);
    }
    grid.appendChild(frag);
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = "chip is-active";
  allBtn.textContent = "All regions";
  allBtn.dataset.region = "all";
  regionWrap.appendChild(allBtn);

  for (const r of regions) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.textContent = r;
    b.dataset.region = r;
    regionWrap.appendChild(b);
  }

  regionWrap.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-region]");
    if (!btn) return;
    activeRegion = btn.dataset.region;
    for (const c of regionWrap.querySelectorAll(".chip")) {
      c.classList.toggle("is-active", c === btn);
    }
    render();
  });

  search.addEventListener("input", render);
  render();
})();
