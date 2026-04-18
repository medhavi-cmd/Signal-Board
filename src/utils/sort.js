export function sortItems(items, sortType) {
  const sorted = [...items];

  switch (sortType) {
    case "newest":
      return sorted.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

    case "score":
      return sorted.sort((a, b) => b.score - a.score);

    case "priority":
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return sorted.sort(
        (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
      );

    default:
      return sorted;
  }
}