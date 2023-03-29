import ReactDnd from "../components/ReactDnd";

const activityEditor = () => {
  return (
    // <div className="grid grid-cols-4 h-screen ">
    //     <div className="" style={{ backgroundColor: "#ECEBFB" }}>

    //         <div className="mb-20">
    //             <div className="flex items-center">
    //                 <img
    //                     className="w-[18px] h-[24px] ml-10 mr-3 mt-12"
    //                     src="/images/logo.png"
    //                     alt="Bursement Hero Image"
    //                 />
    //                 <h1 className="Kn font-normal mt-12 text-3xl leading-[30px] h-[30px] block">Bursement</h1>
    //             </div>
    //         </div>
    //         <div className="mb-8 cursor-pointer">
    //             <p className="Kn font-normal text-[32px] leading-[38px] ml-5 ">Add New</p>
    //         </div>
    //         <div className="mb-[34px]">
    //             <input style={{ backgroundColor: "#D9D7EF" }} className="ml-5 w-[283px] h-[47px] pl-4 outline-[#4e4bff] placeholder:text-base placeholder:text-black/[0.45]  placeholder:font-Kn rounded-[200px]" type="text" placeholder="Search" />
    //         </div>
    //         <div className="ml-5 overflow-y-scroll h-60 example">

    //             <div className="pt-4 pl-4 pb-4 w-[283px] h-[106px] cursor-pointer hover:bg-white rounded-3xl ">
    //                 <div className="flex items-center">
    //                     <div className="w-[120px] h-[74px] rounded-[20px] mr-5 " style={{ backgroundColor: "#D9D7EF" }}>

    //                     </div>
    //                     <div className="space-y-[6px]">
    //                         <p className="Kn text-base leading-[19px] font-normal">Question</p>
    //                         <p className="text-[12.5px] leading-[15px] font-normal Kn" style={{ color: "#7E8597" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className="pt-4 pl-4 pb-4 w-[283px] h-[106px] cursor-pointer  hover:bg-white rounded-3xl">
    //                 <div className="flex items-center">
    //                     <div className="w-[120px] h-[74px] rounded-[20px] mr-5 " style={{ backgroundColor: "#D9D7EF" }}>

    //                     </div>
    //                     <div className="space-y-[6px]">
    //                         <p className="Kn text-base leading-[19px] font-normal">Multiple choices</p>
    //                         <p className="text-[12.5px] leading-[15px] font-normal Kn" style={{ color: "#7E8597" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="pt-4 pl-4 pb-4 w-[283px] h-[106px] cursor-pointer  hover:bg-white rounded-3xl">
    //                 <div className="flex items-center">
    //                     <div className="w-[120px] h-[74px] rounded-[20px] mr-5 " style={{ backgroundColor: "#D9D7EF" }}>

    //                     </div>
    //                     <div className="space-y-[6px]">
    //                         <p className="Kn text-base leading-[19px] font-normal">Paragraph</p>
    //                         <p className="text-[12.5px] leading-[15px] font-normal Kn" style={{ color: "#7E8597" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="pt-4 pl-4 pb-4 w-[283px] h-[106px] cursor-pointer  hover:bg-white rounded-3xl">
    //                 <div className="flex items-center">
    //                     <div className="w-[120px] h-[74px] rounded-[20px] mr-5 " style={{ backgroundColor: "#D9D7EF" }}>

    //                     </div>
    //                     <div className="space-y-[6px]">
    //                         <p className="Kn text-base leading-[19px] font-normal">Date & Time picker</p>
    //                         <p className="text-[12.5px] leading-[15px] font-normal Kn" style={{ color: "#7E8597" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="pt-4 pl-4 pb-4 w-[283px] h-[106px] cursor-pointer  hover:bg-white rounded-3xl">
    //                 <div className="flex items-center">
    //                     <div className="w-[120px] h-[74px] rounded-[20px] mr-5 " style={{ backgroundColor: "#D9D7EF" }}>

    //                     </div>
    //                     <div className="space-y-[6px]">
    //                         <p className="Kn text-base leading-[19px] font-normal">Location picker </p>
    //                         <p className="text-[12.5px] leading-[15px] font-normal Kn" style={{ color: "#7E8597" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //     </div>

    //     <div className="col-span-3 bg-light-blue h-auto">
    //         <div className="ml-[99px] ">
    //             <input className=" placeholder:text-black/[0.25] border-0 bg-light-blue text-[32px] mt-[156px] Kn outline-none " type="text" name="" id="" placeholder="Untitled Activity" /> <br />
    //             <input className="placeholder:text-black/[0.25] outline-none  border-0 bg-light-blue mt-[31px] font-normal " type="text" row='2' name="" id="" placeholder="Add description...." />

    //         </div>

    //         <div className="pt-4 pl-4 pb-4 mt-[52px]   rounded-[20px] mx-auto w-[500px] h-[106px] border-dashed border-[2.5px]	">
    //             <div className="flex items-center">
    //                 <div className="w-[74px] h-[74px] rounded-[20px] mr-5 border-dashed border-[2.5px]" >

    //                 </div>
    //                 <div className="space-y-[6px]">
    //                     <p style={{ color: "#BFBDDA" }} className=" leading-[19px]	Kn text-base  font-normal">Drag the activity Blocks over here </p>
    //                     <p st className="text-[12.5px] leading-[15px] font-normal Kn" style={{ color: "#BFBDDA" }}>Keep dragging Blocks to build your first activity  </p>
    //                 </div>
    //             </div>
    //         </div>

    //     </div>

    // </div>
    <ReactDnd></ReactDnd>
  );
};

export default activityEditor;
