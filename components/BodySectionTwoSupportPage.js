import Image from "next/image";
import Link from "next/link";

const BodySectionTwoSupportPage = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };
  const title = `"Interested people wants to know if it works. Fascinated people`;
  const title2 = `wants to learn how it works." Jim Rohn`;
  return (
    <div className="py-10 md:px-[6.25rem] px-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:order-1 order-2 pl-6">
          <p className="text-[#4D49FF] leading-[21px] text-base font-bold Dm tracking-[0.4px] md:mb-[18px] mb-[10px]">
            FAQS
          </p>
          <h1 className="text-black/70 md:text-[42px] text-[36px] font-medium leading-[55px] Dm md:mb-[45px] mb-[25px]">
            Weˊre here to help
          </h1>
          <p className="md:mb-10 mb-6 text-[#2C3242] leading-[23px] text-[18px] font-normal Dm">
            {" "}
            {title} <br />
            {title2}
          </p>
          <Link href="/contact-us">
            <a>
              <button className="text-white text-[18px] font-medium Dm bg-[#4D49FF] py-[16px] px-[32px] rounded-lg leading-6 focus:ring-4 hover:bg-[#4D49FF]/90">
                Contact Us
              </button>
            </a>
          </Link>
        </div>
        <div className="md:order-2 order-1">
          <div className="w-[295px] h-[335px] mt-0 md:mb-0 mb-12 md:w-[460px]  md:h-[530px] rounded-3xl bg-black/[0.05]">
            <Image
              loader={myLoader}
              width="595px"
              height="700px"
              className="rounded-3xl"
              src="/images/SupportImage.png"
              alt="Bursement Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySectionTwoSupportPage;
