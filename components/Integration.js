import Image from "next/image";
import Link from 'next/link';

const CTAButton = () => (
  <Link href="/signupForm">
    <a>
      <button className="flex items-center justify-center w-full px-10 py-3 space-x-3 transition-all duration-300 border-2 rounded-full border-[#4D49FF] bg-[#4D49FF] group md:w-auto filter hover:brightness-125">
        <span className="text-white transition-all duration-300">
          Try it for free
        </span>
      </button>
    </a>
  </Link>
);

const Integration = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <section className="bg-light-blue Kn">
      <div className="py-3 md:py-[80px] m-auto max-w-default">
        <div className="mx-6 text-center">
          <div className="w-full max-w-[555px] m-auto">
            <div>
              <h5 className="text-[16px] font-bold uppercase text-[#FD19D0]">
                Integrations
              </h5>
              <h2 className="mt-4 font-medium leading-snug text-mobile-h2 md:text-[42px] text-slate-headline">
                Dazzling Integrations.
              </h2>
              <p className="mt-6 text-[#7E8597] Dm text-[21px]">
                Talk to your accounting software, payroll software, Slack and
                more.
              </p>
              <div className="flex justify-center mt-10">
                <CTAButton />
              </div>
            </div>
          </div>
          <div className="w-full mt-12 max-w-default">
            <div>
              <div className="flex flex-wrap justify-center text-center">
                <div className="h-[83px] w-1/2 md:w-[166px] md:h-[89px] md:ml-[0px] md:mr-[16px] mt-4 mb-12 md:mb-0 md:mt-[30px]">
                  <div className="px-8 py-4 bg-white shadow-sm shadow-gray-300 w-full rounded-2xl max-w-[155px] md:m-auto h-32 md:h-28 flex items-center">
                    <Image
                      loader={myLoader}
                      className="w-24"
                      alt="Bursement Logos"
                      src={"/images/xero.png"}
                      width="100px"
                      height="100px"
                    />
                  </div>
                </div>

                <div className="h-[83px] w-1/2 md:w-[166px] md:h-[89px] md:ml-[0px] md:mr-[16px] mt-4 mb-12 md:mb-0 md:mt-[30px]">
                  <div className="px-8 py-4 bg-white shadow-sm shadow-gray-300 w-full rounded-2xl max-w-[155px] md:m-auto h-32 md:h-28 flex items-center">
                    <Image
                      loader={myLoader}
                      className="w-24"
                      alt="Bursement Logos"
                      src={"/images/Intuit Quickbooks.png"}
                      width="276px"
                      height="52px"
                    />
                  </div>
                </div>

                <div className="h-[83px] w-1/2 md:w-[166px] md:h-[89px] md:ml-[0px] md:mr-[16px] mt-4 mb-12 md:mb-0 md:mt-[30px]">
                  <div className="px-8 py-4 bg-white shadow-sm shadow-gray-300 w-full rounded-2xl max-w-[155px] md:m-auto h-32 md:h-28 flex items-center">
                    <Image
                      loader={myLoader}
                      className="w-24"
                      alt="Bursement Logos"
                      src={"/images/oracle.png"}
                      width="200px"
                      height="100px"
                    />
                  </div>
                </div>

                <div className="h-[83px] w-1/2 md:w-[166px] md:h-[89px] md:ml-[0px] md:mr-[16px] mt-4 mb-12 md:mb-0 md:mt-[30px]">
                  <div className="px-8 py-4 bg-white shadow-sm shadow-gray-300 w-full rounded-2xl max-w-[155px] md:m-auto h-32 md:h-28 flex items-center">
                    <Image
                      loader={myLoader}
                      className="w-24"
                      alt="Bursement Logos"
                      src={"/images/slack.png"}
                      width="350px"
                      height="90px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
