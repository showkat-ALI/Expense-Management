const cards = [
    {
        title: "A simple heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Diam risus omare orci ,neque donce suspendisse ut.",
        id: 1
    },
    {
        title: "A simple heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Diam risus omare orci ,neque donce suspendisse ut.",
        id: 2
    },
    {
        title: "A simple heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Diam risus omare orci ,neque donce suspendisse ut.",
        id: 3
    },

]

const CustomerSectionSeven = () => {
    return (
        <div className="bg-light-blue">
            <h1 className="text-center mb-[85px] text-[42px] font-normal text-black/75 leading-[50px] Kn">More Articles</h1>
            <div className=" md:px-[65px] ">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-y-[25px] mb-[90px]">
                    {
                        cards.map(card => <div key={card.id}>
                            <div className="mx-[auto] md:w-[362px] w-[270px] h-[270px] rounded-[24px] bg-black/[0.05]  mb-[40px]">

                            </div>
                            <div className="px-[20px]">
                                <p className="text-2xl font-normal Kn text-black/75 mb-[24px]">{card.title}</p>
                                <p className="text-[#2C3242] text-[18px] leading-[21px] font-normal Kn">{card.description}</p>
                            </div>
                        </div>)
                    }

                </div>
                <div className="text-center pb-[75px]">
                    <button className=" text-[18px] leading-[21px] font-normal border-[#4D49FF] hover:bg-[#4D49FF] hover:text-white border rounded-full px-6 py-2 focus:ring-4 ">View all</button>
                </div>
            </div>

        </div>
    );
};

export default CustomerSectionSeven;