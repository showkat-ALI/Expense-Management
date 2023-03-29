
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";


const MonetCostCalculatorReport = () => {

    const router = useRouter();

    const previous = () => {
        router.replace(`/company/companyName`)
    }
    const getReport = () => {
        router.replace(`/pdfReport`);

        console.log("okkk")

    }

    const { companyName, email, setEmail, que1, setQue1, handleChange1, que2, setQue2, handleChange2, que3, setQue3, handleChange3, que4, setQue4, handleChange4, que5, setQue5, handleChange5, calculationOption, setCalculationOption, btn1, setBtn1, btn2, setBtn2, btn3, setBtn3, timeSpentOnExpenseReports, setTimeSpentOnExpenseReports, moneySpentOnExpenseReports, setMoneySpentOnExpenseReports, moneySpentOnExpenseInvoiceProcessing, setMoneySpentOnExpenseInvoiceProcessing, buttonManual, buttonSemiAutomatic, automatic } = useContext(AuthContext);


    const [click, setClick] = useState(false)

    return (
        <div className="p-[40px]">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div>
                    <h1 className="Kn leading-[1.1] md:text-[64px] sm:text-[60px]">That’s it!</h1>
                    <p className="Dm mt-[30px] mb-[25px] leading-[1.6] md:text-[23px] sm:text-[16px] text-[#333333]">But these numbers are just the start. Plug in your details below to get the full report, with lots more data and information on the hidden costs of expense reports.</p>
                    <p className="Dm text-[16px] mb-[10px]">Whats your email?</p>

                    <input onChange={(e) => setEmail(e.target.value)} className="h-[50px] md:w-[97%] px-[12px] py-[20px] bg-[#F5F5F5] rounded-[8px] border-[1px] border-solid border-transparent" placeholder="someone@bursement.io" type="email" name="" id="" required /> <br />
                    <div className='mt-[10px] flex items-baseline'>
                        {
                            email ? <input onClick={() => setClick(!click)} className='mr-[10px]' type="checkbox" name="" id="" /> : <input className='mr-[10px]' type="checkbox" disabled name="" id="" />
                        } <span>I accept the <span className='underline underline-offset-1'>terms of service</span>  and <span className='underline underline-offset-1'>privacy policy</span> . This site is protected by reCAPTCHA and the Google <span className='underline underline-offset-1'>privacy policy</span> and <span className='underline underline-offset-1'>Terms of Service apply.</span> </span>
                    </div>
                    {
                        click && email && <button onClick={getReport} className="Dm text-[#b3b3b3] bg-[#F5F5F5] mt-[35px] rounded-[100px]  hover:bg-black hover:text-white    h-[46px] w-[188px]  border-[1px] border-solid border-transparent p-[14px 28px] ">Get your report</button>
                    }

                    <br />

                    <button onClick={previous} className="Dm mt-[70px] rounded-[100px] bg-transparent hover:bg-black hover:text-white  h-[46px] w-[103px] border-2 border-black p-[14px 28px]">Previous</button>


                </div>

                {/* <div>
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
                            <div>
                                <p className="md:text-[23px] sm:text-[16px] leading-[1.6] font-medium Dm">Time spent on invoicing and billing.</p>
                                <p className="my-[8px] md:text-[45px] sm:text-[13px] Dm">-</p>
                                <p className="md:text-[16px] sm:text-[13px] leading-[1.5] font-medium Dm">per year</p>
                            </div>

                        </div>
                    </div>
                    <div className="bg-[#f5f5f5] p-[20px]">

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="md:text-[23px] sm:text-[16px] leading-[1.6] font-medium Dm ">Grade (%)</p>
                                <p className="my-[8px] md:text-[45px] sm:text-[13px] Dm">-</p>
                                <p className="md:text-[16px] sm:text-[13px] leading-[1.5] font-medium Dm">per year</p>
                            </div>

                        </div>
                    </div>
                </div> */}
                <div className='sticky top-4'>
                    <div className="bg-[#f5f5f5] p-[20px]">
                        <p className="md:text-[16px] sm:text-[13px] Kn font-medium mb-[30px]">{companyName}</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="Dm md:text-[23px] sm:text-[16px] leading-[1.6] font-medium ">Money spent on expense reports</p>
                                {
                                    que1 > 0 ? <p className="my-[8px] md:text-[45px] sm:text-[13px] Dm"> {moneySpentOnExpenseReports} </p> : <p className="my-[8px] md:text-[45px] sm:text-[13px] Dm"> - </p>
                                }
                                <p className="Dm md:text-[16px] sm:text-[13px] leading-[1.5] font-medium">hours per year</p>
                            </div>
                            <div>
                                <p className="md:text-[23px] sm:text-[16px] leading-[1.6] font-medium Dm">Money spent on invoice payment</p>
                                {
                                    que1 > 0 ? <p className="my-[8px] md:text-[45px] sm:text-[13px] Dm"> {moneySpentOnExpenseInvoiceProcessing} </p> : <p className="my-[8px] md:text-[45px] sm:text-[13px] Dm"> - </p>
                                }
                                <p className="md:text-[16px] sm:text-[13px] leading-[1.5] font-medium Dm">per year</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light-blue p-[20px]">

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="md:text-[23px] sm:text-[16px] leading-[1.6] font-medium Dm">Time spent on expense reports</p>

                                {
                                    que1 > 0 ? <p className="my-[8px] md:text-[45px] sm:text-[13px] Dm"> {timeSpentOnExpenseReports} </p> : <p className="my-[8px] md:text-[45px] sm:text-[13px] Dm"> - </p>
                                }

                                <p className="md:text-[16px] sm:text-[13px] leading-[1.5] font-medium Dm">hours per year</p>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MonetCostCalculatorReport;