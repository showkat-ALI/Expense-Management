import Image from "next/image";

const customers = [
    {
        id: 1,
        img: "/images/p1.png",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab totam commodi est recusandae unde!",
        info: "Cameron Wiliamson, CEO,Stripe"
    },
    {
        id: 2,
        img: "/images/p2.png",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab totam commodi est recusandae unde!",
        info: "Cameron Wiliamson, CEO,Stripe"
    },
    {
        id: 3,
        img: "/images/p3.png",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab totam commodi est recusandae unde!",
        info: "Cameron Wiliamson, CEO,Stripe"
    },
    {
        id: 4,
        img: "/images/p4.png",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab totam commodi est recusandae unde!",
        info: "Cameron Wiliamson, CEO,Stripe"
    },
    {
        id: 5,
        img: "/images/p5.png",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab totam commodi est recusandae unde!",
        info: "Cameron Wiliamson, CEO,Stripe"
    },
    {
        id: 6,
        img: "/images/p6.png",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab totam commodi est recusandae unde!",
        info: "Cameron Wiliamson, CEO,Stripe"
    },

]


const CustomerSectionSix = () => {
    const myLoader = ({ src, width }) => {
        return `${src}?w=${width}`;
    }
    return (
        <div className="px-[65px] mb-[180px] bg-light-blue">
            <div className="text-center mb-[60px]">
                <p className="text-[#4D49FF] mb-[20px] text-[16px] font-normal Kn tracking-[0.4px] ">We LOVE OUR CUSTOMERS </p>
                <h3 className=" md:text-[42px] text-[18px] font-normal ">And they seem to love us</h3>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-y-3 pr-[20px]">
                {
                    customers.map(customer => <div key={customer.id} className="bg-white md:w-[362px] md:h-[auto]  w-[200px] h-[auto] p-[5px] md:px-[20px] py-[30px] rounded-[24px]">
                        <div className="flex">
                            <div className="mr-[14px]">
                                <Image loader={myLoader} src={customer.img} width="150px" height="150px" >

                                </Image>
                            </div>
                            <div>
                                <p className="mb-[6px] Dm text-[#2C3242] text-[16px] leading-[20px] font-normal">{customer.comment}</p>
                                <small className="text-[13px] font-normal Kn ">{customer.info} </small>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CustomerSectionSix;