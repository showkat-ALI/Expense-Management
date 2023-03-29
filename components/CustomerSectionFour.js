
const infos = [
    {
        id: 1,
        title: "Jenny Wilson",
        description: "Chief Executive officer "
    },
    {
        id: 2,
        title: "Ralph Edwards",
        description: "Chief Information officer"
    }
]

const iinfos = [
    {
        id: 1,
        title: "Jenny Wilson",
        description: "Chief Executive officer"
    },
    {
        id: 2,
        title: "Leslie Alexander",
        description: "Chief Information officer"
    },
    {
        id: 3,
        title: "Guy Hawkins",
        description: "Chief Creative officer"
    },
    {
        id: 4,
        title: "Theresa Webb",
        description: "Chief Technology officer"
    },
]
const CustomerSectionFour = () => {
    return (
        <div className="px-[65px] bg-light-blue">
            <div className="md:flex items-center justify-between mb-[120px]">
                <div className="md:w-[50%] w-[100%]">
                    <h3 className="Kn text-[42px] font-normal leading-[50px]">Used by terms of any <br /> size</h3>
                </div>
                <div className="md:w-[50%] w-[100%]">
                    <p className="Kn font-normal text-[21px] leading-[30px] text-black/75 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatibus aliquam. Dolores architecto aliquam error  architecto aliquam error aliquam error</p>
                </div>
            </div>
            <div className="mb-[180px] px-[25px] md:flex items-center justify-between">
                {
                    infos.map(info => <div key={info.id} className="mr-2">
                        <div className="md:w-[500px] mb-[30px] md:h-[390px] rounded-[24px] bg-[#E7E6F2] shadoww "></div>
                        <p className="Kn text-[20px] leading-[24px] font-normal mb-[6px]">{info.title}</p>
                        <small className="text-[16px] leading-[19px] Kn font-normal text-black/70">{info.description} </small>
                    </div>)
                }
            </div>

            <div className="md:flex items-center justify-between mb-[120px]">
                <div className="md:w-[50%] w-[100%]">
                    <h3 className="Kn text-[42px] font-normal leading-[50px]">See what they say</h3>
                </div>
                <div className="md:w-[50%] w-[100%]">
                    <p className="Kn font-normal text-[21px] leading-[30px] text-black/75 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatibus aliquam. Dolores architecto aliquam error  architecto aliquam error aliquam error</p>
                </div>
            </div>

            <div className="mb-[180px] md:flex items-center ">
                {
                    iinfos.map(info => <div key={info.id} className="mr-8">
                        <div className="md:w-[264px] mb-[30px] md:h-[264px]  rounded-[24px] bg-[#E7E6F2]  "></div>
                        <p className="Kn text-[20px] leading-[24px] font-normal mb-[6px]">{info.title}</p>
                        <small className="text-[16px] leading-[19px] Kn font-normal text-black/70">{info.description} </small>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CustomerSectionFour;