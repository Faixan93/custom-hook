import { useState, useMemo } from "react";

const UsePagination = (totalItems, itemPerPage = 10) => {
  totalItems = Math.max(0, totalItems);
  itemPerPage = Math.max(1, itemPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(totalItems / itemPerPage),
    [totalItems, itemPerPage]
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return { currentPage, totalPages, nextPage, prevPage, goToPage };
};

export default UsePagination;
