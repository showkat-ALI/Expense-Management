import React from "react";
import Image from 'next/image';

const TransformedExpenses = () => {

    const myLoader = ({ src, width }) => {
        return `${src}?w=${width}`;
      };
      
      const GenerateImageSection = () => (
        <div>
          <Image
            loader={myLoader}
            src="/images/Transformed.svg"
            alt="Bursement transparancy"
            width="750px"
            height="516px"
          />
        </div>
      );


  return (
    <section>
      <div className="bg-light-blue font-kn-sans py-[30px] md:py-[90px] px-6 md:px-[150px]">
        <div className="m-auto max-w-default">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:mt-0 mt-8 md:order-1 order-1">
              <GenerateImageSection />
            </div>
            <div className="flex w-full md:order-2 order-2">
              <div className="max-w-[562px] md:h-[320px] h-auto md:ml-[30px] md:mt-5 mt-2 bg-white py-6 px-7">
                <h3 className="mt-3 font-medium text-mobile-h3 md:text-[24px] Kn text-[#0D172C]">
                Transformed our spending process
                </h3>
                <p className="mt-3 Dm text-[16px] text-[#2C3242]">
                We are able to auto sync with our GL, review and approve expenses, define importing rules and have complete visibility into our spend. Unsecured credit card program with high limits allows us to put our cash to work.
                </p>
                <div className="mt-24">
                  <p className="Dm text-[16px] text-[#2C3242]">Accountant at a digital marketing company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformedExpenses;
