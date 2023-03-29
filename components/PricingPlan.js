import { useState } from "react";
import CheckMark from "@heroicons/react/solid/CheckIcon";
import Image from "next/image";
import Link from "next/link";

const DiscountArrow = () => (
  <div className="absolute hidden md:block -top-6 -left-24">
    <div className="flex flex-col items-center justify-center">
      <p className="font-normal font-kn-sans"> Save 20% </p>
      <Image
        loader={myLoader}
        src={"/images/vector4.png"}
        alt=""
        height={40}
        width={40}
      />
    </div>
  </div>
);

const myLoader = ({ src, width }) => {
  return `${src}?w=${width}`;
};

const PricingTab = ({ isYearly, setIsYearly }) => (
  <div className="rounded-l-full rounded-r-full bg-slate-headline bg-opacity-5 p-[5px] max-w-[260px] m-auto relative">
    <div className="flex justify-center">
      <DiscountArrow />
      <div
        onClick={() => setIsYearly(true)}
        className={`w-full cursor-pointer px-8 py-3 transition-all duration-300 rounded-l-full rounded-r-full ${
          isYearly ? "bg-white" : ""
        }`}
      >
        <p className="Dm text-[18px]"> Yearly </p>
      </div>
      <div
        onClick={() => setIsYearly(false)}
        className={`w-full cursor-pointer px-8 py-3 transition-all duration-300 rounded-l-full rounded-r-full ${
          isYearly ? "" : "bg-white"
        }`}
      >
        <p className="Dm text-[18px]"> Monthly </p>
      </div>
    </div>
  </div>
);

const CenterColumn = ({ isYearly }) => (
  <div className="border-[3px] border-transparent duration-300 w-full relative bg-white shadow-sm shadow-gray-300 hover:border-[#4D49FF] py-[33px] px-[24px] rounded-3xl">
    <span className="absolute top-6 right-6 text-xs font-bold uppercase text-[#4D49FF] px-[18px] py-[6px] rounded-full">
      Popular
    </span>
    <div>
      <div className="text-center">
        <div className="flex items-center justify-center w-12 h-12 m-auto rounded-full bg-[#4D49FF] text-white">
          <Image
            loader={myLoader}
            src={"/images/tree2.png"}
            alt="icon"
            width={25}
            height={25}
          />
        </div>
        <div className="mt-2 ml-4">
          <h4 className="text-[20px] Dm font-medium"> Growth </h4>
          <p className="text-[15px] Dm max-w-[305px] font-thin h-20 m-auto mt-2 text-[#2C3242]">
            Smart card & spend management solution for growing teams or small
            companies
          </p>
          <p className="mt-2 font-bold text-[15px] Dm text-[#2C3242]">
            SGD {isYearly ? "$4/mo" : "$5/mo"} per user
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="h-80 w-full">
          <li className="flex items-center justify-around mt-6">
            <CheckMark className="w-1/6 h-4 text-[#4D49FF]" />
            <p className="w-5/6 text-[16px] Dm">
              <strong>All in Free</strong> + individual spending limits
            </p>
          </li>
          <li className="flex items-center justify-around mt-4">
            <CheckMark className="w-1/6 h-4 text-[#4D49FF]" />
            <p className="w-5/6 text-[16px] Dm">Analytics dashboard</p>
          </li>
          <li className="flex items-center justify-around mt-4">
            <CheckMark className="w-1/6 h-4 text-[#4D49FF]" />
            <p className="w-5/6 text-[16px] Dm">Bills processing and payment</p>
          </li>
          <li className="flex items-center justify-around mt-4">
            <CheckMark className="w-1/6 h-4 text-[#4D49FF]" />
            <p className="w-5/6 text-[16px] Dm">Teams and approvals</p>
          </li>
          <li className="flex items-center justify-around mt-4">
            <CheckMark className="w-1/6 h-4 text-[#4D49FF]" />
            <p className="w-5/6 text-[16px] Dm">Chat support</p>
          </li>
        </ul>
      </div>
      <div className="mt-6 text-center">
        <Link href="/signupForm">
          <a>
            <button className="flex items-center justify-center w-full py-4 mb-2 border-2 rounded-lg text-[#4D49FF] border-[#4D49FF] text-[18px] Dm filter hover:bg-[#4D49FF] hover:text-white">
              <span>Start Free Trial</span>
            </button>
          </a>
        </Link>
        <span className="text-gray-400 text-[15px] Dm">
          No credit card required.
        </span>
      </div>
    </div>
  </div>
);

const LeftColumn = ({ isYearly }) => (
  <div className="border-[3px] border-transparent duration-300 w-full relative bg-white shadow-sm shadow-gray-300 hover:border-slate-blue p-[32px] rounded-3xl">
    <div>
      <div className="text-center">
        <div className="flex items-center justify-center w-12 h-12 m-auto rounded-full bg-[#4D49FF] text-white">
          <Image
            loader={myLoader}
            src={"/images/tree.png"}
            alt="icon"
            width={25}
            height={25}
          />
        </div>
        <div className="mt-2 ml-4">
          <h4 className="text-[20px] Dm font-medium"> Starter </h4>
          <p className="text-[15px] Dm max-w-[305px] h-20 font-thin m-auto mt-2 text-[#2C3242]">
            Refer a business,
            <br /> get 2 more seats
          </p>
          <p className="mt-2 font-bold text-[15px] Dm text-[#2C3242]">
            {/* {isYearly ? '$45/mo' : '$87/mo'} */}
            FREE FOREVER, for 3 users
          </p>
        </div>
      </div>
      <div className="flex justify-center h-80">
        <ul className="">
          <li className="flex items-center justify-around mt-4">
            <CheckMark className="w-1/6 h-4 text-[#4D49FF]" />
            <p className="w-5/6 text-[16px] Dm">Employee reimbursements</p>
          </li>
          <li className="flex items-center justify-around mt-4">
            <CheckMark className="w-1/6 h-4 text-[#4D49FF]" />
            <p className="w-5/6 text-[16px] Dm">Virtual and physical cards</p>
          </li>
          <li className="flex items-center justify-around mt-4">
            <CheckMark className="w-1/6 h-4 text-[#4D49FF]" />
            <p className="w-5/6 text-[16px] Dm">
              Pulley automatic receipts scanner on Gmail
            </p>
          </li>
          <li className="flex items-center justify-around mt-4">
            <CheckMark className="w-1/6 h-4 text-slate-blue" />
            <p className="w-5/6 text-[16px] Dm">
              Accounting integrations and custom CSV
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-6 text-center">
        <Link href="/signupForm">
          <a>
            <button className="flex items-center justify-center w-full py-4 mb-2 border-2 rounded-lg text-[#4D49FF] border-[#4D49FF] text-[18px] Dm filter hover:bg-[#4D49FF] hover:text-white">
              <span>Sign up for FREE</span>
            </button>
          </a>
        </Link>
        <span className="text-gray-400 text-[15px] Dm">
          No credit card required.
        </span>
      </div>
    </div>
  </div>
);

const RightColumn = ({ isYearly }) => (
  <div className="border-[3px] border-transparent duration-300 w-full relative bg-white shadow-sm shadow-gray-300 hover:border-slate-blue p-[32px] rounded-3xl">
    <div>
      <div className="text-center">
        <div className="flex items-center justify-center w-12 h-12 m-auto rounded-full bg-[#4D49FF] text-white">
          <Image
            loader={myLoader}
            src={"/images/forest.png"}
            alt="icon"
            width={25}
            height={25}
          />
        </div>
        <div className="mt-2 ml-4">
          <h4 className="text-[20px] Dm font-medium"> Pro </h4>
          <p className="text-[15px] Dm max-w-[305px] h-20 font-thin m-auto mt-2 text-[#2C3242]">
            Smart card & spend management for everyone in your company
          </p>
          <p className="mt-2 font-bold text-[15px] Dm text-[#2C3242]">
            SGD {isYearly ? "$10/mo" : "$12/mo"} per user
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="h-80">
          <li className="flex items-center justify-around mt-4">
            <CheckMark className="w-1/6 h-4 text-slate-blue" />
            <p className="w-5/6 text-[16px] Dm">
              <strong>All in Growth</strong> + external bookkeeper access
            </p>
          </li>
          <li className="flex items-center justify-around mt-4">
            <CheckMark className="w-1/6 h-4 text-slate-blue" />
            <p className="w-5/6 text-[16px] Dm">
              Dedicated onboarding and customer success
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-6 text-center">
        <Link href="/signupForm">
          <a>
            <button className="flex items-center justify-center w-full py-4 mb-2 border-2 rounded-lg text-slate-blue border-slate-blue text-[18px] Dm filter hover:bg-slate-blue hover:text-white">
              <span>Start Free Trial</span>
            </button>
          </a>
        </Link>
        <span className="text-gray-400 text-[15px] Dm">
          No credit card required.
        </span>
      </div>
    </div>
  </div>
);

const PricingPlan = () => {
  const [isYearly, setIsYearly] = useState(true);
  return (
    <>
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head> */}

      <section className="bg-light-blue font-kn-sans">
        <div className="md:m-auto max-w-default py-12 md:py-[90px] mx-6">
          <div className="text-center">
            <h5 className="text-[14px] Dm font-bold uppercase text-[#4D49FF]">
              Select Your Plan
            </h5>
            <div className="mt-[18px]">
              <h2 className="font-medium text-slate-headline text-mobile-h2 lg:text-[42px]">
                Pricing
              </h2>
            </div>
            <div className="relative mt-7">
              <PricingTab isYearly={isYearly} setIsYearly={setIsYearly} />
            </div>
            <div className="mt-[60px]">
              <div className="flex flex-col items-center justify-center space-y-4 text-left md:space-y-0 md:flex-row md:space-x-[30px]">
                <LeftColumn isYearly={isYearly} />
                <CenterColumn isYearly={isYearly} />
                <RightColumn isYearly={isYearly} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlan;
