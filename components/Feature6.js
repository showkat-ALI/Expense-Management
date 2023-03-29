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
          Bursement means control{" "}
        </h2>
        <p className="pt-6 text-[21px] text-[#2C3242] Dm">
          {" "}
          Set individual spending limits for
          <br /> each Bursement card and adjust
          <br /> them as needed.
        </p>
      </div>
    </div>
  </div>
);

const Feature6 = () => {
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
              <div className="md:my-[32px] md:mx-[28px]">
                <div className="flex justify-center items-center m-auto w-full rounded-full p-[42px]">
                  <Image
                    loader={myLoader}
                    className="md:-mt-12 md:-mb-10 md:w-full w-auto"
                    src="/images/Controls.png"
                    alt="Bursement means control"
                    height="525px"
                    width="516px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature6;
