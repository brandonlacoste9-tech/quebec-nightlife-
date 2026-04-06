/**
 * Shared imagery + map links. Images: Unsplash (see footer attribution on pages).
 */
(function () {
  const BASE =
    "https://images.unsplash.com/photo-";

  /** Curated nightlife / city-night / bar & club stock (stable IDs). */
  const IMAGE_IDS = [
    "1514933651103-005eec06c04b",
    "1574391884720-b33600128c83",
    "1514525253161-7a46d19cd819",
    "1566417713940-fe7c737a9ef2",
    "1543007630-9710e4a00a20",
    "1492684223066-81342ee5c30c",
    "1519671482749-f2cc3b37e3ce",
    "1506905925346-21bda4d32df4",
    "1551024506-0bccd828d307",
    "1516975080664-ed2fc6c32937",
    "1470337458703-46ad1756a187",
    "1517456790570-e04c4d1c62d5",
    "1525610552991-437add6cff06",
    "1517457376598-cbb7be0faed8",
    "1560184897-ae75f418493e",
    "1516450360457-931051a3c0ac",
    "1501281665235-3bfe77dcf84e",
    "1551882547-ff40c63fe5fa",
  ];

  function hashSlug(slug) {
    let h = 0;
    const s = String(slug || "");
    for (let i = 0; i < s.length; i++) {
      h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }

  function cityImageUrl(slug, width) {
    const w = width || 1200;
    const id = IMAGE_IDS[hashSlug(slug) % IMAGE_IDS.length];
    return `${BASE}${id}?auto=format&fit=crop&w=${w}&q=82`;
  }

  function mapsSearchUrl(query) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  /**
   * Named areas to explore + open in Maps. Uses CITY_LOCATIONS overrides when present.
   */
  function locationsForCity(city) {
    const custom = window.CITY_LOCATIONS && window.CITY_LOCATIONS[city.slug];
    if (custom && custom.length) return custom;
    return defaultLocations(city);
  }

  function defaultLocations(city) {
    const n = city.name;
    return [
      {
        name: `${n} downtown`,
        kind: "Bars & late dining",
        desc: `The urban core is where most pubs, lounges, and restaurant bars cluster — busiest Thursday through Saturday.`,
        mapsQuery: `${n} downtown Ontario Canada`,
      },
      {
        name: "Main strips & plazas",
        kind: "Neighbourhood venues",
        desc: `Arterial roads and shopping plazas often host sports bars and chains; hours vary by location.`,
        mapsQuery: `${n} Ontario bars restaurants`,
      },
    ];
  }

  window.ONTARIO_MEDIA = {
    cityImageUrl,
    mapsSearchUrl,
    locationsForCity,
    photoCreditHtml:
      'Photos are illustrative stock images from <a href="https://unsplash.com" rel="noopener noreferrer" target="_blank">Unsplash</a> — not specific venues.',
  };
})();
