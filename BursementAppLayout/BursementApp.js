import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import { AuthContext } from "../context/AuthContext";

const BursementApp = ({ children }) => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  const router = useRouter();

  const { sideMenu } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = sideMenu;
  const [path, setPath] = useState('/bursementApp/home');
  const pathName = router.pathname;

  useEffect(() => {
    setPath(pathName);
  // console.log(pathName);
  }, [pathName])

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="md:bg-[#F3F2FF]">
        <div className={`bg-[#DDDDFF] inline-block py-5 ${openMenu ? "paddingRightEleven" : "paddingRightTweenty"}`}>
          <div
            className="flex items-center"
            style={{ paddingLeft: "10px" }}
          >
            <button
              onClick={handleToggleMenu}
              type="button"
              className="md:inline-flex items-center p-2 ml-1 mr-1 text-sm text-gray-500 hidden rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
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
            </button>
            <Link href="/bursementApp/home">
              <a className="flex items-center md:pl-0 pl-4 ml-1 md:pr-0 pr-6">
                <Image
                  className="mr-4 w-[18.26px] h-[24.64px]"
                  loader={myLoader}
                  src="/images/logo.png"
                  alt="Bursement Logo"
                  width="18.26px"
                  height="24.64px"
                />
                {openMenu ? (
                  <span className="md:block hidden ml-2 self-center text-2xl font-normal whitespace-nowrap dark:text-white">
                    Bursement
                  </span>
                ) : (
                  ""
                )}
              </a>
            </Link>
          </div>
        </div>
        <div className="flex bg-[#F3F2FF]">
          <div>
            <div
              className={`bg-[#DDDDFF] ${
                openMenu ? "md:w-52" : "md:w-24"
              } w-[80px] h-screen sticky top-0 md:px-5 pl-4 py-6`}
            >
              <Link href="/bursementApp/home">
                <a>
                  <div className={`${path === '/bursementApp/home' ? 'bg-[#4D49FF] text-white' : ''} flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        openMenu ? "md:h-7 md:w-7" : "md:h-8 w-8"
                      }  h-8 w-8`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    {openMenu ? (
                      <h3 className="hidden md:inline-flex text-[21px] ml-[26px]">
                        Home
                      </h3>
                    ) : (
                      ""
                    )}
                  </div>
                </a>
              </Link>

              <Link href="/bursementApp/activity">
                <a>
                  <div className={`${path === '/bursementApp/activity' ? 'bg-[#4D49FF] text-white' : ''} flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        openMenu ? "md:h-7 md:w-7" : "md:h-8 w-8"
                      }  h-8 w-8`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                    {openMenu ? (
                      <h3 className="hidden md:inline-flex text-[21px] ml-[26px]">
                        Activites
                      </h3>
                    ) : (
                      ""
                    )}
                  </div>
                </a>
              </Link>

              <Link href="/bursementApp/bankCards">
                <a>
                  <div className={`${path === '/bursementApp/bankCards' || path === '/bursementApp/bankCards/Create-Card' ? 'bg-[#4D49FF] text-white' : ''} flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        openMenu ? "md:h-7 md:w-7" : "md:h-8 w-8"
                      }  h-8 w-8`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    {openMenu ? (
                      <h3 className="hidden md:inline-flex text-[21px] ml-[26px]">
                        Cards
                      </h3>
                    ) : (
                      ""
                    )}
                  </div>
                </a>
              </Link>

              <Link href="/bursementApp/people">
                <a>
                  <div className={`${path === '/bursementApp/people' ? 'bg-[#4D49FF] text-white' : ''} flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        openMenu ? "md:h-7 md:w-7" : "md:h-8 w-8"
                      }  h-8 w-8`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    {openMenu ? (
                      <h3 className="hidden md:inline-flex text-[21px] ml-[26px]">
                        People
                      </h3>
                    ) : (
                      ""
                    )}
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default BursementApp;
