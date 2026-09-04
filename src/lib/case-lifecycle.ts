export type LifecyclePhase = {
  kicker: string;
  title: string;
  range: string;
  intro: string;
  tone: "teal" | "copper";
  visual?: { src: string; alt: string };
  stages: { n: number; title: string; text: string }[];
};

export const LIFECYCLE_PHASES: LifecyclePhase[] = [
  {
    kicker: "Stages 1–7",
    title: "Pre-action and protocol",
    range: "1–7",
    intro:
      "From whether the file is worth running, through the letter of claim, disclosure, the surveyor and counsel, before anything is issued.",
    tone: "teal",
    stages: [
      {
        n: 1,
        title: "Vetting new claims",
        text: "Go/no-go on a new file: notice, limitation, jurisdiction, defects and whether the matter is worth the time and cost.",
      },
      {
        n: 2,
        title: "Letter of claim and disclosure",
        text: "The letter of claim, disclosure and the landlord's 6.2 reply, reconciling the disclosure against the pleaded defects.",
      },
      {
        n: 3,
        title: "Instructing a surveyor",
        text: "Instruction of the surveyor or expert under CPR Part 35 and the pre-action protocol, so the evidence is in place.",
      },
      {
        n: 4,
        title: "Considering the surveyor's report",
        text: "Reading the report against the pleaded case, the photographs and the repair history, and flagging what still needs to be fixed.",
      },
      {
        n: 5,
        title: "Requesting a 6.3 reply",
        text: "Chasing and framing the landlord's protocol response so the file does not stall in silence.",
      },
      {
        n: 6,
        title: "Considering the 6.3 reply",
        text: "Taking stock of the landlord's position and deciding the next step: settle, press, or prepare to issue.",
      },
      {
        n: 7,
        title: "Instructing counsel",
        text: "The brief on liability, quantum and particulars, prepared for the firm's instruction of counsel.",
      },
    ],
  },
  {
    kicker: "Stages 8–9",
    title: "Issuing proceedings",
    range: "8–9",
    intro:
      "The issue pack is prepared for the instructing firm to sign off and issue. The firm remains the solicitor on the record.",
    tone: "copper",
    visual: {
      src: "/images/issue-pack.jpg",
      alt: "An issue pack prepared on a fee-earner's desk",
    },
    stages: [
      {
        n: 8,
        title: "Issuing proceedings",
        text: "Particulars, the Part 7 claim and the issue pack, drafted for the firm's review, sign-off and issue.",
      },
      {
        n: 9,
        title: "Default judgment",
        text: "The default-judgment application where the defence does not arrive, prepared for the firm to make.",
      },
    ],
  },
  {
    kicker: "Stages 10–13",
    title: "Active case management",
    range: "10–13",
    intro:
      "Once the claim is on foot: the defence, directions, allocation and standard disclosure.",
    tone: "teal",
    stages: [
      {
        n: 10,
        title: "Considering the defence",
        text: "Reading the defence against the pleaded case and preparing the instruction for a reply.",
      },
      {
        n: 11,
        title: "Directions questionnaire",
        text: "The DQ, draft directions and allocation submissions, including track and evidence.",
      },
      {
        n: 12,
        title: "Considering the defendant's DQ",
        text: "The other side's questionnaire, and the counter-submissions the firm may need.",
      },
      {
        n: 13,
        title: "Standard disclosure",
        text: "The list of documents (N265) and the disclosure that has to stand up at the next stage.",
      },
    ],
  },
  {
    kicker: "Stages 14–18",
    title: "Evidence and experts",
    range: "14–18",
    intro:
      "Witness evidence and Part 35 questions, so the file is ready for listing and for trial.",
    tone: "copper",
    visual: {
      src: "/images/evidence-desk.jpg",
      alt: "Photographic exhibits of housing conditions and case files on a desk",
    },
    stages: [
      {
        n: 14,
        title: "Witness statement",
        text: "The claimant witness statement under CPR Part 32, grounded in the chronology and the disclosure.",
      },
      {
        n: 15,
        title: "Exchanging witness evidence",
        text: "Service and exchange, so the evidence lands in the form and at the time the directions require.",
      },
      {
        n: 16,
        title: "Considering the defendant's witness evidence",
        text: "Reading the other side's statements against the pleaded defects, the rent record and the expert evidence.",
      },
      {
        n: 17,
        title: "Part 35 questions",
        text: "Written questions to the expert, so gaps and assumptions are tested before trial.",
      },
      {
        n: 18,
        title: "Considering the defendant's Part 35 questions",
        text: "The other side's questions to the expert, and the answers the firm may need to settle or to fight.",
      },
    ],
  },
  {
    kicker: "Stages 19–23",
    title: "Pre-trial and trial preparation",
    range: "19–23",
    intro:
      "Listing, the trial bundle, the brief to counsel and the costs statement. The firm attends; we prepare the file.",
    tone: "teal",
    visual: {
      src: "/images/trial-bundle.jpg",
      alt: "A trial bundle and papers on a desk",
    },
    stages: [
      {
        n: 19,
        title: "Listing questionnaire",
        text: "Form N170 and the listing information the court needs to get the matter on.",
      },
      {
        n: 20,
        title: "Considering the defendant's listing questionnaire",
        text: "The other side's listing position, and where it conflicts with the firm's.",
      },
      {
        n: 21,
        title: "Trial preparation",
        text: "The trial bundle and the case summary, so counsel and the firm walk in with a usable file.",
      },
      {
        n: 22,
        title: "Briefing counsel for trial",
        text: "The trial brief: issues, evidence, quantum and the points that still need a decision.",
      },
      {
        n: 23,
        title: "N260 statement of costs",
        text: "The summary-assessment costs statement, prepared for the firm's sign-off.",
      },
    ],
  },
  {
    kicker: "Stages 24–26",
    title: "Settlement and enforcement",
    range: "24–26",
    intro:
      "Part 36, urgent repair, and what follows judgment. The file does not stop at the hearing.",
    tone: "copper",
    stages: [
      {
        n: 24,
        title: "Part 36 offers",
        text: "Part 36 offers prepared for the firm to make or respond to, with the numbers and the costs consequences in hand.",
      },
      {
        n: 25,
        title: "Interim injunction",
        text: "The urgent repair order, prepared where the conditions will not wait for trial.",
      },
      {
        n: 26,
        title: "Post-judgment",
        text: "Enforcement, interest and consent orders after judgment, so the result is actually collected.",
      },
    ],
  },
];

export const REFERRED_BACK = [
  "Advocacy at hearings",
  "Court attendance",
  "Issuing",
  "Anything the instructing firm must hold as the solicitor on the record",
] as const;
