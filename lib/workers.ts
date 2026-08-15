export type Worker = {
  slug: string; name: string; role: string; description: string; category: string;
  icon: string; accent: string; capabilities: string[]; outcome: string;
};

export const workers: Worker[] = [
  { slug: "atlas-research", name: "Atlas", role: "Market Research Analyst", category: "Strategy", icon: "A", accent: "violet", description: "Turns fragmented market signals into decision-ready briefs.", capabilities: ["Competitive landscapes", "Trend monitoring", "Source-backed briefs"], outcome: "Move from open questions to a clear market point of view in hours." },
  { slug: "cleo-support", name: "Cleo", role: "Customer Support Specialist", category: "Customer", icon: "C", accent: "blue", description: "Resolves routine questions and keeps complex cases moving.", capabilities: ["Inbox triage", "Knowledge-grounded replies", "Escalation summaries"], outcome: "Deliver fast, consistent support without adding queue pressure." },
  { slug: "nova-sales", name: "Nova", role: "Sales Development Rep", category: "Revenue", icon: "N", accent: "orange", description: "Researches accounts and creates relevant, timely outreach.", capabilities: ["Account research", "Personalized outreach", "Lead qualification"], outcome: "Give every high-fit prospect a thoughtful first touch." },
  { slug: "sage-operations", name: "Sage", role: "Operations Coordinator", category: "Operations", icon: "S", accent: "green", description: "Keeps recurring workflows, handoffs, and follow-ups on track.", capabilities: ["Workflow coordination", "Status reporting", "Exception routing"], outcome: "Run dependable operations with fewer manual check-ins." },
  { slug: "mira-content", name: "Mira", role: "Content Strategist", category: "Marketing", icon: "M", accent: "pink", description: "Transforms ideas and research into on-brand content systems.", capabilities: ["Editorial planning", "Draft development", "Content repurposing"], outcome: "Publish useful content consistently across every channel." },
  { slug: "ledger-finance", name: "Ledger", role: "Finance Assistant", category: "Finance", icon: "L", accent: "gold", description: "Organizes reporting inputs and flags details that need review.", capabilities: ["Variance summaries", "Invoice review", "Month-end checklists"], outcome: "Spend less time assembling numbers and more time understanding them." },
  { slug: "pulse-people", name: "Pulse", role: "People Operations Partner", category: "People", icon: "P", accent: "cyan", description: "Supports consistent employee experiences from day one.", capabilities: ["Onboarding plans", "Policy Q&A", "Feedback synthesis"], outcome: "Create responsive people operations as your team grows." },
  { slug: "sentinel-risk", name: "Sentinel", role: "Risk & Compliance Analyst", category: "Risk", icon: "S", accent: "red", description: "Reviews evidence and surfaces gaps before they become blockers.", capabilities: ["Control monitoring", "Evidence collection", "Risk summaries"], outcome: "Stay audit-ready with a clear view of emerging risk." }
];

export const getWorker = (slug: string) => workers.find((worker) => worker.slug === slug);
