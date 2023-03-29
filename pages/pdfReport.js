/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { AuthContext } from '../context/AuthContext';
import { useContext } from "react";
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PdfReport = () => {


    const { companyName, calculationOption, setCalculationOption, time, setTime, cost, setCost, timeSpentOnExpenseReports, moneySpentOnExpenseReports, moneySpentOnExpenseInvoiceProcessing } = useContext(AuthContext);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,

    });

    return (

        <div ref={componentRef}>
            <div className='flex items-center justify-between p-[30px]'>
                <div>

                    <img

                        width='54px' height="54px"

                        src="/images/logo.png"
                        alt="Bursement Hero Image"
                        quality={100}
                    />
                </div>
                <div>
                    <p className='text-[16px] font-medium'>Bursement’s ROI Calculator/ {companyName}</p>
                </div>
            </div>
            <div className='bg-blue-200 py-[40px] px-[30px] '>
                <div>
                    <h1 className='text-[16px] font-medium'>Here’s how much {companyName} could save by switching to Bursement</h1>
                    <div className='grid grid-cols-3 gap-4 mt-[60px] pb-[160px] px-[35px]'>
                        <div>
                            <p className='text-[16px] font-bold'>Based on the data entered,<br /> studies and <br /> some assumptions</p>
                        </div>

                        <div>
                            <h2 className='text-[26px] font-bold'>${0.9 * moneySpentOnExpenseReports}</h2>
                            <p>per year saved on expense reporting
                            </p>
                        </div>

                        <div>
                            <h2 className='text-[26px] font-bold'>${0.9 * moneySpentOnExpenseInvoiceProcessing}</h2>
                            <p> per year saved on invoice processing
                            </p>
                        </div>
                        <div></div>
                        <div>
                            <h2 className='text-[26px] font-bold'>{0.9 * timeSpentOnExpenseReports}</h2>
                            <p>hours per year</p>
                        </div>


                    </div>



                </div>
            </div>

            <div className='grid grid-cols-3 gap-4 '>
                <div className='bg-slate-50 py-[15px] px-[25px]'>
                    <p className=' text-[16px] font-normal mb-[15px]' >where these numbers <br /> come from </p>
                    <p className=' text-[16px] font-normal'>How can traditional <br /> expense claims be so <br /> expensive? Here’s how...
                    </p>
                </div>
                <div className=' py-[15px] px-[25px] '>
                    <p className=' text-[46px] font-medium mb-[15px]' >{time} mins </p>
                    <p className=' text-[16px] font-normal'>Average time to process a <br />
                        {calculationOption} expense claim

                    </p>
                </div>
                <div className=' py-[15px] px-[25px] '>
                    <p className=' text-[46px] font-medium mb-[15px]' >20% </p>
                    <p className=' text-[16px] font-normal'>Of expense claims contain <br /> errors and need to be <br />corrected.
                    </p>
                </div>

            </div>
            <div className='grid grid-cols-3 gap-4 mt-[25px] '>

                <div className=' py-[15px] px-[25px] '>
                    <p className=' text-[46px] font-medium mb-[15px]' >${cost} </p>
                    <p className=' text-[16px] font-normal'>Cost of processing an <br />
                        expense claim at {companyName}, <br />
                        based on the average <br />
                        salary

                    </p>
                </div>
                <div className=' py-[15px] px-[25px] '>
                    <p className=' text-[46px] font-medium mb-[15px]' >18 mins </p>
                    <p className=' text-[16px] font-normal'>Average time it takes to <br />
                        fix an expense claim that <br />
                        contain errors.

                    </p>
                </div>
                <div className=' py-[15px] px-[25px] '>
                    <p className=' text-[46px] font-medium mb-[15px]' >5% </p>
                    <p className=' text-[16px] font-normal'>Money lost through lack of <br />
                        oversight with traditional <br />
                        expense claims.
                    </p>
                </div>

            </div>

            <div className='bg-slate-50 px-[30px] py-[60px] mt-[190px] ' >
                <div>
                    <h2 className=' text-[26px] font-normal'>Here’s how Bursement can save {companyName} ${0.9 * moneySpentOnExpenseReports}, ${0.9 * moneySpentOnExpenseInvoiceProcessing}  and {0.9 * timeSpentOnExpenseReports} hours on expense claims, every year</h2>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-[25px] '>
                    <div className='flex  items-center'>
                        <div className='w-[86px] h-[56px] bg-red-200 rounded-[10px] mr-[10px]'>

                        </div>
                        <div>
                            <p className='text-[15px] font-bold'>Automated expenses</p>
                            <p>Aapture receipts on-the-go, process expenses error-free in seconds</p>
                        </div>
                    </div>
                    <div className='flex  items-center'>
                        <div className='w-[86px] h-[56px] bg-yellow-200 rounded-[10px] mr-[10px]'>

                        </div>
                        <div>
                            <p className='text-[15px] font-bold'>Real-time overview</p>
                            <p>See all spending as-it-happens. Act right away if something’s not right</p>
                        </div>
                    </div>
                    <div className='flex  items-center'>
                        <div className='w-[86px] h-[56px] bg-green-200 rounded-[10px] mr-[10px]'>

                        </div>
                        <div>
                            <p className='text-[15px] font-bold'>Simplified bookeeping</p>
                            <p>Connect Bursement to your accounting tools for  bookkeeping made easy</p>
                        </div>
                    </div>
                    <div className='flex  items-center'>
                        <div className='w-[86px] h-[56px] bg-violet-200 rounded-[10px] mr-[10px]'>

                        </div>
                        <div>
                            <p className='text-[15px] font-bold'>Spending limits</p>
                            <p>Easily set and adjust limits for each individual  Bursement card</p>
                        </div>
                    </div>
                    <div className='flex  items-center'>
                        <div className='w-[86px] h-[56px] bg-teal-200 rounded-[10px] mr-[10px]'>

                        </div>
                        <div>
                            <p className='text-[15px] font-bold'>No more reimbursements</p>
                            <p>Your team get their own Bursement spending cards, whether that’s virtual or plastic</p>
                        </div>
                    </div>
                    <div className='flex  items-center'>
                        <div className='w-[86px] h-[56px] bg-teal-200 rounded-[10px] mr-[10px]'>

                        </div>
                        <div>
                            <p className='text-[15px] font-bold'>Exclusive Bursement Perks offers</p>
                            <p>Save up to $50,000 a year on software that our customers love</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <button className='Dm mr-[20px]  text-[12px] my-[35px] rounded-[100px]  bg-black text-white   border-[1px] border-solid border-transparent py-[14px] px-[28px]'>Make the switch to Bursement</button>
                <button onClick={handlePrint} className='Dm  text-[12px] my-[35px] rounded-[100px]  bg-black text-white   border-[1px] border-solid border-transparent py-[14px] px-[28px]'>Download!</button>
            </div>
        </div>
    );
};

export default PdfReport;