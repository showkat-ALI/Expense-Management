import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import BursementAppMenu from "../../../BursementAppLayout/BursementAppMenu";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CardId = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  const [transactionAmount, setTransactionAmount] = useState(1550);
  const [series, setSeries] = useState([
    {
      name: "Income",
      data: ["3K", "1K", "5K", "7K", "3K", "7K"],
    },
    {
      name: "Expenses",
      data: ["2K", "5K", "3K", "7K", "2K", "5K"],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 300,
      type: "area",
      toolbar: { show: false },
    },
    tooltip: { enabled: false },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "string",
      categories: ["Jan 10", "Jan 11", "Jan 12", "Jan 13", "Jan 14", "Jan 15"],
    },
  });

  return (
    <>
      <Head>
        <title>Bursement App - Card Details</title>
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
        <div className="bg-light-blue md:pl-[45px] py-[30px]">
          <div className="grid md:grid-rows-1 grid-rows-2 md:grid-cols-2 grid-cols-1 md:gap-x-6 md:gap-y-0 gap-y-3">
            <div className="flex md:flex-row flex-col items-center justify-between md:pt-0 pt-5">
              <div className="mr-6">
                <Image
                  loader={myLoader}
                  src="/images/VisaCardSample.png"
                  alt="VisaCard"
                  height="286px"
                  width="458px"
                />
              </div>
              <div className="flex md:flex-col flex-row">
                <div className="text-center">
                  <Image
                    loader={myLoader}
                    src="/images/Gpay.png"
                    alt=""
                    height="64px"
                    width="64px"
                  />
                  <p className="Dm text-[14px] -mt-4">
                    Add to
                    <br /> GPay
                  </p>
                </div>
                <div className="text-center">
                  <Image
                    loader={myLoader}
                    src="/images/FreezeCard.png"
                    alt=""
                    height="64px"
                    width="64px"
                  />
                  <p className="Dm text-[14px] -mt-4">
                    Freeze <br />
                    Card
                  </p>
                </div>
                <div className="text-center">
                  <Image
                    loader={myLoader}
                    src="/images/Block.png"
                    alt=""
                    height="64px"
                    width="64px"
                  />
                  <p className="Dm text-[14px] -mt-4">
                    Block <br />
                    Permanently
                  </p>
                </div>
              </div>
            </div>
            <div className="chart">
              <div className="md:w-[510px] w-full h-[267px] bg-white rounded-[18px] shadow-md pl-4 py-4">
                <h3 className="Dm text-[21px] font-bold">Money Flow</h3>
                <Chart
                  options={options}
                  series={series}
                  width="480px"
                  height="210px"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between md:my-[30px] mb-[30px]">
            <div>
              <div className="bg-white w-[464px] h-[60px] rounded-[12px] flex items-center justify-between px-6 my-[20px]">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#4D49FF]"
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
                  <h4 className="text-[18px] Dm ml-[15px]">Card Name</h4>
                </div>
                <h3 className="text-[18px] Dm font-medium">Salary</h3>
              </div>

              <div className="bg-white w-[464px] h-[60px] rounded-[12px] flex items-center justify-between px-6 my-[20px]">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#4D49FF]"
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
                  <h4 className="text-[18px] Dm ml-[15px]">Currency</h4>
                </div>
                <h3 className="text-[18px] Dm font-medium">$ USD</h3>
              </div>

              <div className="bg-white w-[464px] h-[60px] rounded-[12px] flex items-center justify-between px-6 my-[20px]">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#4D49FF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>
                  <h4 className="text-[18px] Dm ml-[15px]">Utilization</h4>
                </div>
                <div className="w-[140px] flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div
                      className="bg-[#4D49FF] h-2.5 rounded-full"
                      style={{ width: `${60}%` }}
                    ></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-[#4D49FF] Dm">
                    60%
                  </div>
                </div>
              </div>

              <div className="bg-white w-[464px] h-[60px] rounded-[12px] flex items-center justify-between px-6 my-[20px]">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#4D49FF]"
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
                  <h4 className="text-[18px] Dm ml-[15px]">Current Balance</h4>
                </div>
                <h3 className="text-[18px] Dm font-medium">$ 12000</h3>
              </div>

              <div className="bg-white w-[464px] h-[60px] rounded-[12px] flex items-center justify-between px-6 my-[20px]">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#4D49FF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  <h4 className="text-[18px] Dm ml-[15px]">Card Lifetime</h4>
                </div>
                <h3 className="text-[18px] Dm font-medium">20-05-2025</h3>
              </div>

              <div className="bg-white w-[464px] h-[60px] rounded-[12px] flex items-center justify-between px-6 my-[20px]">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#4D49FF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <h4 className="text-[18px] Dm ml-[15px]">Status</h4>
                </div>
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
              </div>

              <div className="bg-white w-[464px] h-[117px] rounded-[12px] px-6 py-3 my-[20px]">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#4D49FF]"
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
                  <h4 className="text-[18px] Dm ml-[15px]">Limit</h4>
                </div>
                <div className="flex justify-between">
                  <select
                    id="limit"
                    className="md:w-[190px] w-full h-[50px] border-2 border-gray-200 rounded-[8px] outline-2 focus:border-0 mt-2 px-2 Dm"
                  >
                    <option className="Dm" defaultValue="" disabled selected>
                      Select Duration
                    </option>
                    <option className="Dm" value="Weekly">
                      Weekly
                    </option>
                    <option className="Dm" value="Monthly">
                      Monthly
                    </option>
                    <option className="Dm" value="Yearly">
                      Yearly
                    </option>
                  </select>

                  <input
                    name="amount"
                    type="text"
                    className="md:w-[190px] w-full h-[50px] border-2 border-gray-200 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                  />
                </div>
              </div>

              <div className="bg-white w-[464px] h-[117px] rounded-[12px] px-6 py-3 my-[20px]">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#4D49FF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                  <h4 className="text-[18px] Dm ml-[15px]">
                    Transaction Amount Limit
                  </h4>
                </div>
                <div className="flex justify-between items-center">
                  <input
                    className="w-[250px] h-[8px]"
                    type="range"
                    min={0}
                    max={5000}
                    value={transactionAmount}
                  />
                  <input
                    type="text"
                    className="w-[156px] h-[48px] Dm border-gray-300 rounded-[12px] text-[#4D49FF]"
                    disabled
                    defaultValue={`$ ${transactionAmount}`}
                  />
                </div>
              </div>
            </div>
            <div className="bg-white md:w-[510px] w-full h-[740px] rounded-[18px] mr-[30px] py-4 example overflow-y-scroll">
              <div className="flex items-center px-[28px] mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4D49FF] mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                <h2 className="Dm font-medium text-[#4D49FF] text-[18px]">
                  Transaction History
                </h2>
              </div>
              <hr />

              <div className="flex flex-col">
                <h3 className="text-[#7E8597] text-[13px] Dm font-normal text-center mt-4">
                  Fri, 15 April 2022
                </h3>

                <div className="bg-[#F9F9F9] w-[466px] h-[68px] rounded-[12px] mx-auto my-4 flex justify-between items-center px-[12px]">
                  <div className="flex">
                    <Image
                      loader={myLoader}
                      src="/images/redArrow.png"
                      alt=""
                      height="50px"
                      width="50px"
                    />
                    <div className="ml-3">
                      <h3 className="text-[18px] Dm font-medium">
                        Spotify Subscription
                      </h3>
                      <p className="text-[#08A0F5] text-[13px] Dm">
                        #123456789
                      </p>
                    </div>
                  </div>
                  <h4 className="text-[#FA0369] text-[18px] Dm font-medium">
                    - $ 120.00
                  </h4>
                </div>

                <div className="bg-[#F9F9F9] w-[466px] h-[68px] rounded-[12px] mx-auto my-4 flex justify-between items-center px-[12px]">
                  <div className="flex">
                    <Image
                      loader={myLoader}
                      src="/images/greenArrow.png"
                      alt=""
                      height="50px"
                      width="50px"
                    />
                    <div className="ml-3">
                      <h3 className="text-[18px] Dm font-medium">Earning</h3>
                      <p className="text-[#08A0F5] text-[13px] Dm">
                        #123456789
                      </p>
                    </div>
                  </div>
                  <h4 className="text-[#49D078] text-[18px] Dm font-medium">
                    + $ 120.00
                  </h4>
                </div>

                <div className="bg-[#F9F9F9] w-[466px] h-[68px] rounded-[12px] mx-auto my-4 flex justify-between items-center px-[12px]">
                  <div className="flex">
                    <Image
                      loader={myLoader}
                      src="/images/redArrow.png"
                      alt=""
                      height="50px"
                      width="50px"
                    />
                    <div className="ml-3">
                      <h3 className="text-[18px] Dm font-medium">
                        Spotify Subscription
                      </h3>
                      <p className="text-[#08A0F5] text-[13px] Dm">
                        #123456789
                      </p>
                    </div>
                  </div>
                  <h4 className="text-[#FA0369] text-[18px] Dm font-medium">
                    - $ 120.00
                  </h4>
                </div>

                <div className="bg-[#F9F9F9] w-[466px] h-[68px] rounded-[12px] mx-auto my-4 flex justify-between items-center px-[12px]">
                  <div className="flex">
                    <Image
                      loader={myLoader}
                      src="/images/greenArrow.png"
                      alt=""
                      height="50px"
                      width="50px"
                    />
                    <div className="ml-3">
                      <h3 className="text-[18px] Dm font-medium">Earning</h3>
                      <p className="text-[#08A0F5] text-[13px] Dm">
                        #123456789
                      </p>
                    </div>
                  </div>
                  <h4 className="text-[#49D078] text-[18px] Dm font-medium">
                    + $ 120.00
                  </h4>
                </div>

                <h3 className="text-[#7E8597] text-[13px] Dm font-normal text-center mt-4">
                  Sat, 16 April 2022
                </h3>

                <div className="bg-[#F9F9F9] w-[466px] h-[68px] rounded-[12px] mx-auto my-4 flex justify-between items-center px-[12px]">
                  <div className="flex">
                    <Image
                      loader={myLoader}
                      src="/images/redArrow.png"
                      alt=""
                      height="50px"
                      width="50px"
                    />
                    <div className="ml-3">
                      <h3 className="text-[18px] Dm font-medium">
                        Spotify Subscription
                      </h3>
                      <p className="text-[#08A0F5] text-[13px] Dm">
                        #123456789
                      </p>
                    </div>
                  </div>
                  <h4 className="text-[#FA0369] text-[18px] Dm font-medium">
                    - $ 120.00
                  </h4>
                </div>

                <div className="bg-[#F9F9F9] w-[466px] h-[68px] rounded-[12px] mx-auto my-4 flex justify-between items-center px-[12px]">
                  <div className="flex">
                    <Image
                      loader={myLoader}
                      src="/images/greenArrow.png"
                      alt=""
                      height="50px"
                      width="50px"
                    />
                    <div className="ml-3">
                      <h3 className="text-[18px] Dm font-medium">Earning</h3>
                      <p className="text-[#08A0F5] text-[13px] Dm">
                        #123456789
                      </p>
                    </div>
                  </div>
                  <h4 className="text-[#49D078] text-[18px] Dm font-medium">
                    + $ 120.00
                  </h4>
                </div>

                <div className="bg-[#F9F9F9] w-[466px] h-[68px] rounded-[12px] mx-auto my-4 flex justify-between items-center px-[12px]">
                  <div className="flex">
                    <Image
                      loader={myLoader}
                      src="/images/redArrow.png"
                      alt=""
                      height="50px"
                      width="50px"
                    />
                    <div className="ml-3">
                      <h3 className="text-[18px] Dm font-medium">
                        Spotify Subscription
                      </h3>
                      <p className="text-[#08A0F5] text-[13px] Dm">
                        #123456789
                      </p>
                    </div>
                  </div>
                  <h4 className="text-[#FA0369] text-[18px] Dm font-medium">
                    - $ 120.00
                  </h4>
                </div>

                <div className="bg-[#F9F9F9] w-[466px] h-[68px] rounded-[12px] mx-auto my-4 flex justify-between items-center px-[12px]">
                  <div className="flex">
                    <Image
                      loader={myLoader}
                      src="/images/greenArrow.png"
                      alt=""
                      height="50px"
                      width="50px"
                    />
                    <div className="ml-3">
                      <h3 className="text-[18px] Dm font-medium">Earning</h3>
                      <p className="text-[#08A0F5] text-[13px] Dm">
                        #123456789
                      </p>
                    </div>
                  </div>
                  <h4 className="text-[#49D078] text-[18px] Dm font-medium">
                    + $ 120.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BursementAppMenu>
    </>
  );
};

export default CardId;
