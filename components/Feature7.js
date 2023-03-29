import Link from "next/link";
import Image from "next/image";
import React from "react";

const PrimaryButton = () => (
  <div>
    <Link href="/signupForm">
      <a>
        <button className="w-full px-8 py-4 font-medium text-[#fff] rounded-full border-2 bg-[#605BFF] hover:bg-[#6964ff] text-[18px] md:w-auto Kn">
          Try it free
        </button>
      </a>
    </Link>
  </div>
);

const myLoader = ({ src, width }) => {
  return `${src}?w=${width}`;
};

const GenerateImageSection = () => (
  <div className="md:mt-0 mt-8">
    <Image
      loader={myLoader}
      src="/images/Efficiency.png"
      alt="Bursement Efficiency"
      height="525px"
      width="516px"
    />
  </div>
);

const Feature7 = () => {
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

      <section>
        <div className="bg-light-blue py-12 md:py-[90px] px-6 md:px-0">
          <div className="m-auto max-w-default">
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center w-full mt-[78px] md:mt-0">
                <div className="max-w-[362px] m-auto">
                  <h3 className="mt-6 font-medium leading-snug text-mobile-h3 md:text-[36px] Kn">
                    Bursement means
                    <br /> efficiency
                  </h3>
                  <p className="mt-3 Dm text-[21px] text-[#2C3242]">
                    Less paper, more work. Bursement looks after expense reports
                    and receipts - so you and your teams can focus on work that
                    really counts.
                  </p>
                  <div className="mt-8 md:mt-12">
                    <PrimaryButton />
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <GenerateImageSection />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature7;
