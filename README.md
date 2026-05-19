# Stay Albania 🇦🇱

A complete React platform for finding rentals across Albania — apartments, villas, mountain houses and student rooms — with Google Maps locations and an AI Chat Assistant.

## Project goal

Final React course project. Demonstrates components, props, state, hooks, routing, forms, CRUD, and API integration in a single real-world app.

## Features

- 🏠 Browse rental listings across Albania (Tirana, Sarandë, Ksamil, Theth, Vlorë, Berat…)
- 🔎 Search & filter by area, type, price and keyword
- ➕ Full CRUD — create, read, update and delete listings
- 🗺️ Google Maps location on every listing
- 🤖 AI Assistant — tell it your budget & vibe ("near sea, €60") and it recommends matches
- 💾 Data persisted in **localStorage** with seeded demo data
- 📱 Responsive, clean Albanian-themed UI

## Technologies

- **React 19** + **TypeScript**
- **TanStack Start / Router** for file-based routing & SSR-ready server routes
- **Tailwind CSS v4** with a custom design system (`src/styles.css`)
- **AI SDK** + Lovable AI Gateway (Gemini) for the chat assistant
- **Google Maps** embed for property locations
- **localStorage** as the data store

## Project structure

```
src/
├── components/      # Navbar, ListingCard, ListingForm, SearchFilters, MapSection, ChatAssistant
├── routes/          # File-based pages: /, /listings, /listings/$id, /add, /edit/$id, /chat
│   └── api/chat.ts  # Server route — calls Lovable AI gateway
├── hooks/           # use-listings (reactive store hook)
├── lib/             # listings-store (CRUD on localStorage), ai-gateway helper
└── styles.css       # Design tokens
```

## Pages / Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | HomePage | Hero, featured stays, feature highlights |
| `/listings` | ListingsPage | Full catalog with search & filters |
| `/listings/$id` | ListingDetails | Full info + Google Map + edit/delete |
| `/add` | AddListingPage | Form to publish a new rental |
| `/edit/$id` | EditListingPage | Edit existing rental |
| `/chat` | ChatPage | AI Assistant chatbot |

## Installation

```bash
bun install   # or: npm install
bun dev       # or: npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

## How the AI works

The user message + the current catalog (from localStorage) is sent to `/api/chat` (a TanStack Start server route). The server builds a prompt and calls the Lovable AI Gateway (Google Gemini). The model recommends only listings that exist in the catalog, explaining why each matches the user's budget and preferences.

## React concepts demonstrated

- **Components** — 8+ reusable components
- **Props** — typed props on every component
- **State** — `useState` for forms, filters, chat
- **Hooks** — `useEffect`, custom `useListings`
- **Routing** — TanStack Router with dynamic `$id` params
- **Forms** — controlled inputs in `ListingForm` & `ChatAssistant`
- **API integration** — Lovable AI Gateway + Google Maps embed
- **CRUD** — full create/read/update/delete on listings
- **Code organization** — clear separation of pages, components, hooks and lib
