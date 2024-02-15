import { useEffect, useState } from "react";
import { LuLineChart } from "react-icons/lu";
import "./App.css";
import { Chart, Pagination, Table } from "./components";
import { getProducts } from "./service/productService";
import { Product } from "./types";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [tableLoading, setTableLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const rowsPerPage = 10;
  const [checkedProducts, setCheckedProducts] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      setTableLoading(true);
      try {
        const data = await getProducts(currentPage * rowsPerPage, rowsPerPage);
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / rowsPerPage));
        setError(null);
      } catch (error) {
        setError("An error occurred while fetching products");
        setProducts([]);
      } finally {
        setTableLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage]);

  const handlePageClick = (selectedItem: { selected: number }): void => {
    setCurrentPage(selectedItem.selected);
  };

  const handleCheckboxChange = (productId: number) => {
    console.log("Checkbox changed for product ID:", productId);
  };

  return (
    <div className="app-container">
      <div className="header flex items-center justify-between bg-primary text-white p-6 font-poppins text-xl">
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
            <input
              type="text"
              placeholder="Search products . . ."
              value=""
              onChange={() => {}}
              id="inputField"
              className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-gray-200 font-poppins font-normal transition placeholder:text-gray-400 w-80"
            />
            <Pagination
              pageCount={totalPages}
              forcePage={currentPage}
              onPageChange={handlePageClick}
            />
          </div>
          <Table
            loading={tableLoading}
            products={products}
            onCheckboxChange={handleCheckboxChange}
            checkedProducts={checkedProducts}
            setCheckedProducts={setCheckedProducts}
          />
        </div>
        <div className="chart-container w-1/3">
          {!tableLoading && !error && <Chart products={products} />}
        </div>
      </div>
    </div>
  );
}

export default App;
