/**
 * Named nightlife districts / strips — open in Google Maps to browse the area.
 * Cities not listed fall back to generic downtown + plazas in media.js.
 */
window.CITY_LOCATIONS = {
  toronto: [
    {
      name: "Entertainment District",
      kind: "Clubs & large venues",
      desc: "King West and the core south of Queen — high concentration of clubs, concert venues, and event spaces.",
      mapsQuery: "Entertainment District Toronto Ontario",
    },
    {
      name: "Queen West & Ossington",
      kind: "Cocktail bars & indie rooms",
      desc: "Walkable strips of cocktail bars, small venues, and late-night food.",
      mapsQuery: "Ossington Avenue Toronto Ontario",
    },
    {
      name: "Church-Wellesley Village",
      kind: "LGBTQ+ nightlife",
      desc: "Historic village strip with bars, dance floors, and patio culture.",
      mapsQuery: "Church and Wellesley Toronto Ontario",
    },
    {
      name: "Kensington Market",
      kind: "Pubs & late-night food",
      desc: "Dense mix of casual bars, patios, and international late-night kitchens.",
      mapsQuery: "Kensington Market Toronto Ontario",
    },
  ],
  ottawa: [
    {
      name: "ByWard Market",
      kind: "Bars & patios",
      desc: "Ottawa’s best-known evening cluster — pubs, clubs, and restaurant patios.",
      mapsQuery: "ByWard Market Ottawa Ontario",
    },
    {
      name: "Elgin Street",
      kind: "Pubs & dining",
      desc: "Restaurant and bar strip south of the core; busy on weekends.",
      mapsQuery: "Elgin Street Ottawa Ontario",
    },
    {
      name: "Glebe",
      kind: "Neighbourhood pubs",
      desc: "Bank Street corridor — pubs and casual dining with a local feel.",
      mapsQuery: "Bank Street Glebe Ottawa Ontario",
    },
  ],
  hamilton: [
    {
      name: "James Street North",
      kind: "Live music & bars",
      desc: "Art district energy — small venues, bars, and restaurant strips.",
      mapsQuery: "James Street North Hamilton Ontario",
    },
    {
      name: "King Street East (core)",
      kind: "Downtown nightlife",
      desc: "Central Hamilton bar cluster and walkable evening strip.",
      mapsQuery: "King Street East Hamilton downtown Ontario",
    },
  ],
  london: [
    {
      name: "Richmond Row",
      kind: "Clubs & pubs",
      desc: "London’s main going-out strip — bars, clubs, and late-night food.",
      mapsQuery: "Richmond Row London Ontario",
    },
    {
      name: "Downtown London",
      kind: "Bars & venues",
      desc: "Core blocks around Dundas with pubs and live-music rooms.",
      mapsQuery: "Dundas Place London Ontario",
    },
  ],
  windsor: [
    {
      name: "Downtown Windsor",
      kind: "Bars & waterfront",
      desc: "Ouellette corridor and riverfront-adjacent bars and pubs.",
      mapsQuery: "Ouellette Avenue Windsor Ontario",
    },
    {
      name: "Caesars Windsor area",
      kind: "Casino & entertainment",
      desc: "Gaming, shows, and nearby bars — check dress codes and age rules.",
      mapsQuery: "Caesars Windsor Ontario",
    },
  ],
  "kitchener-waterloo": [
    {
      name: "Downtown Kitchener",
      kind: "Bars & breweries",
      desc: "King Street corridor — pubs, cocktail rooms, and festival-adjacent energy.",
      mapsQuery: "Downtown Kitchener Ontario",
    },
    {
      name: "Uptown Waterloo",
      kind: "Restaurants & bars",
      desc: "King Street Uptown — student nights and weekend crowds.",
      mapsQuery: "Uptown Waterloo King Street Ontario",
    },
  ],
  mississauga: [
    {
      name: "Port Credit",
      kind: "Waterfront bars & patios",
      desc: "Village feel on the lake — summer patios and pub nights.",
      mapsQuery: "Port Credit Mississauga Ontario",
    },
    {
      name: "Square One / City Centre",
      kind: "Lounges & dining",
      desc: "Mall-adjacent and hotel lounges; corporate and weekend crowds.",
      mapsQuery: "Square One Mississauga Ontario",
    },
  ],
  niagara-falls: [
    {
      name: "Clifton Hill",
      kind: "Tourist strip",
      desc: "Bright lights, bars, and entertainment venues — peak tourism energy.",
      mapsQuery: "Clifton Hill Niagara Falls Ontario",
    },
    {
      name: "Fallsview Casino area",
      kind: "Casino & shows",
      desc: "Gaming, concerts, and nearby hotel lounges.",
      mapsQuery: "Fallsview Casino Niagara Falls Ontario",
    },
  ],
  "st-catharines": [
    {
      name: "St. Paul Street",
      kind: "Downtown bars",
      desc: "Main going-out strip with pubs and small music venues.",
      mapsQuery: "St Paul Street St Catharines Ontario",
    },
  ],
  kingston: [
    {
      name: "Princess Street",
      kind: "Pubs & patios",
      desc: "Historic downtown strip — student nights and waterfront proximity.",
      mapsQuery: "Princess Street Kingston Ontario",
    },
    {
      name: "Waterfront / Confederation Basin",
      kind: "Patios & harbour",
      desc: "Summer patios and harbour walks near the bars.",
      mapsQuery: "Kingston Ontario waterfront",
    },
  ],
  guelph: [
    {
      name: "Downtown Guelph",
      kind: "Bars & live music",
      desc: "Quebec Street / Wyndham — pubs and small venues near the square.",
      mapsQuery: "Downtown Guelph Ontario",
    },
  ],
  waterloo: [
    {
      name: "University Avenue / campus edge",
      kind: "Student bars",
      desc: "Pub nights near Laurier and UW — heavy ID checks during term.",
      mapsQuery: "University Avenue Waterloo Ontario bars",
    },
    {
      name: "Uptown Waterloo",
      kind: "Bars & dining",
      desc: "King Street — cocktail spots and casual pubs.",
      mapsQuery: "Uptown Waterloo King Street",
    },
  ],
  barrie: [
    {
      name: "Downtown Barrie",
      kind: "Waterfront & Dunlop",
      desc: "Kempenfelt Bay edge — patios and pub strips.",
      mapsQuery: "Dunlop Street Barrie Ontario",
    },
  ],
  sudbury: [
    {
      name: "Downtown Sudbury",
      kind: "Bars & pubs",
      desc: "Elm Place / Paris Street area — core evening cluster.",
      mapsQuery: "Downtown Sudbury Ontario",
    },
  ],
  peterborough: [
    {
      name: "George Street",
      kind: "Pub strip",
      desc: "Dense student-friendly bar strip — very busy during term.",
      mapsQuery: "George Street Peterborough Ontario",
    },
  ],
  "thunder-bay": [
    {
      name: "Waterfront District",
      kind: "Pubs & dining",
      desc: "Harbour Expressway / Marina area — summer patios.",
      mapsQuery: "Waterfront Thunder Bay Ontario",
    },
    {
      name: "North Core / Red River Road",
      kind: "Bars",
      desc: "Central evening options in the north core.",
      mapsQuery: "Red River Road Thunder Bay Ontario",
    },
  ],
  stratford: [
    {
      name: "Ontario Street / theatre district",
      kind: "Dining & wine bars",
      desc: "Pre- and post-theatre crowds — reserve on show nights.",
      mapsQuery: "Ontario Street Stratford Ontario",
    },
  ],
  brampton: [
    {
      name: "Downtown Brampton",
      kind: "Bars & dining",
      desc: "Queen Street corridor — growing evening strip near Gage Park.",
      mapsQuery: "Queen Street Brampton Ontario",
    },
    {
      name: "Steeles & plazas",
      kind: "Lounges & late dining",
      desc: "Major arterial plazas host chains, sports bars, and karaoke-style venues.",
      mapsQuery: "Steeles Avenue Brampton Ontario restaurants bars",
    },
  ],
  oshawa: [
    {
      name: "Downtown Oshawa",
      kind: "Bars & clubs",
      desc: "Core strip near city hall — pub crawls and weekend lines.",
      mapsQuery: "Downtown Oshawa Ontario",
    },
    {
      name: "Tribute Centre area",
      kind: "Event nights",
      desc: "Arena-adjacent crowds on concert and sports nights — plan parking.",
      mapsQuery: "Tribute Communities Centre Oshawa",
    },
  ],
  oakville: [
    {
      name: "Bronte Village & lakeshore",
      kind: "Patios & pubs",
      desc: "Waterfront-adjacent dining and pub nights — summer busiest.",
      mapsQuery: "Bronte Village Oakville Ontario",
    },
    {
      name: "Downtown Oakville",
      kind: "Wine bars & dining",
      desc: "Lakeshore Road — reservations help on weekends.",
      mapsQuery: "Lakeshore Road East Oakville Ontario",
    },
  ],
  vaughan: [
    {
      name: "Vaughan Metropolitan Centre",
      kind: "Lounges & dining",
      desc: "Transit-oriented strip with newer restaurant and hotel lounges.",
      mapsQuery: "Vaughan Metropolitan Centre Ontario",
    },
    {
      name: "Colossus / Highway 7 corridor",
      kind: "Entertainment & chains",
      desc: "Cinema and plaza clusters — busy on movie and weekend nights.",
      mapsQuery: "Highway 7 Vaughan Ontario entertainment",
    },
  ],
  "richmond-hill": [
    {
      name: "Yonge Street corridor",
      kind: "Karaoke & late dining",
      desc: "Long north–south strip with plazas and restaurant lounges.",
      mapsQuery: "Yonge Street Richmond Hill Ontario",
    },
  ],
};
