import { useEffect } from "react";

export default function DetailDrawer({ item, onClose }) {
  if (!item) return null;

  const createdAt = new Date(item.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // 🔥 ESC to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="drawer-backdrop backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <aside
        className="drawer-panel animate-slideIn"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* HEADER */}
        <div className="drawer-panel__header">
          <div>
            <span className="chip chip--accent">{item.source}</span>
            <h2 className="drawer-panel__title">{item.title}</h2>
          </div>

          <button
            onClick={onClose}
            className="action-button action-button--secondary"
          >
            Close
          </button>
        </div>

        {/* SUMMARY */}
        <p className="drawer-panel__summary">{item.summary}</p>

        {/* META GRID */}
        <div className="drawer-panel__meta">
          {[
            ["Status", item.status],
            ["Priority", item.priority],
            ["Score", item.score],
            ["Owner", item.owner || "Unassigned"],
            ["Created", createdAt],
          ].map(([label, value]) => (
            <div key={label} className="drawer-panel__meta-item">
              <span className="drawer-panel__meta-label">{label}</span>
              <div className="drawer-panel__meta-value">{value}</div>
            </div>
          ))}
        </div>

        {/* TAGS */}
        <div className="drawer-panel__tags">
          {item.tags?.map((tag) => (
            <span key={tag} className="chip chip--muted">
              {tag}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="drawer-panel__actions">
          <button className="action-button action-button--primary hover:scale-105 transition">
            Mark reviewed
          </button>
          <button className="action-button action-button--secondary">
            Snooze
          </button>
          <button className="action-button action-button--ghost hover:text-red-400">
            Escalate
          </button>
        </div>
      </aside>
    </div>
  );
}