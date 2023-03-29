import Image from "next/image";
import FooterSectionSupportPage from "../../components/FooterSectionSupportPage";
import NavBar2 from "../../components/NavBar2"
import { useRouter } from "next/router";
import { useState } from "react";
import SingleCategoryDetail from "../../components/SingleCategoryDetail";
import SupportPageFAQ1 from "../../components/SupportPageFAQ1";
import SupportPageFAQ5 from "../../components/SupportPageFAQ5";
import TheBasicCategoryFAQ6 from "../../components/TheBasicCategoryFAQ6";
import SupportPageFAQ4 from "../../components/SupportPageFAQ4";
import OnboardingCategprtFAQ2 from "../../components/OnboardingCategprtFAQ2";
import OnboardingCategoryFAQ3 from "./OnboardingCategoryFAQ3";
import Footer from "../../components/Footer";
const accordionn = [
    {
        id: 1,
        img: "/images/cart1.png",
        title: "The Basics",
        faqs: [
            {
                que: "What is Bursement? ",
                ans: <SupportPageFAQ1></SupportPageFAQ1>,
                id:1
            },
            {
                que: "What services does Bursement offer?",
                ans: " Bursement provides you with smart company cards. Bursement provides a spend management, billing and invoicing tool for teams. We provide expense forecasting using our proprietary AI algorithm. We provide a vendor and credit/debt management  system that gives one deeper insight into expenditures, debt and credit. Reward your employees, manage their benefits and offset global carbon footprint.",
                id:2
            },
            {
                que: "Is Bursement licensed?",
                ans: "Bursement provides all payment services, including cross-border money transfer services, in conjunction with MAS licensed partner (NIUM). All corporate cards are issued and powered by our licensed partner (NIUM)",
                id:3
            },
            {
                que: "Is my money safe in Bursement?",
                ans: <SupportPageFAQ5></SupportPageFAQ5>,
                id:4
            },
            {
                que: "What are Bursement's opening hours?",
                ans: " We are open 24/7. You can reach us by contacting support or through our live chat.",
                id:5
            },
            {
                que: "What are the limitations of the Smart Wallet",
                ans: <TheBasicCategoryFAQ6></TheBasicCategoryFAQ6>,
                id:6
            }
        ]

    },
    {
        id: 2,
        img: "/images/metrics 1.png",
        title: "Onboarding & Eligibility",
        faqs: [
            {
                que: "Who can apply for an account at Bursement?",
                ans: <SupportPageFAQ4></SupportPageFAQ4>,
                id:1
            },
            {
                que: "How can I apply for an account?",
                ans: <OnboardingCategprtFAQ2></OnboardingCategprtFAQ2>,
                id:2
            },
            {
                que: "What documents do I need?",
                ans: <OnboardingCategoryFAQ3></OnboardingCategoryFAQ3>,
                id:3
            },
            {
                que: "Is Bursement a bank?",
                ans: "No. We work with licensed payment service providers in Singapore to provide our service including card issuance, remittance, etc.",
                id:4
            }
          
        ]

    },
    {
        id: 3,
        img: "/images/virtual-assistant 1.png",
        title: "Pricing and Rewards",
        faqs: [
            {
                que: "What are the account fees?",
                ans: "Bursement account and SmartWallet fees are free and every other charges are very low and transparent.",
                id:1
            }
           
        ]
    },
    {
        id: 4,
        img: "/images/customer-support 1.png",
        title: "Account Basics",
        faqs: [
            {
                que: "How can I get my account statement?",
                ans: "You can generate your account statement on Bursement Smart Wallet as either PDF, CSV or excel sheet.",
                id:1
            },
            {
                que: "How much money can my business hold at Bursement?",
                ans: "There are no limits on the balance you can hold in your Bursement Smart Wallet.",
                id:2
            }
            
        ]
    },
    {
        id: 5,
        img: "/images/apple 1.png",
        title: "Fund Deposit and Withdrawal",
        faqs: [
            {
                que: "Can I deposit cheques at Bursement?",
                ans: " No, but you can send in through FAST, GIRO or SWIFT. ",
                id:1
            },
            {
                que: "Can I withdraw cash at an ATM?",
                ans: "No, we do not support cash withdrawals at ATMs.",
                id:2
            }
           
        ]
    }
    
]


const Id = () => {
    const [category, setCategory] = useState(accordionn)
    const router = useRouter()
    const iid = router.query.id;
    const remain = category.filter(cat => cat.id == iid)


    const myLoader = ({ src, width }) => {
        return `${src}?w=${width}`;
    }
    return (

        <div className="bg-light-blue pt-3">
            <NavBar2></NavBar2>
            <div>
                {
                    remain.map(category => <div key={category.id} className="text-center mb-[96px] mt-[100px]">
                        <div className="mt-[36px] w-[48px] h-[48px] bg-[#4D49FF] rounded-full mx-auto flex justify-center items-center mb-[40px]">
                            <Image loader={myLoader} width="24" height="24" src={category.img} className="w-[24px] h-[24px] " alt="" />
                        </div>
                        <p className="text-[25px] font-normal text-black/75 Kn ">{category.title}</p>
                    </div>)
                }
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[52px] gap-y-[30px] md:px-[115px]">
                    {
                        remain[0]?.faqs?.map(faq => <SingleCategoryDetail key={faq.id} faq={faq} ></SingleCategoryDetail>)
                    }
                </div>
            </div>
            {/* <FooterSectionSupportPage></FooterSectionSupportPage> */}
            <Footer></Footer>
        </div>
    );
};

export default Id;
