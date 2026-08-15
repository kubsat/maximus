export type Worker = {
  slug: string;
  name: string;
  role: string;
  description: string;
  category: string;
  icon: string;
  accent: string;
  capabilities: string[];
  workflows: string[];
  outcome: string;
  idealBuyer: string;
};

export const workers: Worker[] = [
  { slug: "atlas-research", name: "Atlas", role: "Market Research Analyst", category: "Strategy", icon: "A", accent: "violet", description: "Turns fragmented market signals into decision-ready briefs.", capabilities: ["Competitive landscapes", "Trend monitoring", "Source-backed briefs"], workflows: ["Build a weekly competitor digest", "Compare a new market by size, growth, and risk", "Turn interview notes into strategic themes"], outcome: "Move from open questions to a clear market point of view in hours.", idealBuyer: "Strategy, product, and founder teams evaluating markets or making high-context decisions." },
  { slug: "cleo-support", name: "Cleo", role: "Customer Support Specialist", category: "Customer", icon: "C", accent: "blue", description: "Resolves routine questions and keeps complex cases moving.", capabilities: ["Inbox triage", "Knowledge-grounded replies", "Escalation summaries"], workflows: ["Triage and tag incoming requests", "Draft answers from approved help content", "Prepare context-rich escalation briefs"], outcome: "Deliver fast, consistent support without adding queue pressure.", idealBuyer: "Customer experience teams with growing queues and a trusted knowledge base." },
  { slug: "nova-sales", name: "Nova", role: "Sales Development Rep", category: "Revenue", icon: "N", accent: "orange", description: "Researches accounts and creates relevant, timely outreach.", capabilities: ["Account research", "Personalized outreach", "Lead qualification"], workflows: ["Research target accounts before outreach", "Draft role-specific email sequences", "Summarize qualification signals for sales"], outcome: "Give every high-fit prospect a thoughtful first touch.", idealBuyer: "Lean revenue teams that want better prospect context without sacrificing selling time." },
  { slug: "sage-operations", name: "Sage", role: "Operations Coordinator", category: "Operations", icon: "S", accent: "green", description: "Keeps recurring workflows, handoffs, and follow-ups on track.", capabilities: ["Workflow coordination", "Status reporting", "Exception routing"], workflows: ["Run recurring project check-ins", "Compile a cross-team status report", "Route overdue actions to their owners"], outcome: "Run dependable operations with fewer manual check-ins.", idealBuyer: "Operations and delivery teams coordinating repeatable, multi-owner work." },
  { slug: "mira-content", name: "Mira", role: "Content Strategist", category: "Marketing", icon: "M", accent: "pink", description: "Transforms ideas and research into on-brand content systems.", capabilities: ["Editorial planning", "Draft development", "Content repurposing"], workflows: ["Create a monthly editorial plan", "Draft a brief from customer research", "Repurpose long-form work for social channels"], outcome: "Publish useful content consistently across every channel.", idealBuyer: "Marketing teams with strong expertise but limited writing and repurposing capacity." },
  { slug: "ledger-finance", name: "Ledger", role: "Finance Assistant", category: "Finance", icon: "L", accent: "gold", description: "Organizes reporting inputs and flags details that need review.", capabilities: ["Variance summaries", "Invoice review", "Month-end checklists"], workflows: ["Prepare a budget-versus-actual summary", "Check invoices against approval rules", "Track month-end close dependencies"], outcome: "Spend less time assembling numbers and more time understanding them.", idealBuyer: "Finance teams seeking structured support while keeping people in control of approvals." },
  { slug: "pulse-people", name: "Pulse", role: "People Operations Partner", category: "People", icon: "P", accent: "cyan", description: "Supports consistent employee experiences from day one.", capabilities: ["Onboarding plans", "Policy Q&A", "Feedback synthesis"], workflows: ["Create role-specific onboarding plans", "Answer questions from approved policies", "Synthesize engagement survey themes"], outcome: "Create responsive people operations as your team grows.", idealBuyer: "People teams supporting a growing, distributed workforce with consistent processes." },
  { slug: "sentinel-risk", name: "Sentinel", role: "Risk & Compliance Analyst", category: "Risk", icon: "S", accent: "red", description: "Reviews evidence and surfaces gaps before they become blockers.", capabilities: ["Control monitoring", "Evidence collection", "Risk summaries"], workflows: ["Map evidence to control requirements", "Flag missing or stale documentation", "Prepare a weekly risk review"], outcome: "Stay audit-ready with a clear view of emerging risk.", idealBuyer: "Security, compliance, and operations teams preparing for reviews or managing controls." }
];

export const getWorker = (slug: string) => workers.find((worker) => worker.slug === slug);
