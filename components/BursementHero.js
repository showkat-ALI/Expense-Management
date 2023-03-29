import React, {useEffect} from "react";
import NavBar2 from "./NavBar2";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BursementHero = () => {
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
                <h1 className="font-bold md:text-left text-center md:text-[34px] text-[26px] text-slate-headline Kn">
                Get up to 30% discount on Bursement for 13 months!
                </h1>
                <p className="text-[#7E8597] md:text-left text-center text-[18px] mt-6 md:mt-[34px] Dm">
                A new way to manage business spending, using expense automation and smart cards to transform how you spend. Extremely easy to set up. 95% of data entry removed.
                </p>
                <div className="mt-9">
                  <Link href="/signupForm">
                    <a>
                      <button className="w-full px-8 py-4 text-white rounded-lg bg-[#4D49FF] md:text-[21px] text-[18px] md:w-auto filter hover:brightness-125">
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
            <div className="w-full md:ml-[17px] md:order-2 mb-[70px] md:mb-[90px]" data-aos="fade-left" data-aos-duration="1000">
              <div className="flex justify-center">
                <Image
                  className="md:w-full w-auto mx-auto -mt-12 -mb-10"
                  loader={myLoader}
                  src="/images/CampaignHeroImg.svg"
                  alt="Bursement Hero Image"
                  height="540px"
                  width="540px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BursementHero;
