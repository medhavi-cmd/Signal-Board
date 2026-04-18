export function filterItems(items, search, filters) {
  return items.filter((item) => {
    const normalizedSearch = search.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(normalizedSearch) ||
      item.summary.toLowerCase().includes(normalizedSearch) ||
      item.source.toLowerCase().includes(normalizedSearch) ||
      (item.owner ?? "unassigned").toLowerCase().includes(normalizedSearch) ||
      item.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));

    const matchesStatus =
      filters.status === "all" || item.status === filters.status;

    const matchesPriority =
      filters.priority === "all" || item.priority === filters.priority;

    const matchesSource =
      filters.source === "all" || item.source === filters.source;

    const ownerValue = item.owner ?? "unassigned";
    const matchesOwner =
      filters.owner === "all" || ownerValue === filters.owner;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority &&
      matchesSource &&
      matchesOwner
    );
  });
}