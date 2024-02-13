import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Checkbox, Pagination } from "../components";
import { getProducts } from "../service/productService";
import { Product, ProductsResponse } from "../types";

const Table: React.FC = () => {
  const { data, error, isLoading } = useQuery<ProductsResponse, Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [currentPage, setCurrentPage] = useState<number>(0);
  const rowsPerPage = 10;

  const handlePageClick = (selectedItem: { selected: number }): void => {
    setCurrentPage(selectedItem.selected);
  };

  const handleCheckboxChange = () => {
    console.log("something changed.");
  };

  const pageCount = data ? Math.ceil(data.products.length / rowsPerPage) : 0;
  const products = data?.products.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  if (isLoading)
    return (
      <div>
        <p>Loading Data ...</p>
      </div>
    );

  if (error)
    return (
      <div>
        <p>An error occured getting products.</p>
      </div>
    );

  const mobileTable = (
    <div>
      {products?.map((product: Product) => (
        <div
          key={product.title}
          className="p-4 bg-white mr-4 ml-4 border-b even:bg-gray-50"
        >
          <div>
            <Checkbox
              checked={true}
              onChange={() => {
                handleCheckboxChange();
              }}
            />
          </div>
          <div>
            <strong>Title:</strong> {product.title}
          </div>
          <div>
            <strong>Brand:</strong> {product.brand}
          </div>
          <div>
            <strong>Discount:</strong> {product.discountPercentage}%
          </div>
          <div>
            <strong>Price:</strong> ${product.price}
          </div>
        </div>
      ))}
    </div>
  );

  const desktopTable = (
    <div className="overflow-x-auto">
      <table className="w-full text-base text-left text-gray-500 rounded-sm border mt-5">
        <thead className="text-base font-poppins text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-black"></th>
            <th scope="col" className="px-6 py-3 text-black">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-black">
              Brand
            </th>
            <th scope="col" className="px-6 py-3 text-black">
              Discount
            </th>
            <th scope="col" className="px-6 py-3 text-black text-right">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="font-poppins text-base">
          {products?.map((product: Product) => (
            <tr
              key={product.title}
              className="bg-white even:bg-gray-50 border-b text-black"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <Checkbox
                  checked={true}
                  onChange={() => {
                    handleCheckboxChange();
                  }}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product.title}</td>
              <td className="px-6 py-4">{product.brand}</td>
              <td className="px-6 py-4">{product.discountPercentage}%</td>
              <td className="px-6 py-4 text-right">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <div className="sm:hidden">{mobileTable}</div>
      <div className="hidden sm:block">{desktopTable}</div>
      <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
    </div>
  );
};

export default Table;
