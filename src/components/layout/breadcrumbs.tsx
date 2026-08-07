import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { NAV_TITLES } from "@/config/navigation";

export function Breadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = NAV_TITLES[pathname];

  return (
    <div className="flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground">
      <Link
        to="/"
        className="flex items-center gap-1.5 transition-colors hover:text-gold"
        aria-label="Início"
      >
        <Home className="size-3.5" />
        <span className="hidden sm:inline">Início</span>
      </Link>
      {pathname !== "/" && (
        <>
          <ChevronRight className="size-3.5 shrink-0 opacity-50" />
          <span className="truncate font-medium text-foreground">{current ?? "Página"}</span>
        </>
      )}
    </div>
  );
}
