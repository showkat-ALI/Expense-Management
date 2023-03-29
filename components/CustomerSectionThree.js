
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
const cards = [
    {
        img: "/images/cart1.png",
        title: "1.A simple heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        id: 1
    },
    {
        img: "/images/metrics 1.png",
        title: "2.A simple heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        id: 2
    },
    {
        img: "/images/virtual-assistant 1.png",
        title: "3.A simple heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        id: 3
    },
    {
        img: "/images/customer-support 1.png",
        title: "4.A simple heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        id: 4
    },
    {
        img: "/images/apple 1.png",
        title: "5.A simple heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        id: 5
    },
    {
        img: "/images/toggle 2.png",
        title: "6.A simple heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        id: 6
    },
]

const CustomerSectionThree = () => {
    const myLoader = ({ src, width }) => {
        return `${src}?w=${width}`;
    }
    return (
        <div className="md:px-[70px] pl-[40px] mb-[186px] bg-light-blue ">
            <div className="grid md:grid-cols-3 grid-cols-1  gap-y-[25px] mx-[auto] ">
                {
                    cards.map(card => <div key={card.id} className="w-[250px] md:w-[362px] h-[auto] rounded-3xl shadow-black/10 bg-white pb-[15px]">
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

    );
};

export default CustomerSectionThree;