import { useContext, useState } from "react";
import styles from "../styles/ExpencesForm.module.css";
import ExpenseItem from "../components/ExpenseItem";
// import Link from "next/link";
// import dynamic from "next/dynamic";
import Image from "next/image";
import { AuthContext } from "../context/AuthContext";
// const ExpenseParticipants = dynamic(() => import("./ExpenseParticipants"), {
//   ssr: false,
// });
// const ExpensePayments = dynamic(() => import("./ExpensePayments"), {
//   ssr: false,
// });
// const ExpenseRules = dynamic(() => import("./ExpenseRules"), { ssr: false });
// const ExpenseReviewers = dynamic(() => import("./ExpenseReviewers"), {
//   ssr: false,
// });
import ExpenseParticipants from "./ExpenseParticipants";
import ExpensePayments from "./ExpensePayments";
import ExpenseRules from "./ExpenseRules";
import ExpenseReviewers from "./ExpenseReviewers";

// image loader
const myLoader = ({ src, width }) => {
  return `${src}?w=${width}`;
};

const ExpencesForm = ({
  handleVendorName,
  handleExpenseDate,
  handleFormSubmit,
}) => {
  const { expenses } = useContext(AuthContext);
  const [expense, setExpense] = expenses;

  const handleAmount = (index, event) => {
    let obj = expense.items[index];
    obj.itemAmount = event.target.value;
  };

  const handleCategory = (index, event) => {
    let obj = expense.items[index];
    obj.itemCategory = event.target.value;
  };

  const handleDescription = (index, event) => {
    let obj = expense.items[index];
    obj.itemDescription = event.target.value;
  };

  const handleRemoveFieds = (index) => {
    const values = expense.items;
    values.splice(index, 1);
    setExpense({ ...expense, items: values });
  };

  const handleAddFormFields = () => {
    const items = expense.items;
    setExpense({
      ...expense,
      items: [
        ...items,
        { itemAmount: "", itemCategory: "", itemDescription: "" },
      ],
    });
  };

  // settings route state
  const [settingsComponent, setSettingsComponent] = useState(
    <ExpenseParticipants />
  );

  return (
    <div>
      <div suppressHydrationWarning={true}>
        <div
          className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
          id="large-modal"
        >
          <div className="relative px-4 w-full max-w-5xl h-full md:h-auto">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal body --> */}
              <div className="md:px-8 px-4 py-10 space-y-6">
                <div className="flex">
                  <div className="w-1/4">
                    <div className="flex items-center mb-[50px]">
                      <div className="flex md:justify-center items-center h-10 w-10 rounded-full md:bg-[#4D49FF26] mr-[16px]">
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
                            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                          />
                        </svg>
                      </div>
                      <button
                        onClick={() =>
                          setSettingsComponent(<ExpenseParticipants />)
                        }
                      >
                        <a>
                          <span className="Kn md:text-[21px] text-[14px]">
                            Participants
                          </span>
                        </a>
                      </button>
                    </div>

                    <div className="flex items-center mb-[50px]">
                      <div className="flex md:justify-center items-center h-10 w-10 rounded-full md:bg-[#4D49FF26] mr-[16px]">
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
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <button
                        onClick={() =>
                          setSettingsComponent(<ExpenseReviewers />)
                        }
                      >
                        <a>
                          <span className="Kn md:text-[21px] text-[14px]">
                            Reviewers
                          </span>
                        </a>
                      </button>
                    </div>

                    <div className="flex items-center mb-[50px]">
                      <div className="flex md:justify-center items-center h-10 w-10 rounded-full md:bg-[#4D49FF26] md:mr-[16px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:h-6 md:w-6 h-4 w-4 text-[#4D49FF]"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                        </svg>
                      </div>
                      <button
                        onClick={() => setSettingsComponent(<ExpenseRules />)}
                      >
                        <a>
                          <span className="Kn md:text-[21px] text-[14px]">
                            Rules
                          </span>
                        </a>
                      </button>
                    </div>

                    <div className="flex items-center mb-[50px]">
                      <div className="flex justify-center items-center md:h-10 md:w-10 h-6 w-6 rounded-full md:bg-[#4D49FF26] mr-[16px]">
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
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                      </div>
                      <button
                        onClick={() =>
                          setSettingsComponent(<ExpensePayments />)
                        }
                      >
                        <a>
                          <span className="Kn md:text-[21px] text-[14px]">
                            Payment
                          </span>
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="w-3/4 md:pl-[80px] pl-[60px]">
                    {settingsComponent}
                  </div>
                </div>
                <div className="text-right">
                  <button type="button" data-modal-toggle="large-modal">
                    <div
                      className={`flex justify-between items-center ${styles.settingrecipt}`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <h1 className="md:text-[18px] text-[16px] font-medium Dm">
                        Settings
                      </h1>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 md:mx-60">
        <div className={styles.formParent}>
          <div className="mx-6">
            <div className={styles.reciptsection}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      loader={myLoader}
                      src="/images/recipt.png"
                      alt=""
                      height={45}
                      width={45}
                    />
                  </div>
                  <label htmlFor="attachReceipt">
                    <div>
                      <h1 className="md:text-2xl text-[16px]	tracking-wider font-medium">
                        Attach receipt
                      </h1>
                      <h2
                        className={`md:text-xl text-[13px] ${styles.reciptsubHead}`}
                      >
                        Attach or upload your receipt, and we’ll autofill it for
                        you.{" "}
                      </h2>
                    </div>
                  </label>
                  <input type="file" id="attachReceipt" className="hidden" />
                </div>
                <div>
                  <Image
                    loader={myLoader}
                    src="/images/recipt-cancel.png"
                    alt=""
                    height={40}
                    width={40}
                  />
                </div>
              </div>
            </div>
            <div className="flex my-8 justify-between items-center">
              <div
                className={`${styles.separateLine} w-full md:block hidden`}
              ></div>
              <div className="w-full">
                <h1 className="text-base font-medium text-center Dm">
                  or write manually...
                </h1>
              </div>
              <div
                className={`${styles.separateLine} w-full md:block hidden`}
              ></div>
            </div>
            {/* Main form */}
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <div className="grid md:grid-rows-1 md:grid-cols-2 grid-rows-2 grid-cols-1 md:gap-x-10 gap-y-4 mx-auto">
                <div>
                  <label htmlFor="vendor" className="Dm font-medium">
                    Vendor
                  </label>
                  <br />

                  <input
                    onChange={(event) => handleVendorName(event)}
                    className="md:w-[300px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                    // id={styles.vendor}
                    // defaultValue={addForm.vendor}
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="ExpenseDate" className="Dm font-medium">
                    Expense Date
                  </label>
                  <br />

                  <input
                    onChange={(event) => handleExpenseDate(event)}
                    className="md:w-[300px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                    // id={styles.ExpenseDate}
                    type="date"
                  />
                </div>
              </div>
              <div className={`${styles.expencesitemsparent}`}>
                {expense.items?.map((item, index) => (
                  <div className="expences-Items my-10" key={index}>
                    <ExpenseItem
                      handleAmount={handleAmount}
                      handleDescription={handleDescription}
                      handleCategory={handleCategory}
                      handleRemoveFieds={handleRemoveFieds}
                      key={index}
                      index={index}
                    ></ExpenseItem>
                  </div>
                ))}
              </div>
              {/* <input type="submit" value="submit" /> */}
            </form>
            <div
              className={`${styles.itemsaddingBtn} flex justify-between items-center cursor-pointer mt-3`}
              onClick={handleAddFormFields}
            >
              <div>
                <Image
                  loader={myLoader}
                  className="w-4 h-4"
                  src="/images/addIcon.png"
                  alt=""
                  height={20}
                  width={20}
                />
              </div>
              <h1 className={`${styles.addingText} mb-1`}>New Line</h1>
            </div>
            <div className="separate-Line my-8	"></div>

            <div className="flex justify-between items-center">
              <div
                className={`${styles.addReciptBtn} flex justify-between items-center`}
              >
                <div>
                  <Image
                    loader={myLoader}
                    src="/images/reciptIcon.png"
                    alt=""
                    height={25}
                    width={20}
                  />
                </div>
                <h1>Attach receipt</h1>
              </div>
              <button type="button" data-modal-toggle="large-modal">
                <div
                  className={`flex justify-between items-center ${styles.settingrecipt}`}
                >
                  <div className="md:w-4 md:h-4 w-4 h-4 mr-2 md:mr-0">
                    <Image
                      loader={myLoader}
                      src="/images/settingIcon.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </div>
                  <h1 className="mt-1 md:text-[18px] text-[16px] font-medium Dm">
                    Settings
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpencesForm;
