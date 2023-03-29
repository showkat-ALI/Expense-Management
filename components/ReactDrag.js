
import { useDrag } from 'react-dnd'; 

const ReactDrag = ({id,title,description}) => {
    const[{isDragging}, drag]=useDrag(()=>({
        type:"div",
        item:{id:id},
        collect:(monitor)=>({
            isDragging:!! monitor.isDragging()
        })
    }))
    return (
        <div ref={drag}  >
            <div  className={`pt-4 pl-4 pb-4 w-[283px] h-[106px] cursor-pointer hover:bg-white/[0.5] rounded-3xl ${isDragging && "border-2 border-[#4e4bff]"} `}>
                <div className="flex items-center">
                    <div className="w-[120px] h-[74px] rounded-[20px] mr-5 " style={{ backgroundColor: "#D9D7EF" }}>

                    </div>
                    <div className="space-y-[6px]">
                        <p className={`Kn text-base leading-[19px] font-normal ${isDragging && "text-black/[0.5]"}`}>{title}</p>
                        <p className="text-[12.5px] leading-[15px] font-normal Kn" style={{ color: "#7E8597" }}>{description} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactDrag;

