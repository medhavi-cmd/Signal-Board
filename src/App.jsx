import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import SortDropdown from "./components/SortDropdown";
import ItemList from "./components/ItemList";
import DetailDrawer from "./components/DetailDrawer";

import LoadingState from "./states/LoadingState";
import EmptyState from "./states/EmptyState";
import ErrorState from "./states/ErrorState";

import data from "./data/review-items.json";
import { filterItems } from "./utils/filter";
import { sortItems } from "./utils/sort";
import useLocalStorage from "./hooks/useLocalStorage";

const totalCount = data.length;
const openCount = data.filter((item) => item.status === "open").length;
const highPriorityCount = data.filter((item) => item.priority === "high").length;
const averageScore = Math.round(
  data.reduce((sum, item) => sum + item.score, 0) / data.length,
);

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");

  const [filters, setFilters] = useLocalStorage("filters", {
    status: "all",
    priority: "all",
    source: "all",
    owner: "all",
  });

  const [sort, setSort] = useLocalStorage("sort", "newest");

  const [finalItems, setFinalItems] = useState([]);

  const normalizedFilters = {
    status: filters.status ?? "all",
    priority: filters.priority ?? "all",
    source: filters.source ?? "all",
    owner: filters.owner ?? "all",
  };

  const sourceOptions = [...new Set(items.map((item) => item.source))].sort();
  const ownerOptions = [...new Set(items.map((item) => item.owner ?? "unassigned"))].sort();

  useEffect(() => {
    setTimeout(() => {
      try {
        setItems(data);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    }, 500);
  }, []);

  // 🔥 Apply filter + sort together
  useEffect(() => {
    let result = filterItems(items, search, normalizedFilters);
    result = sortItems(result, sort);
    setFinalItems(result);
  }, [items, search, normalizedFilters, sort]);

  return (
    <div className="app-shell">
      <div className="app-shell__grain" />

      <main className="app-shell__content page-grid">
        <Header
          total={totalCount}
          openCount={openCount}
          highPriorityCount={highPriorityCount}
          averageScore={averageScore}
        />

        <section className="surface toolbar">
          <div className="toolbar__row">
            <SearchBar search={search} setSearch={setSearch} />
            <SortDropdown sort={sort} setSort={setSort} />
          </div>

          <Filters
            filters={normalizedFilters}
            setFilters={setFilters}
            sourceOptions={sourceOptions}
            ownerOptions={ownerOptions}
          />

          <div className="results-header">
            <div>
              <h2 className="results-header__title">Review queue</h2>
              <p className="results-header__meta">
                Showing {finalItems.length} of {totalCount} signals
              </p>
            </div>
          </div>
        </section>

        {loading && <LoadingState />}
        {error && <ErrorState />}
        {!loading && finalItems.length === 0 && <EmptyState />}

        {!loading && !error && finalItems.length > 0 && (
          <ItemList items={finalItems} onSelect={setSelectedItem} />
        )}
      </main>

      <DetailDrawer
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}

export default App;