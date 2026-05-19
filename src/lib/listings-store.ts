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

const KEY = "albstays-vacation-v1";

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
      "Bright vacation apartment with a balcony overlooking the Ionian Sea. Walking distance to the promenade, beach bars and the old port. Perfect for a sunny week by the sea.",
    contact: "+355 69 123 4567",
    nearSea: true,
    nearCenter: true,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
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
      "Luxury vacation villa steps from the turquoise beaches of Ksamil. Private terrace, BBQ area and direct sea views. Ideal for families or groups of friends.",
    contact: "+355 69 999 1122",
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80",
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
      "Traditional stone vacation house in the Albanian Alps. Ideal for hikers — close to the Blue Eye of Theth and the Valbona trail. Wake up to alpine views every morning.",
    contact: "+355 67 555 7788",
    nearMountain: true,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
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
      "Cozy vacation bungalow perched above Dhërmi beach with panoramic Ionian views. Steps from beach clubs and crystal-clear coves.",
    contact: "+355 68 222 4567",
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
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
      "Charming vacation apartment in the UNESCO Old Town of Berat. Stone walls, wooden ceilings and a view of the castle. Surrounded by mountains and vineyards.",
    contact: "+355 69 777 8899",
    nearCenter: true,
    nearMountain: true,
    image:
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&q=80",
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
      "Wooden chalet deep in the Valbona Valley. Surrounded by pine forests and dramatic peaks — perfect for trekking the Theth–Valbona pass.",
    contact: "+355 67 444 1212",
    nearMountain: true,
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80",
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
      "Modern vacation villa overlooking Livadhi beach. Private pool, large terrace and a short walk to one of the cleanest beaches of the Albanian Riviera.",
    contact: "+355 69 321 8888",
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
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
      "Quiet vacation cabin inside Llogara pine forest, just 20 minutes from the Riviera beaches. Perfect for travelers who want both mountain air and sea swims.",
    contact: "+355 68 909 1010",
    nearMountain: true,
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
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
      "Family vacation house on the longest beach of the Albanian Riviera. Olive groves at the back, turquoise sea at the front.",
    contact: "+355 69 654 3210",
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
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
      "Restored Ottoman stone villa in the UNESCO city of Gjirokastër. Surrounded by mountains, a perfect base for exploring southern Albania.",
    contact: "+355 67 112 2334",
    nearMountain: true,
    nearCenter: true,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
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
      "Sunny vacation apartment by the sand dunes of Rana e Hedhun. Family-friendly beach with shallow waters and many restaurants.",
    contact: "+355 68 770 9988",
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
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
      "Wooden chalet in the highlands above Korçë. Pine forests, frescoed churches and snowy winters — a peaceful mountain getaway year-round.",
    contact: "+355 69 558 4422",
    nearMountain: true,
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=1200&q=80",
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
