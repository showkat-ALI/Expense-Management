

const ReactDrop = ({  id, title, description, onremove, isOver, index, handleTitle, handleDescription }) => {


    return (
        <div className={`pt-4 pl-4 pb-4 w-[500px] h-[123px] cursor-pointer bg-white rounded-3xl mx-auto  mb-2`}>
            <div className="flex items-center">
                <div onClick={() => onremove(id)} className="w-[74px] h-[74px] rounded-[20px] mr-5 " style={{ backgroundColor: "#D9D7EF" }}>
                </div>
                <div className="space-y-[1px]">
                    <input onChange={(e) => handleTitle(index, e)} className=" border-0 focus:outline-none Kn text-base font-normal" type="text" name="" id="" placeholder={title} /> <br />
                    <textarea onChange={(e) => handleDescription(index, e)} className="example border-0  outline-none Kn text-[12.5px] leading-[15px] font-normal" type="text" name="" id="" placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />

                </div>
            </div>
            {/* <p onClick={()=>onremove(id)}>ooo</p> */}
        </div>


    );
};

export default ReactDrop;

