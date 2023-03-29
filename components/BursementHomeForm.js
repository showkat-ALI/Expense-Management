import React from "react";
import HubspotForm from "react-hubspot-form";

const BursementHomeForm = () => {
  return (
    <div className="bg-light-blue pb-[25px] md:pt-[60px] pt-[30px]">
      <div className="flex flex-col md:flex-row md:mx-[100px] mx-[10px]">
        <div className="w-full md:mr-[17px] md:order-1">
          <h1 className="font-bold md:text-left text-center md:text-[34px] text-[24px] text-[#0D172C] Kn">
            Supercharge your company with Bursement. Close your books in no
            time. 100% employee satisfaction.
          </h1>
          <ul className="mt-[20px] list-disc ml-[30px]">
            <li className="md:text-[18px] text-[16px] font-medium Dm">
              30% discount on your subscription fees on Bursement for 1 year and
              1 month.
            </li>
            <li className="md:text-[18px] text-[16px] font-medium Dm">
              3 free seats forever and 1 extra free seat for 12 months.
            </li>
            <li className="md:text-[18px] text-[16px] font-medium Dm">
              30% increase in cashback on all subscriptions paid with Bursement
              Cards for 12 months.
            </li>
            <li className="md:text-[18px] text-[16px] font-medium Dm">
              Freshworks credits worth $4000
            </li>
            <li className="md:text-[18px] text-[16px] font-medium Dm">
              But there is a whole lot more. See for yourself
            </li>
          </ul>
        </div>

        {/* form start */}
        <div className="w-full md:ml-[17px] md:mt-0 mt-4 md:order-2 mb-[70px] md:mb-[90px]">
          <h3 className="md:text-[22px] text-[18px] text-center Kn font-bold text-[#0D172C]">
            Send us your details to get the ball rolling!
          </h3>
          <div className="md:mt-[20px] mt-4">
            <HubspotForm
              region="na1"
              portalId="21718124"
              formId="140103f3-5fa4-4698-ab98-1af8a4d8a4e0"
              onSubmit={() => console.log("Submit!")}
              onReady={(form) => console.log("Form ready!")}
              loading={<div>Loading...</div>}
            />
          </div>
          {/* <form>
            <div className="flex flex-row items-center">
              <div className="p-2">
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    className="border border-gray-400 text-gray-900 text-[16px] focus:ring-[#4D49FF] focus:border-[#4D49FF] block md:w-[250px] w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4D49FF] dark:focus:border-[#4D49FF] Dm"
                    placeholder="First Name"
                  />
                </div>
              </div>

              <div className="p-2">
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    className="border border-gray-400 text-gray-900 text-[16px] focus:ring-[#4D49FF] focus:border-[#4D49FF] block md:w-[250px] w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4D49FF] dark:focus:border-[#4D49FF] Dm"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>

            <div className="p-2">
              <label htmlFor="companyName" className="sr-only">
                Company Name
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="companyName"
                  className="border border-gray-400 text-gray-900 text-[16px] focus:ring-[#4D49FF] focus:border-[#4D49FF] block md:w-[517px] w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4D49FF] dark:focus:border-[#4D49FF] Dm"
                  placeholder="Company Name"
                />
              </div>
            </div>

            <div className="p-2">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="email"
                  className="border border-gray-400 text-gray-900 text-[16px] focus:ring-[#4D49FF] focus:border-[#4D49FF] block md:w-[517px] w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4D49FF] dark:focus:border-[#4D49FF] Dm"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="p-2">
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="phone"
                  className="border border-gray-400 text-gray-900 text-[16px] focus:ring-[#4D49FF] focus:border-[#4D49FF] block md:w-[517px] w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4D49FF] dark:focus:border-[#4D49FF] Dm"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <h3 className="text-[18px] text-[#3B3F4D] text-left ml-2 mt-2 Dm font-bold">
              What features are you interested in?
            </h3>
            <div className="grid md:grid-rows-1 grid-rows-2 md:grid-cols-3 grid-cols-2 gap-4 md:pr-5 mt-2 mx-2">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="md:w-7 w-6 md:h-7 h-6 text-[#605BFF] border-gray-500 rounded dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checkbox-all"
                  className="md:text-[20px] text-[17px] ml-2 Dm text-gray-800"
                >
                  Expense management
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="md:w-7 w-6 md:h-7 h-6 text-[#605BFF] border-gray-500 rounded dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checkbox-all"
                  className="md:text-[20px] text-[17px] ml-2 Dm text-gray-800"
                >
                  Bill payments
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="md:w-7 w-6 md:h-7 h-6 text-[#605BFF] border-gray-500 rounded dark:bg-gray-700 dark:border-gray-600 "
                />
                <label
                  htmlFor="checkbox-all"
                  className="md:text-[20px] text-[17px] ml-2 Dm text-gray-800"
                >
                  Accounting automation
                </label>
              </div>
            </div>

            <div className="flex ml-2 mt-6">
              <input
                id="checkbox-all"
                type="checkbox"
                className="md:w-7 w-6 md:h-7 h-6 text-[#605BFF] border-gray-500 rounded dark:bg-gray-700 dark:border-gray-600 mt-1"
              />
              <label
                htmlFor="checkbox-all"
                className="text-[13px] ml-3 Dm text-gray-400"
              >
                I agree to receive electronic marketing communications from
                Freshworks and understand I can unsubscribe by clicking the
                unsubscribe link in any email or by contacting Freshworks.
              </label>
            </div>
            <button className="block w-full bg-[#4D49FF] text-[#fff] md:py-3 py-2 md:text-[18px] text-[15px] Kn mt-4 rounded-[8px]">
              Submit
            </button>
            <p className="mt-3 text-[13px] text-center md:w-[450px] w-full mx-auto font-medium">
              By clicking on <span className="font-bold">SUBMIT</span>, you
              agree to our{" "}
              <span className="text-[#4D49FF]">startup program terms</span> and
              acknowledge having read our{" "}
              <span className="text-[#4D49FF]">Privacy notice</span>.
            </p>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default BursementHomeForm;
