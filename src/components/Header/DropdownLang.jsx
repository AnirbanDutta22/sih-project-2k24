import { useState } from "react";
import { useTranslation } from "react-i18next";

const DropdownLang = () => {
  const { i18n } = useTranslation("steps");

  const changeLanguage = (event, lng) => {
    event.preventDefault();
    i18n.changeLanguage(lng);
  };

  const [isLangMenuOpen, setLangMenuOpen] = useState(true);

  const toggleLangMenu = () => {
    setLangMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        className="text-white bg-violet-400 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center"
        type="button"
        onClick={toggleLangMenu}
      >
        Select Language{" "}
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
      </button>

      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className={`z-10 ${
          isLangMenuOpen ? "hidden" : "block"
        } absolute top-10 left-0 bg-white divide-y text-black divide-gray-100 rounded-lg shadow w-44`}
      >
        <ul className="py-2 text-sm">
          <li onClick={(event) => changeLanguage(event, "en")}>English</li>
          <li onClick={(event) => changeLanguage(event, "hi")}>हिन्दी</li>
          <li onClick={(event) => changeLanguage(event, "bn")}>বাংলা</li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownLang;
