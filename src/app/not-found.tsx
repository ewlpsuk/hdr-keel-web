import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-2">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-text">
        That page is not here
      </h1>
      <p className="mt-4 text-base text-muted sm:text-lg">
        The address may be mistyped, or the page may have moved. Return to the
        HDR Keel home page to continue.
      </p>
      <div
        aria-hidden="true"
        className="mx-auto mt-8 h-[3px] w-24 bg-accent"
      />
      <div className="mt-8">
        <Button href="/" variant="primary">
          Back to home
        </Button>
      </div>
    </div>
  );
}
