import React from "react";
import { LuLineChart } from "react-icons/lu";

const Header: React.FC = () => {
  return (
    <div className="header flex items-center justify-between bg-primary text-white pl-10 pr-10 pt-5 pb-5 font-poppins text-xl mb-5">
      <div className="flex">
        <LuLineChart size={30} />
        <div className="ml-4">Data Visualization</div>
      </div>
    </div>
  );
};

export default Header;
