import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavBar2 from "./NavBar2";

const myLoader = ({ src, width }) => {
  return `${src}?w=${width}`;
};

const ImageSection = () => (
  <div className="flex justify-center rounded-3xl">
    {/* <img className="-mt-10 -mb-10 w-auto" src="https://i.ibb.co/yFHf2sr/phone.png" alt="" /> */}
    <Image
      loader={myLoader}
      className="md:w-full w-50 mx-auto -mt-12 -mb-10"
      src={"/images/whyBursementHeroImg.png"}
      width={561}
      height={516}
      alt="Bursement Hero"
    />
  </div>
);

const WhyBursementHero = () => {
  return (
    <section className="bg-light-blue py-[20px]">
      <NavBar2 />
      <section className="px-6 mt-20 md:mt-16 md:px-0 Kn">
        <div className="m-auto max-w-default">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full md:mr-[17px] md:order-1">
              <div className="md:text-left text-center">
                <h1 className="font-medium text-mobile-h2 md:text-desktop-h1 text-slate-headline">
                  The spending solution for{" "}
                  <span className="text-[#4D49FF]">forward-thinking teams</span>
                </h1>
                <p className="text-[#7E8597] text-desktop-subheading mt-6 md:mt-[30px]">
                  Bursement means no more reimbursements or boring end-of-month
                  expense reports.
                </p>
                <p className="text-[#7E8597]  text-desktop-subheading mt-6 md:mt-[30px]">
                  You decide who gets a card, your teams pay for whatever they
                  need to do their best work.
                </p>
                <div className="mt-9">
                  <Link href="/signupForm">
                    <a>
                      <button className="w-full px-8 py-4 text-white rounded-lg bg-[#4D49FF] text-[18px] md:w-auto filter hover:brightness-125">
                        Sign up for free
                      </button>
                    </a>
                  </Link>
                  <p className="text-[#7E8597] text-[13px] mt-3 text-center md:text-left">
                    No credit card required
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:ml-[17px] md:order-2 md:mb-[90px] mb-[50px] md:mt-0 mt-[80px]">
              <ImageSection />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyBursementHero;
