export default function SortDropdown({ sort, setSort }) {
  return (
    <select
      className="select-control select-control--dark"
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="newest">Created Time (Newest)</option>
      <option value="score">Score (Highest)</option>
      <option value="priority">Priority (High to Low)</option>
    </select>
  );
}