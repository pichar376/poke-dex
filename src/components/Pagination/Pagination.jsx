import React from "react";
import { CPagination, CPaginationItem } from "@coreui/react";
import { cilArrowThickToRight, cilArrowThickToLeft } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
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
    <CPagination
      className="w-full d-flex justify-content-center mt-4 
    "
    >
      <CPaginationItem
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <CIcon icon={cilArrowThickToLeft} size="sm" />
      </CPaginationItem>
      {renderPageNumbers()}
      <CPaginationItem
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <CIcon icon={cilArrowThickToRight} size="sm" />
      </CPaginationItem>
    </CPagination>
  );
};

export default Pagination;
