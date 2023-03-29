import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";

const cards = [
    {
        img: "/images/cart1.png",
        title: "The Basics",
        description: "Learn more about what Bursement is and the benefits we offer",
        id: 1
    },
    {
        img: "/images/metrics 1.png",
        title: "Onboarding & Eligibility",
        description: "Learn more about eligibility and how onboarding on Bursement works.",
        id: 2
    },
    {
        img: "/images/virtual-assistant 1.png",
        title: "Pricing and Rewards",
        description: "Learn more about the fees, pricing and rewards on Bursement.",
        id: 3
    },
    {
        img: "/images/customer-support 1.png",
        title: "Account Basics",
        description: " Learn more about how Bursement Smart Wallet  works.",
        id: 4
    },
    {
        img: "/images/apple 1.png",
        title: "Fund Deposit and Withdrawal",
        description: "Learn more on how fund deposit and usage works.",
        id: 5
    },
    
]

const BodySectionThreeSupportPage = () => {
    const myLoader = ({ src, width }) => {
        return `${src}?w=${width}`;
    }
    const router = useRouter()
    const catagoryDetails = (id) => {
        router.replace(`/category/${id}`)
    }
    return (
        
       
       <div className="">
            <div className="mt-[84px] px-7 mb-[86px] md:w-[988px] w-[400px]  relative  mx-auto">
                <input type="text" placeholder="Browse or find answers" name="" id="" className="md:h-[88px] h-[44px] w-full bg-white rounded-[60px] shadow-black/[10] border-2 border-[#19313C]/10 outline-none md:text-[32px] text-[16px] placeholder:text-black/[0.45] py-[30px] px-[48px] relative" />
                <BiSearch className="w-[29px] h-[29px] text-[#0D172C] absolute right-12 md:top-[33px] top-[22px]"></BiSearch>

            </div>
            
            <div className="md:px-[65px] px-[35px] mb-[186px] ">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-y-[25px]   ">
                    {
                        cards.map(card => <div onClick={() => catagoryDetails(card.id)} key={card.id} className="w-[295px] md:w-[362px] mx-auto h-auto pb-4 rounded-3xl shadow-black/10 bg-white cursor-pointer  ">
                            <div className="text-center px-[31px]">
                                <div className="mt-[36px] w-[48px] h-[48px] bg-[#4D49FF] rounded-full mx-auto flex justify-center items-center mb-4">
                                    <Image loader={myLoader} width="24" height="24" src={card.img} className="w-[24px] h-[24px] " alt="" />
                                </div>
                                <p className="text-2xl font-normal text-black/75 Kn mb-4">{card.title}</p>
                                <p className="text-[18px] font-normal text-[#2C3242] Dm leading-[23.44px]">{card.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BodySectionThreeSupportPage;