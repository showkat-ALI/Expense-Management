

const CustomerSectionFive = () => {
    return (
        <div className="md:px-[147px] px-[80px] mb-[232px] bg-light-blue">
            <div className="md:flex items-center justify-between ">
                <div className="relative ">
                    <div className="w-[200px]  h-[150px] md:w-[489px] md:h-[390px] bg-white rounded-[24px] top-0 left-14	"></div>
                    <div className="w-[200px] h-[150px] md:w-[489px] md:h-[390px] bg-[#E7E6F2] absolute -left-[60px] top-[52px] rounded-[24px]"></div>
                </div>
                <div>
                    <span className="px-[24px] py-[8px] text-[15px] text-center font-normal Kn  rounded-full text-white bg-[#4D49FF]">New!</span>
                    <h3 className="text-[18px] md:text-[42px] mt-[32px] mb-[60px] md:leading-[50px] Kn text-[#0D172C]">Highlight a new <br /> feature</h3>
                    <button className="text-[#4D49FF] focus:ring-2 hover:text-white hover:bg-[#4D49FF] border-2 border-[#4D49FF] px-[24px] py-[8px] rounded-full">Read whats new</button>

                </div>
            </div>
        </div>
    );
};

export default CustomerSectionFive;