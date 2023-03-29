import React from "react";
import Head from "next/head";
import BursementAppMenu from "../../../BursementAppLayout/BursementAppMenu";

const CreateCard = () => {
  return (
    <>
      <Head>
        <title>Bursement App - Create Card</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Bursement the only company card and spend management platform designed to help you be frugal"
        />
        <link rel="icon" href="https://i.ibb.co/hmxS8dZ/Vector-11-Stroke.png" />
      </Head>

      <BursementAppMenu>
        <div className="bg-[#F3F2FF] h-full md:py-[20px] py-[40px]">
          <h1 className="text-[48px] text-[#000] ml-[63px] md:mb-[35px] Kn">
            Create a new card
          </h1>
          <form>
            <div className="mt-[30px] md:pl-[70px] pl-[20px] md:pr-0 pr-[15px] grid md:grid-rows-3 md:grid-cols-2 grid-rows-6 grid-cols-1 md:gap-x-10 gap-y-6 mx-auto">
              <div>
                <label className="Dm font-medium" htmlFor="invoice">
                  Card name
                </label>
                <br />
                <input
                  name="cardName"
                  type="text"
                  className="md:w-[398px] w-full h-[50px] border-2 border-gray-200 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                />
              </div>

              <div>
                <label htmlFor="holder" className="Dm font-medium">
                  Card Holder
                </label>
                <br />
                <select
                  id="holder"
                  className="md:w-[398px] w-full h-[50px] border-2 border-gray-200 rounded-[8px] outline-2 focus:border-0 mt-2 px-2 Dm"
                >
                  <option className="Dm" defaultValue="" disabled selected>
                    Select Holder
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
                <label htmlFor="currency" className="Dm font-medium">
                  Card Currency
                </label>
                <br />
                <select
                  id="currency"
                  className="md:w-[398px] w-full h-[50px] border-2 border-gray-200 rounded-[8px] outline-2 focus:border-0 mt-2 px-2 Dm"
                >
                  <option className="Dm" defaultValue="" disabled selected>
                    $ Card Currency
                  </option>
                  <option className="Dm" value="USD">
                    USD
                  </option>
                  <option className="Dm" value="CAD">
                    CAD
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="limit" className="Dm font-medium">
                  Limit
                </label>
                <br />
                <div className="flex justify-between">
                  <select
                    id="limit"
                    className="md:w-[190px] w-full h-[50px] border-2 border-gray-200 rounded-[8px] outline-2 focus:border-0 mt-2 px-2 Dm"
                  >
                    <option className="Dm" defaultValue="" disabled selected>
                      Select Duration
                    </option>
                    <option className="Dm" value="Weekly">
                      Weekly
                    </option>
                    <option className="Dm" value="Monthly">
                      Monthly
                    </option>
                    <option className="Dm" value="Yearly">
                      Yearly
                    </option>
                  </select>

                  <input
                    name="amount"
                    type="text"
                    className="md:w-[190px] w-full h-[50px] border-2 border-gray-200 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                  />
                </div>
              </div>

              <div>
                <label className="Dm font-medium" htmlFor="transactionAmount">
                  Transaction Amount Cap
                </label>
                <br />
                <input
                  id="transactionAmount"
                  name="transactionAmount"
                  type="text"
                  className="md:w-[398px] w-full h-[50px] border-2 border-gray-200 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                />
              </div>

              <div>
                <label htmlFor="lifeTime" className="Dm font-medium">
                  Card Lifetime
                </label>
                <br />
                <input
                  id="lifeTime"
                  className="md:w-[398px] w-full h-[50px] border-2 border-gray-200 rounded-[8px] outline-none focus:border-0 mt-2 px-2"
                  // id={styles.ExpenseDate}
                  type="date"
                />
              </div>
              <div className="">
                <button className="bg-[#4D49FF] text-white py-[10px] px-[36px] rounded-[8px] text-[18px] Dm">
                  Save Card
                </button>
              </div>
            </div>
          </form>
        </div>
      </BursementAppMenu>
    </>
  );
};

export default CreateCard;
