import React from "react";
import Image from "next/image";

const BursementProducts = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  const features = [
    {
      // subTitle: "Replace expense reports and apps",
      title: "Expense management",
      description:
        "Replace expense reports and apps",
      icon: "/images/message_icon.png",
    },

    {
      // subTitle: "Pay bills with free bank transfers",
      title: "Corporate cards",
      description: "Issue virtual and physical cards.",
      icon: "/images/message_icon.png",
    },

    {
      // subTitle: "Automate data entry and reconciliation",
      title: "Bill payments",
      description:
        "Pay bills with free bank transfers.",
      icon: "/images/message_icon.png",
    },
    {
      // subTitle: "Automate data entry and reconciliation",
      title: "Reimbursements",
      description:
        "Reimburse employees without cards.",
      icon: "/images/message_icon.png",
    },
    {
      // subTitle: "Automate data entry and reconciliation",
      title: "Accounting automation",
      description:
        "Automate data entry and reconciliation.",
      icon: "/images/message_icon.png",
    },
    {
      // subTitle: "Automate data entry and reconciliation",
      title: "Integrated payments",
      description:
        "Dedicated IBAN for free bank transfers and receivables.",
      icon: "/images/message_icon.png",
    },
  ];

  return (
    <div className="bg-light-blue pb-[40px] md:pt-[40px] pt-[30px]">
      <h1 className="font-bold text-center text-mobile-h2 md:text-[34px] text-[#0D172C] Kn">
        Our Features
      </h1>
      <div className="grid md:grid-rows-2 grid-rows-6 md:grid-cols-3 grid-cols-1 gap-6 md:mt-[45px] mt-[20px] md:mx-[80px] mx-[10px]">
        {features?.map((product, index) => (
          <div
            key={index}
            className="border border-1 border-gray-500 rounded-[8px] pb-[20px] pt-[20px] text-center hover:-mt-[7px] hover:mb-[7px] hover:duration-500"
          >
            {/* <span className="bg-gray-200 rounded-[50px] py-[6px] px-[12px] text-[12px] Dm">
              {product?.subTitle}
            </span> */}
            <div className="my-[12px] flex items-center justify-center">
              {/* <Image
                loader={myLoader}
                src={product.icon}
                alt=""
                height="18px"
                width="20px"
              /> */}
              <h3 className="text-[22px] font-medium text-[#0D172C] Dm ml-[2px]">
                {product?.title}
              </h3>
            </div>
            <p className="text-[16px] Dm">{product?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BursementProducts;
