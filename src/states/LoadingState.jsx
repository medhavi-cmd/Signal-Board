export default function LoadingState() {
  return (
    <div className="loading-state">
      <div className="state-card">
        <div
          className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[rgba(15,118,110,0.25)] border-t-(--accent)"
          aria-hidden="true"
        />
        <p className="state-card__title mt-4">Loading signals...</p>
      </div>
    </div>
  );
}