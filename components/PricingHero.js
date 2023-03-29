import NavBar2 from "./NavBar2";
import Image from "next/image";
import Link from "next/link";

const PricingHero = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <section className="bg-light-blue py-[20px]">
      <NavBar2 />
      <section className="m-auto md:mt-50 px-6 md:px-0 max-w-default pb-8 pt-12 md:pb-[100px] Kn">
        <div className="flex flex-col text-center">
          <div className="md:order-1 md:mt-0">
            <h1 className="font-medium text-mobile-h1 md:text-[48px] text-slate-headline font-kn-sans md:mt-[100px]">
              Be <span className="text-[#4D49FF]">smarter</span> with your
              finances
            </h1>
            <p className="text-[#7E8597] text-[21px] mt-6 md:mt-[30px] max-w-[550px] m-auto font-kn-sans">
              With our three tier plans, we can help you manage your teams
              finances, get rid of unnecesary subscriptions and make smarter
              business decisions.
            </p>
          </div>
          <div className="py-3 mt-6 md:mt-12 md:order-2 rounded-2xl">
            <Image
              loader={myLoader}
              className="w-full"
              src={"/images/pricingHeroImg.svg"}
              alt="pricing-banner"
              width={1150}
              height={500}
            />
          </div>
        </div>
        <div className="mt-14 text-center">
          <Link href="/signupForm">
            <a>
              <button className="w-full px-[48px] py-[16px] text-white rounded-full bg-[#4D49FF] filter hover:brightness-125 text-[18px] md:w-auto">
                Try it free
              </button>
            </a>
          </Link>
          <p className="text-[#7E8597] font-kn-sans text-[13px] mt-3">
            No credit card required
          </p>
        </div>
      </section>
    </section>
  );
};

export default PricingHero;
