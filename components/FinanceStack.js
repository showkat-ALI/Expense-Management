import React from "react";
import Image from "next/image";
import Style from '../styles/FinanceStack.module.css';

const FinanceStack = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <div className="bg-light-blue md:pb-[60px] pb-[35px] md:pt-[40px] pt-[30px]">
      <h1 className="font-medium text-center text-[28px] md:text-[38px] text-[#0D172C] Kn">
      Simplify your finance stack
      </h1>
      <p className="text-[#7E8597] text-center Dm text-[18px]">
      All-in-one financial software to control company spend
      </p>

      <div className="md:block hidden text-center mt-4">
        <Image
          src="/images/bursementCampaignImg/tentacles 1.svg"
          alt=""
          height="250px"
          width="1200px"
          loader={myLoader}
        />
      </div>

      {/* Mobile View Tree  Image */}
      <div className="relative md:hidden block text-center mt-16">
        <Image
          src="/images/bursementCampaignImg/tentacles-mobile.svg"
          alt=""
          height="1230px"
          width="300px"
          loader={myLoader}
        />
      </div>

      <div className={`md:static absolute top-[1180px] ${Style.listMenuMobile} grid md:grid-rows-1 grid-rows-5 md:grid-cols-5 grid-cols-1 md:w-[1250px] w-full mx-auto md:gap-y-0 gap-y-14 md:-mt-6 mt-4 z-10 px-[20px]`}>
        <div>
          <div className="bg-white md:py-5 py-2 rounded-[10px] md:w-[100px] w-[120px] text-center mx-auto">
            <Image
              loader={myLoader}
              src="/images/bursementCampaignImg/expense-management-home-icon.svg"
              alt=""
              height="50px"
              width="50px"
            />
          </div>
          <div className="text-center mt-2">
            <h5 className="font-bold Dm text-[#2C3242] text-[18px]">
              Expense management
            </h5>
            <p className="text-gray-500 Dm text-[16px] font-normal">
              Replace expense reports and apps
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white md:py-5 py-2 rounded-[10px] md:w-[100px] w-[120px] text-center mx-auto">
            <Image
              loader={myLoader}
              src="/images/bursementCampaignImg/corporate-cards-home-icon.svg"
              alt=""
              height="50px"
              width="50px"
            />
          </div>
          <div className="text-center mt-2">
            <h5 className="font-bold Dm text-[#2C3242] text-[18px]">
              Corporate cards
            </h5>
            <p className="text-gray-500 Dm text-[16px] font-normal">
              Issue virtual and physical<br /> cards
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white md:py-5 py-2 rounded-[10px] md:w-[100px] w-[120px] text-center mx-auto">
            <Image
              loader={myLoader}
              src="/images/bursementCampaignImg/bill-payments-home-icon.svg"
              alt=""
              height="50px"
              width="50px"
            />
          </div>
          <div className="text-center mt-2">
            <h5 className="font-bold Dm text-[#2C3242] text-[18px]">
              Bill payments
            </h5>
            <p className="text-gray-500 Dm md:text-[16px] font-normal">
              Pay bills with free bank<br /> transfers
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white md:py-5 py-2 rounded-[10px] md:w-[100px] w-[120px] text-center mx-auto">
            <Image
              loader={myLoader}
              src="/images/bursementCampaignImg/reimbursements-home-icon.svg"
              alt=""
              height="50px"
              width="50px"
            />
          </div>
          <div className="text-center mt-2">
            <h5 className="font-bold Dm text-[#2C3242] text-[18px]">
              Reimbursements
            </h5>
            <p className="text-gray-500 Dm md:text-[16px] font-normal">
              Reimburse employees without cards
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white md:py-5 py-2 rounded-[10px] md:w-[100px] w-[120px] text-center mx-auto">
            <Image
              loader={myLoader}
              src="/images/bursementCampaignImg/accounting-home-icon.svg"
              alt=""
              height="50px"
              width="50px"
            />
          </div>
          <div className="text-center mt-2">
            <h5 className="font-bold Dm text-[#2C3242] text-[18px]">
              Accounting automation
            </h5>
            <p className="text-gray-500 Dm text-[16px] font-normal">
              Automate data entry and reconciliation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceStack;
