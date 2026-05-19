export type Listing = {
  id: string;
  title: string;
  price: number;
  area: string; // city / region
  address: string;
  rooms: number;
  type: "Apartment" | "House" | "Studio" | "Villa" | "Room";
  available: boolean;
  description: string;
  contact: string;
  nearSea?: boolean;
  nearMountain?: boolean;
  nearCenter?: boolean;
  image?: string;
};

const KEY = "albania-rentals-v1";

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
      "Bright modern apartment with a balcony overlooking the Ionian Sea. Walking distance to the promenade, cafes and the old port.",
    contact: "+355 69 123 4567",
    nearSea: true,
    nearCenter: true,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
  },
  {
    id: "2",
    title: "Cozy Studio near Skanderbeg Square",
    price: 40,
    area: "Tirana",
    address: "Rruga e Durrësit, Tirana, Albania",
    rooms: 1,
    type: "Studio",
    available: true,
    description:
      "Perfect for students or solo travelers. In the heart of Tirana, close to Skanderbeg Square, Blloku nightlife and public transport.",
    contact: "+355 68 222 3344",
    nearCenter: true,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
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
      "Traditional stone house in the Albanian Alps. Ideal for hikers — close to Blue Eye of Theth and Valbona trail.",
    contact: "+355 67 555 7788",
    nearMountain: true,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
  },
  {
    id: "4",
    title: "Beachfront Villa in Ksamil",
    price: 180,
    area: "Ksamil",
    address: "Ksamil Islands Road, Ksamil, Albania",
    rooms: 4,
    type: "Villa",
    available: true,
    description:
      "Luxury villa steps from the turquoise beaches of Ksamil. Private terrace, BBQ area and sea views.",
    contact: "+355 69 999 1122",
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80",
  },
  {
    id: "5",
    title: "Student Room in Vlorë",
    price: 25,
    area: "Vlorë",
    address: "Rruga Sadik Zotaj, Vlorë, Albania",
    rooms: 1,
    type: "Room",
    available: true,
    description:
      "Affordable private room near the University of Vlorë. Shared kitchen and Wi-Fi included.",
    contact: "+355 68 444 1212",
    nearCenter: true,
    nearSea: true,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
  },
  {
    id: "6",
    title: "Old Town Apartment in Berat",
    price: 50,
    area: "Berat",
    address: "Mangalem Quarter, Berat, Albania",
    rooms: 2,
    type: "Apartment",
    available: true,
    description:
      "Charming apartment in the UNESCO Old Town of Berat. Stone walls, wooden ceilings and a view of the castle.",
    contact: "+355 69 777 8899",
    nearCenter: true,
    nearMountain: true,
    image:
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&q=80",
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
