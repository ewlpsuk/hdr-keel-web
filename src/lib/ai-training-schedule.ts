export type AiTrainingLevel = {
  days: string;
  level: string;
  overview: string;
  outcome: string;
  items: string[];
};

export const AI_TRAINING_LEVELS: AiTrainingLevel[] = [
  {
    days: "Days 1-2",
    level: "Understanding AI",
    overview:
      "What generative AI is, what it can and cannot do reliably in legal work, and the confidentiality rule that applies from the first use. Built for a fee earner who is new to AI and needs to trust the tool before relying on it.",
    outcome:
      "A fee earner who understands what the tool can and cannot do, and knows which client material stays out of it.",
    items: [
      "What generative AI is: tools that draft, summarise and research from a prompt, and the difference from a simple search.",
      "How the models behave: fluent and confident, but not always accurate, so outputs always need checking.",
      "The confidentiality rule that applies from the first use: which client information a fee earner may put into a tool and which must stay out.",
      "Where AI can help on a disrepair file and where it adds risk rather than saving time.",
      "The responsibility that does not change: the fee earner stays accountable for work the tool helps produce, under the firm's oversight.",
    ],
  },
  {
    days: "Days 3-4",
    level: "Prompting for best results",
    overview:
      "Writing prompts that produce reliable, consistent, usable output for legal tasks. Built for a fee earner who has used AI casually and wants dependable results rather than lucky ones.",
    outcome:
      "A fee earner who prompts with a clear ask and context, checks the result before it is used, and keeps the record the firm needs.",
    items: [
      "The anatomy of a good legal prompt: a clear instruction, the relevant context, and an exact ask.",
      "Drafting for the task: asking for the document or analysis you want, in the format and level of detail the matter needs.",
      "Checking, never assuming: reviewing the output against the source, the file and the law before it is relied on.",
      "Refining a result: turning a generic draft into the specific document the matter needs, and knowing when the tool has reached its limit.",
      "Recording use the way the firm's policy and the SRA expect, so the fee earner can justify the work.",
    ],
  },
  {
    days: "Day 5",
    level: "Workflows and compliant use",
    overview:
      "Putting AI in the right place in a repeatable case workflow, under the firm's conduct and sign-off. Built for a fee earner or supervisor who will run the AI workstream and carry the accountability.",
    outcome:
      "A fee earner or supervisor who can build an AI-assisted workflow that stays within the SRA's expectations and the firm's control.",
    items: [
      "Building a repeatable workflow that puts AI at the right step of a matter and keeps the human checks in place.",
      "What the SRA expects: AI has no separate legal personality, so the fee earner and the firm stay accountable for everything it helps produce.",
      "Verification before anything reaches the firm or the court: checking citations, authorities and submissions for accuracy.",
      "Confidentiality and privilege with real tools: keeping client material in a secure environment and out of public tools, where entering it can waive privilege permanently.",
      "Supervision and sign-off: supervisors stay accountable for work done through others, and the firm keeps competent oversight of every AI-assisted matter.",
    ],
  },
];
