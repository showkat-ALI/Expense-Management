import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const ExpenseRules = () => {
  const { expenses } = useContext(AuthContext);
  const [expense, setExpense] = expenses;
  // const [isRequireDescription, setIsRequireDescription] = RequireDescription;
  const [isRequireDescription, setIsRequireDescription] = useState(true);

  const handleAmount = (e) => {
    expense.rules[0].amountLimit = e.target.value;
  };

  const handleOccurrence = (e) => {
    expense.rules[0].occurrenceLimit = e.target.value;
  };

  const handleRequireDescription = () => {
    setIsRequireDescription(!isRequireDescription);
    expense.rules[0].requireDescription = isRequireDescription;
  }

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
            onChange={handleAmount}
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
          onChange={handleOccurrence}
          className="md:h-[50px] h-[35px] md:w-[80px] w-[50px] rounded-[8px] border-gray-400 Dm"
        />
      </div>

      <div className="flex justify-between items-center my-[42px]">
        <p className="Dm text-[#2C3242] md:text-[16px] text-[13px]">
          Require Description
        </p>
        <input
          type="checkbox"
          onClick={handleRequireDescription}
          className="w-7 h-7 text-[#605BFF] rounded border-gray-400 focus:ring-[#605BFF] dark:focus:ring-[#605BFF] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-400 dark:border-gray-400"
        />
      </div>
    </div>
  );
};

export default ExpenseRules;
