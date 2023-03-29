import React from "react";
import Head from "next/head";
import Link from "next/link";
import BursementAppMenu from "../../../BursementAppLayout/BursementAppMenu";

const BankCards = () => {
  return (
    <>
      <Head>
        <title>Bursement App - Cards</title>
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
            Cards (5)
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
                  placeholder="Search Card"
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
                  <button className="bg-[#4D49FF] py-[8px] px-[40px] rounded-[8px] text-white Kn font-normal flex items-center text-[18px]">
                    Create New Card
                  </button>
                </a>
              </Link>
            </div>
          </div>
          {/* previous table */}
          {/* <div className="relative overflow-x-auto sm:rounded-lg ml-[63px] mt-[30px]">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-[#AFAFBC] uppercase  dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <input type="checkbox" disabled className="rounded-full border-[#AFAFBC]" />
                  </th>
                  <th scope="col" className="px-6 py-3 Dm">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-4"
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
                      Card Name
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Card Holder
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Currency
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Balance
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Utilization
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded-full" /></td>
                  <td className="px-6 py-4 Dm">
                    <div className="flex items-center">
                    <div className="bg-[#C4C4C4] h-[27px] w-[37px] rounded-[4px] mr-[17px]"></div>
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-bold">Card Name</h4>
                      <p className="text-[#AFAFBC]">Virtual ••3444  ·  04/24</p>
                    </div>
                  </div>
                  </td>
                  <td className="px-6 py-4 Dm">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-bold">Card Holder Name</h4>
                      <p className="text-[#AFAFBC]">Admin</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 Dm text-[#0D172C] text-[14px]">
                    <div className="flex items-center">
                      <div className="pt-4 mr-2"><Image loader={myLoader} src="/images/flag.jpg" height="26px" width="19px" alt="CurrenctyFlag" /></div>
                      <p>SGD</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 Dm text-[#0D172C] text-[14px]">$2999</td>
                  <td className="px-6 py-4 Dm text-[#0D172C] text-[14px]">$2999</td>
                  <td className="px-6 py-4 Dm text-[#0D172C] text-[14px]">Active</td>
                </tr>
                
              </tbody>
            </table>
          </div> */}

          {/* updated table */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-[45px] mt-[30px]">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="md:text-[18px] text-[16px] text-[#4D49FF] bg-white dark:bg-gray-700 dark:text-gray-400">
                <tr className="border-b border-gray-300">
                  <th scope="col" className="px-6 py-3 font-normal">
                    Card Name
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Card Holder
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Utilization
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Monthly Spend
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    %Charge
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 Dm">
                    <div className="flex items-center">
                      {/* <div className="bg-[#C4C4C4] h-[27px] w-[37px] rounded-[4px] mr-[17px]"></div> */}
                      <Link href={`/bursementApp/bankCards/cardId`}>
                        <a>
                          <div>
                            <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                              Card Name
                            </h4>
                            <p className="text-[#AFAFBC] Dm">
                              Virtual ••3444 · 04/24
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        Card Holder Name
                      </h4>
                      <p className="text-[#AFAFBC] Dm">Admin</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-base font-medium text-[#4D49FF] Dm">
                      45%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#4D49FF] h-2.5 rounded-full"
                        style={{ width: `${45}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        $ 10
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div>
                      <h4 className="text-[#FD19D0] text-[14px] font-medium Dm">
                        5%
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 Dm text-[14px]">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#49D078]"></div>
                      <p className="text-[#49D078] ml-2">Active</p>
                    </div>
                    {/* <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#7E8597]"></div> 
                    <p className="text-[#7E8597] ml-2">Inactive</p>
                    </div> */}
                    {/* <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FA0369]"></div>
                      <p className="text-[#FA0369] ml-2">Frozen</p>
                    </div> */}
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 Dm">
                    <div className="flex items-center">
                      {/* <div className="bg-[#C4C4C4] h-[27px] w-[37px] rounded-[4px] mr-[17px]"></div> */}
                      <div>
                        <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                          Card Name
                        </h4>
                        <p className="text-[#AFAFBC] Dm">
                          Virtual ••3444 · 04/24
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        Card Holder Name
                      </h4>
                      <p className="text-[#AFAFBC] Dm">Admin</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-base font-medium text-[#4D49FF] Dm">
                      60%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#4D49FF] h-2.5 rounded-full"
                        style={{ width: `${60}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        $ 10
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div>
                      <h4 className="text-[#FD19D0] text-[14px] font-medium Dm">
                        5%
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 Dm text-[14px]">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#49D078]"></div>
                      <p className="text-[#49D078] ml-2">Active</p>
                    </div>
                    {/* <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#7E8597]"></div> 
                    <p className="text-[#7E8597] ml-2">Inactive</p>
                    </div> */}
                    {/* <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FA0369]"></div>
                      <p className="text-[#FA0369] ml-2">Frozen</p>
                    </div> */}
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 Dm">
                    <div className="flex items-center">
                      {/* <div className="bg-[#C4C4C4] h-[27px] w-[37px] rounded-[4px] mr-[17px]"></div> */}
                      <div>
                        <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                          Card Name
                        </h4>
                        <p className="text-[#AFAFBC] Dm">
                          Virtual ••3444 · 04/24
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        Card Holder Name
                      </h4>
                      <p className="text-[#AFAFBC] Dm">Admin</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-base font-medium text-[#4D49FF] Dm">
                      00%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#4D49FF] h-2.5 rounded-full"
                        style={{ width: `${0}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        $ 10
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div>
                      <h4 className="text-[#FD19D0] text-[14px] font-medium Dm">
                        5%
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 Dm text-[14px]">
                    {/* <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#49D078]"></div> 
                    <p className="text-[#49D078] ml-2">Active</p>
                    </div> */}
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#7E8597]"></div>
                      <p className="text-[#7E8597] ml-2">Inactive</p>
                    </div>
                    {/* <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FA0369]"></div>
                      <p className="text-[#FA0369] ml-2">Frozen</p>
                    </div> */}
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 Dm">
                    <div className="flex items-center">
                      {/* <div className="bg-[#C4C4C4] h-[27px] w-[37px] rounded-[4px] mr-[17px]"></div> */}
                      <div>
                        <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                          Card Name
                        </h4>
                        <p className="text-[#AFAFBC] Dm">
                          Virtual ••3444 · 04/24
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        Card Holder Name
                      </h4>
                      <p className="text-[#AFAFBC] Dm">Admin</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-base font-medium text-[#4D49FF] Dm">
                      90%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#4D49FF] h-2.5 rounded-full"
                        style={{ width: `${90}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        $ 10
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div>
                      <h4 className="text-[#FD19D0] text-[14px] font-medium Dm">
                        5%
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 Dm text-[14px]">
                    {/* <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#49D078]"></div> 
                    <p className="text-[#49D078] ml-2">Active</p>
                    </div> */}
                    {/* <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#7E8597]"></div> 
                    <p className="text-[#7E8597] ml-2">Inactive</p>
                    </div> */}
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FA0369]"></div>
                      <p className="text-[#FA0369] ml-2">Frozen</p>
                    </div>
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 Dm">
                    <div className="flex items-center">
                      {/* <div className="bg-[#C4C4C4] h-[27px] w-[37px] rounded-[4px] mr-[17px]"></div> */}
                      <div>
                        <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                          Card Name
                        </h4>
                        <p className="text-[#AFAFBC] Dm">
                          Virtual ••3444 · 04/24
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        Card Holder Name
                      </h4>
                      <p className="text-[#AFAFBC] Dm">Admin</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="mb-1 text-base font-medium text-[#4D49FF] Dm">
                      20%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#4D49FF] h-2.5 rounded-full"
                        style={{ width: `${20}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div>
                      <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                        $ 10
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div>
                      <h4 className="text-[#FD19D0] text-[14px] font-medium Dm">
                        5%
                      </h4>
                    </div>
                  </td>
                  <td className="px-6 py-4 Dm text-[14px]">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#49D078]"></div>
                      <p className="text-[#49D078] ml-2">Active</p>
                    </div>
                    {/* <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#7E8597]"></div> 
                    <p className="text-[#7E8597] ml-2">Inactive</p>
                    </div> */}
                    {/* <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FA0369]"></div>
                      <p className="text-[#FA0369] ml-2">Frozen</p>
                    </div> */}
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

export default BankCards;
