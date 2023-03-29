import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CloseBooks = () => {

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <div className="bg-light-blue py-[40px]">
      <h1 className="font-bold text-center text-mobile-h3 md:text-[48px] text-slate-headline Kn">
        Close your books in no time
      </h1>
      <p className="mt-2 text-[#7E8597] Dm text-center md:text-[21px] text-[17px]">
        Save time and money dealing with expenses.
      </p>
      <h1 className="my-[10px] font-normal text-center text-mobile-h3 md:text-[42px] text-slate-headline Dm" data-aos="fade-up">
      <span className="text-[#4D49FF]"> 0 days</span> to launch
      </h1>
      <h1 className="my-[10px] font-normal text-center text-mobile-h3 md:text-[42px] text-slate-headline Dm" data-aos="fade-up" data-aos-duration="500">
      <span className="text-[#4D49FF]">100%</span> employee satisfaction
      </h1>
      <h1 className="my-[10px] font-normal text-center text-mobile-h3 md:text-[42px] text-slate-headline Dm" data-aos="fade-up" data-aos-duration="1000">
      <span className="text-[#4D49FF]"> 95%</span> of data entry removed
      </h1>
      <h1 className="my-[10px] font-normal text-center text-mobile-h3 md:text-[42px] text-slate-headline Dm" data-aos="fade-up" data-aos-duration="1500">
      <span className="text-[#4D49FF]"> 5 days</span> faster month closing
      </h1>
    </div>
  );
};

export default CloseBooks;
