export default function ItemCard({ item, onClick }) {
  const priorityColor = {
    high: "chip--high",
    medium: "chip--medium",
    low: "chip--low",
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick(item);
    }
  };

  const formatDate = (date) => {
    const diff = Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60));
    if (diff < 24) return `${diff}h ago`;
    return new Date(date).toLocaleDateString();
  };

  return (
    <div
      onClick={() => onClick(item)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open details for ${item.title}`}
      className="signal-card group cursor-pointer transform-gpu will-change-transform transition duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]"
    >
      {/* TOP */}
      <div className="signal-card__top">
        <div>
          <div className="signal-card__meta">
            <span className="chip chip--accent">{item.source}</span>
            <span className="chip chip--muted">{item.status}</span>
          </div>

          <h2 className="signal-card__title group-hover:underline">
            {item.title}
          </h2>
        </div>

        <span className={`chip ${priorityColor[item.priority]}`}>
          {item.priority}
        </span>
      </div>

      {/* SUMMARY */}
      <p className="signal-card__summary line-clamp-2">
        {item.summary}
      </p>

      {/* FOOTER */}
      <div className="signal-card__footer">
        <div className="flex gap-3 text-sm text-gray-400">
          <span>Score {item.score}</span>
          <span>{formatDate(item.createdAt)}</span>
        </div>

        <span className="text-sm text-gray-300">
          {item.owner || "Unassigned"}
        </span>
      </div>
    </div>
  );
}



