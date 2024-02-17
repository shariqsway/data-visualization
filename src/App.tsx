import { useEffect, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuLineChart } from "react-icons/lu";
import "./App.css";
import { Button, Chart, Pagination, Table } from "./components";
import { ROWS_PER_PAGE } from "./constants";
import { getProducts } from "./service/productService";
import { Product } from "./types";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [checkedProductsDetails, setCheckedProductsDetails] = useState<
    Product[]
  >([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts(
          currentPage * ROWS_PER_PAGE,
          ROWS_PER_PAGE
        );
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / ROWS_PER_PAGE));
        setError(null);

        if (currentPage === 0) {
          if (
            checkedProductsDetails.length === 0 ||
            (checkedProductsDetails.length > 0 && products.length === 0)
          ) {
            const initialOrRevisited = data.products
              .slice(0, 5)
              .filter(
                (product) =>
                  !checkedProductsDetails.find((p) => p.id === product.id)
              );

            if (initialOrRevisited.length > 0) {
              setCheckedProductsDetails([
                ...checkedProductsDetails,
                ...initialOrRevisited,
              ]);
            }
          }
        }
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching products");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage]);

  const handlePageClick = (selectedItem: { selected: number }): void => {
    setCurrentPage(selectedItem.selected);
  };

  const handleCheckboxChange = (productId: number, isChecked: boolean) => {
    if (isChecked) {
      const productToAdd = products.find((product) => product.id === productId);
      if (
        productToAdd &&
        !checkedProductsDetails.some((product) => product.id === productId)
      ) {
        setCheckedProductsDetails((prev) => [...prev, productToAdd]);
      }
    } else {
      setCheckedProductsDetails((prev) =>
        prev.filter((product) => product.id !== productId)
      );
    }
  };

  return (
    <div className="app-container">
      <div className="header flex items-center justify-between bg-primary text-white pl-10 pr-10 pt-5 pb-5 font-poppins text-xl mb-5">
        <div className="flex">
          <LuLineChart size={30} />
          <div className="ml-4">Data Visualization</div>
        </div>
        <p>Demo</p>
      </div>
      <div className="content-container flex flex-row mr-10 ml-10 gap-10">
        <div className="table-container w-2/3">
          {error && <p>{error}</p>}
          <div className="flex items-center justify-between">
            {totalPages > 0 && (
              <Pagination
                pageCount={totalPages}
                forcePage={currentPage < totalPages ? currentPage : 0}
                onPageChange={handlePageClick}
              />
            )}
            {!loading && (
              <div className="flex items-center justify-center gap-3">
                <input
                  type="text"
                  placeholder="Search products . . ."
                  value=""
                  onChange={() => {}}
                  id="inputField"
                  className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-gray-200 font-poppins font-normal transition placeholder:text-gray-400 w-60"
                />
                <Button title="Unselect All" />
              </div>
            )}
          </div>
          <Table
            loading={loading}
            products={products}
            onCheckboxChange={handleCheckboxChange}
            checkedProductsDetails={checkedProductsDetails}
          />
        </div>
        <div className="chart-container w-1/3">
          {!loading && !error && (
            <>
              <Chart products={checkedProductsDetails} />
              <span className="flex items-center justify-center rounded-xl px-4 py-3 bg-primaryLight text-primary text-sm mt-5 font-poppins font-medium border-[#ffe1d5] border-2">
                <IoMdInformationCircleOutline size={25} className="mr-2" />
                Choose products from the table and chart will update
                accordingly.
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
