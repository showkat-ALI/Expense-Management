
import SupportPageFAQ1 from "./SupportPageFAQ1";
import SingleQuestionSupportPage from "./SingleQuestionSupportPage";
import SupportPageFAQ4 from "./SupportPageFAQ4";
import SupportPageFAQ5 from "./SupportPageFAQ5";
const link = {
    l: <a href="https://bursement.com/whybursement">more</a>
}
const accordion = [
    {
        id: 1,
        img: "/images/qicon.png",
        que: "What is Bursement?",
        ans: <SupportPageFAQ1></SupportPageFAQ1>
    },
    {
        id: 2,
        img: "/images/qicon.png",
        que: "What services does Bursement offer?",
        ans: "Bursement provides you with smart company cards. Bursement provides a spend management, billing and invoicing tool for teams. We provide expense forecasting using our proprietary AI algorithm. We provide a vendor and credit/debt management  system that gives one deeper insight into expenditures, debt and credit. Reward your employees, manage their benefits and offset global carbon footprint."
    },
    {
        id: 3,
        img: "/images/qicon.png",
        que: "Is Bursement licensed?",
        ans: "Bursement provides all payment services, including cross-border money transfer services, in conjunction with MAS licensed partner (NIUM). All corporate cards are issued and powered by our licensed partner (NIUM)"
    },
    {
        id: 4,
        img: "/images/qicon.png",
        que: "Who can apply for an account at Bursement?",
        ans: <SupportPageFAQ4></SupportPageFAQ4>

    },
    {
        id: 5,
        img: "/images/qicon.png",
        que: "Is my money safe in Bursement?",
        ans: <SupportPageFAQ5></SupportPageFAQ5>
    },
    {
        id: 6,
        img: "/images/qicon.png",
        que: "What are the account fees?",
        ans: "Bursement account and SmartWallet fees are free and every other charges are very low and transparent."
    },
]

const BodySectionFiveSupportPage = () => {
    return (
        <div className="mb-[223px]">
            <div className="text-center mb-[85px] md:px-0 px-6">
                <h3 className="text-[42px] font-normal Kn text-black/75 mb-[22px]">Popular FAQs</h3>
                <p className="text-[20px] font-normal text-black/75">Check categories above to see FAQs related to each category or  contact us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[52px] gap-y-[30px] md:px-[115px]">
                {
                    accordion.map((acc, index) => <SingleQuestionSupportPage index={index} key={acc.id} acc={acc} ></SingleQuestionSupportPage>)
                }
            </div>
        </div>
    );
};

export default BodySectionFiveSupportPage;
