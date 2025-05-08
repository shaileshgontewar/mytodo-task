import React from 'react';

const Pagination = ({ currentPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / 10);

  return (
    <div className="flex justify-center mt-4">
      <button
        className="p-2 border rounded-md"
        onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
      >
        Previous
      </button>
      <span className="mx-2">{currentPage} / {totalPages}</span>
      <button
        className="p-2 border rounded-md"
        onClick={() => onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
