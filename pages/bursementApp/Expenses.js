import React from 'react';
import BursementAppMenu from '../../BursementAppLayout/BursementAppMenu';
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import Select from 'react-select';
const Expenses = () => {
    const myLoader = ({ src, width }) => {
        return `${src}?w=${width}`;
    };

    const options = [
        { value: 'Action', label: 'Action' },

    ];
    const [selectedOption, setSelectedOption] = useState('');

    return (

        <BursementAppMenu>
            <div className='pl-[30px]'>
                <h1 className=' pt-[128px] text-[48px] font-normal mb-[36px]'>Expenses <span className='text-slate-300'> (30) </span></h1>

                <div className="flex justify-between items-center w-[970px] mb-[43px] ">
                    <div className="flex items-center">
                        <label htmlFor="table-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="table-search"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4D49FF] focus:border-[#4D49FF] block w-[200px] h-[52px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4D49FF] dark:focus:border-[#4D49FF] Dm text-[18px]"
                                placeholder="Search User"
                            />
                        </div>
                        <button className="flex items-center ml-[20px] bg-[#fff] h-[52px] w-[141px] justify-center rounded-[8px] border border-gray-300 Kn font-normal">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                />
                            </svg>
                            Filter
                        </button>

                        <Select
                            className=' ml-[20px]'
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>
                    <div className="">
                        <Link href="/newexpences">
                        <a>
                            <button className="bg-[#4D49FF] py-[8px] px-[40px] rounded-[8px] text-white Kn font-normal flex items-center text-[18px]">
                                <div className='flex items-baseline'>
                                    <AiOutlinePlus></AiOutlinePlus>
                                    <p className='ml-[8px]'>New Expenses</p>
                                </div>
                            </button>
                        </a>
                        </Link>
                    </div>
                </div>
                <div className='pr-[10px]'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-[30px]">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="md:text-[18px] text-[16px] text-[#4D49FF] bg-white dark:bg-gray-700 dark:text-gray-400">
                                <tr className="border-b border-gray-300">
                                    <th scope="col" className=" py-[6px]  font-normal pl-[5px] ">
                                        <input className='w-[22px] h-[21px] rounded-[6px] border-[#4D49FF99] border-2' type="checkbox" name="" id="" />
                                    </th>
                                    <th scope="col" className=" py-[6px] px-[16px] font-normal text-center">
                                        Vendor Name
                                    </th>
                                    <th scope="col" className="py-[6px] px-[16px] text-center font-normal">
                                        Reviews
                                    </th>
                                    <th scope="col" className="py-[6px] px-[16px] text-center font-normal">
                                        Expenses Date
                                    </th>
                                    <th scope="col" className="py-[6px] px-[16px] text-center font-normal">
                                        No of items
                                    </th>
                                    <th scope="col" className=" py-[6px] px-[16px] text-center font-normal ">
                                        Total Amount
                                    </th>
                                    <th scope="col" className="py-[6px] px-[16px]  font-normal text-center">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="text-center Dm">
                                        <div className='flex items-center p-[5px]'>
                                            <input className='w-[22px] h-[21px] rounded-[6px] border-[#4D49FF99] border-2 mr-[30px]' type="checkbox" name="" id="" />
                                            <Image
                                                loader={myLoader}
                                                src="/images/e1.png"
                                                alt="UserImage"
                                                height="39px"
                                                width="39px"

                                            />

                                        </div>
                                    </td>
                                    <td className="text-center Dm">
                                        <div>
                                            <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                                                Cold storage
                                            </h4>
                                            <p className="text-[#AFAFBC] Dm">Adam Brant</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex items-center'>
                                            <p className='mr-[25px] Dm text-[14px] text-[#0D172C] font-normal'>75%</p>
                                            <div>
                                                <div className='flex items-center mb-[9px]'>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p1.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p2.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p6.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>


                                                </div>
                                                <div>
                                                    <div className="w-[170px] bg-gray-200 rounded-full h-[6px]">
                                                        <div
                                                            className="bg-[#FD19D0] h-[6px] rounded-full"
                                                            style={{ width: `${75}%` }}
                                                        ></div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px] font-normal text-[#0D172C]'>14th feb 21</p>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px]  font-normal text-[#0D172C]'>10</p>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px] font-normal text-[#0D172C]'>$ 10</p>
                                    </td>
                                    <td className="px-6 py-4">

                                        <div className="mb-1 text-[14px] font-medium text-[#49D078] Dm text-center flex items-center">
                                            <Image
                                                loader={myLoader}
                                                src="/images/status.png"
                                                alt="UserImage"
                                                height="20px"
                                                width="20px"

                                            />
                                            <p className='ml-[4px] text-[14px] font-normal Dm text-black/60'>Pending</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="text-center Dm">
                                        <div className='flex items-center p-[5px]'>
                                            <input className='w-[22px] h-[21px] rounded-[6px] border-[#4D49FF99] border-2  mr-[30px]' type="checkbox" name="" id="" />
                                            <Image
                                                loader={myLoader}
                                                src="/images/e3.png"
                                                alt="UserImage"
                                                height="39px"
                                                width="39px"

                                            />

                                        </div>
                                    </td>
                                    <td className="text-center Dm">
                                        <div>
                                            <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                                                Fairprice
                                            </h4>
                                            <p className="text-[#AFAFBC] Dm">Serah Jamie</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex items-center'>
                                            <p className='mr-[25px] Dm text-[14px] text-[#0D172C] font-normal'>100%</p>
                                            <div>
                                                <div className='flex items-center mb-[9px]'>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p2.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p5.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p6.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>


                                                </div>
                                                <div>
                                                    <div className="w-[170px] bg-gray-200 rounded-full h-[6px]">
                                                        <div
                                                            className="bg-[#49D078] h-[6px] rounded-full"
                                                            style={{ width: `${100}%` }}
                                                        ></div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px] font-normal text-[#0D172C]'>14th feb 21</p>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px]  font-normal text-[#0D172C]'>30</p>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px] font-normal text-[#0D172C]'>$ 130</p>
                                    </td>
                                    <td className="px-6 py-4">

                                        <div className="mb-1 text-[14px] font-medium text-[#49D078] Dm text-center flex items-center">
                                            <Image
                                                loader={myLoader}
                                                src="/images/statuspaid.png"
                                                alt="UserImage"
                                                height="20px"
                                                width="20px"

                                            />
                                            <p className='ml-[4px] text-[14px] font-normal Dm  text-[#49D078]'>Paid</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="text-center Dm">
                                        <div className='flex items-center p-[5px]'>
                                            <input className='w-[22px] h-[21px] rounded-[6px] border-[#4D49FF99] border-2  mr-[30px]' type="checkbox" name="" id="" />
                                            <Image
                                                loader={myLoader}
                                                src="/images/e5.png"
                                                alt="UserImage"
                                                height="39px"
                                                width="39px"

                                            />

                                        </div>
                                    </td>
                                    <td className="text-center Dm">
                                        <div>
                                            <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                                                Asana
                                            </h4>
                                            <p className="text-[#AFAFBC] Dm">Serah Jamie</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex items-center'>
                                            <p className='mr-[25px] Dm text-[14px] text-[#0D172C] font-normal'>40%</p>
                                            <div>
                                                <div className='flex items-center mb-[9px]'>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p4.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p1.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p2.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>


                                                </div>
                                                <div>
                                                    <div className="w-[170px] bg-gray-200 rounded-full h-[6px]">
                                                        <div
                                                            className="bg-[#FD19D0] h-[6px] rounded-full"
                                                            style={{ width: `${40}%` }}
                                                        ></div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px] font-normal text-[#0D172C]'>14th feb 21</p>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px]  font-normal text-[#0D172C]'>30</p>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px] font-normal text-[#0D172C]'>$ 130</p>
                                    </td>
                                    <td className="px-6 py-4">

                                        <div className="mb-1 text-[14px] font-medium text-[#49D078] Dm text-center flex items-center">
                                            <Image
                                                loader={myLoader}
                                                src="/images/statusreject.png"
                                                alt="UserImage"
                                                height="20px"
                                                width="20px"

                                            />
                                            <p className='ml-[4px] text-[14px] font-normal Dm  text-[#FA036999]/60'>Rejected</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="text-center Dm">
                                        <div className='flex items-center p-[5px]'>
                                            <input className='w-[22px] h-[21px] rounded-[6px] border-[#4D49FF99] border-2 mr-[30px]' type="checkbox" name="" id="" />
                                            <Image
                                                loader={myLoader}
                                                src="/images/e1.png"
                                                alt="UserImage"
                                                height="39px"
                                                width="39px"

                                            />

                                        </div>
                                    </td>
                                    <td className="text-center Dm">
                                        <div>
                                            <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                                                Cold storage
                                            </h4>
                                            <p className="text-[#AFAFBC] Dm">Adam Brant</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex items-center'>
                                            <p className='mr-[25px] Dm text-[14px] text-[#0D172C] font-normal'>75%</p>
                                            <div>
                                                <div className='flex items-center mb-[9px]'>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p1.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p2.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p6.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>


                                                </div>
                                                <div>
                                                    <div className="w-[170px] bg-gray-200 rounded-full h-[6px]">
                                                        <div
                                                            className="bg-[#FD19D0] h-[6px] rounded-full"
                                                            style={{ width: `${75}%` }}
                                                        ></div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px] font-normal text-[#0D172C]'>14th feb 21</p>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px]  font-normal text-[#0D172C]'>10</p>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px] font-normal text-[#0D172C]'>$ 10</p>
                                    </td>
                                    <td className="px-6 py-4">

                                        <div className="mb-1 text-[14px] font-medium text-[#49D078] Dm text-center flex items-center">
                                            <Image
                                                loader={myLoader}
                                                src="/images/status.png"
                                                alt="UserImage"
                                                height="20px"
                                                width="20px"

                                            />
                                            <p className='ml-[4px] text-[14px] font-normal Dm text-black/60'>Pending</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="text-center Dm">
                                        <div className='flex items-center p-[5px]'>
                                            <input className='w-[22px] h-[21px] rounded-[6px] border-[#4D49FF99] border-2  mr-[30px]' type="checkbox" name="" id="" />
                                            <Image
                                                loader={myLoader}
                                                src="/images/e3.png"
                                                alt="UserImage"
                                                height="39px"
                                                width="39px"

                                            />

                                        </div>
                                    </td>
                                    <td className="text-center Dm">
                                        <div>
                                            <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                                                Fairprice
                                            </h4>
                                            <p className="text-[#AFAFBC] Dm">Serah Jamie</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex items-center'>
                                            <p className='mr-[25px] Dm text-[14px] text-[#0D172C] font-normal'>100%</p>
                                            <div>
                                                <div className='flex items-center mb-[9px]'>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p2.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p5.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p6.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>


                                                </div>
                                                <div>
                                                    <div className="w-[170px] bg-gray-200 rounded-full h-[6px]">
                                                        <div
                                                            className="bg-[#49D078] h-[6px] rounded-full"
                                                            style={{ width: `${100}%` }}
                                                        ></div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px] font-normal text-[#0D172C]'>14th feb 21</p>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px]  font-normal text-[#0D172C]'>30</p>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px] font-normal text-[#0D172C]'>$ 130</p>
                                    </td>
                                    <td className="px-6 py-4">

                                        <div className="mb-1 text-[14px] font-medium text-[#49D078] Dm text-center flex items-center">
                                            <Image
                                                loader={myLoader}
                                                src="/images/statuspaid.png"
                                                alt="UserImage"
                                                height="20px"
                                                width="20px"

                                            />
                                            <p className='ml-[4px] text-[14px] font-normal Dm  text-[#49D078]'>Paid</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="text-center Dm">
                                        <div className='flex items-center p-[5px]'>
                                            <input className='w-[22px] h-[21px] rounded-[6px] border-[#4D49FF99] border-2  mr-[30px]' type="checkbox" name="" id="" />
                                            <Image
                                                loader={myLoader}
                                                src="/images/e5.png"
                                                alt="UserImage"
                                                height="39px"
                                                width="39px"

                                            />

                                        </div>
                                    </td>
                                    <td className="text-center Dm">
                                        <div>
                                            <h4 className="text-[#0D172C] text-[14px] font-medium Dm">
                                                Asana
                                            </h4>
                                            <p className="text-[#AFAFBC] Dm">Serah Jamie</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex items-center'>
                                            <p className='mr-[25px] Dm text-[14px] text-[#0D172C] font-normal'>40%</p>
                                            <div>
                                                <div className='flex items-center mb-[9px]'>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p4.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p1.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>
                                                    <div className='mr-[29px]'>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/images/p2.png"
                                                            alt="UserImage"
                                                            height="25px"
                                                            width="25px"

                                                        />
                                                    </div>


                                                </div>
                                                <div>
                                                    <div className="w-[170px] bg-gray-200 rounded-full h-[6px]">
                                                        <div
                                                            className="bg-[#FD19D0] h-[6px] rounded-full"
                                                            style={{ width: `${40}%` }}
                                                        ></div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px] font-normal text-[#0D172C]'>14th feb 21</p>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px]  font-normal text-[#0D172C]'>30</p>
                                    </td>
                                    <td className="text-center">
                                        <p className='text-[14px] font-normal text-[#0D172C]'>$ 130</p>
                                    </td>
                                    <td className="px-6 py-4">

                                        <div className="mb-1 text-[14px] font-medium text-[#49D078] Dm text-center flex items-center">
                                            <Image
                                                loader={myLoader}
                                                src="/images/statusreject.png"
                                                alt="UserImage"
                                                height="20px"
                                                width="20px"

                                            />
                                            <p className='ml-[4px] text-[14px] font-normal Dm  text-[#FA036999]/60'>Rejected</p>
                                        </div>
                                    </td>
                                </tr>






                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </BursementAppMenu >
    );
};

export default Expenses;