/**
 * HDR Keel course: "Running Housing Disrepair Claims".
 * Three competence levels mapped onto the 26-stage housing disrepair
 * claim pathway (England). Built from Rachel Mitchell's curriculum draft
 * (legal substance) and Emma Thompson's naming/positioning (voice).
 * Curriculum source: FOR CLAUDE/Team-Assignments/Rachel-Mitchell_HDR-Course-Curriculum-Draft_2026-09-06.md
 * Naming/positioning source: FOR CLAUDE/Team-Assignments/Emma-Thompson_HDR-Course-Naming-Positioning_2026-09-06.md
 *
 * Compliance spine (threaded, never dumped): the course trains fee earners
 * and support staff at solicitors' firms; HDR Keel is NOT SRA-authorised and
 * not a CMC; advocacy, court attendance and issuing stay with the instructing
 * firm; England vs Wales never merged; AI chat is the learner's own-key
 * explainer over the bought material, never consumer legal advice.
 */

export type CourseModule = {
  id: string;
  title: string;
  stages: string;
  content: string;
  skills: string[];
  drill: string;
  boundary: string;
  libraryLinks: string[];
};

export type CourseLevelSlug = "fundamentals" | "craft" | "command" | "package";

export type CourseLevel = {
  slug: "fundamentals" | "craft" | "command";
  name: string;
  price: number;
  stages: string;
  stageLabel: string;
  overview: string;
  audience: string;
  objectives: string[];
  modules: CourseModule[];
};

export const COURSE_PACKAGE_PRICE = 499;
export const COURSE_PACKAGE_SUM = 597;

export const COURSE_LEVELS: CourseLevel[] = [
  {
    slug: "fundamentals",
    name: "Fundamentals",
    price: 199,
    stages: "1 to 7",
    stageLabel: "Intake and pre-action",
    overview:
      "The foundation of a disrepair file, run in the order the work actually lands. For new fee earners and support staff who need the end-to-end process before a file is anywhere near the court.",
    audience:
      "Fee earners and support staff new to housing disrepair work, and experienced staff wanting a structured grounding in how a claim is built before it issues.",
    objectives: [
      "Run a file from first instruction through a clean, jurisdiction-correct letter of claim, with the firm's sign-off intact and a first chronology built from the disclosed evidence.",
      "Make the action-or-enquiry intake decision correctly and apply the 14-point vetting gate to what makes a claim viable.",
      "Reconcile the landlord's pre-action disclosure bundle and flag missing records before the claim proceeds.",
      "Distinguish the England statutory framework from the Wales framework and never merge them.",
      "Value the claim at pre-action level and screen track exposure against the Bellion £1,000 threshold.",
      "State and apply the fee earner boundary: what is prepared and what stays with the instructing firm.",
    ],
    modules: [
      {
        id: "intake",
        title: "Intake, vetting and the viable claim",
        stages: "1-2",
        content:
          "What makes a disrepair claim viable; the action-or-enquiry decision; tenancy vs licence and occupier standing; the statutory framework choice by jurisdiction (England: LTA 1985 s.11, s.9A, HFHA 2018, Awaab's Law; Wales: RHWA 2016 occupation contracts, 2022 Fitness Regs) fixed from the primary documents, never the client's brief.",
        skills: [
          "Intake triage",
          "Reading a tenancy or occupation agreement to fix jurisdiction",
          "The 14-point vetting gate",
        ],
        drill: "Two intake calls, one England secure tenancy with rising damp, one Welsh contract-holder file. Complete the intake gate for each and state which statutory duty bites in each jurisdiction.",
        boundary:
          "A fee earner never gives an enquirer an advisory opinion as if it were legal advice to a consumer; the intake questionnaire is a firm-staff tool. England vs Wales is settled at intake and never merged later.",
        libraryLinks: [
          "Intake and vetting: the 14-point gate",
          "LTA 1985 s.11 explainer",
          "LTA 1985 s.9A explainer",
          "HFHA 2018 explainer",
          "Awaab's Law explainer",
          "Street v Mountford digest",
          "Client intake and triage questionnaire template",
        ],
      },
      {
        id: "letter-of-claim",
        title: "The letter of claim and the pre-action protocol window",
        stages: "2-3",
        content:
          "The England pre-action protocol step by step with the 20-working-day reply clock; what the letter of claim must particularise; reply handling; the pre-action expert gate where the defendant responds with a schedule of works (the claimant cannot simply instruct an expert once the 20-working-day window has expired just because the defendant responded, and must engage as to why expert evidence is still necessary - Bryant v Trivallis); the disclosure obligation in the window; the Wales protocol divergence where it applies. Where a live file passes beyond what the firm holds, it is referred back.",
        skills: [
          "Drafting the jurisdiction-correct letter of claim",
          "Calendar discipline on the protocol clock",
          "Basic ADR and engagement framing (Churchill)",
          "Applying the pre-action expert gate after a schedule-of-works response (Bryant v Trivallis)",
        ],
        drill: "Draft the letter of claim to deadline from a facts file, apply deemed service, state the reply date, and flag the two things most commonly wrong (missing jurisdiction duty, missed clock).",
        boundary:
          "The letter of claim is a firm-staff drafting skill exercising the practitioner's knowledge, not a consumer-facing rights letter. Jurisdiction phrasing is fixed and separate, never a merged template. The pre-action expert gate decision is made by the firm's conduct; the fee earner flags it in the reply analysis and prepares the position for the firm to hold in correspondence.",
        libraryLinks: [
          "Letter of claim and pre-action protocol checklist",
          "England PAP: the 20 working day clock",
          "Letter of claim template",
          "Reply to letter of claim template",
          "Letter before action template",
          "Churchill v Merthyr digest",
          "Bryant v Trivallis digest",
        ],
      },
      {
        id: "disclosure-reconciliation",
        title: "Disclosure reconciliation and the evidence bundle",
        stages: "3",
        content:
          "What the landlord's evidence bundle must contain; identifying gaps and missing years; what the landlord side typically misses; documenting incomplete disclosure so the file shows the chase, not the silence.",
        skills: [
          "Checklist-driven disclosure audit",
          "Producing a dispositive gap log",
          "Knowing when incomplete disclosure is a reason to hold, seek, or escalate",
        ],
        drill: "Reconcile a deliberately defective disclosure bundle, produce the gap log, and draft the short chasing letter asking only for what is genuinely outstanding.",
        boundary:
          "The bundle is assembled and interpreted for the firm's case strategy. Standard disclosure (N265) belongs to Level 2; it is previewed here only to show why the pre-action bundle matters.",
        libraryLinks: [
          "Letter of claim and pre-action protocol checklist",
          "N265 standard disclosure list note (preview)",
          "Defence analysis attendance note (preview)",
        ],
      },
      {
        id: "chronology",
        title: "Building the chronology",
        stages: "3-4",
        content:
          "Turning the reconciled disclosure into a reliable events timeline: what was reported, when, to whom, landlord knowledge (O'Brien v Robinson), access refused or given, works done or ignored. The chronology as the file's coherent story spine.",
        skills: [
          "Chronology discipline",
          "Dating from documentary evidence",
          "Distinguishing asserted fact from documented fact",
        ],
        drill: "Build the chronology through the damage window with every entry sourced to a document reference, and flag the single unresolved factual issue the firm will need the client to confirm.",
        boundary:
          "The chronology is litigation preparation for the firm; it must not assert facts the evidence does not support, and it must be jurisdiction-consistent in the statutory head it attaches to.",
        libraryLinks: ["O'Brien v Robinson digest (landlord knowledge)"],
      },
      {
        id: "quantum",
        title: "Quantum at pre-action and the Bellion line",
        stages: "5-6",
        content:
          "Valuing a disrepair claim properly ahead of issue: distinguishing repair works from associated loss; rent proportion over the actual damage window; general damages method (Grand v Gill / Earle); special damages; interest; and the Bellion £1,000 track-allocation threshold.",
        skills: [
          "Building a schedule of disrepair and a schedule of special damages",
          "Rent-proportion arithmetic over the actual window",
          "Applying the Bellion test to a facts file",
        ],
        drill: "Value the rent-proportion quantum from a facts file and state whether the claim clears the Bellion £1,000 line on either head.",
        boundary:
          "Quantum is computed on evidence, never to a target figure. The quantum memo is for the firm's use; a value advanced to a client-consumer is the firm's.",
        libraryLinks: [
          "Damages quantification (rent proportion, general damages, quantum tables)",
          "The £1,000 track allocation threshold: Bellion",
          "Schedule of disrepair template",
          "Schedule of special damages template",
        ],
      },
      {
        id: "pre-issue-offers",
        title: "Pre-issue offers, negotiation and the settlement-or-issue decision",
        stages: "6-7",
        content:
          "The pre-issue offers landscape; Part 36 versus Calderbank or without-prejudice negotiation pre-issue; Smith v Wigan on pre-issue settlement and costs; the stage-7 decision to settle or prepare the file for the firm to issue. Issuing is prepared by the fee earner for the firm and referred back.",
        skills: [
          "Reading a pre-issue offer against quantum and costs",
          "Recording offer service, expiry and rejection dates",
          "Drafting a short reasoned response to a low pre-issue offer",
        ],
        drill: "Given a valued file and a low pre-issue offer, write the short response and state the correct posture: counter, hold, or refer for issue, and why.",
        boundary:
          "The fee earner records offer terms but does not accept or counter client money terms without the firm's sign-off. Settlement authority sits with the instructed firm. Issuing and court steps are referred back.",
        libraryLinks: [
          "CPR Part 36: offers to settle and costs consequences",
          "Churchill v Merthyr digest",
          "Smith v Wigan digest",
          "Calderbank offer letter template",
          "Tomlin order template (preview)",
        ],
      },
      {
        id: "capstone",
        title: "Level 1 capstone: the pre-action file handed over clean",
        stages: "1-7",
        content:
          "Pulling Level 1 together: the pack that leaves pre-action clean, with a clear recommendation of settle, hold, or prepare-for-issue that the firm signs off. Includes the boundary pass: what precisely is handed to the firm at the issue gate.",
        skills: ["Producing a firm-ready file review and case report with sign-off analysis"],
        drill: "File review: a near-complete pre-action file with one latent flaw (a wrong-jurisdiction reference or incomplete disclosure chase). Spot it, correct it, write the one-paragraph recommendation to the instructing principal.",
        boundary:
          "The handover is where the fee earner's pre-action responsibility ends and the firm's court and conduct responsibility begins. HDR Keel is not SRA-authorised and does not change who signs off or who holds conduct.",
        libraryLinks: [
          "Taking stock: the compliance review checklist",
          "File review attendance note template",
        ],
      },
    ],
  },
  {
    slug: "craft",
    name: "Craft",
    price: 199,
    stages: "8 to 18",
    stageLabel: "Issue and service through evidence and expert",
    overview:
      "The court-phase machine: issue, case management, disclosure under pressure and the expert evidence that a trial is decided on. For fee earners who have run files through pre-action and now own the litigated claim.",
    audience:
      "Fee earners who know how to build a claim and now want to run it through the court process, including support staff who prepare the documents and disclosure at this stage.",
    objectives: [
      "Prepare the issue file for the firm to issue and serve proceedings, and know that issuing and service are the firm's acts.",
      "Analyse the defence and drive the case-management phase, including the Bellion allocation test.",
      "Run the evidence machine: standard disclosure, witness statements, expert instruction, joint statements and Part 35 questions.",
      "Reconcile disclosure under pressure and keep the chronology usable through the hardest bundles.",
      "Keep jurisdiction and the fee earner boundary explicit and correct on every court-phase document.",
    ],
    modules: [
      {
        id: "prepare-issue",
        title: "Prepare for issue and service",
        stages: "8-9",
        content:
          "What turns a pre-action file into an issue-ready claim: particulars of claim on the correct statutory grounding, the N1 completion note, CPR Part 7 mechanics, and service rules including deemed service dates. The fee earner prepares the issue bundle; the firm issues and serves.",
        skills: [
          "Drafting particulars of claim",
          "Completing the issue checklist",
          "Computing service and response dates",
        ],
        drill: "Draft the particulars of claim from the pre-action file, complete the issue checklist, and compute the date by which the defence would be due from a stated service date.",
        boundary:
          "The single most important teaching moment in the curriculum: the fee earner does not issue, does not sign the claim as solicitor of record, does not attend court. The particulars and N1 are prepared for the firm's issue.",
        libraryLinks: [
          "Issue and service: stages 8 to 9 checklist",
          "CPR Part 7: starting the claim",
          "Particulars of claim template",
          "N1 claim form completion note",
        ],
      },
      {
        id: "defence-analysis",
        title: "Defence analysis and the reply",
        stages: "10",
        content:
          "Reading the defence once filed: boilerplate disrepair defences, the s.11 statutory defences, and the lifestyle defence framing; deciding what needs a formal reply and what the defence actually concedes.",
        skills: [
          "Defence analysis producing an attendance note",
          "Drafting a formal reply to boilerplate only where it adds value",
        ],
        drill: "Given a defence mixing one genuine s.11 statutory defence with boilerplate and a lifestyle-flavoured rebuttal, produce the defence analysis attendance note and identify which paragraphs are genuinely triable.",
        boundary:
          "The analysis and reply are the fee earner's preparatory work for the firm's conduct; lifestyle-defence rebuttal framing stays inside the evidential record.",
        libraryLinks: [
          "Defence analysis attendance note template",
          "Formal reply to defence boilerplate template",
          "Lifestyle defence: dismantling the rebuttal template",
          "Quick v Taff Ely digest",
        ],
      },
      {
        id: "case-management",
        title: "Case management and allocation",
        stages: "11-13",
        content:
          "The directions phase: DQ filing (N180/N181), the Bellion allocation test, and how allocation sets the costs profile of the whole file including small-claims costs exposure (Orton). The case management conference and auditing the case-management order.",
        skills: [
          "Completing the allocation analysis",
          "Drafting the directions proposal and auditing the CMC order",
          "Applying Bellion",
        ],
        drill: "Allocate: a repair-order claim with an estimated repair cost of £850 and a discomfort quantum of £1,400, run the Bellion test on each head and state the allocation. Then a second file where both heads sit at or below £1,000.",
        boundary:
          "Allocation decisions shape costs exposure; the fee earner computes and recommends, the firm decides on conduct. The N244 route for contested allocation is prepared for the firm to make.",
        libraryLinks: [
          "Case management: stages 10 to 13 checklist",
          "Track allocation check: the Bellion £1,000 test",
          "CPR Part 26: track allocation and the £1,000 test",
          "N180 and N181 directions questionnaire audit note",
          "N244 application notice preparation note",
          "Orton v Barclays digest",
          "Birmingham v Lee digest",
        ],
      },
      {
        id: "disclosure-pressure",
        title: "Standard disclosure and disclosure under pressure",
        stages: "14",
        content:
          "Standard disclosure (N265) and the shift from the pre-action chase to the formal obligation; reverse and relied-upon selection discipline; the hard bundles and keeping the chronology usable through them.",
        skills: [
          "N265 audit",
          "Disclosure negotiation under pressure",
          "Producing the top-level disclosure exception and chasing letter",
        ],
        drill: "Reconcile a hard disclosure bundle into the N265 audit and chronology, and draft the single disclosure-redirection point that narrows the dispute most.",
        boundary:
          "Disclosure is the firm's ongoing obligation; the fee earner assembles and audits but the firm owns the list. Jurisdiction divergence on what records are compellable must not be merged.",
        libraryLinks: [
          "Evidence and expert: stages 14 to 18 checklist",
          "N265 standard disclosure list note",
          "Edwards v Kumarasamy digest",
        ],
      },
      {
        id: "witness-statements",
        title: "Witness statements and the schedule of evidence",
        stages: "15",
        content:
          "Drafting the claimant's lay evidence confined to what the witness can speak to, and the schedule of evidence; avoiding the statement that asserts expert or legal conclusions; preparing the witness for what the firm will handle at trial.",
        skills: [
          "Drafting an evidence-anchored witness statement",
          "Building the schedule of evidence",
        ],
        drill: "Draft the witness statement from a facts file, bearing down on which paragraphs would be struck for opinion or irrelevance, and complete the schedule of evidence.",
        boundary:
          "The witness statement is prepared for the firm's use; witness preparation for trial conduct is held within the firm. The fee earner produces the evidence pack, the firm runs the witness at trial.",
        libraryLinks: [
          "Witness statement template",
          "Evidence and expert: stages 14 to 18 checklist",
        ],
      },
      {
        id: "instruct-expert",
        title: "Instructing the expert and the joint expert statement",
        stages: "16",
        content:
          "Instructing the surveyor on the HHSRS hazard footing (England, SI 2026/571); the letter of instruction, single joint expert versus party expert where the parties should co-operate in identifying a suitable single joint expert, and expert evidence should be single joint unless there are cogent reasons (Bryant v Trivallis); the joint statement and meetings; the Wales divergence under the 2022 Fitness Regs; Awaab's Law Phase 2 hazard framing. Sanctions for a unilateral party expert: the report is excluded, the claimant re-pleads and pays costs, and the claim is struck out where the re-plead is not made.",
        skills: [
          "Drafting the letter of instruction",
          "Framing the expert's questions to get admissible, HHSRS-mapped answers",
          "Preparing for the joint meeting",
          "Justifying single joint versus party expert with cogent reasons (Bryant v Trivallis)",
        ],
        drill: "Draft an expert instruction letter identifying the HHSRS hazards in issue and the precise questions the expert must answer, in England framing, and produce the three points to raise at the joint meeting.",
        boundary:
          "The expert is instructed within the firm's conduct and the expert's duty is to the court. The fee earner drafts the instruction, the firm instructs. England HHSRS and the Wales 2022 Fitness Regs are different regimes, never merged.",
        libraryLinks: [
          "Surveyor instruction letter (HHSRS 21 hazards) template",
          "HHSRS report structure",
          "Joint expert statement and meetings",
          "HHSRS: SI 2026/571, the 21 hazards and three bands",
          "Fire hazard inspection: Awaab's Phase 2",
          "Bryant v Trivallis digest",
        ],
      },
      {
        id: "part35",
        title: "Part 35 questions, expert report review and expert failure",
        stages: "17-18",
        content:
          "Putting questions to the expert under CPR Part 35; reviewing the returned report against the instruction, the HHSRS mapping and the liability proof; recognising an expert report that fails its purpose and the remedy route.",
        skills: [
          "Drafting Part 35 questions that corner the answer",
          "Expert report review against a checklist",
          "Escalating an expert failure within correct process",
        ],
        drill: "Review the returned expert report against the instruction, spot the two respects in which it is non-compliant, draft the Part 35 questions that close them, and state the remedy threshold if they go unanswered.",
        boundary:
          "Expert challenge is a preparatory step feeding the firm's trial strategy, not advocacy. An England HHSRS-questioned report must not be asserted against a Wales-flow file.",
        libraryLinks: [
          "Questions to the expert under CPR Part 35",
          "Expert report review checklist",
          "Expert failure: remedy options",
          "HHSRS national average tables",
        ],
      },
    ],
  },
  {
    slug: "command",
    name: "Command",
    price: 199,
    stages: "19 to 26",
    stageLabel: "Trial preparation, settlement and enforcement, plus the hard edges",
    overview:
      "The mastery band: driving a file to firm-ready trial state, offers strategy, enforcement, the hardest bundles and jurisdiction edge cases, and supervising a caseload with AI as support.",
    audience:
      "Senior fee earners and supervisors who already run a caseload and want the hard-edge skills and responsibility for other staff's files.",
    objectives: [
      "Drive the file to a firm-ready trial state: completed bundle and chronology, pre-trial review, and the advocate's material prepared within the firm's conduct.",
      "Run settlement strategy and enforcement: valuing and countering Part 36 and Calderbank offers, and converting a settlement into a Tomlin or a judgment into enforcement.",
      "Work the hardest evidence files: complex and partial disclosure, jurisdiction edge cases and the authorities.",
      "Supervise the caseload and delegation with AI as support, keeping sign-off sharp at scale.",
      "Teach the same process to more junior fee earners.",
    ],
    modules: [
      {
        id: "trial-prep",
        title: "Trial preparation: bundle, chronology and pre-trial readiness",
        stages: "19-21",
        content:
          "Completing the trial bundle against the court's directions; the usable trial chronology; pre-trial review and listing; readiness: what is outstanding, who files it, by when. All preparation is for the firm's case at trial.",
        skills: [
          "Bundle discipline to the standard a court expects",
          "Pre-trial readiness checklist",
          "Drafting the ready-for-trial internal note",
        ],
        drill: "Complete a partially built trial bundle into a clean index, cross-check the chronology against it, and produce the pre-trial outstanding-actions list.",
        boundary:
          "The fee earner assembles the bundle and chronology; filing the bundle and appearing are the firm's or advocate's acts.",
        libraryLinks: ["Trial preparation: stages 19 to 23 checklist"],
      },
      {
        id: "advocates-material",
        title: "Advocate's material and witness preparation within the firm",
        stages: "22-23",
        content:
          "The advocate's material the fee earner legitimately assembles: instructions to the instructed advocate, trial skeleton working papers, the chronology and an evidence map, handed to the firm or the instructed advocate for the hearing. Understanding what happens at trial without the fee earner appearing.",
        skills: [
          "Assembling a coherent advocate's pack",
          "Preparing the evidence map",
          "Understanding trial procedure so the pack is usable",
        ],
        drill: "Assemble the fee-earner-completable portion of the advocate's pack and produce a two-page evidence map the instructed advocate can lift; list the three items only the firm or advocate can file or do.",
        boundary:
          "The clearest, most-repeated boundary: HDR Keel and the fee earner do not attend court, do not appear, do not conduct advocacy, and do not issue or re-file at trial. Anything beyond preparation is referred back.",
        libraryLinks: ["Trial preparation: stages 19 to 23 checklist"],
      },
      {
        id: "offers-strategy",
        title: "Offers strategy and countering",
        stages: "20/24",
        content:
          "The full offers architecture: Part 36 offers with the 21-day acceptance window and costs consequences, Calderbank offers, defendant offers and without-prejudice negotiation; valuing an offer on amount, costs terms and expiry; the accept, counter, reject discipline with everything recorded.",
        skills: [
          "Strategic offer valuation and drafting",
          "The counter-offer letter",
          "Recording the offer file to the standard an audit expects",
        ],
        drill: "Given the trial-ready file, a defendant Part 36 of a stated sum plus a defendant Calderbank with a costs qualification, value both, write the reasoned counter, and state the decision: accept, counter, or press to trial.",
        boundary:
          "The fee earner records terms and drafts the recommendation but does not commit the client; acceptance or counter on the client's behalf is the instructed firm's decision. Costs terms and the 21-day clock are arithmetic the fee earner must not error on.",
        libraryLinks: [
          "CPR Part 36: offers to settle and costs consequences",
          "Part 36 offer with 21 day acceptance template",
          "Calderbank offer letter template",
          "Costs on the small claims track: Birmingham v Lee and Orton",
        ],
      },
      {
        id: "settling",
        title: "Settling the case: Tomlin, judgment and terms",
        stages: "24",
        content:
          "Turning an agreed settlement into a Tomlin order with stay and scheduled works and quantum, versus taking a judgment; the enforcement hook and recording settlement terms cleanly.",
        skills: [
          "Drafting the Tomlin schedule",
          "The stay-and-return mechanics",
          "Keeping the settlement enforceable",
        ],
        drill: "Given agreed terms, draft the Tomlin order schedule and state the enforcement route if the works are not completed or the sum not paid by the date.",
        boundary:
          "Approving and sealing the Tomlin is the court's act via the firm; the fee earner drafts the schedule for the firm to lodge. The consumer-settlement advice line is the firm's, not the course's.",
        libraryLinks: ["Tomlin order with stay and schedule template"],
      },
      {
        id: "enforce-money",
        title: "Enforcement of the money judgment",
        stages: "25",
        content:
          "Enforcement of the money judgment: the routes (warrant and control, charging order, third-party debt order, attachment of earnings) and which fits a disrepair damages award; the application mechanics prepared by the fee earner for the firm to make.",
        skills: [
          "Matching the enforcement method to the judgment debtor and sum",
          "Preparing the application pack",
          "Cost-benefit of enforcement",
        ],
        drill: "For an unpaid money judgment, choose and justify a primary and fallback enforcement method against the stated debtor profile and sum, and list the application documents the firm would make.",
        boundary:
          "Enforcement applications are made by the firm as the party's solicitor on the record; the fee earner prepares the pack and refers the application to the firm. HDR Keel does not issue or run enforcement applications.",
        libraryLinks: [
          "Settlement and enforcement: stages 24 to 26 checklist",
          "N244 application notice preparation note",
          "N260 statement of costs note",
        ],
      },
      {
        id: "enforce-works",
        title: "Enforcement of the works order and closing the file",
        stages: "26",
        content:
          "Enforcement and supervision of the works order where a repair order was made and not complied with; then clean closing of the file: costs resolved, funds received, archive, and the compliance review that confirms nothing crossed the boundary.",
        skills: [
          "Works-order enforcement analysis",
          "The file-close and compliance review",
          "The take-stock a senior fee earner runs over the whole caseload",
        ],
        drill: "Recognise breach of a works order or Tomlin schedule, select the enforcement route, and run the take-stock compliance review to confirm every court act stayed with the firm.",
        boundary:
          "Contempt and injunctive enforcement is court business conducted by the firm or instructed advocate; the fee earner analyses and recommends the route but does not bring the application.",
        libraryLinks: [
          "Settlement and enforcement: stages 24 to 26 checklist",
          "Taking stock: the compliance review checklist",
          "N244 application notice preparation note",
        ],
      },
      {
        id: "complex-disclosure",
        title: "Complex disclosure and jurisdiction edge cases",
        stages: "14-26",
        content:
          "The hardest bundles and the mastery core: partial records, missing years, disputed disrepair; jurisdiction edge cases (the interplay of s.11, s.9A, HFHA 2018 and Awaab's Law in England; RHWA 2016 and the 2022 Fitness Regs in Wales); and the SRA accountability framing the senior fee earner carries when they delegate and supervise.",
        skills: [
          "Mastering the hostile bundle",
          "Edge-case jurisdiction analysis from primary documents",
          "Supervision and AI-assisted delegation discipline",
        ],
        drill: "Work the hardest case: a file with a broken disclosure record, a border-line jurisdiction fact pattern, and a statutory and case-law interplay question. Produce the analysis that fixes jurisdiction from the primary documents and the top three disclosure-redirection moves.",
        boundary:
          "The module that carries the SRA accountability framing for AI use and delegation: the fee earner remains accountable for work product they sign or supervise, whatever tool assisted. The BYOK chat teaches the material and never veers into giving consumer legal advice. An England and Wales blur is the single highest-risk error a senior fee earner can rubber-stamp.",
        libraryLinks: [
          "Harvey v Heaver digest",
          "HHSRS: SI 2026/571, the 21 hazards and three bands",
          "Awaab's Law: SI 2025/1042",
          "LTA 1985 s.11 and s.9A explainers",
          "Monthly Updates (August 2026: HHSRS, Awaab's Phase 2, SRA AI warning notice)",
        ],
      },
    ],
  },
];

/** The full package is the sum of all three levels, at a genuine discount. */
export const COURSE_PACKAGE = {
  title: "The full passage",
  price: COURSE_PACKAGE_PRICE,
  sum: COURSE_PACKAGE_SUM,
  levelNames: COURSE_LEVELS.map((l) => l.name),
};
