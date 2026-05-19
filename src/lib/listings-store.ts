export type Listing = {
  id: string;
  title: string;
  price: number;
  area: string; // city / region
  address: string;
  rooms: number;
  type: "Apartment" | "House" | "Villa" | "Bungalow" | "Cabin" | "Chalet";
  available: boolean;
  description: string;
  contact: string;
  nearSea?: boolean;
  nearMountain?: boolean;
  nearCenter?: boolean;
  image?: string;
};

const KEY = "albstays-vacation-v3";

const seed: Listing[] = [
  {
    id: "1",
    title: "Seaside Apartment in Sarandë",
    price: 65,
    area: "Sarandë",
    address: "Rruga Butrinti, Sarandë, Albania",
    rooms: 2,
    type: "Apartment",
    available: true,
    description:
      "Bright vacation apartment on the seafront of Sarandë with a private balcony overlooking the Ionian Sea and the island of Corfu on the horizon.\n\nThe apartment features two bedrooms, a fully equipped kitchen, air conditioning and fast Wi-Fi. You are a 2-minute walk from the famous Sarandë promenade, lined with cafés, gelato shops and seafood restaurants, and only 15 minutes by car from the UNESCO archaeological park of Butrint.\n\nIdeal for couples or small families looking for a relaxed beach holiday with everything within walking distance.",
    contact: "+355 69 123 4567",
    nearSea: true,
    nearCenter: true,
    image:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=80",
  },
  {
    id: "2",
    title: "Beachfront Villa in Ksamil",
    price: 180,
    area: "Ksamil",
    address: "Ksamil Islands Road, Ksamil, Albania",
    rooms: 4,
    type: "Villa",
    available: true,
    description:
      "Luxury beachfront villa just steps from the turquoise waters of Ksamil, often called the Maldives of Europe.\n\nThe villa has 4 bedrooms, 3 bathrooms, a spacious open living area and a large terrace with sunbeds, BBQ and outdoor dining for 8. Private parking, fast Wi-Fi and air conditioning in every room.\n\nKayaks to paddle out to the Ksamil islands, beach clubs and seafood taverns are all within a 5-minute walk. A perfect summer base for families or groups of friends.",
    contact: "+355 69 999 1122",
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
  },
  {
    id: "3",
    title: "Mountain House in Theth",
    price: 55,
    area: "Theth",
    address: "Theth National Park, Shkodër, Albania",
    rooms: 3,
    type: "House",
    available: true,
    description:
      "Authentic stone-and-wood house deep in the Albanian Alps, surrounded by the dramatic peaks of Theth National Park.\n\nThree cozy bedrooms with handmade quilts, a wood stove in the living room and a covered porch with mountain views. Home-cooked traditional meals can be arranged with the local hosts on request.\n\nThe famous Blue Eye of Theth, the Grunas waterfall and the legendary Theth–Valbona hiking trail all start within walking distance. The perfect retreat for hikers, photographers and anyone craving silence and clean mountain air.",
    contact: "+355 67 555 7788",
    nearMountain: true,
    image:
      "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1200&q=80",
  },
  {
    id: "4",
    title: "Cliffside Bungalow in Dhërmi",
    price: 90,
    area: "Dhërmi",
    address: "Dhërmi Beach, Himarë, Albania",
    rooms: 2,
    type: "Bungalow",
    available: true,
    description:
      "Cliffside bungalow perched right above Dhërmi beach, one of the most beautiful spots on the Albanian Riviera, with uninterrupted panoramic views of the Ionian Sea.\n\nTwo bedrooms, a small kitchenette and a private terrace with hammock — perfect for sunset aperitifs. Air conditioning, hot water and Wi-Fi included.\n\nIconic beach clubs such as Folie Marine, Havana and Sunset Beach are a short walk down the path, and hidden coves like Gjipe and Jali are only minutes away by car or boat.",
    contact: "+355 68 222 4567",
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
  },
  {
    id: "5",
    title: "Old Town Apartment in Berat",
    price: 50,
    area: "Berat",
    address: "Mangalem Quarter, Berat, Albania",
    rooms: 2,
    type: "Apartment",
    available: true,
    description:
      "Charming vacation apartment inside a 200-year-old Ottoman house in the famous Mangalem quarter of Berat — the UNESCO 'City of a Thousand Windows'.\n\nTwo bedrooms, exposed stone walls, hand-carved wooden ceilings and a small balcony with a direct view of Berat Castle illuminated at night. Modern bathroom, fast Wi-Fi and a Nespresso machine.\n\nA short walk takes you to the Gorica bridge, the bazaar, wine bars and Onufri's icon museum. Surrounded by mountains and vineyards, it is also a great base for day trips to Osum Canyon.",
    contact: "+355 69 777 8899",
    nearCenter: true,
    nearMountain: true,
    image:
      "https://images.unsplash.com/photo-1601564921647-b446839a013f?w=1200&q=80",
  },
  {
    id: "6",
    title: "Alpine Chalet in Valbona",
    price: 75,
    area: "Valbona",
    address: "Valbona Valley National Park, Tropojë, Albania",
    rooms: 3,
    type: "Chalet",
    available: true,
    description:
      "Traditional wooden chalet in the heart of Valbona Valley National Park, surrounded by pine forests and dramatic limestone peaks.\n\nThree bedrooms sleeping up to 7, a large fireplace, hot showers and a wraparound balcony with sunrise mountain views. Hearty breakfasts with homemade jam, byrek and mountain tea included.\n\nThe trailhead for the famous Theth–Valbona pass is a 10-minute walk away. In winter the valley turns into a snowy paradise perfect for snowshoeing.",
    contact: "+355 67 444 1212",
    nearMountain: true,
    image:
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&q=80",
  },
  {
    id: "7",
    title: "Seaview Villa in Himarë",
    price: 140,
    area: "Himarë",
    address: "Livadhi Beach Road, Himarë, Albania",
    rooms: 4,
    type: "Villa",
    available: true,
    description:
      "Modern designer villa on the hills above Livadhi beach in Himarë, with floor-to-ceiling windows facing the Ionian Sea.\n\nFour en-suite bedrooms, a fully equipped kitchen, a private infinity pool and a large sun deck. Air conditioning, smart TV, fast Wi-Fi and parking for two cars.\n\nLivadhi is famous for its clean, calm waters and beachfront fish taverns — a 5-minute walk down the path. Himarë town centre and Spile beach are 4 km away.",
    contact: "+355 69 321 8888",
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80",
  },
  {
    id: "8",
    title: "Llogara Mountain Cabin",
    price: 60,
    area: "Llogara",
    address: "Llogara National Park, Vlorë, Albania",
    rooms: 2,
    type: "Cabin",
    available: true,
    description:
      "Wooden cabin hidden inside the pine forest of Llogara National Park, perched at 1,000 metres above sea level with cool air even in August.\n\nTwo bedrooms, a small kitchen, fireplace and a porch overlooking the Llogara pass — one of the most spectacular roads in Europe.\n\nThe magical bit: in just 20 minutes by car you descend to the Riviera beaches of Dhërmi and Palasa, so you can swim in the morning and sleep in the mountains. Hiking trails, paragliding launch and traditional taverns are within walking distance.",
    contact: "+355 68 909 1010",
    nearMountain: true,
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1200&q=80",
  },
  {
    id: "9",
    title: "Beach House in Borsh",
    price: 85,
    area: "Borsh",
    address: "Borsh Beach, Lukovë, Albania",
    rooms: 3,
    type: "House",
    available: true,
    description:
      "Family-friendly beach house directly on Borsh, the longest and one of the most pristine beaches of the Albanian Riviera.\n\nThree bedrooms (sleeps 6), a covered terrace shaded by olive trees, outdoor shower and BBQ. Air conditioning and a well-stocked kitchen. Bikes available for guests.\n\nThe pebble-and-sand beach with turquoise water is literally across the road. The area is famous for olive oil, citrus groves and the medieval Borsh Castle on the hill above.",
    contact: "+355 69 654 3210",
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80",
  },
  {
    id: "10",
    title: "Stone Villa in Gjirokastër",
    price: 95,
    area: "Gjirokastër",
    address: "Old Bazaar, Gjirokastër, Albania",
    rooms: 3,
    type: "Villa",
    available: true,
    description:
      "Beautifully restored 19th-century stone villa in the UNESCO-protected old bazaar of Gjirokastër, the 'City of Stone'.\n\nThree spacious bedrooms with original wooden ceilings, two bathrooms, a cozy reading nook and a small courtyard with lemon trees. Air conditioning, underfloor heating in winter and a Nespresso machine.\n\nGjirokastër Castle, the Cold War tunnel, the ethnographic museum and the famous qifqi restaurants are all within a 5-minute walk. A perfect base for exploring the Drino Valley, Blue Eye of Muzinë and Antigonea archaeological park.",
    contact: "+355 67 112 2334",
    nearMountain: true,
    nearCenter: true,
    image:
      "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?w=1200&q=80",
  },
  {
    id: "11",
    title: "Seafront Apartment in Shëngjin",
    price: 55,
    area: "Shëngjin",
    address: "Rana e Hedhun, Shëngjin, Lezhë, Albania",
    rooms: 2,
    type: "Apartment",
    available: true,
    description:
      "Sunny vacation apartment by the sand dunes of Rana e Hedhun. Family-friendly beach with shallow waters.",
    contact: "+355 68 770 9988",
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
  },
  {
    id: "12",
    title: "Lakeside Chalet in Voskopojë",
    price: 70,
    area: "Voskopojë",
    address: "Voskopojë, Korçë, Albania",
    rooms: 3,
    type: "Chalet",
    available: true,
    description:
      "Wooden chalet in the highlands above Korçë. Pine forests, frescoed churches and snowy winters.",
    contact: "+355 69 558 4422",
    nearMountain: true,
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
  },
];

function read(): Listing[] {
  if (typeof window === "undefined") return seed;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      localStorage.setItem(KEY, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw) as Listing[];
  } catch {
    return seed;
  }
}

function write(list: Listing[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("listings:changed"));
}

export const listingsStore = {
  getAll: () => read(),
  get: (id: string) => read().find((l) => l.id === id),
  create: (data: Omit<Listing, "id">) => {
    const list = read();
    const item: Listing = { ...data, id: crypto.randomUUID() };
    write([item, ...list]);
    return item;
  },
  update: (id: string, data: Partial<Listing>) => {
    const list = read().map((l) => (l.id === id ? { ...l, ...data } : l));
    write(list);
  },
  remove: (id: string) => {
    write(read().filter((l) => l.id !== id));
  },
  reset: () => {
    if (typeof window !== "undefined") localStorage.removeItem(KEY);
    write(seed);
  },
};
