import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, GraduationCap, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { NAV_ITEMS } from "@/config/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { GlobalSearch } from "@/components/layout/global-search";

function Brand({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-3 py-5", collapsed ? "justify-center px-0" : "px-5")}
      aria-label="Jornada do Colaborador"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-gold/40 bg-gold/10">
        <GraduationCap className="size-4.5 text-gold" />
      </span>
      {!collapsed && (
        <span className="leading-tight">
          <span className="block font-display text-sm font-semibold tracking-wide">
            Jornada do Colaborador
          </span>
          <span className="block text-[10px] uppercase tracking-[0.18em] text-gold/80">
            Holding Febracis
          </span>
        </span>
      )}
    </Link>
  );
}

function NavList({
  collapsed = false,
  onNavigate,
}: {
  collapsed?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className={cn("flex flex-col gap-0.5 pb-6", collapsed ? "px-2" : "px-3")}>
      {NAV_ITEMS.map((item) => {
        const active = pathname === item.to;
        const link = (
          <Link
            to={item.to}
onClick={(event) => {
  const quizInProgress =
    sessionStorage.getItem("quizInProgress") === "true";

  if (quizInProgress && item.to !== "/primeiro-dia") {
    event.preventDefault();
    alert("Finalize a avaliação antes de acessar outras áreas.");
    return;
  }

  onNavigate?.();
}}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group flex items-center rounded-lg text-sm transition-colors duration-200",
              collapsed ? "justify-center px-0 py-2.5" : "gap-3 px-3 py-2.5",
              active
                ? "bg-sidebar-accent/70 text-foreground"
                : "text-muted-foreground hover:bg-sidebar-accent/40 hover:text-foreground",
            )}
          >
            <item.icon
              className={cn(
                "size-4 shrink-0 transition-colors",
                active ? "text-gold" : "group-hover:text-gold",
              )}
            />
            {!collapsed && <span className="truncate">{item.title}</span>}
          </Link>
        );

        return (
          <div key={item.to}>
            {collapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>{link}</TooltipTrigger>
                <TooltipContent side="right">{item.title}</TooltipContent>
              </Tooltip>
            ) : (
              link
            )}
          </div>
        );
      })}
    </nav>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <TooltipProvider delayDuration={120}>
      <div className="min-h-screen w-full bg-background">
        <aside
          className="fixed inset-y-0 left-0 z-40 hidden flex-col border-r border-sidebar-border bg-sidebar transition-[width] duration-300 ease-out lg:flex"
          style={{ width: collapsed ? "4.5rem" : "16rem" }}
        >
          <Brand collapsed={collapsed} />
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <NavList collapsed={collapsed} />
          </div>
          <div
            className={cn(
              "flex items-center border-t border-sidebar-border px-3 py-3",
              collapsed ? "justify-center" : "justify-between",
            )}
          >
            {!collapsed && (
              <span className="pl-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Setor Pedagógico
              </span>
            )}
            <button
              onClick={() => setCollapsed((v) => !v)}
              aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
              className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-sidebar-accent/50 hover:text-gold"
            >
              {collapsed ? (
                <PanelLeftOpen className="size-4" />
              ) : (
                <PanelLeftClose className="size-4" />
              )}
            </button>
          </div>
        </aside>

        <div
          className="lg:pl-[var(--shell-pad)] lg:transition-[padding-left] lg:duration-300 lg:ease-out"
          style={{ "--shell-pad": collapsed ? "4.5rem" : "16rem" } as React.CSSProperties}
        >
          <div>

              <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-xl">
                <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
                  <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                    <SheetTrigger
                      className="grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-gold lg:hidden"
                      aria-label="Abrir menu"
                    >
                      <Menu className="size-4" />
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[280px] bg-sidebar p-0">
                      <Brand />
                      <div className="overflow-y-auto">
                        <NavList onNavigate={() => setMobileOpen(false)} />
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Breadcrumbs />

                  <button
                    onClick={() => setSearchOpen(true)}
                    className="ml-auto flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-muted-foreground transition-colors hover:text-gold"
                  >
                    <Search className="size-3.5" />
                    <span className="hidden sm:inline">Pesquisar</span>
                  </button>
                </div>
              </header>

              <main key={pathname} className="reveal px-4 pb-20 pt-8 sm:px-6 lg:px-10">
                {children}
              </main>
          </div>
        </div>


        <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />
      </div>
    </TooltipProvider>
  );
}
