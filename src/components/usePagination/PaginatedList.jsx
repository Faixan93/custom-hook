import React from "react";
import UsePagination from "./UsePagination";

const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

const PaginatedList = () => {
  const itemsPerPage = 5;
  const { currentPage, totalPages, nextPage, prevPage, goToPage } =
    UsePagination(items.length, itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h1>PaginatedList</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <span>
        {" "}
        Page {currentPage} of {totalPages}{" "}
      </span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>

      <input
        type="number"
        min="1"
        max={totalPages}
        value={currentPage}
        onChange={(e) => goToPage(Number(e.target.value))}
      />
    </div>
  );
};

export default PaginatedList;
