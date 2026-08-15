"use client";

import { useMemo, useState } from "react";
import { WorkerCard } from "@/components/WorkerCard";
import type { Worker } from "@/lib/workers";

export function MarketplaceCatalog({ workers }: { workers: Worker[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(workers.map((worker) => worker.category)))];
  const matches = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return workers.filter((worker) => {
      const searchable = [worker.name, worker.role, worker.category, worker.description].join(" ").toLowerCase();
      return (category === "All" || worker.category === category) && searchable.includes(normalizedQuery);
    });
  }, [category, query, workers]);

  return (
    <section className="section marketplace" aria-labelledby="marketplace-results">
      <div className="marketFilters">
        <label className="searchField" htmlFor="worker-search">
          Search workers
          <input id="worker-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try a name, role, or skill" />
        </label>
        <label htmlFor="category-filter">
          Category
          <select id="category-filter" value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div className="marketIntro">
        <strong id="marketplace-results" aria-live="polite">{matches.length} {matches.length === 1 ? "worker" : "workers"} found</strong>
        <p>Every worker adapts to your tools, context, and standards.</p>
      </div>
      {matches.length > 0 ? (
        <div className="cardGrid">{matches.map((worker) => <WorkerCard key={worker.slug} worker={worker} />)}</div>
      ) : (
        <div className="emptyState">
          <h2>No workers match those filters.</h2>
          <p>Try a broader search or explore every category.</p>
          <button className="secondary" type="button" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button>
        </div>
      )}
    </section>
  );
}
