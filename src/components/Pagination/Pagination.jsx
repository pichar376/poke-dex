import React from "react";
import { CPagination, CPaginationItem } from "@coreui/react";

const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
}) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <CPaginationItem
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </CPaginationItem>
      );
    }
    return pages;
  };

  return (
    <CPagination>
      <CPaginationItem
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {"<<"}
      </CPaginationItem>
      {renderPageNumbers()}
      <CPaginationItem
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {">>"}
      </CPaginationItem>
    </CPagination>
  );
};

export default Pagination;
