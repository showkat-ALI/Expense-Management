import React from "react";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import BursementAppMenu from "../../BursementAppLayout/BursementAppMenu";

const Home = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

  const obj = {
    options: {
      
      chart: {
        id: "basic-bar",
        toolbar: { show: false },
        selection: {enabled: false},
      },
      tooltip: { enabled: false },
      stroke: { colors: ['#4D49FF'] },
      fill: {colors: ['#4D49FF']},
      dataLabels: {enabled: false},
      xaxis: {
        labels: {show: false}
      },
      yaxis: {
        labels: { offsetX: 30 }
      },
    },
    series: [
      {
        name: "series-1",
        data: [28, 20, 35, 30, 42, 37, 48],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Bursement App - Home</title>
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
          <div className="flex justify-between items-center w-[960px] ml-[45px]">
            <h1 className="text-[40px] text-[#4D49FF] Kn">Home</h1>
            <div className="flex -mr-16">
              <button className="flex mr-[20px] bg-[#DDDDFF] py-[8px] px-[30px] rounded-[60px] Dm">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Create
              </button>
              <button className="flex mr-[35px] bg-[#DDDDFF] py-[8px] px-[30px] rounded-[60px] Dm">
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send
              </button>
            </div>
          </div>

          <div className="flex">
            <div className="h-[417px] w-[667px] bg-[#fff] rounded-[15px] ml-[45px] mt-[38px] p-[30px] Kn">
              <div className="flex items-start justify-center">
                <div className="bg-[#EDEDFF] p-[16px] w-[192px] mx-[16px] rounded-[8px]">
                  <p className="text-[14px] text-[#4D49FF]">Savings</p>
                  <h3 className="text-[33px] text-[#131240]">$52,035</h3>
                </div>
                <div className="bg-[#EDEDFF] p-[16px] w-[192px] mx-[16px] rounded-[8px]">
                  <p className="text-[14px] text-[#4D49FF]">Bills Paid</p>
                  <h3 className="text-[33px] text-[#131240]">$15,379</h3>
                </div>
                <div className="bg-[#EDEDFF] p-[16px] w-[192px] mx-[16px] rounded-[8px]">
                  <p className="text-[14px] text-[#4D49FF]">Expenses</p>
                  <h3 className="text-[33px] text-[#131240]">$2,065</h3>
                </div>
              </div>
              {/* Chart  */}
              <Chart
                options={obj.options}
                series={obj.series}
                type="area"
                width="550"
                height="250"
              />
            </div>
            <div className="example overflow-y-scroll h-[417px] w-[317px] bg-[#fff] rounded-[15px] ml-[45px] mt-[38px] p-[30px] Kn">
              <h4 className="text-[#4D49FF] text-[24px]">New Activity</h4>
              {/* Activity Alert Card  */}
              <div className="mb-[30px]">
                <div className="flex justify-between items-center my-3">
                  <Image
                    loader={myLoader}
                    src="/images/activityPerson.png"
                    height="43px"
                    width="43px"
                    alt="activityPerson"
                  />
                  <div>
                    <h5 className="Dm text-[16px]">Activity Name</h5>
                    <p className="Dm text-[14px] text-[#B2B2B2]">
                      Some Activity name sentence
                    </p>
                  </div>
                </div>
                <button className="bg-[#4D49FF] px-[30px] py-2 text-[#fff] Dm rounded-[10px] mr-[11px]">
                  Accept
                </button>
                <button className="bg-[#CAC9FF] px-[30px] py-2 Dm rounded-[10px]">
                  Reject
                </button>
              </div>
              {/* Card End  */}

              {/* Activity Alert Card  */}
              <div className="mb-[30px]">
                <div className="flex justify-between items-center my-3">
                  <Image
                    loader={myLoader}
                    src="/images/activityPerson.png"
                    height="43px"
                    width="43px"
                    alt="activityPerson"
                  />
                  <div>
                    <h5 className="Dm text-[16px]">Activity Name</h5>
                    <p className="Dm text-[14px] text-[#B2B2B2]">
                      Some Activity name sentence
                    </p>
                  </div>
                </div>
                <button className="bg-[#4D49FF] px-[30px] py-2 text-[#fff] Dm rounded-[10px] mr-[11px]">
                  Accept
                </button>
                <button className="bg-[#CAC9FF] px-[30px] py-2 Dm rounded-[10px]">
                  Reject
                </button>
              </div>
              {/* Card End  */}

              {/* Activity Alert Card  */}
              <div className="mb-[30px]">
                <div className="flex justify-between items-center my-3">
                  <Image
                    loader={myLoader}
                    src="/images/activityPerson.png"
                    height="43px"
                    width="43px"
                    alt="activityPerson"
                  />
                  <div>
                    <h5 className="Dm text-[16px]">Activity Name</h5>
                    <p className="Dm text-[14px] text-[#B2B2B2]">
                      Some Activity name sentence
                    </p>
                  </div>
                </div>
                <button className="bg-[#4D49FF] px-[30px] py-2 text-[#fff] Dm rounded-[10px] mr-[11px]">
                  Accept
                </button>
                <button className="bg-[#CAC9FF] px-[30px] py-2 Dm rounded-[10px]">
                  Reject
                </button>
              </div>
              {/* Card End  */}

              {/* Activity Alert Card  */}
              <div className="mb-[30px]">
                <div className="flex justify-between items-center my-3">
                  <Image
                    loader={myLoader}
                    src="/images/activityPerson.png"
                    height="43px"
                    width="43px"
                    alt="activityPerson"
                  />
                  <div>
                    <h5 className="Dm text-[16px]">Activity Name</h5>
                    <p className="Dm text-[14px] text-[#B2B2B2]">
                      Some Activity name sentence
                    </p>
                  </div>
                </div>
                <button className="bg-[#4D49FF] px-[30px] py-2 text-[#fff] Dm rounded-[10px] mr-[11px]">
                  Accept
                </button>
                <button className="bg-[#CAC9FF] px-[30px] py-2 Dm rounded-[10px]">
                  Reject
                </button>
              </div>
              {/* Card End  */}
            </div>
          </div>
        </div>
      </BursementAppMenu>
    </>
  );
};

export default Home;
