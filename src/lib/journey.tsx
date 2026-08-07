import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type JourneyStepId =
  | "febracis"
  | "cultura"
  | "time"
  | "ferramentas"
  | "processos"
  | "primeiro-dia";

export const JOURNEY_STEPS: { id: JourneyStepId; label: string; to: string }[] = [
  { id: "febracis", label: "Conheceu a Febracis", to: "/febracis" },
  { id: "cultura", label: "Conheceu a Cultura", to: "/cultura" },
  { id: "time", label: "Conheceu o Time", to: "/time" },
  { id: "ferramentas", label: "Explorou Ferramentas", to: "/ferramentas" },
  { id: "processos", label: "Entendeu os Processos", to: "/processos" },
  { id: "primeiro-dia", label: "Finalizou o Primeiro Dia", to: "/primeiro-dia" },
];

const STORAGE_KEY = "febracis-jornada-v1";

type Stored = {
  steps: JourneyStepId[];
  checklist: string[];
};

type JourneyContextValue = {
  completed: JourneyStepId[];
  isCompleted: (id: JourneyStepId) => boolean;
  complete: (id: JourneyStepId) => void;
  progress: number;
  finished: boolean;
  checklist: string[];
  toggleChecklist: (id: string) => void;
  reset: () => void;
  hydrated: boolean;
};

const JourneyContext = createContext<JourneyContextValue | null>(null);

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<JourneyStepId[]>([]);
  const [checklist, setChecklist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Stored;
        setCompleted(Array.isArray(parsed.steps) ? parsed.steps : []);
        setChecklist(Array.isArray(parsed.checklist) ? parsed.checklist : []);
      }
    } catch {
      /* estado local indisponível */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ steps: completed, checklist }));
    } catch {
      /* ignore */
    }
  }, [completed, checklist, hydrated]);

  const complete = useCallback((id: JourneyStepId) => {
    setCompleted((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const toggleChecklist = useCallback((id: string) => {
    setChecklist((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  }, []);

  const reset = useCallback(() => {
    setCompleted([]);
    setChecklist([]);
  }, []);

  const value = useMemo<JourneyContextValue>(() => {
    const valid = completed.filter((id) => JOURNEY_STEPS.some((s) => s.id === id));
    return {
      completed: valid,
      isCompleted: (id) => valid.includes(id),
      complete,
      progress: Math.round((valid.length / JOURNEY_STEPS.length) * 100),
      finished: valid.length === JOURNEY_STEPS.length,
      checklist,
      toggleChecklist,
      reset,
      hydrated,
    };
  }, [completed, checklist, complete, toggleChecklist, reset, hydrated]);

  return <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>;
}

export function useJourney() {
  const ctx = useContext(JourneyContext);
  if (!ctx) throw new Error("useJourney deve ser usado dentro de JourneyProvider");
  return ctx;
}

/** Marca automaticamente uma etapa como concluída ao visitar a página. */
export function useJourneyVisit(id: JourneyStepId) {
  const { complete, hydrated } = useJourney();
  useEffect(() => {
    if (!hydrated) return;
    const timer = window.setTimeout(() => complete(id), 900);
    return () => window.clearTimeout(timer);
  }, [complete, id, hydrated]);
}
