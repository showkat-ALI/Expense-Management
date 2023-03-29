import { useContext, useState } from "react";
import styles from "../styles/AdvancesForm.module.css";
import Link from "next/link";
import AdvancesItem from "./AdvancesItem";
import Image from "next/image";
import AdvanceParticipants from "./AdvanceParticipants";
import AdvanceReviewers from "./AdvanceReviewers";
import AdvanceRules from "./AdvanceRules";
import AdvancePayment from "./AdvancePayment";
import { AuthContext } from "../context/AuthContext";

const AdvancesForm = ({
  handleVendorName,
  handleInvoice,
  handleInvoiceDate,
  handleBillDueDate,
  handleVendoerAccount,
  handlePaymentDate,
}) => {

  const { advances } = useContext(AuthContext);
  const [advance, setAdvance] = advances;

  const handleCategory = (index, event) => {
    let obj = advance.items[index];
    obj.itemCategory = event.target.value;
  };
  const handleAmount = (index, event) => {
    let obj = advance.items[index];
    obj.itemAmount = event.target.value;
  };

  const handleDescription = (index, event) => {
    let obj = advance.items[index];
    obj.itemDescription = event.target.value;
  }

  const handleRemoveFieds = (index) => {
    const values = advance.items;
    values.splice(index, 1);
    setAdvance({ ...advance, items: values });
  };

  const handleAddFormFields = () => {
    const items = advance.items;
    setAdvance({
      ...advance,
      items: [
        ...items,
        { itemAmount: "", itemCategory: "", itemDescription: "" },
      ],
    });
  };

  // settings route state
  const [settingsComponent, setSettingsComponent] = useState(
    <AdvanceParticipants />
  );

  // image loader
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <>
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
                        setSettingsComponent(<AdvanceParticipants />)
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
                      onClick={() => setSettingsComponent(<AdvanceReviewers />)}
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
                      onClick={() => setSettingsComponent(<AdvanceRules />)}
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
                      onClick={() => setSettingsComponent(<AdvancePayment />)}
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
                  <label htmlFor="attachInvoice">
                    <div>
                      <h1 className="md:text-2xl text-[16px]	tracking-wider font-medium">
                        Upload invoice
                      </h1>
                      <h2
                        className={`md:text-xl text-[13px] ${styles.reciptsubHead}`}
                      >
                        Attach or upload your invoice, and we’ll autofill it for
                        you.{" "}
                      </h2>
                    </div>
                  </label>
                  <input type="file" className="hidden" id="attachInvoice" />
                </div>
                <div>
                  <Image
                    loader={myLoader}
                    src="/images/recipt-cancel.png"
                    alt=""
                    height={45}
                    width={45}
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
            <form>
              <div className="grid md:grid-rows-2 md:grid-cols-3 grid-rows-6 grid-cols-1 md:gap-x-10 gap-y-4 mx-auto">
                <div>
                  <label className="Dm font-medium" htmlFor="invoice">
                    Invoice # <span className="text-[18px] text-[#FA0369]">*</span>
                  </label>
                  <br />
                  <input
                    onChange={(event) => handleInvoice(event)}
                    name="invoice"
                    type="text"
                    className="md:w-[210px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                  />
                </div>
                <div>
                  <label className="Dm font-medium" htmlFor="invoiceDate">
                    Invoice Date
                  </label>
                  <br />
                  <input
                    type="date"
                    onChange={(event) => handleInvoiceDate(event)}
                    name="invoiceDate"
                    className="md:w-[210px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                  />
                </div>
                <div>
                  <label className="Dm font-medium" htmlFor="billdueDate">
                    Bill Due Date
                  </label>
                  <br />
                  <input
                    type="date"
                    onChange={(event) => handleBillDueDate(event)}
                    name="billDueDate"
                    className="md:w-[210px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                  />
                </div>
                <div>
                  <label className="Dm font-medium" htmlFor="invoice">
                    Vendor <span className="text-[18px] text-[#FA0369]">*</span>
                  </label>
                  <br />
                  <input
                    // defaultValue={addForm.vendor}
                    onChange={(event) => handleVendorName(event)}
                    name="vendor"
                    type="text"
                    className="md:w-[210px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                  />
                </div>

                <div>
                  <label className="Dm font-medium" htmlFor="billdueDate">
                    Vendor Bank Account <span className="text-[18px] text-[#FA0369]">*</span>
                  </label>
                  <br />
                  <input
                    type="number"
                    onChange={(event) => handleVendoerAccount(event)}
                    name="bankAccount"
                    className="md:w-[210px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                  />
                </div>

                <div>
                  <label className="Dm font-medium" htmlFor="billdueDate">
                    Payment Scheduled Date
                  </label>
                  <br />
                  <input
                    type="date"
                    onChange={(event) => handlePaymentDate(event)}
                    name="billDueDate"
                    className="md:w-[210px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                  />
                </div>
              </div>
              <div className={`${styles.expencesitemsparent}`}>
                {advance.items?.map((item, index) => (
                  <div className="expences-Items my-10" key={index}>
                    <AdvancesItem
                      handleCategory={handleCategory}
                      handleAmount={handleAmount}
                      handleDescription={handleDescription}
                      handleRemoveFieds={handleRemoveFieds}
                      key={index}
                      index={index}
                    ></AdvancesItem>
                  </div>
                ))}
              </div>
              {/* <input type="submit" value="submit" /> */}
            </form>
            <div className="md:block flex items-center justify-between">
              <div
                className={`${styles.itemsaddingBtn} flex items-center md:justify-around cursor-pointer md:mt-0 mt-4`}
                onClick={(index) => handleAddFormFields(index)}
              >
                <div className="md:w-4 md:h-4 w-4 h-4 mr-2 md:mr-0">
                  <Image
                    loader={myLoader}
                    src="/images/addIcon.png"
                    alt=""
                    height={30}
                    width={30}
                  />
                </div>
                <h1
                  className={`${styles.addingText} mt-1 md:text-[18px] text-[16px]`}
                >
                  New Line
                </h1>
              </div>
              <div className="separate-Line my-8"></div>

              <div className="flex justify-between items-center md:ml-0 ml-2 md:mt-0 mt-4">
                <div></div>
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
        </div>
      </section>
    </>
  );
};

export default AdvancesForm;
