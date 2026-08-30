type CardProps = {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function Card({ title, icon, children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-xl border border-white/10 bg-surface p-6 transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 ${className}`}
    >
      {icon ? <div className="mb-4 text-accent">{icon}</div> : null}
      {title ? (
        <h3 className="mb-3 font-display text-xl font-medium text-text">{title}</h3>
      ) : null}
      <div className="text-base leading-relaxed text-muted">{children}</div>
    </article>
  );
}
