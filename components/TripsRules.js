import React from "react";

const TripsRules = () => {
  return (
    <div className="pb-[60px]">
      <h1 className="md:text-[32px] text-[20px] text-[#0D172C] Kn">Rules</h1>
      <div className="flex justify-between items-center my-[42px]">
        <p className="Dm text-[#2C3242] md:text-[16px] text-[13px]">
          Amount Limit
        </p>
        <p className="Dm text-[#2C3242]">
          ${" "}
          <input
            type="number"
            className="md:h-[50px] h-[35px] md:w-[80px] w-[50px] rounded-[8px] border-gray-400 Dm"
          />
        </p>
      </div>

      <div className="flex justify-between items-center my-[42px]">
        <p className="Dm text-[#2C3242] md:text-[16px] text-[13px]">
          Occurrence Limit
        </p>
        <input
          type="number"
          className="md:h-[50px] h-[35px] md:w-[80px] w-[50px] rounded-[8px] border-gray-400 Dm"
        />
      </div>

      <div className="flex justify-between items-center my-[42px]">
        <p className="Dm text-[#2C3242] md:text-[16px] text-[13px]">
          Require description
        </p>
        <input
          type="checkbox"
          className="w-7 h-7 text-[#605BFF] rounded border-gray-400 focus:ring-[#605BFF] dark:focus:ring-[#605BFF] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-400 dark:border-gray-400"
        />
      </div>
    </div>
  );
};

export default TripsRules;
