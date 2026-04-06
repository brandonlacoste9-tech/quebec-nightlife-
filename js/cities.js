/**
 * Editorial guide data for Ontario nightlife by city.
 * Categories describe typical scenes; verify hours and offerings locally.
 */
window.ONTARIO_CITIES = [
  {
    slug: "toronto",
    name: "Toronto",
    region: "Greater Toronto",
    blurb: "Canada’s largest late-night market — clubs, cocktail bars, live rooms, and neighbourhood pubs across dozens of pockets.",
    intro: "Toronto’s nightlife is layered by neighbourhood: downtown and the Entertainment District for high-energy clubs and concerts, Queen West and Ossington for cocktail bars and indie rooms, King West for lounges, and the Village for LGBTQ+ nightlife. Expect varied cover charges, ID checks, and last-call patterns that differ by licence type.",
    categories: [
      { title: "Nightclubs & dancing", body: "Large venues and intimate clubs host electronic, hip-hop, and top-40 nights. Weekends are busiest; some rooms are ticketed or guest-list heavy." },
      { title: "Cocktail bars & speakeasies", body: "Reservation-friendly spots and walk-in bars mix craft programs with late kitchens; Thursday–Saturday nights fill first." },
      { title: "Live music & comedy", body: "From arena shows to small theatres and comedy clubs, calendars change weekly — check venue sites before planning." },
      { title: "Pubs & sports bars", body: "Neighbourhood pubs and sports bars cluster around financial districts and near transit; big-game nights can mean long waits." },
      { title: "Late-night food", body: "Kensington, Chinatown, and strip-mall pockets across the city keep kitchens open past midnight; options vary by day." },
    ],
    tips: [
      "Use transit or a designated ride home — parking and road closures are common on event nights.",
      "Carry government ID; many venues scan at the door.",
      "Last call timing depends on the licence — confirm with the venue.",
    ],
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    region: "Eastern Ontario",
    blurb: "Capital-city mix of ByWard Market energy, Glebe pubs, and bilingual nightlife across the river in Gatineau.",
    intro: "Ottawa’s scene stretches from the ByWard Market’s bars and clubs to quieter pockets in the Glebe and Westboro. The Gatineau side adds Quebec-licence venues minutes from downtown — plan ID and return travel if you cross the river.",
    categories: [
      { title: "Nightclubs & dancing", body: "Concentrated downtown and in the Market; student nights and government-town schedules shape weekday vs weekend crowds." },
      { title: "Pubs & patios", body: "Heritage pubs and modern beer halls dot the core; summer patios extend the night on warm evenings." },
      { title: "Live music", body: "Theatres and mid-size venues host touring acts; smaller bars book local bands and DJs." },
      { title: "Cocktail bars", body: "Hotel and hotel-adjacent lounges mix with independent cocktail rooms — reservations help on weekends." },
    ],
    tips: [
      "Winter nights are cold — plan coat check or short walks between venues.",
      "If visiting Gatineau venues, double-check age and ID rules.",
    ],
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    region: "Hamilton-Niagara",
    blurb: "James North and downtown core — indie bars, live music, and growing craft-beer culture.",
    intro: "Hamilton’s nightlife clusters around James Street North, King Street, and the waterfront-adjacent core. The city’s live-music roots show up in small venues and bar stages; craft breweries add weekend tasting-room hours.",
    categories: [
      { title: "Bars & live rooms", body: "Small-capacity venues and bar stages host local and touring acts; weeknight shows can be quieter than weekends." },
      { title: "Craft beer & pubs", body: "Breweries and pubs anchor evening crowds; some close earlier than downtown Toronto." },
      { title: "Clubs & lounges", body: "A smaller club footprint than Toronto but active dance nights on weekends." },
    ],
    tips: [
      "Street parking and transit differ by block — scout before peak times.",
      "Some venues are 19+ only with cash cover at the door.",
    ],
  },
  {
    slug: "london",
    name: "London",
    region: "Southwestern Ontario",
    blurb: "University-town energy with Richmond Row clubs, pubs, and live music.",
    intro: "London’s Richmond Row and downtown concentrate bars, clubs, and late-night food. The student calendar swings Thursday–Saturday crowds; summers can be quieter.",
    categories: [
      { title: "Nightclubs & dancing", body: "Row clubs and bars run themed nights; lineups spike during term and homecoming periods." },
      { title: "Pubs & patios", body: "British-style pubs and neighbourhood bars spread across the city; patios busy in summer." },
      { title: "Live music", body: "Theatres and mid-size venues host concerts; smaller bars book cover bands and DJs." },
    ],
    tips: [
      "Check campus-area events for road closures and higher foot traffic.",
      "Taxi and ride-share queues are longest right after last call.",
    ],
  },
  {
    slug: "windsor",
    name: "Windsor",
    region: "Southwestern Ontario",
    blurb: "Border city with Detroit views — casino-adjacent nightlife and walkable downtown strips.",
    intro: "Windsor’s evening scene mixes downtown bars, the casino district, and cross-border options in Detroit (bring passports and plan return). Canadian-side venues follow Ontario liquor rules.",
    categories: [
      { title: "Casino & entertainment", body: "Gaming and entertainment complexes anchor late-night traffic; dress codes vary by venue." },
      { title: "Bars & clubs", body: "Downtown strips and waterfront-adjacent bars cluster for weekend nights." },
      { title: "Pubs & sports", body: "Hockey and cross-border sports draw crowds to pubs and sports bars." },
    ],
    tips: [
      "Border wait times can affect evening plans — check real-time crossing status.",
      "Designated drivers matter if you split time between countries.",
    ],
  },
  {
    slug: "kitchener-waterloo",
    name: "Kitchener–Waterloo",
    region: "Waterloo Region",
    blurb: "Tech hub meets university nights — downtown Kitchener, Uptown Waterloo, and brewery culture.",
    intro: "Kitchener’s downtown and Waterloo’s Uptown host cocktail bars, pubs, and live music. The student population adds late-night activity during term; tech-week events occasionally spike crowds.",
    categories: [
      { title: "Bars & breweries", body: "Regional breweries and taprooms run weekend evenings; some close earlier midweek." },
      { title: "Nightlife strips", body: "King Street and central blocks cluster bars and small dance floors." },
      { title: "Live events", body: "Festivals and concert halls add one-off late nights; see city calendars." },
    ],
    tips: [
      "ION LRT connects Kitchener and Waterloo — useful for bar hopping.",
      "Winter events can fill hotels — book ahead on festival weekends.",
    ],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "Greater Toronto",
    blurb: "Suburban scale with Port Credit waterfront and Square One–area lounges and bars.",
    intro: "Mississauga spreads nightlife across pockets: Port Credit’s waterfront bars, City Centre lounges, and neighbourhood pubs. Many residents also head to Toronto for large clubs.",
    categories: [
      { title: "Waterfront & village bars", body: "Port Credit offers summer patios and pub nights; winter crowds are smaller." },
      { title: "Lounges & restaurants", body: "Hotel and dining-adjacent lounges cluster near major malls and corporate hubs." },
      { title: "Cultural & event nights", body: "Celebration Square and festival programming can extend evenings seasonally." },
    ],
    tips: [
      "Driving is common — arrange parking or rideshare in advance.",
      "GO Transit connects to Toronto for bigger club nights.",
    ],
  },
  {
    slug: "brampton",
    name: "Brampton",
    region: "Greater Toronto",
    blurb: "Diverse dining strips and neighbourhood bars with growing downtown evening activity.",
    intro: "Brampton’s evening scene mixes suburban pubs, South Asian and global dining that stays open late, and smaller downtown bars. Many club-goers connect to Toronto for large venues.",
    categories: [
      { title: "Late dining & lounges", body: "Restaurant strips keep kitchens busy late on weekends; lounges vary by neighbourhood." },
      { title: "Pubs & sports bars", body: "Neighbourhood pubs and sports screens cluster near major roads and plazas." },
    ],
    tips: [
      "Verify hours — suburban venues may close earlier than downtown Toronto.",
      "Major roads can be congested after events at nearby arenas.",
    ],
  },
  {
    slug: "markham",
    name: "Markham",
    region: "Greater Toronto",
    blurb: "Pacific Mall–area late nights and uptown lounges alongside corporate dining.",
    intro: "Markham blends suburban plazas with concentrated Asian dining and karaoke-style late nights in pockets. Downtown Markham adds newer restaurant and bar clusters.",
    categories: [
      { title: "Late-night dining & karaoke", body: "Plaza and mall-adjacent venues offer late hours on weekends; formats vary." },
      { title: "Lounges & restaurants", body: "Hotel and uptown dining lounges cater to corporate and weekend crowds." },
    ],
    tips: [
      "Some venues are cash-only or have ATM minimums.",
      "Winter driving can be icy — plan rides if drinking.",
    ],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    region: "Greater Toronto",
    blurb: "Canada’s Wonderland area events and Colossus–adjacent dining with Toronto nearby.",
    intro: "Vaughan’s nightlife is often event-driven (concerts, sports) plus restaurant lounges. Many visitors combine a night out with a trip into Toronto.",
    categories: [
      { title: "Entertainment district", body: "Large venues and cinema complexes anchor evening traffic on show nights." },
      { title: "Pubs & chain lounges", body: "Major intersections host recognizable pub and grill brands with late hours." },
    ],
    tips: [
      "Highway 400 traffic spikes after major events — plan exit time.",
      "Parking lots are large but can fill quickly before concerts.",
    ],
  },
  {
    slug: "oakville",
    name: "Oakville",
    region: "Greater Toronto",
    blurb: "Lakeshore wine bars, harbour pubs, and upscale dining — quieter than downtown Toronto.",
    intro: "Oakville’s evening scene leans toward lakeshore pubs, wine-forward dining, and hotel lounges. It’s a lower-decibel alternative to Toronto club nights.",
    categories: [
      { title: "Wine bars & dining", body: "Bronte and downtown Oakville offer patios and chef-driven rooms with late reservations." },
      { title: "Pubs & sports", body: "Neighbourhood pubs serve the lakeshore community; weekends are busiest." },
    ],
    tips: [
      "Reservations recommended on summer weekends along Lakeshore.",
      "GO Train connects to Toronto for late-night club options.",
    ],
  },
  {
    slug: "burlington",
    name: "Burlington",
    region: "Hamilton-Niagara",
    blurb: "Waterfront patios, downtown pubs, and easy access to Hamilton and Toronto.",
    intro: "Burlington’s Spencer Smith Park and downtown streets combine patios and pubs. It’s a common midpoint for people working across the GTHA.",
    categories: [
      { title: "Waterfront & patios", body: "Summer evenings bring patio crowds; some spots close earlier off-season." },
      { title: "Pubs & live music", body: "Downtown bars host acoustic nights and DJs on weekends." },
    ],
    tips: [
      "Parking near the waterfront fills on festival weekends.",
      "GO Transit links to Hamilton and Toronto for bigger nights out.",
    ],
  },
  {
    slug: "oshawa",
    name: "Oshawa",
    region: "Greater Toronto",
    blurb: "Durham Region hub — downtown bars, student nights near Ontario Tech and Tribute venues.",
    intro: "Oshawa mixes downtown bar strips with arena-adjacent crowds on event nights. Student populations add midweek energy during term.",
    categories: [
      { title: "Nightclubs & bars", body: "Downtown clusters host DJ nights and pub crawls; weekend lines peak after midnight." },
      { title: "Sports & concerts", body: "Arena events can flood nearby bars before and after shows." },
    ],
    tips: [
      "Event nights change parking and ride-share availability.",
      "Check age policies — some rooms are strictly 19+.",
    ],
  },
  {
    slug: "st-catharines",
    name: "St. Catharines",
    region: "Hamilton-Niagara",
    blurb: "Niagara wine country gateway with downtown bars and St. Paul Street nightlife.",
    intro: "St. Catharines anchors Niagara Region evenings: downtown bars, live music, and proximity to Niagara Falls tourism. Wine country visitors often stop here for dinner first.",
    categories: [
      { title: "Nightlife strips", body: "St. Paul Street and adjacent blocks host pubs and small dance floors." },
      { title: "Live music", body: "Local venues book bands and tribute acts; summer patios extend hours." },
    ],
    tips: [
      "Wine touring and nightlife don’t mix — separate days if driving.",
      "Summer tourism increases downtown foot traffic.",
    ],
  },
  {
    slug: "niagara-falls",
    name: "Niagara Falls",
    region: "Hamilton-Niagara",
    blurb: "Tourist-strip clubs, casinos, and Clifton Hill energy — plus quieter Canadian-side pubs.",
    intro: "The Falls area mixes family tourism with casino nightlife, clubs, and bars along the tourist strip. Off-strip Niagara Falls (Ontario) neighbourhoods offer local pubs.",
    categories: [
      { title: "Casinos & clubs", body: "Gaming floors and adjacent clubs run late; cover charges common on weekends." },
      { title: "Tourist district bars", body: "Clifton Hill and nearby blocks host chain bars and live music venues." },
      { title: "Local pubs", body: "Away from the strip, neighbourhood bars cater to residents and workers." },
    ],
    tips: [
      "Prices and cover can be higher in the tourist core.",
      "Book hotels early on long weekends and holidays.",
    ],
  },
  {
    slug: "kingston",
    name: "Kingston",
    region: "Eastern Ontario",
    blurb: "Limestone City — university pubs, waterfront patios, and live music downtown.",
    intro: "Kingston’s Queen’s University and RMC add steady nightlife to a compact downtown. Waterfront bars and historic pubs line streets near the lake; summers bring tourism and festivals.",
    categories: [
      { title: "Pub culture", body: "Irish-style pubs and student-friendly bars cluster around Princess and adjacent streets." },
      { title: "Live music & clubs", body: "Small venues host live bands; dance nights pick up Thursday–Saturday." },
      { title: "Patio season", body: "Waterfront and rooftop patios shine in summer; reservations help." },
    ],
    tips: [
      "Homecoming and grad weekends are extremely busy — plan ahead.",
      "Many streets are walkable; parking downtown is limited.",
    ],
  },
  {
    slug: "guelph",
    name: "Guelph",
    region: "Southwestern Ontario",
    blurb: "University town with indie music, craft beer, and a walkable downtown.",
    intro: "Guelph’s downtown square and surrounding streets host pubs, small venues, and breweries. The University of Guelph shapes term-time schedules.",
    categories: [
      { title: "Live music & bars", body: "Independent venues and bar stages support local artists; open mic nights are common." },
      { title: "Craft beer", body: "Breweries and taprooms anchor weekend evenings." },
    ],
    tips: [
      "Agricultural fair week can dominate the city — check road schedules.",
      "Smaller city — some venues close earlier than Toronto.",
    ],
  },
  {
    slug: "cambridge",
    name: "Cambridge",
    region: "Waterloo Region",
    blurb: "Three-core city with Preston, Galt, and Hespeler pubs and historic downtown pockets.",
    intro: "Cambridge spreads nightlife across its three former towns; Galt’s downtown offers the densest cluster of pubs and restaurants. Kitchener–Waterloo is a short drive for larger clubs.",
    categories: [
      { title: "Pubs & dining", body: "Historic main streets host neighbourhood pubs and patios." },
      { title: "Local bars", body: "Plaza and highway-adjacent sports bars draw local crowds." },
    ],
    tips: [
      "Know which core you’re heading to — distances between Preston, Galt, and Hespeler add drive time.",
    ],
  },
  {
    slug: "waterloo",
    name: "Waterloo",
    region: "Waterloo Region",
    blurb: "Laurier and UW student nights — Uptown bars and university-area energy.",
    intro: "Waterloo pairs Uptown’s bar and restaurant strip with university-area pubs. Term-time weekends are busiest; co-op terms can quiet some months.",
    categories: [
      { title: "Student nightlife", body: "Bar nights and pub crawls cluster near campus; ID checks are strict." },
      { title: "Uptown & bars", body: "King Street and central blocks mix cocktail spots with casual pubs." },
    ],
    tips: [
      "ION LRT connects to Kitchener — useful for hopping districts.",
      "Move-in and exam periods shift crowd patterns.",
    ],
  },
  {
    slug: "barrie",
    name: "Barrie",
    region: "Central Ontario",
    blurb: "Kempenfelt Bay waterfront bars and cottage-country weekends.",
    intro: "Barrie’s downtown and waterfront host pubs, patios, and summer crowds from the GTA. Winter nights lean quieter except during events on the bay.",
    categories: [
      { title: "Waterfront & downtown", body: "Patios and pubs line the bay; snowmobile and winter tourism occasionally add events." },
      { title: "Nightclubs & pubs", body: "A modest club scene with weekend DJ nights; pubs anchor most evenings." },
    ],
    tips: [
      "Long weekends bring traffic from Toronto — plan travel time.",
      "Winter driving on Highway 400 can be hazardous — check weather.",
    ],
  },
  {
    slug: "sudbury",
    name: "Sudbury",
    region: "Northern Ontario",
    blurb: "Northern hub — downtown bars, francophone pockets, and festival nights.",
    intro: "Greater Sudbury’s downtown and South End host pubs, bars, and small clubs. The city’s bilingual character shows up in music and cultural events.",
    categories: [
      { title: "Pubs & bars", body: "Downtown clusters serve locals and students; weekends are main nights out." },
      { title: "Live music", body: "Regional acts tour through; smaller venues host local bands." },
    ],
    tips: [
      "Distances are longer — plan rides if bar hopping.",
      "Winter temperatures can be extreme — dress for cold exits.",
    ],
  },
  {
    slug: "thunder-bay",
    name: "Thunder Bay",
    region: "Northern Ontario",
    blurb: "Lakehead city — waterfront pockets, university bars, and regional touring acts.",
    intro: "Thunder Bay’s nightlife concentrates in the north and south cores with pubs, small clubs, and restaurant lounges. Lakehead University adds student nights.",
    categories: [
      { title: "Bars & pubs", body: "Neighbourhood pubs and sports bars anchor evenings; weekend nights are busiest." },
      { title: "Live music", body: "Regional tours and local festivals add one-off late nights." },
    ],
    tips: [
      "Late-night options are fewer than in southern Ontario — confirm hours.",
      "Winter roads can be icy — plan safe transport.",
    ],
  },
  {
    slug: "belleville",
    name: "Belleville",
    region: "Eastern Ontario",
    blurb: "Bay of Quinte hub — downtown pubs, waterfront events, and highway travellers.",
    intro: "Belleville’s downtown mixes pubs and restaurants; the waterfront hosts seasonal events. Proximity to Prince Edward County wine country adds tourism traffic.",
    categories: [
      { title: "Downtown pubs", body: "Front Street and adjacent blocks host bars and patios." },
      { title: "Local bars", body: "Plaza and highway-adjacent venues draw local crowds." },
    ],
    tips: [
      "401 corridor traffic can delay arrivals — buffer time on weekends.",
    ],
  },
  {
    slug: "peterborough",
    name: "Peterborough",
    region: "Central Ontario",
    blurb: "Trent-adjacent student nights — George Street pubs and live music.",
    intro: "Peterborough’s George Street is known for pub density; Trent University adds term-time energy. Smaller venues host live music and comedy.",
    categories: [
      { title: "Pub culture", body: "Dense pub strip with themed nights; busy during student events." },
      { title: "Live music", body: "Theatres and bars book local and touring acts." },
    ],
    tips: [
      "Street parking can be tight on busy weekends.",
      "Liftlock and summer events can crowd downtown.",
    ],
  },
  {
    slug: "sarnia",
    name: "Sarnia",
    region: "Southwestern Ontario",
    blurb: "Bluewater border city — waterfront bars and Point Edward casino nights.",
    intro: "Sarnia’s evening scene includes waterfront bars, downtown pubs, and cross-border options in Michigan (plan ID and travel). Chemical Valley and industrial schedules shape weekday crowds.",
    categories: [
      { title: "Waterfront & downtown", body: "Bars and patios along the waterfront; summer is peak patio season." },
      { title: "Casino & entertainment", body: "Nearby gaming and entertainment add late-night traffic." },
    ],
    tips: [
      "Border wait times vary — check before crossing for evening plans.",
    ],
  },
  {
    slug: "sault-ste-marie",
    name: "Sault Ste. Marie",
    region: "Northern Ontario",
    blurb: "Northern border city — pubs, casino entertainment, and outdoor-event summers.",
    intro: "Sault Ste. Marie mixes downtown bars with casino-adjacent nightlife. Summers bring tourists and outdoor events; winters are quieter.",
    categories: [
      { title: "Pubs & bars", body: "Downtown and strip-mall pubs serve local nights out." },
      { title: "Casino & shows", body: "Gaming and entertainment venues can extend evening options." },
    ],
    tips: [
      "Confirm late-night hours — smaller northern cities may close earlier.",
    ],
  },
  {
    slug: "north-bay",
    name: "North Bay",
    region: "Northern Ontario",
    blurb: "Gateway North — downtown bars, lake events, and student nights.",
    intro: "North Bay’s downtown hosts pubs and small bars; Nipissing University and Canadore add student activity. Outdoor events and winter sports shape seasonal calendars.",
    categories: [
      { title: "Pubs & nightlife", body: "Main streets cluster bars and restaurants; weekends are busiest." },
    ],
    tips: [
      "Winter nights are cold — plan rides and warm exits.",
    ],
  },
  {
    slug: "timmins",
    name: "Timmins",
    region: "Northern Ontario",
    blurb: "Mining-city pubs — neighbourhood bars and regional events.",
    intro: "Timmins offers a smaller set of nightlife options focused on pubs and neighbourhood bars. Regional festivals occasionally add late nights.",
    categories: [
      { title: "Local pubs", body: "Community bars anchor evenings; options are fewer than in southern Ontario." },
    ],
    tips: [
      "Verify hours in advance — venues may close earlier midweek.",
    ],
  },
  {
    slug: "cornwall",
    name: "Cornwall",
    region: "Eastern Ontario",
    blurb: "St. Lawrence River city — waterfront pockets and bilingual bar culture.",
    intro: "Cornwall’s downtown and waterfront areas host pubs and restaurants; proximity to Montreal and Ottawa adds travel-for-club options.",
    categories: [
      { title: "Pubs & dining", body: "Downtown strips and plazas offer bar nights and patios." },
    ],
    tips: [
      "Highway 401 connects to Ottawa — useful for bigger nights out.",
    ],
  },
  {
    slug: "orillia",
    name: "Orillia",
    region: "Central Ontario",
    blurb: "Cottage country — waterfront bars, summer tourism, and festival weekends.",
    intro: "Orillia’s summer population swells with cottagers; downtown bars and waterfront patios extend hours seasonally. Casino Rama draws visitors for shows.",
    categories: [
      { title: "Waterfront & downtown", body: "Patios and pubs near the lake; winter is quieter." },
      { title: "Entertainment", body: "Nearby large venues host concerts and comedy — check schedules." },
    ],
    tips: [
      "Long weekends bring traffic — plan parking.",
    ],
  },
  {
    slug: "stratford",
    name: "Stratford",
    region: "Southwestern Ontario",
    blurb: "Theatre town — pre- and post-show dining, wine bars, and quiet evenings.",
    intro: "Stratford’s nightlife orbits the theatre schedule: dinner reservations, wine bars, and pubs. Late nights are gentler than in big cities.",
    categories: [
      { title: "Theatre district dining", body: "Restaurants and lounges fill before curtain; after-show drinks are popular." },
      { title: "Pubs & patios", body: "Neighbourhood pubs serve locals and visitors year-round." },
    ],
    tips: [
      "Book dining early on show nights — tables disappear fast.",
    ],
  },
  {
    slug: "collingwood",
    name: "Collingwood",
    region: "Central Ontario",
    blurb: "Blue Mountain gateway — ski-town bars, après, and summer patios.",
    intro: "Collingwood and nearby Blue Mountain add ski-season après bars and summer patio crowds. Downtown Collingwood has pubs and restaurants with seasonal hours.",
    categories: [
      { title: "Après & ski nights", body: "Winter weekends bring bar traffic from the hill; cover and lines vary." },
      { title: "Downtown pubs", body: "Year-round pubs and dining for locals and tourists." },
    ],
    tips: [
      "Winter roads to the mountains require caution — plan sober rides.",
    ],
  },
  {
    slug: "owen-sound",
    name: "Owen Sound",
    region: "Southwestern Ontario",
    blurb: "Georgian Bay port — harbour pubs and summer festival nights.",
    intro: "Owen Sound’s downtown and harbour host pubs and small venues; summer festivals extend evening activity.",
    categories: [
      { title: "Pubs & harbour", body: "Waterfront and downtown bars for casual nights out." },
    ],
    tips: [
      "Rural driving after dark — use designated drivers.",
    ],
  },
  {
    slug: "brantford",
    name: "Brantford",
    region: "Southwestern Ontario",
    blurb: "Grand River city — downtown bars, university-adjacent nights, and sports crowds.",
    intro: "Brantford’s downtown offers pubs and bars; Laurier Brantford adds student activity. Highway 403 connects to Hamilton and the GTA.",
    categories: [
      { title: "Nightlife & pubs", body: "Downtown clusters host DJ nights and pub crawls on weekends." },
    ],
    tips: [
      "Check campus-area events for extra foot traffic.",
    ],
  },
  {
    slug: "chatham-kent",
    name: "Chatham-Kent",
    region: "Southwestern Ontario",
    blurb: "Municipal region — Chatham downtown pubs and rural fair nights.",
    intro: "Chatham’s downtown concentrates pubs and bars; smaller communities across Chatham-Kent have local bars and legion halls.",
    categories: [
      { title: "Local pubs", body: "Community bars anchor evenings; options are spread across the region." },
    ],
    tips: [
      "Driving between communities is common — plan transport.",
    ],
  },
  {
    slug: "pickering",
    name: "Pickering",
    region: "Greater Toronto",
    blurb: "Durham lakeshore — casino-adjacent entertainment and suburban dining.",
    intro: "Pickering’s evening scene includes waterfront development and casino-related entertainment; many residents also use GO to reach Toronto.",
    categories: [
      { title: "Entertainment & dining", body: "Newer developments add restaurants and lounges; verify hours seasonally." },
    ],
    tips: [
      "GO Transit to Toronto for large club nights is common.",
    ],
  },
  {
    slug: "ajax",
    name: "Ajax",
    region: "Greater Toronto",
    blurb: "Durham suburban — plaza pubs and highway-adjacent dining.",
    intro: "Ajax’s nightlife is primarily neighbourhood pubs and chain restaurants with late hours; Toronto remains the main club destination.",
    categories: [
      { title: "Pubs & sports bars", body: "Plaza and highway-adjacent venues for local crowds." },
    ],
    tips: [
      "GO Train connects to Toronto for late-night options.",
    ],
  },
  {
    slug: "whitby",
    name: "Whitby",
    region: "Greater Toronto",
    blurb: "Durham hub — downtown pubs and Brooklin-area locals.",
    intro: "Whitby mixes downtown pubs with suburban plazas; Oshawa and Toronto are nearby for bigger nights.",
    categories: [
      { title: "Pubs & dining", body: "Downtown strips and plazas host bar nights and patios." },
    ],
    tips: [
      "Highway 401 congestion peaks after events — plan accordingly.",
    ],
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    region: "Greater Toronto",
    blurb: "Yonge Street corridor — plazas, karaoke, and late dining.",
    intro: "Richmond Hill’s nightlife spreads along Yonge and major plazas with karaoke, lounges, and late dining. Downtown Toronto is accessible by transit.",
    categories: [
      { title: "Lounges & late dining", body: "Plaza clusters offer varied formats; hours vary by venue." },
    ],
    tips: [
      "Yonge Street is long — confirm exact plaza or intersection.",
    ],
  },
  {
    slug: "newmarket",
    name: "Newmarket",
    region: "Greater Toronto",
    blurb: "York Region hub — Main Street pubs and suburban plazas.",
    intro: "Newmarket’s Main Street hosts pubs and patios; highway plazas add sports bars and chains.",
    categories: [
      { title: "Pubs & patios", body: "Downtown walkable strips; summer patios are popular." },
    ],
    tips: [
      "GO Transit connects south toward Toronto for large venues.",
    ],
  },
  {
    slug: "aurora",
    name: "Aurora",
    region: "Greater Toronto",
    blurb: "York Region town — neighbourhood pubs and dining.",
    intro: "Aurora’s evening scene is modestly sized with pubs and restaurant lounges; residents often head to Toronto or Vaughan for bigger clubs.",
    categories: [
      { title: "Local pubs", body: "Community bars and dining rooms; quieter weekends than downtown Toronto." },
    ],
    tips: [
      "Winter driving on Highway 404 — check conditions.",
    ],
  },
  {
    slug: "milton",
    name: "Milton",
    region: "Greater Toronto",
    blurb: "Fast-growing town — plazas, sports bars, and GO access.",
    intro: "Milton’s nightlife is growing with plazas and sports bars; many residents commute to Mississauga or Toronto for late nights.",
    categories: [
      { title: "Pubs & chains", body: "Highway-adjacent and plaza venues for local evenings." },
    ],
    tips: [
      "GO Train to Toronto is common for concerts and clubs.",
    ],
  },
  {
    slug: "georgetown",
    name: "Georgetown",
    region: "Greater Toronto",
    blurb: "Halton Hills — historic downtown pubs and rural fair nights.",
    intro: "Georgetown offers a small downtown pub scene within Halton Hills; larger nights out often mean travel to Brampton or Toronto.",
    categories: [
      { title: "Neighbourhood pubs", body: "Local bars and dining; quieter than urban cores." },
    ],
    tips: [
      "GO Transit available via Georgetown station for Toronto trips.",
    ],
  },
  {
    slug: "st-thomas",
    name: "St. Thomas",
    region: "Southwestern Ontario",
    blurb: "Railway city — local pubs and short drives to London.",
    intro: "St. Thomas hosts neighbourhood pubs and bars; London’s nightlife is a short drive away for bigger options.",
    categories: [
      { title: "Local bars", body: "Community pubs and plazas; smaller late-night footprint." },
    ],
    tips: [
      "Country roads at night — use designated drivers.",
    ],
  },
  {
    slug: "woodstock",
    name: "Woodstock",
    region: "Southwestern Ontario",
    blurb: "Oxford County hub — downtown pubs and fair weekends.",
    intro: "Woodstock’s downtown offers pubs and restaurants; county fairs and events occasionally add late nights.",
    categories: [
      { title: "Pubs & dining", body: "Downtown strips and highway plazas for local evenings." },
    ],
    tips: [
      "401 access — plan around truck traffic peaks.",
    ],
  },
  {
    slug: "ingersoll",
    name: "Ingersoll",
    region: "Southwestern Ontario",
    blurb: "Small-town pubs — cheese country and local bar nights.",
    intro: "Ingersoll offers a small set of pubs and community bars; larger nights mean travel to London or Woodstock.",
    categories: [
      { title: "Local pubs", body: "Neighbourhood venues with limited late hours." },
    ],
    tips: [
      "Verify hours — small towns may close early midweek.",
    ],
  },
  {
    slug: "strathroy-caradoc",
    name: "Strathroy-Caradoc",
    region: "Southwestern Ontario",
    blurb: "Rural municipality — Strathroy downtown pubs and county events.",
    intro: "Strathroy anchors local pubs and bars for the area; London is the nearest large nightlife scene.",
    categories: [
      { title: "Community pubs", body: "Small-town bars and legion-style events." },
    ],
    tips: [
      "Driving between communities is typical.",
    ],
  },
  {
    slug: "chatham",
    name: "Chatham",
    region: "Southwestern Ontario",
    blurb: "Kent County seat — downtown bars and plazas.",
    intro: "Chatham’s downtown concentrates pubs and bars; rural Chatham-Kent spreads additional local options.",
    categories: [
      { title: "Downtown nightlife", body: "Pub strips and patios for weekend nights." },
    ],
    tips: [
      "Detroit and Windsor are within driving distance for cross-border nights — plan ID.",
    ],
  },
  {
    slug: "leamington",
    name: "Leamington",
    region: "Southwestern Ontario",
    blurb: "Point Pelee gateway — waterfront pubs and seasonal tourism.",
    intro: "Leamington’s waterfront and downtown host pubs and restaurants; summers bring birding and tourism traffic.",
    categories: [
      { title: "Pubs & dining", body: "Waterfront and downtown bars; seasonal hours." },
    ],
    tips: [
      "Windsor is nearby for larger club nights.",
    ],
  },
  {
    slug: "midland",
    name: "Midland",
    region: "Central Ontario",
    blurb: "Georgian Bay — waterfront patios and summer festivals.",
    intro: "Midland’s harbour area hosts pubs and patios; summer festivals extend evening hours.",
    categories: [
      { title: "Waterfront & pubs", body: "Seasonal patios and local bars." },
    ],
    tips: [
      "Winter nights are quiet — confirm openings.",
    ],
  },
  {
    slug: "penetanguishene",
    name: "Penetanguishene",
    region: "Central Ontario",
    blurb: "Historic bilingual town — harbour pubs and cottage weekends.",
    intro: "Penetanguishene offers small-town pubs and waterfront dining; summer weekends are busiest.",
    categories: [
      { title: "Local pubs", body: "Community bars and dining rooms." },
    ],
    tips: [
      "Combine with nearby Midland for more dining options.",
    ],
  },
  {
    slug: "wasaga-beach",
    name: "Wasaga Beach",
    region: "Central Ontario",
    blurb: "Beach town — summer bar strip and seasonal nightlife.",
    intro: "Wasaga Beach’s summer scene includes beach-adjacent bars and seasonal crowds; off-season is much quieter.",
    categories: [
      { title: "Seasonal bars", body: "Beach-area bars and patios peak in summer; hours shrink in winter." },
    ],
    tips: [
      "Summer long weekends are extremely busy — plan parking and rides.",
    ],
  },
  {
    slug: "parry-sound",
    name: "Parry Sound",
    region: "Central Ontario",
    blurb: "Georgian Bay gateway — harbour pubs and festival summers.",
    intro: "Parry Sound’s downtown and waterfront host pubs and small venues; summer festivals and boating add visitors.",
    categories: [
      { title: "Pubs & harbour", body: "Local bars and dining; quieter winters." },
    ],
    tips: [
      "Moose FM country roads — drive sober, especially at night.",
    ],
  },
  {
    slug: "kenora",
    name: "Kenora",
    region: "Northern Ontario",
    blurb: "Lake of the Woods — waterfront bars and outdoor tourism.",
    intro: "Kenora’s small downtown offers pubs and waterfront dining; summer tourism is peak season.",
    categories: [
      { title: "Waterfront & pubs", body: "Local bars and dining; limited late-night options." },
    ],
    tips: [
      "Remote distances — plan travel and fuel.",
    ],
  },
  {
    slug: "dryden",
    name: "Dryden",
    region: "Northern Ontario",
    blurb: "Northwestern hub — local pubs and regional events.",
    intro: "Dryden’s nightlife is modestly sized with community pubs and bars; regional events occasionally add late nights.",
    categories: [
      { title: "Community bars", body: "Small-town evenings with limited venues." },
    ],
    tips: [
      "Confirm hours — northern towns may close earlier.",
    ],
  },
  {
    slug: "elliot-lake",
    name: "Elliot Lake",
    region: "Northern Ontario",
    blurb: "Retirement and outdoor community — local pubs and legion halls.",
    intro: "Elliot Lake offers a small bar scene focused on community pubs and social clubs; options are limited compared to southern cities.",
    categories: [
      { title: "Local pubs", body: "Neighbourhood venues; quieter evenings." },
    ],
    tips: [
      "Winter driving conditions — plan safe transport.",
    ],
  },
  {
    slug: "temiskaming-shores",
    name: "Temiskaming Shores",
    region: "Northern Ontario",
    blurb: "Haileybury–New Liskeard — bilingual small-town bars and lake tourism.",
    intro: "Temiskaming Shores combines small-town pubs with seasonal tourism along Lake Temiskaming.",
    categories: [
      { title: "Local pubs", body: "Community bars; limited late-night footprint." },
    ],
    tips: [
      "Distances between towns — plan driving.",
    ],
  },
  {
    slug: "pembroke",
    name: "Pembroke",
    region: "Eastern Ontario",
    blurb: "Ottawa Valley — military and forestry town pubs.",
    intro: "Pembroke’s downtown hosts pubs and bars; nearby CFB Petawawa adds community events.",
    categories: [
      { title: "Pubs & bars", body: "Downtown strips and local plazas." },
    ],
    tips: [
      "Ottawa is within driving distance for bigger nights.",
    ],
  },
  {
    slug: "hawkesbury",
    name: "Hawkesbury",
    region: "Eastern Ontario",
    blurb: "Ottawa River border — bilingual pubs and small-town dining.",
    intro: "Hawkesbury offers local pubs and dining; Montreal and Ottawa are reachable for larger nightlife.",
    categories: [
      { title: "Local pubs", body: "Community bars and restaurants." },
    ],
    tips: [
      "Bridge traffic can affect evening plans — check crossings.",
    ],
  },
  {
    slug: "rockland",
    name: "Rockland",
    region: "Eastern Ontario",
    blurb: "Eastern Ottawa suburbs — local pubs en route to the capital.",
    intro: "Rockland has neighbourhood pubs and dining; Ottawa’s nightlife is a short drive away.",
    categories: [
      { title: "Neighbourhood pubs", body: "Local bars and plazas." },
    ],
    tips: [
      "Highway 174/417 to Ottawa for concerts and clubs.",
    ],
  },
  {
    slug: "carleton-place",
    name: "Carleton Place",
    region: "Eastern Ontario",
    blurb: "Mississippi River town — heritage pubs and patio summers.",
    intro: "Carleton Place’s downtown offers pubs and patios; Ottawa is nearby for larger venues.",
    categories: [
      { title: "Pubs & dining", body: "Small-town bars and restaurants." },
    ],
    tips: [
      "Summer patio season is busiest.",
    ],
  },
  {
    slug: "smiths-falls",
    name: "Smiths Falls",
    region: "Eastern Ontario",
    blurb: "Rideau Canal town — heritage pubs and tourism.",
    intro: "Smiths Falls hosts small pubs and dining along the canal; summer boating adds visitors.",
    categories: [
      { title: "Local pubs", body: "Community bars and dining rooms." },
    ],
    tips: [
      "Ottawa is drivable for a full night out.",
    ],
  },
  {
    slug: "brockville",
    name: "Brockville",
    region: "Eastern Ontario",
    blurb: "Thousand Islands — waterfront pubs and casino day-trips.",
    intro: "Brockville’s waterfront and downtown host pubs and patios; nearby Kingston and Ottawa expand options.",
    categories: [
      { title: "Waterfront & downtown", body: "Patios and pubs along the St. Lawrence." },
    ],
    tips: [
      "Casino venues in the region — check hours and transport.",
    ],
  },
  {
    slug: "gananoque",
    name: "Gananoque",
    region: "Eastern Ontario",
    blurb: "1000 Islands gateway — theatre, pubs, and summer tourism.",
    intro: "Gananoque mixes theatre crowds with waterfront pubs; summer tourism peaks.",
    categories: [
      { title: "Theatre & pubs", body: "Pre- and post-show dining and local bars." },
    ],
    tips: [
      "Book dining on show nights.",
    ],
  },
  {
    slug: "perth",
    name: "Perth",
    region: "Eastern Ontario",
    blurb: "Heritage town — pubs, festivals, and quiet evenings.",
    intro: "Perth’s downtown offers pubs and dining; festivals add occasional late nights.",
    categories: [
      { title: "Heritage pubs", body: "Small-town bars and patios." },
    ],
    tips: [
      "Ottawa is the nearest large club scene.",
    ],
  },
  {
    slug: "cobourg",
    name: "Cobourg",
    region: "Eastern Ontario",
    blurb: "Lake Ontario shore — beach events and downtown pubs.",
    intro: "Cobourg’s waterfront and downtown host pubs and summer patios; Toronto is reachable by VIA.",
    categories: [
      { title: "Waterfront & downtown", body: "Patios and local bars; summer events busy." },
    ],
    tips: [
      "401 corridor — plan around traffic.",
    ],
  },
  {
    slug: "port-hope",
    name: "Port Hope",
    region: "Eastern Ontario",
    blurb: "Heritage film-town — dining and pubs.",
    intro: "Port Hope offers dining and pubs in a heritage setting; quieter than Toronto.",
    categories: [
      { title: "Dining & pubs", body: "Restaurant lounges and local bars." },
    ],
    tips: [
      "Toronto is nearby via GO/VIA for big nights.",
    ],
  },
  {
    slug: "bowmanville",
    name: "Bowmanville",
    region: "Greater Toronto",
    blurb: "Clarington hub — downtown pubs and speedway event nights.",
    intro: "Bowmanville hosts local pubs and plazas; motorsport events can spike regional crowds.",
    categories: [
      { title: "Local pubs", body: "Community bars and dining." },
    ],
    tips: [
      "Oshawa and Toronto are nearby for larger venues.",
    ],
  },
  {
    slug: "innisfil",
    name: "Innisfil",
    region: "Central Ontario",
    blurb: "Growing south Simcoe — plazas and cottage-country weekends.",
    intro: "Innisfil spreads across plazas and lake-adjacent pockets; Barrie is minutes north for more nightlife.",
    categories: [
      { title: "Plaza bars", body: "Highway-adjacent pubs and chains." },
    ],
    tips: [
      "Highway 400 traffic to Barrie — buffer time.",
    ],
  },
  {
    slug: "orangeville",
    name: "Orangeville",
    region: "Greater Toronto",
    blurb: "Headwaters hills — pubs, theatre, and weekend dining.",
    intro: "Orangeville’s downtown hosts pubs and theatres; GTA is reachable for club nights.",
    categories: [
      { title: "Pubs & dining", body: "Downtown strips and local plazas." },
    ],
    tips: [
      "Rural roads at night — drive carefully.",
    ],
  },
  {
    slug: "alliston",
    name: "Alliston",
    region: "Central Ontario",
    blurb: "New Tecumseth — small-town pubs and fairgrounds events.",
    intro: "Alliston offers local pubs and community bars; Barrie is nearby.",
    categories: [
      { title: "Local pubs", body: "Community bars and dining." },
    ],
    tips: [
      "Verify hours on small-town weeknights.",
    ],
  },
  {
    slug: "bracebridge",
    name: "Bracebridge",
    region: "Central Ontario",
    blurb: "Muskoka — cottage-country pubs and summer patios.",
    intro: "Bracebridge’s downtown hosts pubs and dining; summer cottagers fill patios.",
    categories: [
      { title: "Pubs & patios", body: "Seasonal nightlife; quieter winters." },
    ],
    tips: [
      "Winter roads to the cottage — sober driving essential.",
    ],
  },
  {
    slug: "huntsville",
    name: "Huntsville",
    region: "Central Ontario",
    blurb: "Muskoka hub — pubs, festivals, and lake tourism.",
    intro: "Huntsville mixes downtown pubs with festival weekends; summer and fall are busiest.",
    categories: [
      { title: "Pubs & events", body: "Local bars and seasonal festivals." },
    ],
    tips: [
      "Algonquin-bound traffic can affect summer weekends.",
    ],
  },
  {
    slug: "gravenhurst",
    name: "Gravenhurst",
    region: "Central Ontario",
    blurb: "Gateway to Muskoka — steamship docks and heritage pubs.",
    intro: "Gravenhurst offers waterfront dining and pubs; summer tourism peaks.",
    categories: [
      { title: "Waterfront & pubs", body: "Seasonal patios and local bars." },
    ],
    tips: [
      "Winter nights are very quiet — call ahead.",
    ],
  },
  {
    slug: "north-york",
    name: "North York",
    region: "Greater Toronto",
    blurb: "Former borough — Yonge Street lounges, plazas, and Toronto-adjacent venues.",
    intro: "North York functions as part of Toronto’s urban fabric: Yonge Street north, Finch-adjacent plazas, and pockets of karaoke and late dining. It is not a separate municipality but remains a common geographic label.",
    categories: [
      { title: "Lounges & late dining", body: "Yonge corridor and plazas host varied formats; many listings are Toronto-licensed." },
      { title: "Access to Toronto core", body: "TTC and GO connect to downtown clubs and concert venues." },
    ],
    tips: [
      "Addresses may read Toronto, ON — North York is a neighbourhood name within the city.",
    ],
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    region: "Greater Toronto",
    blurb: "Toronto west — lakeshore bars, The Queensway lounges, and plaza nightlife.",
    intro: "Etobicoke is part of Toronto: lakeshore pubs, suburban plazas, and highway-adjacent chains. Downtown Toronto is accessible by TTC and GO.",
    categories: [
      { title: "Pubs & plazas", body: "Queensway and Lakeshore strips mix chains and independents." },
      { title: "Toronto core", body: "Short transit to downtown clubs and live music." },
    ],
    tips: [
      "Verify whether a venue is Toronto-licensed (city) vs Peel/York — addresses matter.",
    ],
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    region: "Greater Toronto",
    blurb: "Toronto east — plaza karaoke, late dining, and Bluffs-adjacent locals.",
    intro: "Scarborough is part of Toronto: dense plazas with late dining, karaoke, and neighbourhood pubs. Many visitors head downtown for large clubs.",
    categories: [
      { title: "Late dining & lounges", body: "Plaza clusters along major arterials; hours vary." },
      { title: "Downtown Toronto", body: "TTC connects to the Entertainment District and concert venues." },
    ],
    tips: [
      "Parking in plazas is easier than downtown — still plan sober rides.",
    ],
  },
];
