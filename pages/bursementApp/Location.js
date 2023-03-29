import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BursementAppMenu from "../../BursementAppLayout/BursementAppMenu";

const Location = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <>
      <Head>
        <title>Bursement App - Location</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Bursement the only company card and spend management platform designed to help you be frugal"
        />
        <link rel="icon" href="https://i.ibb.co/hmxS8dZ/Vector-11-Stroke.png" />
      </Head>

      <BursementAppMenu>
        <div className="bg-[#F3F2FF] h-full md:py-[20px] py-[40px]">
          <h1 className="text-[48px] text-[#000] ml-[45px] md:mb-[35px] Kn">
            Locations (4)
          </h1>
          <div className="flex justify-between items-center w-[1000px] ml-[45px]">
            <div className="flex items-center">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4D49FF] focus:border-[#4D49FF] block w-[328px] h-[52px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4D49FF] dark:focus:border-[#4D49FF] Dm text-[18px]"
                  placeholder="Search Location"
                />
              </div>
              <button className="flex items-center ml-[30px] bg-[#fff] h-[52px] w-[161px] justify-center rounded-[8px] border border-gray-300 Kn font-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                Filter
              </button>
            </div>
            <div className="">
              <Link href="/bursementApp/bankCards/Create-Card">
                <a>
                  <button className="bg-[#4D49FF] py-[8px] px-[40px] rounded-[8px] text-white Kn font-thin flex items-center text-[18px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Create a location
                  </button>
                </a>
              </Link>
            </div>
          </div>

          {/* table */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-[45px] mt-[30px] w-[1000px]">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="md:text-[18px] text-[16px] text-[#4D49FF] bg-white dark:bg-gray-700 dark:text-gray-400">
                <tr className="border-b border-gray-300">
                  <th scope="col" className="px-6 py-3 font-normal">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal text-center">
                    Head
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Members
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    %Spend
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal text-center">
                    Progress
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal text-center">
                    Monthly Spend
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal text-center">
                    %Change
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        Engineering
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 Dm">
                    <div className="flex items-center">
                      {/* <div className="bg-[#C4C4C4] h-[27px] w-[37px] rounded-[4px] mr-[17px]"></div> */}
                      <Image
                        loader={myLoader}
                        src="/images/p1.png"
                        alt="UserImage"
                        height="42px"
                        width="42px"
                      />
                      <Link href={`/bursementApp/bankCards/cardId`}>
                        <a>
                          <div className="ml-5">
                            <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                              Manager Name
                            </h4>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 mr-8 text-[14px] font-medium text-[#000] Dm text-center">
                      10
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-[14px] font-medium text-[#000] Dm text-center">
                      60%
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-[166px] bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#49D078] h-2.5 rounded-full"
                        style={{ width: `${60}%` }}
                      ></div>
                      {/* <div
                        className="bg-[#FD19D0] h-2.5 rounded-full"
                        style={{ width: `${60}%` }}
                      ></div> */}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-[14px] font-medium text-[#000] Dm text-center">
                      $ 10
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {/* <div className="mb-1 text-[14px] font-medium text-[#FA0369] Dm text-center flex items-center">
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
                          d="M7 11l5-5m0 0l5 5m-5-5v12"
                        />
                      </svg>
                      <p>1.5%</p>
                    </div> */}
                    <div className="mb-1 text-[14px] font-medium text-[#49D078] Dm text-center flex items-center">
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
                          d="M17 13l-5 5m0 0l-5-5m5 5V6"
                        />
                      </svg>
                      <p>1.5%</p>
                    </div>
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        Growth
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 Dm">
                    <div className="flex items-center">
                      {/* <div className="bg-[#C4C4C4] h-[27px] w-[37px] rounded-[4px] mr-[17px]"></div> */}
                      <Image
                        loader={myLoader}
                        src="/images/p2.png"
                        alt="UserImage"
                        height="42px"
                        width="42px"
                      />
                      <Link href={`/bursementApp/bankCards/cardId`}>
                        <a>
                          <div className="ml-5">
                            <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                              Manager Name
                            </h4>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 mr-8 text-[14px] font-medium text-[#000] Dm text-center">
                      18
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-[14px] font-medium text-[#000] Dm text-center">
                      70%
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-[166px] bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#4D49FF] h-2.5 rounded-full"
                        style={{ width: `${60}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-[14px] font-medium text-[#000] Dm text-center">
                      $ 99
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-[14px] font-medium text-[#FA0369] Dm text-center">
                      1.9%
                    </div>
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        Management
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 Dm">
                    <div className="flex items-center">
                      {/* <div className="bg-[#C4C4C4] h-[27px] w-[37px] rounded-[4px] mr-[17px]"></div> */}
                      <Image
                        loader={myLoader}
                        src="/images/p3.png"
                        alt="UserImage"
                        height="42px"
                        width="42px"
                      />
                      <Link href={`/bursementApp/bankCards/cardId`}>
                        <a>
                          <div className="ml-5">
                            <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                              Manager Name
                            </h4>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 mr-8 text-[14px] font-medium text-[#000] Dm text-center">
                      15
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-[14px] font-medium text-[#000] Dm text-center">
                      30%
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-[166px] bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#4D49FF] h-2.5 rounded-full"
                        style={{ width: `${30}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-[14px] font-medium text-[#000] Dm text-center">
                      $ 277
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-[14px] font-medium text-[#FA0369] Dm text-center">
                      18%
                    </div>
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        Finance
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 Dm">
                    <div className="flex items-center">
                      {/* <div className="bg-[#C4C4C4] h-[27px] w-[37px] rounded-[4px] mr-[17px]"></div> */}
                      <Image
                        loader={myLoader}
                        src="/images/p4.png"
                        alt="UserImage"
                        height="42px"
                        width="42px"
                      />
                      <Link href={`/bursementApp/bankCards/cardId`}>
                        <a>
                          <div className="ml-5">
                            <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                              Manager Name
                            </h4>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 mr-8 text-[14px] font-medium text-[#000] Dm text-center">
                      5
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-[14px] font-medium text-[#000] Dm text-center">
                      40%
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-[166px] bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#4D49FF] h-2.5 rounded-full"
                        style={{ width: `${40}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-[14px] font-medium text-[#000] Dm text-center">
                      $ 300
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-[14px] font-medium text-[#FA0369] Dm text-center">
                      25%
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </BursementAppMenu>
    </>
  );
};

export default Location;
