import Image from "next/image";
import Link from "next/link";
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
  <div>
    <Image
      loader={myLoader}
      src="/images/Expence.png"
      alt="Bursement Expense"
      height="525px"
      width="516px"
    />
  </div>
);

const Feature5 = () => {
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
        <div className="bg-light-blue font-kn-sans py-[20px] md:py-[90px] px-6 md:px-0">
          <div className="m-auto max-w-default">
            <h1 className="md:text-[48px] text-2xl Kn font-medium md:ml-0 ml-3 mb-4 pb-[76px]">
              What is Bursement?
            </h1>
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full">
                <GenerateImageSection />
              </div>
              <div className="flex items-center w-full mt-[78px] md:mt-0">
                <div className="max-w-[362px] m-auto">
                  <h3 className="mt-6 font-medium leading-snug text-mobile-h3 md:text-[36px] Kn">
                    Bursement means <br />
                    less expenses
                  </h3>
                  <p className="mt-3 font-kn-sans font-extralight text-[#2C3242] text-[21px] Dm">
                    Cut down needles expenses. We alert you when there are
                    redundant subscriptions, cost-effective option and reward
                    your teams when they spend less.
                  </p>
                  <div className="mt-8 md:mt-12">
                      <PrimaryButton />
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

export default Feature5;
