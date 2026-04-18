export default function EmptyState() {
  return (
    <div className="empty-state">
      <div className="state-card">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg"
          alt="No data illustration"
          className="mx-auto mb-4 h-auto w-full max-w-70 rounded-xl border border-slate-200 object-cover"
        />
        <div className="state-card__title">No results found</div>
        <p className="state-card__copy mt-2">
          No matching signals right now. Try a broader search or reset your filters.
        </p>
      </div>
    </div>
  );
}