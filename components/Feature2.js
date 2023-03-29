/**
 *
 * @returns Left Side Section With Text
 */
import Image from "next/image";

const HighlightText = () => (
  <div className="md:w-1/2 md:px-[102px] h-full">
    <div className="flex items-center h-full">
      <div>
        <h2 className="font-medium text-mobile-h2 md:text-[42px] text-slate-headline Kn">
          {" "}
          Pay bills and invoices faster{" "}
        </h2>
        <p className="pt-6 text-[21px] text-slate-body Dm">
          Tracking and paying invoices manually takes too much time and effort.
        </p>
        <p className="pt-6 text-[21px] text-slate-body Dm">
          We simplify the process for you.
        </p>
        <div className="mt-8">
          <div className="relative flex items-center px-2 py-2 bg-white rounded-2xl">
            <div className="flex items-center justify-center bg-[#4D49FF] rounded-2xl w-[54px] h-[54px] text-white">
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
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <p className="pl-4 font-medium text-[18px] text-slate-headline Dm">
              {" "}
              Schedule Payment{" "}
            </p>
            <div className="pl-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-[#41AD49] absolute top-6 right-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {/* <img
                className="absolute w-5 top-6 right-3"
                src="https://i.ibb.co/TKTmctg/optimized-green-tik.png"
                alt="Green Tick"
              /> */}
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="relative flex items-center px-2 py-2 bg-white rounded-2xl">
            <div className="flex items-center justify-center bg-[#4D49FF] rounded-2xl w-[54px] h-[54px] text-white">
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
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <p className="pl-4 font-medium text-[18px] text-slate-headline Dm">
              {" "}
              Add Vendor once{" "}
            </p>
            <div className="pl-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-[#41AD49] absolute top-6 right-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {/* <img
                className="absolute w-5 top-6 right-3"
                src="https://i.ibb.co/TKTmctg/optimized-green-tik.png"
                alt="Green Tick"
              /> */}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex">
            {/*<p className="text-desktop-paragraph text-slate-body hover:underline">
								See more features
							</p> */}
            {/* <ArrowRight className="w-4 ml-4" /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Feature2 = () => {
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

      <section className="bg-light-blue py-12 md:py-[90px]">
        <div className="m-auto mx-6 max-w-default rounded-3xl md:mx-auto">
          <div className="items-center justify-center h-full md:flex">
            <HighlightText />
            <div className="md:w-1/2 mt-9 md:mt-0">
              <div className="flex justify-center items-center md:my-[32px] md:mx-[28px]">
                <div className="h-auto w-auto">
                  <div className="relative">
                    <div className="md:w-auto w-72 shadow-lg relative">
                      <Image
                        loader={myLoader}
                        src="/images/Payment Invoice.svg"
                        alt="Window"
                        width="600px"
                        height="500px"
                      />
                    </div>
                    {/* <div className="md:w-52 w-28 absolute md:-right-20 -right-10 -top-14">
                      <Image
                        loader={myLoader}
                        className="right md:w-52 w-28 absolute md:-right-20 -right-10 -top-14"
                        src="/images/Bills.png"
                        alt="Bursement Bills"
                        width="200px"
                        height="250px"
                      />
                    </div> */}
                    {/* <div className="md:w-52 w-28 absolute md:-left-20 -left-10 md:-bottom-24 -bottom-16">
                      <Image
                        loader={myLoader}
                        src="/images/Invoice.png"
                        alt="Bursement Invoice"
                        width="200px"
                        height="250px"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature2;
