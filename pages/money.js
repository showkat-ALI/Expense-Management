
import { useRouter } from "next/router";
import { useState } from "react";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



const Money = () => {
    // const [companyName, setCompanyName] = useState('')

    const {companyName,setCompanyName,submit , que1, setQue1, handleChange1, que2, setQue2, handleChange2, que3, setQue3, handleChange3, que4, setQue4, handleChange4, que5, setQue5, handleChange5, btn1, setBtn1, btn2, setBtn2, btn3, setBtn3, timeSpentOnExpenseReports, setTimeSpentOnExpenseReports, moneySpentOnExpenseReports, setMoneySpentOnExpenseReports, moneySpentOnExpenseInvoiceProcessing, setMoneySpentOnExpenseInvoiceProcessing, buttonManual, buttonSemiAutomatic, automatic } = useContext(AuthContext);
    // const router = useRouter()
    // const submit = () => {

    //     if (!companyName) {
    //         swal({

    //             text: "Your Company Name is missing",
    //             icon: "warning",
    //         })
    //         return;
    //     }
    //     router.replace(`/company/companyName`)

    // }


    return (
        <div className="p-[40px]">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div>
                    <h1 className="Kn leading-[1.1] md:text-[54px] sm:text-[50px]">How much can you save with Bursement?</h1>
                    <p className="Dm mt-[30px] mb-[25px] leading-[1.6] md:text-[23px] text-[#333333] sm:text-[16px]">This simple calculator quickly reveals how much manual expense processes are costing your business.</p>
                    <p className="Dm text-[16px] mb-[10px]">What’s your company name?</p>
                    <input onChange={(e) => setCompanyName(e.target.value)} className="h-[50px] md:w-[97%] px-[12px] py-[20px] bg-[#F5F5F5] rounded-[8px] border-[1px] border-solid border-transparent" placeholder="e.g bursement" type="text" name="" id="" required />
                    <button onClick={submit} className=" Dm mt-[20px] rounded-[100px] bg-transparent hover:bg-black hover:text-white  h-[46px] w-[103px] border-2 border-black  ">Start</button>
                </div>

                <div>
                    <div className="bg-[#f5f5f5] p-[20px]">
                        <p className="md:text-[16px] sm:text-[13px] Kn font-medium mb-[30px]">Bursement ROI Calculator</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="Dm md:text-[23px] sm:text-[16px] leading-[1.6] font-medium ">Money spent on expense reports</p>
                                <p className="my-[8px] md:text-[45px] sm:text-[13px] Dm">-</p>
                                <p className="Dm md:text-[16px] sm:text-[13px] leading-[1.5] font-medium">hours per year</p>
                            </div>
                            <div>
                                <p className="md:text-[23px] sm:text-[16px] leading-[1.6] font-medium Dm">Money spent on invoice payment</p>
                                <p className="my-[8px] Dm md:text-[45px] sm:text-[13px]">-</p>
                                <p className="md:text-[16px] sm:text-[13px] leading-[1.5] font-medium Dm">per year</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light-blue p-[20px]">

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="md:text-[23px] sm:text-[16px] leading-[1.6] font-medium Dm">Time spent on expense reports</p>
                                <p className="my-[8px] md:text-[45px] sm:text-[13px] Dm">-</p>
                                <p className="md:text-[16px] sm:text-[13px] leading-[1.5] font-medium Dm">hours per year</p>
                            </div>
                           

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Money;