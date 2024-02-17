import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  forcePage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  forcePage,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      containerClassName={
        "flex isolate -space-x-px rounded-md bg-transparent mb-10 mt-10"
      }
      previousLabel={<FaChevronLeft className="h-5 w-5" aria-hidden="true" />}
      nextLabel={<FaChevronRight className="h-5 w-5" aria-hidden="true" />}
      breakLabel={<HiOutlineDotsHorizontal className="h-5" />}
      breakClassName={
        "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300"
      }
      pageCount={pageCount}
      forcePage={forcePage}
      onPageChange={onPageChange}
      marginPagesDisplayed={2}
      pageRangeDisplayed={pageCount}
      pageClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300"
      pageLinkClassName="block w-full h-full text-center"
      activeClassName="bg-primary hover:bg-primary text-white"
      activeLinkClassName="focus:outline-none"
      previousClassName={
        "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20"
      }
      nextClassName={
        "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20"
      }
      disabledClassName={"opacity-50 cursor-not-allowed"}
    />
  );
};

export default Pagination;
