import Image from "next/image";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";


const SingleQuestionSupportPage = (props) => {
    const myLoader = ({ src, width }) => {
        return `${src}?w=${width}`;
    }

    const { id, img, que, ans, index } = props.acc;
    const [click, setClick] = useState(false);
    return (
        <div className="">
            <div className="bg-[#FFFFFF] md:h-[70px] md:w-[500px] w-[350px] rounded-2xl pt-2 pb-2 pl-2 pr-[24px] mb-[10px] mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-[54px] h-[54px] bg-[#4D49FF] rounded-2xl py-[17px] px-[16px] mr-[16px]">
                            <Image loader={myLoader} alt="" width="20px" height="20px" src={img}></Image>
                        </div>
                        <div><p className="text-[#0D172C] text-[18px] font-medium Dm">{que}</p></div>
                    </div>
                    <div>
                        {
                            click ? <BiMinus onClick={() => setClick(!click)} className="hover:pointer w-[18px] h-[18px] cursor-pointer"></BiMinus> : <BiPlus onClick={() => setClick(!click)} className="w-[18px] h-[18px] cursor-pointer"></BiPlus>
                        }


                    </div>
                </div>
            </div>
            {
                click && <div className="bg-[#FFFFFF] h-auto md:w-[500px] w-[350px] rounded-3xl py-[36px] px-[50px] mx-auto">
                    <p className="text-[#2C3242] text-[18px] font-normal Dm leading-[]23px">{ans}</p>
                </div>
            }

        </div>



    );
};

export default SingleQuestionSupportPage;