import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "../context/AuthContext";
import Style from "../styles/NavBar2.module.css";

const NavBar2 = () => {
  const [isToggle, isSetToggle] = useState(false);

  const handleToggleMenu = () => {
    isSetToggle(!isToggle);
  };

  const { auth } = useContext(AuthContext);
  const [user, setUser] = auth;

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser({});
  };

  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <nav className="border-gray-200 px-5 sm:px-24 py-2.5 rounded Kn">
      <div className="flex md:items-center justify-between">
        <div className="md:flex items-center justify-evenly">
          <div className="md:mr-16 md:pt-0 pt-2 md:mt-0">
            <Link href="/home">
              <a className="flex">
                {/* <Image
                  className="mr-4 w-[18.26px] h-[24.64px]"
                  loader={myLoader}
                  src="/images/logo.png"
                  alt="Bursement Logo"
                  width="18.26px"
                  height="24.64px"
                />
                <span className="ml-4 -mb-1.5 self-center text-2xl font-normal whitespace-nowrap dark:text-white">
                  Bursement
                </span> */}
                <Image
                  className="mr-4 w-[18.26px] h-[24.64px]"
                  loader={myLoader}
                  src="/images/Bursement-Logo.png"
                  alt="Bursement Logo"
                  width="161.68px"
                  height="37.26px"
                />
              </a>
            </Link>
          </div>

          <div>
            <ul
              className={`md:flex flex-col mt-4 md:ml-0 ml-2 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ${
                isToggle ? "" : "hidden"
              }`}
            >
              <li>
                <Link href="/home">
                  <a
                    className="block py-2 pr-4 md:pl-3 md:mr-5 text-[#7E8597] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#605BFF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[18px]"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a className="block py-2 pr-4 md:pl-3 md:mr-5 text-[#7E8597] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#605BFF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[18px]">
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/whyBursement">
                  <a className="block py-2 pr-4 md:pl-3 md:mr-5 text-[#7E8597] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#605BFF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[18px]">
                    Why Bursement?
                  </a>
                </Link>
              </li>
              <li className={`${Style.MenuParent}`}>
                <div className="flex hover:text-[#605BFF] text-[#7E8597]">
                  <p className="block py-2 pr-4 md:pl-3 md:mr-1 text-[#7E8597] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#605BFF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[18px] cursor-pointer">
                    Resources
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:-mt-1 mt-1.5 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {/* <ul className={`${Style.MenuChild}`}>
                  <li>Menu 1</li>
                  <li>Menu 2</li>
                </ul> */}
                <div className={`bg-[#fff] md:p-4 px-4 ${Style.MenuChild} w-[250px] z-20`}>
                  <ul>
                    <li className="md:mb-4">
                      <Link href="https://resources.bursement.com">
                        <a className="block py-2 pr-4 md:pl-3 md:mr-5 text-[#7E8597] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#605BFF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[18px]">
                          Blog
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/bursement-campaign">
                        <a className="block py-2 pr-4 md:pl-3 md:mr-5 text-[#7E8597] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#605BFF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[18px]">
                          Bursement Campaign
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link href="/support">
                  <a className="block py-2 pr-4 md:pl-3 md:mr-5 text-[#7E8597] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#605BFF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[18px]">
                    Support
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`flex items-center justify-between md:pb-0 ${
            isToggle ? "pb-60" : ""
          }`}
        >
          <span className="Kn font-medium mr-4">{user?.name}</span>
          {user?.email ? (
            <button
              onClick={handleLogOut}
              className="w-full px-5 py-1.5 text-white rounded-lg bg-[#4D49FF] md:w-auto filter hover:brightness-125"
            >
              Sign out
            </button>
          ) : (
            <Link href="/signupForm">
              <a>
                <button className="w-full px-5 py-1.5 text-white rounded-lg bg-[#4D49FF] md:w-auto filter hover:brightness-125">
                  Sign up
                </button>
              </a>
            </Link>
          )}
          <button
            onClick={handleToggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            {/* <span className="sr-only">Open main menu</span> */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;

{
  /* <button>
            <div className="flex items-center justify-center bg-[#D2D1FD] w-[36px] h-[36px] rounded-full px-2 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </button> */
}
