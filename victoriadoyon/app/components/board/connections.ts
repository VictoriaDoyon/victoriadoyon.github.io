import { Experience, FocusAreas, ResearchInterests, ResearchPublications } from "@/app/data";

export interface Connection {
    id: string;
    from: string;
    to: string;
    kind: "root" | "branch" | "cross";
}

// Relationships are independent of layout. Primary parents precede their children;
// cross-links can join any two cards without affecting reveal order.
export const connections: Connection[] = [
    { id: "hero-consulting", from: "hero", to: "consulting", kind: "root" },
    { id: "hero-research", from: "hero", to: "research", kind: "root" },
    ...FocusAreas.Areas.map((_, index) => ({ id: `consulting-focus-${index}`, from: "consulting", to: `focus-${index}`, kind: "branch" as const })),
    ...Experience.Work.map((_, index) => ({ id: `consulting-experience-${index}`, from: "consulting", to: `experience-${index}`, kind: "branch" as const })),
    ...ResearchInterests.map((_, index) => ({ id: `research-interest-${index}`, from: "research", to: `interest-${index}`, kind: "branch" as const })),
    ...ResearchPublications.map((_, index) => ({ id: `research-publication-${index}`, from: "research", to: `publication-${index}`, kind: "branch" as const })),
    { id: "evaluation-agents", from: "focus-0", to: "interest-0", kind: "cross" },
    { id: "retrieval-nlp", from: "focus-1", to: "interest-1", kind: "cross" },
];
