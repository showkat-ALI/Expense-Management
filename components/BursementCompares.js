import React from "react";
import Image from "next/image";
import Head from "next/head";

const BursementCompares = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <>
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head> */}

      <section className="py-[90px] bg-light-blue">
        <div className="max-w-default py-10 md:pt-[15px] md:pb-[90px] md:px-14 mx-6 md:m-auto">
          <h2 className="text-left md:text-4xl text-2xl mb-14 font-medium font-kn-sans pb-[60px] Kn">
            How Bursement compares
          </h2>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full font-kn-sans">
                    <thead className="dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 dark:text-gray-400"
                        ></th>
                        <th
                          scope="col"
                          className="py-3 text-center text-[#2C3242] px-6 text-[19px] font-thin tracking-wider Dm dark:text-[#2C3242]"
                        >
                          Smart company cards
                        </th>
                        <th
                          scope="col"
                          className="py-3 text-center text-[#2C3242] px-6 text-[19px] font-thin tracking-wider Dm dark:text-[#2C3242]"
                        >
                          Expense report software
                        </th>
                        <th
                          scope="col"
                          className="bg-white rounded-t-lg py-3 px-[43.1px] text-xs font-medium tracking-wider text-left dark:text-gray-400"
                        >
                          <div className="flex w-36 mx-auto">
                            {/* <Image
                              loader={myLoader}
                              className="mr-4 w-[25.23px] h-[34.06px]"
                              src={"/images/logo.png"}
                              alt="Bursement Logo"
                              width="25.23px"
                              height="34.06px"
                            />
                            <span className="ml-2 self-center text-2xl font-normal whitespace-nowrap dark:text-white">
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
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-10 px-6 text-[21px] font-normal text-[#2C3242] Dm whitespace-nowrap dark:text-white">
                          Simple onboarding
                        </td>
                        <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          ---
                        </td>
                        <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          ---
                        </td>
                        <td className="bg-white py-4 px-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 mx-auto text-[#6964FF]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </td>
                      </tr>

                      <tr className="dark:bg-gray-800">
                        <td className="py-10 px-6 text-[21px] font-normal text-[#2C3242] Dm whitespace-nowrap dark:text-white">
                          Get up and running fast, with minimal paperwork
                        </td>
                        <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          ---
                        </td>
                        <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          ---
                        </td>
                        <td className="bg-white py-4 px-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 mx-auto text-[#6964FF]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </td>
                      </tr>

                      <tr className="dark:bg-gray-800">
                        <td className="py-10 px-6 text-[21px] font-normal text-[#2C3242] Dm whitespace-nowrap dark:text-white">
                          Automated expense reports
                        </td>
                        <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          ---
                        </td>
                        <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          ---
                        </td>
                        <td className="bg-white py-4 px-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 mx-auto text-[#6964FF]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </td>
                      </tr>

                      <tr className="dark:bg-gray-800">
                        <td className="py-10 px-6 text-[21px] font-normal text-[#2C3242] Dm whitespace-nowrap dark:text-white">
                          Receipts matched up to purchases automatically
                        </td>
                        <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          ---
                        </td>
                        <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          ---
                        </td>
                        <td className="bg-white py-4 px-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 mx-auto text-[#6964FF]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </td>
                      </tr>

                      <tr className="dark:bg-gray-800">
                        <td className="py-10 px-6 text-[21px] font-normal text-[#2C3242] Dm whitespace-nowrap dark:text-white">
                          Reward your team
                        </td>
                        <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          ---
                        </td>
                        <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          ---
                        </td>
                        <td className="bg-white py-4 px-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 mx-auto text-[#6964FF]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </td>
                      </tr>

                      <tr className="dark:bg-gray-800">
                        <td className="py-10 px-6 text-[21px] font-normal text-[#2C3242] Dm whitespace-nowrap dark:text-white">
                          Get analytics and forecast of expenses
                        </td>
                        <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          ---
                        </td>
                        <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          ---
                        </td>
                        <td className="bg-white rounded-b-lg py-4 px-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 mx-auto text-[#6964FF]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BursementCompares;
