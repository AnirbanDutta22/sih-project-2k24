import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";

const langLinks = `cursor-pointer border-b border-violet-500 p-2`;

const DropdownLang = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event, lng) => {
    event.preventDefault();
    i18n.changeLanguage(lng);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center"
        to="#"
      >
        <GrLanguage className="text-2xl" />
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </Link>

      {/* <!-- Dropdown menu --> */}
      {dropdownOpen && (
        <div
          id="dropdown"
          className={`w-fit z-10 absolute top-10 right-0 bg-white divide-y text-black divide-gray-100 rounded-lg shadow`}
        >
          <ul className="px-3 py-2 text-md">
            <li
              className={langLinks}
              onClick={(event) => changeLanguage(event, "en")}
            >
              English
            </li>
            <li
              className={langLinks}
              onClick={(event) => changeLanguage(event, "hi")}
            >
              हिन्दी
            </li>
            <li
              className={langLinks}
              onClick={(event) => changeLanguage(event, "bn")}
            >
              বাংলা
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownLang;
