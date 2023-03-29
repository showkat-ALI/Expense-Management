import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import NavBar2 from "./NavBar2";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="bg-light-blue py-[20px]">
      <NavBar2 />
      <section className="px-6 mt-2 md:mt-0 md:px-0 Kn">
        <div className="m-auto max-w-default">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full md:mr-[17px] md:order-1" data-aos="fade-right" data-aos-duration="1000">
              <div className="mt-[40px] md:mt-0">
                <h1 className="font-medium md:text-left text-center text-mobile-h1 md:text-[48px] text-slate-headline">
                  Erase needless expenses <br /> and{" "}
                  <span className="text-[#4D49FF]"> frictions.</span>
                </h1>
                <p className="text-[#7E8597] md:text-left text-center text-[21px] mt-6 md:mt-[30px]">
                  The only company card and spend management platform designed
                  to help you be frugal.
                </p>
                <div className="mt-9">
                  <Link href="/signupForm">
                    <a>
                      <button className="w-full px-8 py-4 text-white rounded-lg bg-[#4D49FF] text-[21px] md:w-auto filter hover:brightness-125">
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
            <div className="w-full md:ml-[17px] md:order-2 mb-[70px] mt-[80px] md:mb-[90px]" data-aos="fade-left" data-aos-duration="1000">
              <div
                className="flex justify-center"
                // style={{ height: "550px" }}
              >
                {/* <img className="-mt-10 -mb-10 w-auto" src="https://i.ibb.co/yFHf2sr/phone.png" alt="" /> */}
                <Image
                  className="md:w-full w-auto mx-auto -mt-12 -mb-10"
                  loader={myLoader}
                  src="/images/Hero Illustration.svg"
                  alt="Bursement Hero Image"
                  height="500px"
                  width="600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
