export type TrainingLevel = {
  days: string;
  level: string;
  overview: string;
  outcome: string;
  items: string[];
};

export const TRAINING_LEVELS: TrainingLevel[] = [
  {
    days: "Days 1-2",
    level: "New fee earner",
    overview:
      "The foundation of a disrepair file, run in the order the work actually lands. Built for new fee earners who need the end-to-end process.",
    outcome:
      "A new fee earner can take a file from instruction to a clean letter of claim and a first chronology, with the firm's sign-off intact.",
    items: [
      "Claim lifecycle: how a file runs from intake to quantum, and where the firm's conduct sits at each step.",
      "Intake triage: what makes a disrepair claim viable, the action-or-enquiry decision, and how to take instructions without overcommitting.",
      "Disclosure reconciliation: what the landlord's evidence bundle must contain, identifying gaps, and flagging what is missing before the claim proceeds.",
      "Chronology: building a reliable events timeline from the disclosed evidence, so the file tells a coherent story.",
      "Letters: drafting the letter of claim and the pre-action correspondence, grounded in the right statutory framework for the jurisdiction.",
    ],
  },
  {
    days: "Days 3-4",
    level: "Building your caseload",
    overview:
      "For fee earners who have run a few files and want them sharper. The quantum and reporting that make a claim worth pursuing, and keeping the workstream defensible at the boundaries.",
    outcome:
      "A fee earner runs files faster, with quantum properly evidenced and boundary lines clean.",
    items: [
      "Quantum: valuing the claim properly, schedule of loss, the distinction between repair works and associated loss, and corroborating evidence.",
      "Statutory framework in depth: RHWA 2016 in Wales, LTA 1985 and Awaab's Law in England, and when each bites.",
      "Disclosure under pressure: evidence reconciliation on difficult bundles, redirecting incomplete disclosure, and what the landlord's side typically misses.",
      "Reporting: drafting case reports an instructing principal can sign off, with the analysis that stands up to review.",
      "The boundary line: knowing what a fee earner prepares and what must be handed back to the firm, including advocacy, court attendance and issuing, and anything the firm must hold itself, referring the matter back to the instructing firm where it passes beyond those boundaries.",
    ],
  },
  {
    days: "Day 5",
    level: "Senior practitioner",
    overview:
      "For experienced practitioners who want the detail sharpened, and the hardest files worked through. The offers strategy, complex evidence, and running the caseload with AI as support.",
    outcome:
      "A senior fee earner who can run the hardest files, and teach the same process to the rest of the team.",
    items: [
      "Offers strategy: negotiating the quantum, when offers land, and how to counter each offer to maximise value.",
      "Complex disclosure: the hardest bundles, partial records, missing years, disputed disrepair, and keeping the chronology usable.",
      "Jurisdiction edge cases: the interplay of statute and case law at the boundaries, and the authorities that shape a matter.",
      "Process and supervision: running the heavy caseload, delegating with AI tools as support, and keeping sign-off sharp at scale.",
      "Live-file workshop: bring a live matter, work it through with Shaine, and leave with it in a stronger position.",
    ],
  },
];