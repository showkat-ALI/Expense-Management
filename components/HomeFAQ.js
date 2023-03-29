import React from "react";

const HomeFAQ = () => {
  return (
    <div className="bg-light-blue md:pb-[90px] pb-[35px] md:pt-[40px] pt-[30px]">
      <h1 className="font-bold text-center text-[28px] md:text-[34px] text-[#0D172C] Kn mb-[50px]">
        FAQs
      </h1>
      <div className="md:grid md:grid-rows-1 md:grid-cols-2 md:gap-x-[150px] md:gap-y-0 flex flex-col md:mx-[80px] mx-[10px]">
        <div>
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex justify-between items-center p-5 w-full font-medium text-left text-[#0D172C] border border-x-0 border-gray-500 dark:border-gray-700 dark:text-gray-500 Dm"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-1"
              >
                <span>What is Bursement?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 dark:border-gray-700 bg-[#fff] dark:bg-gray-900">
                <p className="mb-2 text-[#0D172C] Dm dark:text-gray-400">
                  Bursement is a centralised business spending solution for
                  forward-thinking teams. Bursement enables employees to buy the
                  things they need for work while keeping companies in full
                  control of all spending and erasing needless expenses with
                  useful insights. Bursement rewards your team for healthy
                  financial hygiene and decisions. With the help of breakthrough
                  technology and commercial cards, Bursement eliminates expense
                  reports, reduces administrative complexity and simplifies
                  bookkeeping. Find out more.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className="flex justify-between items-center p-5 w-full font-medium text-left text-[#0D172C] Dm border border-x-0 border-t-0 border-gray-500 dark:border-gray-700 dark:text-gray-500"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span>What services does Bursement offer?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div className="p-5 bg-[#fff] dark:border-gray-700">
                <p className="mb-2 text-[#0D172C] Dm dark:text-gray-400">
                  Bursement provides you with smart company cards. Bursement
                  provides spend management, billing and invoicing tools for
                  teams. We provide expense forecasting using our proprietary AI
                  algorithm. We provide a vendor and credit/debt management
                  system that gives one deeper insight into expenditures, debt
                  and credit. Reward your employees, manage their benefits and
                  offset your global carbon footprint.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className="flex justify-between items-center p-5 w-full font-medium text-left text-[#0D172C] Dm border border-x-0 border-t-0 border-gray-500 dark:border-gray-700 dark:text-gray-500"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span>Is Bursement licensed?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div className="p-5 bg-[#fff] dark:border-gray-700">
                <p className="mb-2 text-[#0D172C] Dm dark:text-gray-400">
                  Bursement provides all payment services, including
                  cross-border money transfer services, in conjunction with MAS
                  licensed partners. All corporate cards are issued and powered
                  by our licensed partner (NIUM).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* second accordion */}
        <div>
          <div id="accordion-collapse2" data-accordion="collapse">
            <h2 id="accordion-collapse2-heading-1">
              <button
                type="button"
                className="flex justify-between items-center p-5 w-full font-medium text-left text-[#0D172C] Dm border border-x-0 md:border-t-[1px] border-t-0 border-gray-500 dark:border-gray-700 dark:text-gray-500"
                data-accordion-target="#accordion-collapse2-body-1"
                aria-expanded="false"
                aria-controls="accordion-collapse2-body-1"
              >
                <span>Is my money safe in Bursement?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse2-body-1"
              className="hidden"
              aria-labelledby="accordion-collapse2-heading-1"
            >
              <div className="p-5 bg-[#fff] dark:border-gray-700">
                <p className="mb-2 text-[#0D172C] Dm dark:text-gray-400">
                  Yes! Our web platform and app adopt state-of-the-art security
                  practices on the market. Security is very relevant and at the
                  heart of our business operations.
                </p>
                <ul className="mt-[10px] list-disc ml-[20px]">
                  <li className="mb-2 text-[#0D172C] Dm dark:text-gray-400">
                    Secured Data. The highest digital security encryption and
                    access protocols are used to protect your data. Bursement
                    complies with personal data protection regulations in
                    Singapore.
                  </li>
                  <li className="mb-2 text-[#0D172C] Dm dark:text-gray-400">
                    Safeguarding of funds in trust. Your funds are kept strictly
                    segregated in a trust account with a partner tier-1 bank
                    which is safeguarded.
                  </li>
                  <li className="mb-2 text-[#0D172C] Dm dark:text-gray-400">
                    Multi-factor Authentication. Our platform and your
                    transactions require 2-factor authentication with an OTP
                    that will be sent to your email or phone for an extra layer
                    of authentication and protection.
                  </li>
                  <li className="mb-2 text-[#0D172C] Dm dark:text-gray-400">
                    Lock cards and account when compromised: You can block your
                    cards when compromised and when you lose access or feel that
                    your account has been compromised, let us know immediately.
                    Bursement will lock your account until security has been
                    re-established.
                  </li>
                </ul>
              </div>
            </div>
            <h2 id="accordion-collapse2-heading-2">
              <button
                type="button"
                className="flex justify-between items-center p-5 w-full font-medium text-left text-[#0D172C] Dm border border-x-0 border-t-0 border-gray-500 dark:border-gray-700 dark:text-gray-500"
                data-accordion-target="#accordion-collapse2-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse2-body-2"
              >
                <span>Who can apply for an account at Bursement?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse2-body-2"
              className="hidden"
              aria-labelledby="accordion-collapse2-heading-2"
            >
              <div className="p-5 bg-[#fff] dark:border-gray-700">
                <p className="mb-2 text-[#0D172C] Dm dark:text-gray-400">
                  Any business incorporated in Singapore and Indonesia can apply
                  for an account in Bursement. Our team performs Know Your
                  Customer (KYC) which takes about 5-12 business days. You can
                  definitely use some features like Activity while waiting for
                  KYC to be completed.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse2-heading-3">
              <button
                type="button"
                className="flex justify-between items-center p-5 w-full font-medium text-left text-[#0D172C] Dm border border-x-0 border-t-0 border-gray-500 dark:border-gray-700 dark:text-gray-500"
                data-accordion-target="#accordion-collapse2-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse2-body-3"
              >
                <span>What are the account fees?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse2-body-3"
              className="hidden"
              aria-labelledby="accordion-collapse2-heading-3"
            >
              <div className="p-5 bg-[#fff] dark:border-gray-700">
                <p className="mb-2 text-[#0D172C] Dm dark:text-gray-400">
                  Bursement account fee is free. Every charge is very low and
                  transparent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
