import { AboutMe, Experience, FocusAreas, ResearchInterests, ResearchPublications } from "@/app/data";

export interface Connection {
    id: string;
    from: string;
    to: string;
    kind: "root" | "branch" | "cross";
}

// Relationships are independent of layout. Primary parents precede their children;
// cross-links can join any two cards without affecting reveal order.
export const connections: Connection[] = [
    { id: "hero-industry", from: "hero", to: "industry", kind: "root" },
    { id: "hero-research", from: "hero", to: "research", kind: "root" },
    ...FocusAreas.Areas.map((_, index) => ({ id: `industry-focus-${index}`, from: "industry", to: `focus-${index}`, kind: "branch" as const })),
    ...Experience.Work.map((_, index) => ({ id: `industry-experience-${index}`, from: "industry", to: `experience-${index}`, kind: "branch" as const })),
    ...ResearchInterests.map((_, index) => ({ id: `research-interest-${index}`, from: "research", to: `interest-${index}`, kind: "branch" as const })),
    ...ResearchPublications.map((_, index) => ({ id: `research-publication-${index}`, from: "research", to: `publication-${index}`, kind: "branch" as const })),
    { id: "evaluation-agents", from: "focus-0", to: "interest-0", kind: "cross" },
    { id: "retrieval-nlp", from: "focus-1", to: "interest-1", kind: "cross" },
    { id: "microsoft-tenure", from: "experience-1", to: "experience-2", kind: "cross" },
];

const nodeLabels = new Map<string, { title: string; category: string }>([
    ["hero", { title: AboutMe.Name, category: "introduction" }],
    ["industry", { title: "Industry", category: "industry" }],
    ["research", { title: "Research", category: "research" }],
    ...FocusAreas.Areas.map((area, index): [string, { title: string; category: string }] =>
        [`focus-${index}`, { title: area.Title, category: "focus area" }]),
    ...ResearchInterests.map((interest, index): [string, { title: string; category: string }] =>
        [`interest-${index}`, { title: interest.Topic, category: "research" }]),
    ...Experience.Work.map((position, index): [string, { title: string; category: string }] =>
        [`experience-${index}`, { title: `${position.Title} at ${position.Employer}`, category: "experience" }]),
    ...ResearchPublications.map((publication, index): [string, { title: string; category: string }] =>
        [`publication-${index}`, { title: publication.Title, category: "publication" }]),
]);

// The same explicit cross-links drive both the SVG threads and keyboard navigation.
// A card can have any number of related cards, in either direction.
export function getRelatedLinks(nodeId: string) {
    return connections
        .filter(connection => connection.kind === "cross" && (connection.from === nodeId || connection.to === nodeId))
        .map(connection => {
            const id = connection.from === nodeId ? connection.to : connection.from;
            return { id, ...nodeLabels.get(id)! };
        });
}
