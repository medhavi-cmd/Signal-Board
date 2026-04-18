export default function Filters({
  filters,
  setFilters,
  sourceOptions = [],
  ownerOptions = [],
}) {
  return (
    <div className="toolbar__filters">
      <select
        className="select-control"
        value={filters.status}
        onChange={(e) =>
          setFilters({ ...filters, status: e.target.value })
        }
      >
        <option value="all">All Status</option>
        <option value="open">Open</option>
        <option value="reviewed">Reviewed</option>
      </select>

      <select
        className="select-control"
        value={filters.priority}
        onChange={(e) =>
          setFilters({ ...filters, priority: e.target.value })
        }
      >
        <option value="all">All Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <select
        className="select-control"
        value={filters.source}
        onChange={(e) =>
          setFilters({ ...filters, source: e.target.value })
        }
      >
        <option value="all">All Sources</option>
        {sourceOptions.map((source) => (
          <option key={source} value={source}>
            {source}
          </option>
        ))}
      </select>

      <select
        className="select-control"
        value={filters.owner}
        onChange={(e) =>
          setFilters({ ...filters, owner: e.target.value })
        }
      >
        <option value="all">All Owners</option>
        {ownerOptions.map((owner) => (
          <option key={owner} value={owner}>
            {owner === "unassigned" ? "Unassigned" : owner}
          </option>
        ))}
      </select>
    </div>
  );
}