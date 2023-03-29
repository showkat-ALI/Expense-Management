import { useContext, useState } from "react";
import styles from "../styles/ExpencesForm.module.css";
import Image from "next/image";
import { AuthContext } from "../context/AuthContext";
import ExpenseParticipants from "./ExpenseParticipants";
import ExpensePayments from "./ExpensePayments";
import ExpenseRules from "./ExpenseRules";
import ExpenseReviewers from "./ExpenseReviewers";
import BillsItem from "./BillsItem";
import BillsPaymentForm from "./BillsPaymentForm";

// image loader
const myLoader = ({ src, width }) => {
  return `${src}?w=${width}`;
};

const BillsForm = ({
  handleVendorName,
  handleVendorContact,
  handleInvoice,
  handleInvoiceDate,
  handleBillDueDate,
  handleMemo,
}) => {
  const { bills } = useContext(AuthContext);
  const [newBills, setNewBills] = bills;

  const handleAmount = (index, event) => {
    let obj = newBills.items[index];
    obj.itemAmount = event.target.value;
  };

  const handleCategory = (index, event) => {
    let obj = newBills.items[index];
    obj.itemCategory = event.target.value;
  };

  const handleDescription = (index, event) => {
    let obj = newBills.items[index];
    obj.itemDescription = event.target.value;
  };

  const handleClass = (index, event) => {
    let obj = newBills.items[index];
    obj.class = event.target.value;
  };

  const handleCustomer = (index, event) => {
    let obj = newBills.items[index];
    obj.customer = event.target.value;
  };

  const handleStatus = (index, event) => {
    let obj = newBills.items[index];
    obj.status = event.target.value;
  };

  // Payment Form Function
  const handlePaymentMethod = (event) => {
    newBills.paymentMethod = event.target.value;
  };

  const handlePaymentSchedule = (event) => {
    newBills.paymentSchedule = event.target.value;
  };

  const handleReceivingAccount = (event) => {
    newBills.receiverAccount = event.target.value;
  };

  const handleRemoveFieds = (index) => {
    const values = newBills.items;
    values.splice(index, 1);
    setNewBills({ ...newBills, items: values });
  };

  const handleAddFormFields = () => {
    const items = newBills.items;
    setNewBills({
      ...newBills,
      items: [
        ...items,
        {
          itemAmount: "",
          itemCategory: "",
          itemDescription: "",
          class: "",
          customer: "",
          status: "",
        },
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
                        Attach Invoice
                      </h1>
                      <h2
                        className={`md:text-xl text-[13px] ${styles.reciptsubHead}`}
                      >
                        Attach or upload your invoice, and we’ll autofill it for
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
                    Vendor Name{" "}
                    <span className="text-[18px] text-[#FA0369]">*</span>
                  </label>
                  <br />

                  <input
                    onChange={(event) => handleVendorName(event)}
                    className="md:w-[310px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                    // id={styles.vendor}
                    // defaultValue={addForm.vendor}
                    type="text"
                    placeholder="Vendor"
                  />
                  <div className="flex items-center mt-[10px] mb-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="md:h-6 md:w-6 h-5 w-5 text-[#4D49FF] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                    <p className="Dm md:text-[15px] text-[13px] text-[#2C3242]">
                      No previous payments to this vendor.
                    </p>
                  </div>
                </div>
                <div>
                  <label htmlFor="ExpenseDate" className="Dm font-medium">
                    Vendor Contact
                  </label>
                  <br />

                  <input
                    onChange={(event) => handleVendorContact(event)}
                    className="md:w-[310px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                    type="email"
                    placeholder="email@vendor.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-rows-1 md:grid-cols-3 grid-rows-3 grid-cols-1 md:gap-x-10 gap-y-4 mx-auto">
                <div>
                  <label className="Dm font-medium" htmlFor="invoice">
                    Invoice #
                  </label>
                  <br />
                  <input
                    onChange={(event) => handleInvoice(event)}
                    name="invoice"
                    type="text"
                    className="md:w-[197px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                    placeholder="0000"
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
                    className="md:w-[197px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
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
                    className="md:w-[197px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                  />
                </div>
              </div>
              <div className="mt-[20px]">
                <input
                  className="w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-2 focus:border-0 mt-2 px-2"
                  // defaultValue={newitem.descript}
                  onChange={(event) => handleMemo(event)}
                  type="text"
                  name="memo"
                  placeholder="Memo"
                />
              </div>
              <div className={`${styles.expencesitemsparent}`}>
                {newBills.items?.map((item, index) => (
                  <div className="expences-Items my-10" key={index}>
                    <BillsItem
                      handleAmount={handleAmount}
                      handleCategory={handleCategory}
                      handleDescription={handleDescription}
                      handleClass={handleClass}
                      handleCustomer={handleCustomer}
                      handleStatus={handleStatus}
                      handleRemoveFieds={handleRemoveFieds}
                      key={index}
                      index={index}
                    ></BillsItem>
                  </div>
                ))}
              </div>
              {/* <input type="submit" value="submit" /> */}
            </form>
            <div className="flex md:flex-row flex-col items-center">
              <div
                className={`${styles.itemsaddingBtn} flex items-center cursor-pointer md:mr-6 md:mb-0 mb-3.5`}
                onClick={handleAddFormFields}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#49D078]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h1 className={`${styles.addingText} ml-1`}>New Line</h1>
              </div>

              <div>
                <div
                  className={`bg-[#ECECF2] px-[16px] py-[10px] rounded-[50px] flex items-center cursor-pointer`}
                  //   onClick={handleAddFormFields}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#089ef58a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </div>
                  <h1 className={`${styles.addingText} ml-1.5`}>
                    Merge Same Category
                  </h1>
                </div>
              </div>
            </div>
            <div className="separate-Line my-8	"></div>

            <BillsPaymentForm
              handlePaymentMethod={handlePaymentMethod}
              handlePaymentSchedule={handlePaymentSchedule}
              handleReceivingAccount={handleReceivingAccount}
            ></BillsPaymentForm>

            <div className="mt-[50px] mb-[80px]">
              <div className="flex items-center">
                <div className="bg-[#DFDEFB] rounded-full md:p-2 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-6 md:w-6 h-5 w-5 text-[#4D49FF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 className="md:text-[20px] text-[16px] text-[#0D172C] ml-2.5 font-medium Dm">
                  After approvals from:
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-x-10 gap-y-12 mt-6 md:ml-12">
                <div className="flex items-center">
                  <Image
                    loader={myLoader}
                    src="/images/Ellipse 661.png"
                    alt=""
                    width="39px"
                    height="39px"
                  />
                  <h4 className="Dm text-[16px] text-[#2C3242] ml-2">
                    Tony Musk
                  </h4>
                </div>

                <div className="flex items-center">
                  <Image
                    loader={myLoader}
                    src="/images/Ellipse 662.png"
                    alt=""
                    width="39px"
                    height="39px"
                  />
                  <h4 className="Dm text-[16px] text-[#2C3242] ml-2">
                    Eve Adams
                  </h4>
                </div>

                <div className="flex items-center">
                  <Image
                    loader={myLoader}
                    src="/images/Ellipse 663.png"
                    alt=""
                    width="39px"
                    height="39px"
                  />
                  <h4 className="Dm text-[16px] text-[#2C3242] ml-2">
                    Peter Low
                  </h4>
                </div>

                <div className="flex items-center">
                  <Image
                    loader={myLoader}
                    src="/images/Ellipse 664.png"
                    alt=""
                    width="39px"
                    height="39px"
                  />
                  <h4 className="Dm text-[16px] text-[#2C3242] ml-2">
                    Wiily Nora
                  </h4>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Image
                loader={myLoader}
                src="/images/billsLogo-1.png"
                alt=""
                height={35}
                width={35}
              />
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

export default BillsForm;
