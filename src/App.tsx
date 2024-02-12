import "./App.css";
import { Table } from "./components";

function App() {
  return (
    <div>
      <div className="flex items-center justify-between bg-primary text-white p-6 font-poppins text-2xl">
        <div className="logo">Data Visualization App</div>
        <p>Demo</p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
