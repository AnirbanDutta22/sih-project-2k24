/* eslint-disable react/prop-types */
import { useState } from "react";

const Collapse = ({ collapseText, className, children }) => {
  const [isCollapseOpen, setCollapseOpen] = useState(false);

  return (
    <div className="relative w-full bg-gray-200 h-auto">
      <div
        className={`px-5 py-3 flex items-center justify-between ${className}`}
      >
        <span>{collapseText}</span>
        <svg
          className="w-2.5 h-2.5 ms-3 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
          onClick={() => setCollapseOpen((prev) => !prev)}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>
      {isCollapseOpen && <div className="bg-white px-5 py-3">{children}</div>}
    </div>
  );
};

export default Collapse;
