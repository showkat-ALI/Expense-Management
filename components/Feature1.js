import Head from "next/head";
import Image from "next/image";
import React from "react";

const Feature1 = () => {
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
        <div className="bg-white shadow-sm shadow-gray-300 mx-6 md:m-auto max-w-default rounded-3xl md:h-[580px] md:overflow-y-hidden">
          <div className="items-center justify-center h-full md:flex">
            <div className="pt-10 mx-6 md:pt-0 md:mx-0 md:w-1/2">
              <div className="flex items-center bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end md:my-[32px] md:mx-7 py-6 rounded-lg">
                <div className="md:w-40 md:h-40 w-20 h-20 rounded-full md:-mr-[100px] -mr-[60px] z-10">
                  <Image
                    loader={myLoader}
                    src="/images/person1.png"
                    alt=""
                    width="320px"
                    height="320px"
                  />
                </div>
                <div className="md:w-96 w-56 mx-auto">
                  <Image
                    loader={myLoader}
                    src="/images/PersonFrame.png"
                    alt="reward"
                    width="600px"
                    height="600px"
                  />
                </div>
                <div className="md:w-40 md:h-40 w-20 h-20 rounded-full md:-ml-[100px] -ml-[60px] z-10">
                  <Image
                    loader={myLoader}
                    src="/images/person2.png"
                    alt=""
                    width="320px"
                    height="320px"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-6 md:px-[102px] h-full">
              <div className="flex items-center h-full">
                <div className="py-12 text-center md:py-0">
                  <h2 className="font-medium leading-snug text-mobile-h2 md:text-[42px] text-slate-headline Kn">
                    We reward your <br /> team.
                  </h2>
                  <p className="pt-6 text-[18px] text-slate-body Dm">
                    Your team get perks and more pats on the shoulders when they
                    spend less, make the right financial decisions & capture
                    receipts in time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature1;
