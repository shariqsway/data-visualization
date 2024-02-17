import React from "react";
import { Checkbox, Loader } from "../components";
import { Product } from "../types";

interface TableProps {
  products: Product[];
  loading: boolean;
  checkedProductsDetails: Product[];
  onCheckboxChange: (productId: number, isChecked: boolean) => void;
}

const Table: React.FC<TableProps> = ({
  products,
  loading,
  checkedProductsDetails,
  onCheckboxChange,
}) => {
  if (loading) {
    return (
      <div className="w-full">
        <Loader height="50" width="50" />
      </div>
    );
  }

  const desktopTable = (
    <div className="overflow-x-auto">
      <table className="w-full text-base text-left text-gray-500 rounded-lg border">
        <thead className="text-base font-poppins text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-black"></th>
            <th scope="col" className="px-6 py-3 text-black">
              Product
            </th>
            <th scope="col" className="px-6 py-3 text-black">
              Brand
            </th>
            <th scope="col" className="px-6 py-3 text-black text-right">
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
                  checked={checkedProductsDetails.some(
                    (p) => p.id === product.id
                  )}
                  onChange={(isChecked) =>
                    onCheckboxChange(product.id, isChecked)
                  }
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product.title}</td>
              <td className="px-6 py-4">{product.brand}</td>
              <td className="px-6 py-4 text-right">
                {product.discountPercentage}%
              </td>
              <td className="px-6 py-4 text-right">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const mobileTable = (
    <div>
      {products?.map((product: Product) => (
        <div
          key={product.id}
          className="p-4 bg-white mr-4 ml-4 border-b even:bg-gray-50"
        >
          <div>
            <Checkbox
              checked={checkedProductsDetails.some((p) => p.id === product.id)}
              onChange={(isChecked) => onCheckboxChange(product.id, isChecked)}
            />
          </div>
          <div>
            <strong>Product:</strong> {product.title}
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

  return (
    <div>
      <div className="hidden sm:block">{desktopTable}</div>
      <div className="sm:hidden">{mobileTable}</div>
    </div>
  );
};

export default Table;
