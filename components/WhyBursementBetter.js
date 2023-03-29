import React from "react";
import Image from "next/image";

const WhyBursementBetter = ({bg}) => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <div className={`${bg} bg-light-blue md:pb-[90px] pb-[35px] md:pt-[40px] pt-[30px]`}>
      <h1 className="font-bold text-center text-[28px] md:text-[34px] text-[#0D172C] Kn md:mb-[80px] mb-[40px]">
        Why is your company better with Bursement
      </h1>
      <div className="grid md:grid-rows-1 grid-rows-3 md:grid-cols-3 grid-cols-1 gap-x-12 md:mx-[80px] mx-[10px]">
        <div className="text-center md:mb-0 mb-5">
          <Image
            loader={myLoader}
            src="/images/bursementCampaignImg/bill-payments-home-icon.svg"
            alt=""
            height="50px"
            width="60px"
          />
          <h4 className="md:text-[18px] text-[16px] Dm font-medium mt-3">
            Automatically fetch invoices from emails and extract and reconcile
            data.
          </h4>
        </div>
        <div className="text-center md:mb-0 mb-5">
          <Image
            loader={myLoader}
            src="/images/bursementCampaignImg/reimbursements-home-icon.svg"
            alt=""
            height="50px"
            width="60px"
          />
          <h4 className="md:text-[18px] text-[16px] Dm font-medium mt-3">
            Set your payments on auto-pilot. We provide dedicated IBANs allowing
            free transfers and receiving of funds.
          </h4>
        </div>
        <div className="text-center md:mb-0 mb-5">
          <Image
            loader={myLoader}
            src="/images/bursementCampaignImg/expense-management-home-icon.svg"
            alt=""
            height="50px"
            width="60px"
          />
          <h4 className="md:text-[18px] text-[16px] Dm font-medium mt-3">
            Manage out of pocket cash and approvals for employees that don’t
            have the next generation company card by Bursement.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WhyBursementBetter;
