import React from "react";

const ExpensePayments = () => {
  return (
    <div className="pb-[60px]">
      <h1 className="md:text-[32px] text-[20px] text-[#0D172C] Kn">Payment</h1>

      <div className="flex items-center my-[42px]">
        <div className="flex md:justify-center items-center h-10 w-10 rounded-full md:bg-[#4D49FF26] md:mr-[16px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:h-6 md:w-6 h-4 w-4 text-[#4D49FF]"
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
        </div>
        <div className="flex flex-col">
          <h3 className="Kn md:text-[18px] text-[14px] font-normal">
            Bursement wallet
          </h3>
          <p className="md:text-[16px] text-[13px] m-0 p-0 text-[#7E8597]">
            $ 3600
          </p>
        </div>
      </div>

      <div className="md:flex md:flex-row flex-col items-center md:justify-between my-[42px]">
        <div className="flex items-center">
          <div className="flex md:justify-center items-center h-10 w-10 rounded-full md:bg-[#4D49FF26] md:mr-[16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-6 md:w-6 h-4 w-4 text-[#4D49FF]"
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
          </div>
          <h3 className="Kn md:text-[18px] text-[14px] font-normal">
            Bank account
          </h3>
        </div>
        <div>
          <p className="text-[#7E8597] md:text-[16px] text-[13px] md:ml-0 ml-10">
            4 accounts
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpensePayments;
