import { useState } from "react";
import { Link } from "react-router-dom";
import notification from "../../assets/Notification_icon.png";
import { GrNotification } from "react-icons/gr";

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <li className="relative">
      <Link
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
        to="#"
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px]"
      >
        <span
          className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full ${
            notifying === false ? "hidden" : "inline"
          }`}
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>
        </span>
        <GrNotification className="text-2xl" />
      </Link>

      {dropdownOpen && (
        <div
          className={`absolute z-50 -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm bg-white p-2.5 shadow-lg border border-gray-300 sm:right-0 sm:w-80`}
        >
          <div className="px-4.5 py-3">
            <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
          </div>

          <ul className="flex h-auto flex-col overflow-y-auto">
            <li>
              <Link
                className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3"
                to="#"
              >
                <p className="text-sm">
                  <span className="text-black">
                    Edit your information in a swipe
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </p>

                <p className="text-xs">12 May, 2025</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3"
                to="#"
              >
                <p className="text-sm">
                  <span className="text-black dark:text-white">
                    It is a long established fact
                  </span>{" "}
                  that a reader will be distracted by the readable.
                </p>

                <p className="text-xs">24 Feb, 2025</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3"
                to="#"
              >
                <p className="text-sm">
                  <span className="text-black dark:text-white">
                    There are many variations
                  </span>{" "}
                  of passages of Lorem Ipsum available, but the majority have
                  suffered
                </p>

                <p className="text-xs">04 Jan, 2025</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3"
                to="#"
              >
                <p className="text-sm">
                  <span className="text-black dark:text-white">
                    There are many variations
                  </span>{" "}
                  of passages of Lorem Ipsum available, but the majority have
                  suffered
                </p>

                <p className="text-xs">01 Dec, 2024</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default DropdownNotification;
