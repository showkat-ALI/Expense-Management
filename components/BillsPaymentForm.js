import React from "react";

const BillsPaymentForm = ({
  handlePaymentMethod,
  handlePaymentSchedule,
  handleReceivingAccount,
}) => {
  return (
    <div className="bg-[#F8F8FA] py-[30px] px-[16px] rounded-[16px] md:mb-[40px] mb-[20px]">
      <div className="grid md:grid-rows-1 md:grid-cols-2 grid-rows-2 grid-cols-1 md:gap-x-3 md:gap-y-0 gap-y-2">
        <div>
          <label htmlFor="vendor" className="Dm font-medium">
            Payment Method <span className="text-[18px] text-[#FA0369]">*</span>
          </label>
          <br />
          <select
            id="countries"
            className="md:w-[305px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-2 focus:border-0 mt-2 px-2 Dm"
            onChange={(event) => handlePaymentMethod(event)}
          >
            <option className="Dm" defaultValue="" disabled selected>
              Bank Account - Vault (USD)
            </option>
            <option className="Dm" value="United States">
              United States
            </option>
            <option className="Dm" value="Canada">
              Canada
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="Amount" className="Dm font-medium">
            Scheduled Date <span className="text-[18px] text-[#FA0369]">*</span>
          </label>
          <br />
          <div className="flex items-center">
            <input
              type="text"
              id="Amount"
              onChange={(event) => handlePaymentSchedule(event)}
              className="md:w-[305px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-2 focus:border-0 mt-2 px-2"
              placeholder="October 11, 2022"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 md:mb-12 mb-6">
        <label className={`Dm font-medium`} htmlFor="Description">
          Receiving Account{" "}
          <span className="text-[18px] text-[#FA0369]">*</span>
        </label>
        <br />
        <input
          className="w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-2 focus:border-0 mt-2 px-2"
          // defaultValue={newitem.descript}
          onChange={(event) => handleReceivingAccount(event)}
          type="text"
          name="description"
          placeholder="Hulkton Pte. Ltd  - Citibank (****0986)"
        />
      </div>

      <div className="flex md:flex-row flex-col md:items-end items-center md:justify-between">
        <div className="flex items-center">
          <div className="bg-[#DFDEFB] rounded-full md:p-2 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#4D49FF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="Dm md:text-[16px] text-[12px] text-[#0D172C] font-medium">
              Expected Arrival Date
            </h3>
            <h3 className="Dm md:text-[14px] text-[10px] text-[#49D078] font-medium">
              October 12, 2022 | No FX Fee
            </h3>
          </div>
        </div>
        <div>
          <p className="text-[14px] Dm text-[#7E8597] md:text-left text-center">
            Payment will not be initiated until all approvals are finalized
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillsPaymentForm;
