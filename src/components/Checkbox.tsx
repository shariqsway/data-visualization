import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  const toggleCheckbox = () => {
    onChange(!checked);
  };

  return (
    <div className="w-full flex gap-2">
      <input
        className="
        peer relative shrink-0 appearance-none w-4 h-4 border-2 border-primary rounded-sm mt-1 bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-4 focus:ring-primaryLight
        checked:bg-primary checked:border-0 transition
      "
        type="checkbox"
        checked={checked}
        onChange={toggleCheckbox}
      />
      <svg
        className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default Checkbox;
