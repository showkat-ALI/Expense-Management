import SupportPageADOne from "./SupportPageADOne";
import SupportPageATOne from "./supportPageATOne";
import SupportPageArtical from "./SupportPageArtical";
import Link from 'next/link';

const cards = [
  {
    title: <SupportPageATOne></SupportPageATOne>,
    description: <SupportPageADOne></SupportPageADOne>,
    id: 1,
    img: "/images/pa1.png",
    link: "https://resources.bursement.com/top-5-reasons-why-you-should-cease-using-paper-for-expense-reports/",
  },
  {
    title:
      "5 Advantages of Using Bursement to Automate Your Expense Reporting Process.",
    description:
      "If your company is having troubles with  expense reporting, upgrading to a travel and expense management... ",
    id: 2,
    img: "/images/pa2.png",
    link: "https://resources.bursement.com/5-advantages-of-using-bursement-to-automate-your-expense-reporting-process/",
  },
  {
    title:
      "The Use of Mobile Receipt Management Improves Employee Productivity",
    description:
      "Did you realize that low staff productivity costs businesses more than $500 billion per year? ",
    id: 3,
    img: "/images/pa3.png",
    link: "https://resources.bursement.com/the-use-of-mobile-receipt-management-improves-employee-productivity/",
  },
];
const BodySectionFourSupportPage = () => {
  return (
    <div className="">
      <h1 className="text-center mb-[85px] text-[42px] font-normal text-black/75 leading-[50px] Kn">
        Popular Article
      </h1>
      <div className="px-[65px] ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-[25px] mb-[90px]">
          {cards.map((card) => (
            <SupportPageArtical card={card} key={card.id}></SupportPageArtical>
          ))}
        </div>
        <div className="text-center pb-[75px]">
          <Link href="/signupForm">
            <a>
              <button className=" text-[18px] leading-[21px] font-normal border-[#4D49FF] hover:bg-[#4D49FF] hover:text-white border rounded-full px-6 py-2 focus:ring-4 ">
                Try for free
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BodySectionFourSupportPage;
