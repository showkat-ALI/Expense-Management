import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import { AuthContext } from '../../context/AuthContext';
import { useContext } from "react";


const CompanyName = () => {
    const myLoader = ({ src, width }) => {
        return `${src}?w=${width}`;
    }

   const {companyName, que1,setQue1,handleChange1,que2,setQue2,handleChange2,que3,setQue3,handleChange3,que4,setQue4,handleChange4,que5,setQue5,handleChange5,btn1,setBtn1,btn2,setBtn2,btn3,setBtn3,timeSpentOnExpenseReports,setTimeSpentOnExpenseReports, moneySpentOnExpenseReports,setMoneySpentOnExpenseReports, moneySpentOnExpenseInvoiceProcessing,setMoneySpentOnExpenseInvoiceProcessing,buttonManual,buttonSemiAutomatic,automatic} = useContext(AuthContext);


const[calculationOption,setCalculationOption]=useState('')
    // const [que1, setQue1] = useState(0)
    // const handleChange1 = (que1) => {
    //     setQue1(que1)
    // }
    // const [que2, setQue2] = useState(1)
    // const handleChange2 = (que2) => {
    //     setQue2(que2)
    // }
    // const [que3, setQue3] = useState(5)
    // const handleChange3 = (que3) => {
    //     setQue3(que3)
    // }
    // const [que4, setQue4] = useState(2000)
    // const handleChange4 = (que4) => {
    //     setQue4(que4)
    // }
    // const [que5, setQue5] = useState(1)
    // const handleChange5 = (que5) => {
    //     setQue5(que5)
    // }

    // const [btn1, setBtn1] = useState(true);
    // const [btn2, setBtn2] = useState(false);
    // const [btn3, setBtn3] = useState(false);

    // const [timeSpentOnExpenseReports, setTimeSpentOnExpenseReports] = useState();
    // const [moneySpentOnExpenseReports, setMoneySpentOnExpenseReports] = useState();
    // const [moneySpentOnExpenseInvoiceProcessing, setMoneySpentOnExpenseInvoiceProcessing] = useState();

    useEffect(() => {
        setTimeSpentOnExpenseReports(((5 * que1) +( que2 * 91))*12);
        setMoneySpentOnExpenseReports(((5 * que1) + (que2 * 82))*12);
        setMoneySpentOnExpenseInvoiceProcessing(((5 * que1) + (que2 * 30))*12)

    }, [que1, que2])


    // const buttonManual = () => {
    //     setBtn1(true);
    //     setBtn2(false);
    //     setBtn3(false);
    //     setTimeSpentOnExpenseReports(((5 * que1) +( que2 * 91))*12);
    //     setMoneySpentOnExpenseReports(((5 * que1) + (que2 * 82))*12);
    //     setMoneySpentOnExpenseInvoiceProcessing(((5 * que1) + (que2 * 30))*12)
    // }
    // const buttonSemiAutomatic = () => {
    //     setBtn1(false);
    //     setBtn2(true);
    //     setBtn3(false);
    //     setTimeSpentOnExpenseReports(((5 * que1) + (que2 * 62))*12);
    //     setMoneySpentOnExpenseReports(((5 * que1) + (que2 * 52))*12);
    //     setMoneySpentOnExpenseInvoiceProcessing(((5 * que1) + (que2 * 21))*12)
    // }
    // const automatic = () => {
    //     setBtn1(false);
    //     setBtn2(false);
    //     setBtn3(true);
    //     setTimeSpentOnExpenseReports(((5 * que1) + (que2 * 34))*12);
    //     setMoneySpentOnExpenseReports(((5 * que1) + (que2 * 32))*12);
    //     setMoneySpentOnExpenseInvoiceProcessing(((5 * que1) + (que2 * 14))*12)
    // }



    // buttton
    const router = useRouter();
    const previous=()=>{
        router.replace('/money')
    }
    const next=()=>{
        router.replace('/monetCostCalculatorReport')
    }






    return (
        <div className="p-[40px]">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 items-start">

                <div >
                    <div className='mb-14'>
                        <h1 className='text-[16px] font-medium leading-[1.5] text-[#b9626d] mb-1 Kn'>Question 1</h1>
                        <p className='text-[16px] font-medium leading-[1.5]   Dm'>How many employees file expenses?</p>
                        <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>
                            <InputRange
                                maxValue={500}
                                minValue={0}
                                value={que1}
                                onChange={handleChange1} />
                            <input className='text-center px-[12px] py-[20px] h-[50px] w-[50px] md:w-[100px] bg-[#F5F5F5] md:text-[16px] text-[9px] Dm border-[1px] border-solid border-transparent rounded-[8px]' style={{ marginLeft: "40px" }} type="number" onChange={(e) => setQue1(e.target.value)} name="" value={que1} id="" />
                        </div>
                    </div>
                    <div className='mb-14'>
                        <h1 className='text-[16px] font-medium leading-[1.5] text-[#b9626d] mb-1 Kn'>Question 2</h1>
                        <p className='text-[16px] font-medium leading-[1.5]   Dm'>How many expenses do employees file every month?</p>
                        <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>
                            <InputRange
                                maxValue={100}
                                minValue={0}
                                value={que2}
                                onChange={handleChange2} />
                            <input className='text-center px-[12px] py-[20px] h-[50px] w-[50px] md:w-[100px] bg-[#F5F5F5] md:text-[16px] text-[9px] Dm border-[1px] border-solid border-transparent rounded-[8px]' style={{ marginLeft: "40px" }} type="number" onChange={(e) => setQue2(e.target.value)} name="" value={que2} id="" />
                        </div>
                    </div>
                    <div className='mb-14'>
                        <h1 className='text-[16px] font-medium leading-[1.5] text-[#b9626d] mb-1 Kn'>Question 3</h1>
                        <p className='text-[16px] font-medium leading-[1.5]   Dm'>What is the average expense claim amount? (£)</p>
                        <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>
                            <InputRange
                                maxValue={1000}
                                minValue={5}
                                value={que3}
                                onChange={handleChange3} />
                            <input className='text-center px-[12px] py-[20px] h-[50px] w-[50px] md:w-[100px] bg-[#F5F5F5] md:text-[16px] text-[9px] Dm border-[1px] border-solid border-transparent rounded-[8px]' style={{ marginLeft: "40px" }} type="number" onChange={(e) => setQue3(e.target.value)} name="" value={que3} id="" />
                        </div>
                    </div>
                    <div className='mb-14'>
                        <h1 className='text-[16px] font-medium leading-[1.5] text-[#b9626d] mb-1 Kn'>Question 4</h1>
                        <p className='text-[16px] font-medium leading-[1.5]   Dm'>What is the average monthly salary? (£)</p>
                        <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>
                            <InputRange
                                maxValue={20000}
                                minValue={2000}
                                value={que4}
                                onChange={handleChange4} />
                            <input className='text-center px-[12px] py-[20px] h-[50px] w-[50px] md:w-[100px] bg-[#F5F5F5] md:text-[16px] text-[9px] Dm border-[1px] border-solid border-transparent rounded-[8px]' style={{ marginLeft: "40px" }} type="number" onChange={(e) => setQue4(e.target.value)} name="" value={que4} id="" />
                        </div>


                    </div>
                    <div className='mb-14'>
                        <h1 className='text-[16px] font-medium leading-[1.5] text-[#b9626d] mb-1 Kn'>Question 5</h1>
                        <p className='text-[16px] font-medium leading-[1.5]   Dm'>How many invoice payment do you process in a month?</p>
                        <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>
                            <InputRange
                                maxValue={100}
                                minValue={0}
                                value={que5}
                                onChange={handleChange5} />
                            <input className='text-center px-[12px] py-[20px] h-[50px] w-[50px] md:w-[100px] bg-[#F5F5F5] md:text-[16px] text-[9px] Dm border-[1px] border-solid border-transparent rounded-[8px]' style={{ marginLeft: "40px" }} type="number" onChange={(e) => setQue5(e.target.value)} name="" value={que5} id="" />
                        </div>


                    </div>
                    <div className='mb-14'>
                        <h1 className='text-[16px] font-medium leading-[1.5] text-[#b9626d] mb-1 Kn'>Question 6</h1>
                        <p className='text-[16px] font-medium leading-[1.5]   Dm'>How does your company handle expense reports now?</p>
                        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-x-[10px] gap-y-[20px] mt-[3px]'>
                            <button onClick={buttonManual} className={`p-[14px] focus:ring-2 ring-black bg-[#f5f5f5] border-[1px] border-solid ${btn1 ? 'border-black' : 'border-transparent'}  rounded-[8px] cursor-pointer text-left`}>
                                <Image loader={myLoader}
                                    width='40px' height="40px"
                                    className=" mb-1"
                                    src="/images/5-manual.svg"
                                    alt="Bursement Hero Image"
                                />
                                <p className='Kn text-[16px] font-medium leading-[1.5]'>Manual</p>
                                <p className='Dm text-[16px] font-medium leading-[1.5] text-[#333333]'>Paper and printed receipts</p>

                            </button>
                            <button onClick={buttonSemiAutomatic} className={`p-[14px] focus:ring-2 ring-black bg-[#f5f5f5] border-[1px] border-solid ${btn2 ? 'border-black' : 'border-transparent'}  rounded-[8px] cursor-pointer text-left`}>
                                <Image loader={myLoader}
                                    width='40px' height="40px"
                                    className=" mb-1"
                                    src="/images/5-semiauto.svg"
                                    alt="Bursement Hero Image"
                                />
                                <p className='Kn text-[16px] font-medium leading-[1.5]'>Semi-automatic</p>
                                <p className='Dm text-[16px] font-medium leading-[1.5] text-[#333333]'>Spreadsheets and pictures</p>

                            </button>
                            <button onClick={automatic} className={`p-[14px] focus:ring-2 ring-black bg-[#f5f5f5] border-[1px] border-solid ${btn3 ? 'border-black' : 'border-transparent'}  rounded-[8px] cursor-pointer text-left`}>
                                <Image loader={myLoader}
                                    width='40px' height="40px"
                                    className=" mb-1"
                                    src="/images/5-automatic.svg"
                                    alt="Bursement Hero Image"
                                />
                                <p className='Kn text-[16px] font-medium leading-[1.5]'>Automatic</p>
                                <p className='Dm text-[16px] font-medium leading-[1.5] text-[#333333]'>Expense reporting software</p>

                            </button>

                        </div>

                    </div>

                    <div>
                        <button onClick={previous} className='focus:underline'>Previous</button> <button onClick={next} className="Dm mt-[20px] rounded-[100px] bg-transparent hover:bg-black hover:text-white  h-[46px] w-[103px] border-2 border-black p-[14px 28px] ml-[30px]">Next</button>
                    </div>
                </div>
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

export default CompanyName;