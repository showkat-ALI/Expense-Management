
import { useState } from "react";
import Link from "next/link"
const SupportPageHeader = () => {
    const [isToggle, isSetToggle] = useState(false);

    const handleToggleMenu = () => {
        isSetToggle(!isToggle);
    }
    return (
        <div className="py-[60px] ">
        <nav className="border-gray-200 px-5 sm:px-24 py-2.5 rounded Kn">
            <div className="flex md:items-center justify-between">
                <div className="md:flex items-center justify-evenly">
                    <div className="md:mr-16 md:pt-0 pt-2 md:mt-0">
                        <Link href="/home">
                            <a className="flex"><img
                                className="mr-4 w-[18.26px] h-[24.64px]"
                                src="/images/logo.png"
                                alt="Bursement Logo"
                            />
                                <span className="self-center text-2xl font-normal whitespace-nowrap dark:text-white">
                                    Bursement
                                </span></a>
                        </Link>
                    </div>

                    <div>
                        <ul className={`md:flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ${isToggle ? "" : "hidden"}`}>
                            <li>
                                <Link href="/features">
                                    <a
                                        className="block py-2 pr-4 md:pl-3 md:mr-5 text-[#7E8597] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#605BFF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[18px]"
                                        aria-current="page"
                                    >
                                        Features
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
                                <Link href="/enterprise">
                                    <a className="block py-2 pr-4 md:pl-3 md:mr-5 text-[#7E8597] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#605BFF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[18px]">
                                        Enterprise
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <div>
                                        <Link href="/burseme">
                                            <a className="block py-2 pr-4 md:pl-3 md:mr-5 text-[#7E8597] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#605BFF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[18px]">
                                                BurseMe
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="bg-[#FA0369]/60 rounded-[54px] w-[44px] h-[17.7px] px-[6px] py-[4px] ml-[11px]">
                                        <p className="Kn text-white text-[12px] font-normal leading-[14px]">NEW</p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className={`flex items-center justify-between md:pb-0 ${isToggle ? "pb-36" : ""}`}>

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

    </div>
    );
};

export default SupportPageHeader;