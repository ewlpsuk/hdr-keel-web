type MarkName = "Housing law" | "Case law" | "Regulation" | "Legal tech" | "Firm practice";

type CategoryMarksProps = {
  name: MarkName;
  size?: number;
  className?: string;
};

const CYAN = "#00f2ff";
const ORANGE = "#ff8c00";
const NAVY = "#0a0e10";

/**
 * Five flat two-tone geometric category marks (Oliver Wright design spec,
 * 01/09/2026). Each shares a 2px effective stroke, rounded corners and a firm
 * horizontal keel baseline so the family reads as HDR Keel. Cyan primary
 * geometry, navy cut-out, one small orange accent. aria-hidden: the category
 * is always carried by visible text beside the mark.
 */
export default function CategoryMarks({ name, size = 48, className = "" }: CategoryMarksProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    "aria-hidden": true as const,
    className,
  };

  switch (name) {
    case "Housing law":
      // Roof and gable: roof triangle + keel line, door cut, lit window
      return (
        <svg {...common}>
          <path d="M24 6 L40 20 L8 20 Z" stroke={CYAN} strokeWidth="2" strokeLinejoin="round" />
          <path d="M24 20 L24 40" stroke={CYAN} strokeWidth="2" />
          <path d="M18 20 L30 20 L30 40 L18 40 Z" fill={NAVY} />
          <rect x="20" y="24" width="8" height="12" fill={NAVY} stroke={CYAN} strokeWidth="2" />
          <rect x="13" y="14" width="7" height="7" fill={NAVY} stroke={ORANGE} strokeWidth="2" />
          <path d="M8 40 H40" stroke={CYAN} strokeWidth="2" />
        </svg>
      );
    case "Case law":
      // Balance scales: beam + three chevrons, slit cut, fulcrum dot
      return (
        <svg {...common}>
          <path d="M10 16 H38" stroke={CYAN} strokeWidth="2" strokeLinecap="round" />
          <path d="M16 16 V30 M32 16 V30" stroke={CYAN} strokeWidth="2" />
          <path d="M12 30 L16 36 L20 30" stroke={CYAN} strokeWidth="2" strokeLinejoin="round" fill="none" />
          <path d="M28 30 L32 36 L36 30" stroke={CYAN} strokeWidth="2" strokeLinejoin="round" fill="none" />
          <path d="M24 16 V8" stroke={CYAN} strokeWidth="2" />
          <circle cx="24" cy="16" r="2.5" fill={NAVY} stroke={ORANGE} strokeWidth="2" />
          <path d="M8 40 H40" stroke={CYAN} strokeWidth="2" />
        </svg>
      );
    case "Regulation":
      // Shield + chevron: shield outline, hollow block, compliance tick
      return (
        <svg {...common}>
          <path
            d="M14 10 H34 V22 C34 30 29 35 24 40 C19 35 14 30 14 22 Z"
            stroke={CYAN}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M16 24 L32 24 L28 32 L20 32 Z" fill={NAVY} stroke={CYAN} strokeWidth="2" strokeLinejoin="round" />
          <path d="M24 24 L24 32" stroke={ORANGE} strokeWidth="2" />
          <path d="M8 40 H40" stroke={CYAN} strokeWidth="2" />
        </svg>
      );
    case "Legal tech":
      // Node + link: central ring, two satellites, gap marker on broken link
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="5" stroke={CYAN} strokeWidth="2" />
          <circle cx="10" cy="14" r="4" stroke={CYAN} strokeWidth="2" />
          <circle cx="38" cy="34" r="4" stroke={CYAN} strokeWidth="2" />
          <path d="M14 16 L20 21" stroke={CYAN} strokeWidth="2" />
          <path d="M28 28 L35 32" stroke={CYAN} strokeWidth="2" />
          <path d="M30 15 L38 20" stroke={CYAN} strokeWidth="2" />
          <circle cx="34" cy="17" r="2" fill={NAVY} stroke={ORANGE} strokeWidth="2" />
          <path d="M8 40 H40" stroke={CYAN} strokeWidth="2" />
        </svg>
      );
    case "Firm practice":
      // Briefcase + keel: body, handle, round cut, seam strip
      return (
        <svg {...common}>
          <path d="M14 20 H34 V36 H14 Z" stroke={CYAN} strokeWidth="2" strokeLinejoin="round" />
          <path d="M18 20 V15 C18 13 21 12 24 12 C27 12 30 13 30 15 V20" stroke={CYAN} strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="28" r="4" fill={NAVY} stroke={CYAN} strokeWidth="2" />
          <path d="M24 24 V32" stroke={ORANGE} strokeWidth="2" />
          <path d="M8 40 H40" stroke={CYAN} strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
}
