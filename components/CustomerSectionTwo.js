import Image from "next/image";


const Icons = [
    {
        img: "/images/Vector.png",
        id: 1
    },
    {
        img: "/images/Vectorr.png",
        id: 2
    },
    {
        img: "/images/Vectorrr.png",
        id: 3
    },
    {
        img: "/images/Vectorrrr.png",
        id: 4
    },
    {
        img: "/images/Vectorrrrr.png",
        id: 5
    },
    {
        img: "/images/Vectorrrrrr.png",
        id: 6
    },
    {
        img: "/images/Vectorrrrrrr.png",
        id: 7
    }

]

const CustomerSectionTwo = () => {
    const myLoader = ({ src, width }) => {
        return `${src}?w=${width}`;
    }
    return (
        <div className="mt-[100px] bg-light-blue">
            <h1 className="Kn md:leading-[57px] md:text-[48px] text-[18px] px-[16px] font-normal text-center">We move money as fast as our  <br /> companies and customer</h1>
            <div className="text-center mt-[48px] mb-[80px]">
                <button className="text-white py-[16px] focus:ring-2 mr-4 px-[32px] rounded-[100px] bg-[#4D49FF] ">Try it free</button>
                <button className="text-[#4D49FF] focus:ring-2 hover:text-[white] border-2 border-[#4D49FF] py-[16px] px-[32px] rounded-[100px] hover:bg-[#4D49FF]">See pricing</button>
            </div>
            <div>
                <div className=" w-[320px] h-[150px] md:w-[884px] md:h-[499px]  bg-[#E7E6F2] mx-auto mb-[139px] rounded-[24px] md:py-[212px] md:px-[407px] px-[130px] py-[35px]">
                    <div className="py-[16px] px-[16px] bg-[#4D49FF] rounded-full w-[70px] h-[70px]">
                        <Image loader={myLoader} width="36" height="36" src="/images/Icon.png">

                        </Image>
                    </div>
                </div>
            </div>
            <div className="mx-[139px]">
                <p className="text-[#4D49FF] mb-[48px] tracking-[0.4px] md:text-center md:text-base font-normal Kn md:text-[16px] ">USED BY TEAMS WORLDWIDE</p>
                <div className="grid md:grid-cols-7 grid-cols-1 mb-[180px] ">
                    {
                        Icons.map(icon => <div key={icon.id} className="md:mx-auto mr-[3px] mb-[16px] ">
                            <Image loader={myLoader}  width="80" height="50" src={icon.img} alt="" />
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomerSectionTwo;