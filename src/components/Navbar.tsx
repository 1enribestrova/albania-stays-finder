import { Link } from "@tanstack/react-router";
import { Home, List, Plus, Sparkles, MapPin } from "lucide-react";

export function Navbar() {
  const linkCls =
    "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors";
  const activeCls = "!text-primary !bg-primary/10";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display text-lg font-bold leading-none">Stay Albania</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Rentals & Stays
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          <Link to="/" activeOptions={{ exact: true }} className={linkCls} activeProps={{ className: activeCls }}>
            <Home className="h-4 w-4" /> <span className="hidden sm:inline">Home</span>
          </Link>
          <Link to="/listings" className={linkCls} activeProps={{ className: activeCls }}>
            <List className="h-4 w-4" /> <span className="hidden sm:inline">Listings</span>
          </Link>
          <Link to="/add" className={linkCls} activeProps={{ className: activeCls }}>
            <Plus className="h-4 w-4" /> <span className="hidden sm:inline">Add</span>
          </Link>
          <Link to="/chat" className={linkCls} activeProps={{ className: activeCls }}>
            <Sparkles className="h-4 w-4" /> <span className="hidden sm:inline">AI Assistant</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
