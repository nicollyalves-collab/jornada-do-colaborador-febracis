import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, GraduationCap } from "lucide-react";
import { NAV_ITEMS } from "@/config/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { JourneyBar } from "@/components/layout/journey-bar";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { GlobalSearch } from "@/components/layout/global-search";

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3 px-5 py-6">
      <span className="grid size-10 place-items-center rounded-xl border border-gold/40 bg-gold/10">
        <GraduationCap className="size-5 text-gold" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-sm font-semibold tracking-wide text-foreground">
          Jornada do Colaborador
        </span>
        <span className="block text-[11px] uppercase tracking-[0.18em] text-gold/80">
          Holding Febracis
        </span>
      </span>
    </Link>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="flex flex-col gap-1 px-3 pb-8">
      <p className="px-3 pb-2 pt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Navegação
      </p>
      {NAV_ITEMS.map((item) => {
        const active = pathname === item.to;
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={cn(
              "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-300",
              active
                ? "bg-sidebar-accent text-foreground"
                : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
            )}
          >
            <span
              className={cn(
                "absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full bg-gold transition-opacity duration-300",
                active ? "opacity-100" : "opacity-0",
              )}
            />
            <item.icon
              className={cn(
                "size-4 shrink-0 transition-colors",
                active ? "text-gold" : "text-muted-foreground group-hover:text-gold",
              )}
            />
            <span className="truncate">{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Sidebar fixa — desktop */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[var(--app-sidebar-width)] flex-col border-r border-sidebar-border bg-sidebar lg:flex">
        <Brand />
        <div className="mx-5 mb-2 border-t border-sidebar-border" />
        <div className="flex-1 overflow-y-auto">
          <NavList />
        </div>
        <div className="border-t border-sidebar-border px-5 py-4 text-[11px] text-muted-foreground">
          Setor Pedagógico · Onboarding interno
        </div>
      </aside>

      <div className="lg:pl-[var(--app-sidebar-width)]">
        <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur-xl">
          <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold lg:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="size-4" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-sidebar p-0">
                <Brand />
                <div className="mx-5 mb-2 border-t border-sidebar-border" />
                <div className="overflow-y-auto">
                  <NavList onNavigate={() => setMobileOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>

            <Breadcrumbs />

            <button
              onClick={() => setSearchOpen(true)}
              className="ml-auto flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-2 text-xs text-muted-foreground transition-all duration-300 hover:border-gold/50 hover:text-foreground"
            >
              <Search className="size-3.5" />
              <span className="hidden sm:inline">Pesquisa global</span>
              <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-[10px] md:inline">
                ⌘K
              </kbd>
            </button>
          </div>
          <div className="px-4 pb-4 sm:px-6">
            <JourneyBar />
          </div>
        </header>

        <main key={pathname} className="reveal px-4 pb-20 pt-8 sm:px-6 lg:px-10">
          {children}
        </main>
      </div>

      <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
