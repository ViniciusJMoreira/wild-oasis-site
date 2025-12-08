"use client";
// Next.js imports
import { useSearchParams, useRouter, usePathname } from "next/navigation";

function Filter() {
  // Questo hook ci consente di leggere i parametri di ricerca dall'URL
  const searchParams = useSearchParams();
  // Questo hook ci consente di navigare programmaticamente tra le pagine modificando l'URL
  const router = useRouter();
  // Questo hook ci consente di ottenere il percorso corrente dell'URL
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") || "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("capacity", filter);
    router.replace(`${pathname}?${params}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button handleFilter={handleFilter} filter="all" isActive={activeFilter}>
        All cabins
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="small"
        isActive={activeFilter}
      >
        1&mdash;3
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="medium"
        isActive={activeFilter}
      >
        4&mdash;8
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="large"
        isActive={activeFilter}
      >
        8&mdash;12
      </Button>
    </div>
  );
}

function Button({ children, handleFilter, filter, isActive }) {
  return (
    <button
      className={`${
        isActive === filter ? "bg-primary-700 text-primary-50" : ""
      } px-5 py-2 hover:bg-primary-700`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
