import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function SearchBar({ search, setSearch }) {
  const inputRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        inputRef.current.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const clearSearch = () => {
    setSearch("");
    inputRef.current?.focus();
  };

  return (
    <label className="control relative">
      <span className="sr-only">Search signals</span>
      <input
        ref={inputRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search signals, owners, sources... /"
        className="search-input pr-10"
      />
      {search && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-500 transition hover:bg-slate-200/70 hover:text-slate-700"
          aria-label="Clear search"
        >
          <X className="h-4 w-4 color-slate-500" aria-hidden="true" />
        </button>
      )}
    </label>
  );
}