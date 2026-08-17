import { useNavigate } from "@tanstack/react-router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { NAV_ITEMS } from "@/config/navigation";
import { TOOLS } from "@/data/tools";
import { TEAM } from "@/data/team";

export function GlobalSearch({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const navigate = useNavigate();

  const go = (to: string) => {
    onOpenChange(false);
    void navigate({ to });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Buscar páginas, ferramentas, pessoas..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

        <CommandGroup heading="Páginas">
          {NAV_ITEMS.map((item) => (
            <CommandItem key={item.to} value={`${item.title} ${item.description}`} onSelect={() => go(item.to)}>
              <item.icon className="size-4 text-gold" />
              <span>{item.title}</span>
              <span className="ml-auto truncate text-xs text-muted-foreground">
                {item.description}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Ferramentas">
          {TOOLS.map((tool) => (
            <CommandItem key={tool.id} value={`ferramenta ${tool.name}`} onSelect={() => go("/ferramentas")}>
              <tool.icon className="size-4 text-gold" />
              <span>{tool.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Time">
          {TEAM.map((m) => (
            <CommandItem key={m.id} value={`time ${m.name} ${m.role}`} onSelect={() => go("/time")}>
              <span>{m.name}</span>
              <span className="ml-auto text-xs text-muted-foreground">{m.role}</span>
            </CommandItem>
          ))}
        </CommandGroup>

      </CommandList>
    </CommandDialog>
  );
}
