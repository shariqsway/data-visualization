import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { Button, ButtonSecondary } from "../components";

interface SearchProps {
  placeholder: string;
  onSearchButtonClick: (searchValue: string) => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder,
  onSearchButtonClick,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    onSearchButtonClick(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    onSearchButtonClick("");
  };

  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-gray-200 font-poppins font-normal text-base transition placeholder:text-gray-400 w-72"
      />
      <Button
        title="Search"
        onClick={handleButtonClick}
        icon={<IoSearch size={20} />}
      />
      <ButtonSecondary
        title="Clear"
        onClick={handleClear}
        icon={<MdOutlineRemoveCircleOutline size={20} />}
      />
    </div>
  );
};

export default Search;
