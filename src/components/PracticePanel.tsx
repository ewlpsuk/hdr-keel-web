const facts = [
  { label: "Who we work for", value: "Solicitor firms only" },
  { label: "Conduct", value: "Your firm stays on the record" },
  { label: "Work", value: "Worked under instruction" },
  { label: "Where", value: "England and Wales" },
];

export default function PracticePanel() {
  return (
    <div className="flex h-full min-h-[22rem] flex-col overflow-hidden rounded-xl border border-line bg-surface">
      <div className="bg-accent px-8 py-5 text-on-accent">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-2-soft">
          The practice
        </p>
        <p className="mt-2 font-display text-2xl font-semibold leading-snug">
          A housing disrepair team working under your instruction.
        </p>
      </div>
      <dl className="flex flex-1 flex-col justify-end space-y-4 p-8">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="grid grid-cols-[8.5rem_1fr] gap-3 border-l-[3px] border-l-accent-2 pl-3 text-sm"
          >
            <dt className="text-muted">{fact.label}</dt>
            <dd className="font-medium text-text">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
