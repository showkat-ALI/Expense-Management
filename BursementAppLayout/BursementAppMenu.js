import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { AuthContext } from "../context/AuthContext";

const BursementAppMenu = ({ children }) => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  const router = useRouter();

  const { sideMenu, peopleMenu } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = sideMenu;
  const [openPeople, setOpenPeople] = peopleMenu;
  const [path, setPath] = useState("/bursementApp/home");
  const pathName = router.pathname;

  useEffect(() => {
    setPath(pathName);
    // console.log(pathName);
  }, [pathName]);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="bg-[#F3F2FF] h-screen">
      <div className="flex bg-[#F3F2FF]">
        <div
          className={`bg-[#DDDDFF] ${
            openMenu ? "md:w-[250px]" : "md:w-[150px]"
          } h-screen-max px-8 py-6`}
        >
          {/* Logo and Toggle Button */}
          <div className="flex items-center">
            <button
              onClick={handleToggleMenu}
              type="button"
              className="mb-1 mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link href="/bursementApp/home" className="mt-5">
              <a>
                {openMenu ? (
                  <div>
                    <div className="md:block hidden">
                      <Image
                        loader={myLoader}
                        src="/images/Bursement-Logo.png"
                        alt=""
                        height="46px"
                        width="200px"
                      />
                    </div>
                    <div className="md:hidden block">
                      <Image
                        loader={myLoader}
                        src="/images/logo.png"
                        alt=""
                        height="24.54px"
                        width="18.92px"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <Image
                      loader={myLoader}
                      src="/images/logo.png"
                      alt=""
                      height="24.54px"
                      width="18.92px"
                    />
                  </div>
                )}
              </a>
            </Link>
          </div>

          {/* Menu Links Start */}
          <Link href="/bursementApp/home">
            <a>
              <div
                className={`${
                  path === "/bursementApp/home" ? "bg-[#4D49FF] text-white" : ""
                } flex items-center mb-[34px] rounded-[8px]`}
                style={{ padding: "10px 15px 10px 15px", marginTop: "34px" }}
              >
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
                  <h3
                    className="hidden md:block text-[21px]"
                    style={{ marginLeft: "15px" }}
                  >
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
              <div
                className={`${
                  path === "/bursementApp/activity"
                    ? "bg-[#4D49FF] text-white"
                    : ""
                } flex items-center mb-[34px] rounded-[8px]`}
                style={{ padding: "10px 15px 10px 15px" }}
              >
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
                  <h3
                    className="hidden md:block text-[21px]"
                    style={{ marginLeft: "15px" }}
                  >
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
              <div
                className={`${
                  path === "/bursementApp/bankCards" ||
                  path === "/bursementApp/bankCards/Create-Card" ||
                  path === `/bursementApp/bankCards/cardId`
                    ? "bg-[#4D49FF] text-white"
                    : ""
                } flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}
                style={{ padding: "10px 15px 10px 15px" }}
              >
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
                  <h3
                    className="hidden md:block text-[21px]"
                    style={{ marginLeft: "15px" }}
                  >
                    Cards
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </a>
          </Link>

          <button onClick={() => setOpenPeople(!openPeople)}>
            <div
              className={`flex items-center ${
                openPeople === false ? "mb-[34px]" : ""
              } py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}
              style={{ padding: "10px 15px 10px 15px" }}
            >
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
                <h3
                  className="hidden md:block text-[21px]"
                  style={{ marginLeft: "15px" }}
                >
                  People
                </h3>
              ) : (
                ""
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 text-[#0D172C]"
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
          </button>
          {/* people menu */}
          {openPeople && (
            <div className="bg-[#fff] py-[10px] rounded-[12px] mb-[24px]">
              <Link href="/bursementApp/Users">
                <a>
                  <div
                    className={`${
                      path === "/bursementApp/Users" ? "text-[#4D49FF]" : ""
                    } flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}
                    style={{ padding: "10px 15px 10px 15px" }}
                  >
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {openMenu ? (
                      <h3
                        className="hidden md:block text-[21px]"
                        style={{ marginLeft: "15px" }}
                      >
                        Users
                      </h3>
                    ) : (
                      ""
                    )}
                  </div>
                </a>
              </Link>

              <Link href="/bursementApp/Teams">
                <a>
                  <div
                    className={`${
                      path === "/bursementApp/Teams" ? "text-[#4D49FF]" : ""
                    } flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}
                    style={{ padding: "10px 15px 10px 15px" }}
                  >
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
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    {openMenu ? (
                      <h3
                        className="hidden md:block text-[21px]"
                        style={{ marginLeft: "15px" }}
                      >
                        Teams
                      </h3>
                    ) : (
                      ""
                    )}
                  </div>
                </a>
              </Link>

              <Link href="/bursementApp/Location">
                <a>
                  <div
                    className={`${
                      path === "/bursementApp/Location" ? "text-[#4D49FF]" : ""
                    } flex items-center py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}
                    style={{ padding: "10px 15px 10px 15px" }}
                  >
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {openMenu ? (
                      <h3
                        className="hidden md:block text-[21px]"
                        style={{ marginLeft: "15px" }}
                      >
                        Location
                      </h3>
                    ) : (
                      ""
                    )}
                  </div>
                </a>
              </Link>
            </div>
          )}

          <Link href="/bursementApp/SmartWallet">
            <a>
              <div
                className={`${
                  path === "/bursementApp/SmartWallet"
                    ? "bg-[#4D49FF] text-white"
                    : ""
                } flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}
                style={{ padding: "10px 15px 10px 15px" }}
              >
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
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {openMenu ? (
                  <h3
                    className="hidden md:block text-[21px]"
                    style={{ marginLeft: "15px" }}
                  >
                    Wallet
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </a>
          </Link>

          <Link href="/bursementApp/Transaction">
            <a>
              <div
                className={`${
                  path === "/bursementApp/Transaction"
                    ? "bg-[#4D49FF] text-white"
                    : ""
                } flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}
                style={{ padding: "10px 15px 10px 15px" }}
              >
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {openMenu ? (
                  <h3
                    className="hidden md:block text-[21px]"
                    style={{ marginLeft: "15px" }}
                  >
                    Transaction
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </a>
          </Link>

          <Link href="/bursementApp/Vendors">
            <a>
              <div
                className={`${
                  path === "/bursementApp/Vendors"
                    ? "bg-[#4D49FF] text-white"
                    : ""
                } flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}
                style={{ padding: "10px 15px 10px 15px" }}
              >
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {openMenu ? (
                  <h3
                    className="hidden md:block text-[21px]"
                    style={{ marginLeft: "15px" }}
                  >
                    Vendors
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </a>
          </Link>

          <Link href="/bursementApp/Accounting">
            <a>
              <div
                className={`${
                  path === "/bursementApp/Accounting"
                    ? "bg-[#4D49FF] text-white"
                    : ""
                } flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}
                style={{ padding: "10px 15px 10px 15px" }}
              >
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                {openMenu ? (
                  <h3
                    className="hidden md:block text-[21px]"
                    style={{ marginLeft: "15px" }}
                  >
                    Accounting
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </a>
          </Link>
          <div className="border-2 border-gray-500 mb-6"></div>
          <Link href="/bursementApp/Insights">
            <a>
              <div
                className={`${
                  path === "/bursementApp/Insights"
                    ? "bg-[#4D49FF] text-white"
                    : ""
                } flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}
                style={{ padding: "10px 15px 10px 15px" }}
              >
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                {openMenu ? (
                  <h3
                    className="hidden md:block text-[21px]"
                    style={{ marginLeft: "15px" }}
                  >
                    Insights
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </a>
          </Link>

          <Link href="/bursementApp/Pulley">
            <a>
              <div
                className={`${
                  path === "/bursementApp/Pulley"
                    ? "bg-[#4D49FF] text-white"
                    : ""
                } flex items-center mb-[34px] py-[10px] md:pl-[12px] pl-[6px] rounded-[8px]`}
                style={{ padding: "10px 15px 10px 15px" }}
              >
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                {openMenu ? (
                  <h3
                    className="hidden md:block text-[21px]"
                    style={{ marginLeft: "15px" }}
                  >
                    Pulley
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </a>
          </Link>
          {/* Menu Links End */}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BursementAppMenu;
