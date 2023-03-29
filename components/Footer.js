import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CookieBanner = ({ isSetCookie }) => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <div>
      <div className="flex items-center px-4 py-3 rounded-full space-x-7 md:min-w-[460px] bg-[#52585E] md:ml-20 shadow-md shadow-gray-400">
        <Image
          loader={myLoader}
          className="md:w-7 w-10"
          src="/images/Cookie.png"
          alt="Bursement Cookie"
          height={25}
          width={25}
        />
        <p className="text-[14px] font-normal text-[#fff] font-dm-sans">
          By using our website you agree to our <u>cookie</u> policy.
        </p>
        <button className="text-white" onClick={() => isSetCookie(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isCookie, isSetCookie] = useState(true);

  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <footer className="bg-light-blue Kn">
      <div className="max-w-default py-12 md:py-[90px] mx-6 md:m-auto">
        <div className="md:text-left text-center">
          <div className="md:flex text-slate-headline">
            <div className="md:w-3/4 w-full">
              <div className="md:my-0">
                <div className="flex md:justify-start justify-center">
                  <Link href="/home">
                    <a className="flex">
                      {/* <Image
                        loader={myLoader}
                        className="mr-4 w-[18.26px] h-[24.64px]"
                        src={"/images/logo.png"}
                        alt="Bursement Logo"
                        width="18.26px"
                        height="24.64px"
                      />
                      <span className="ml-4 -mb-1.5 self-center text-2xl font-normal whitespace-nowrap dark:text-white">
                        Bursement
                      </span> */}
                      <Image
                        className="mr-4 w-[18.26px] h-[24.64px]"
                        loader={myLoader}
                        src="/images/Bursement-Logo.png"
                        alt="Bursement Logo"
                        width="161.68px"
                        height="37.26px"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-3/4 w-full mt-[42px] md:mt-0">
              <div>
                <p className="text-[16px] font-medium uppercase">Product</p>
                <ul className="mt-6 space-y-4 text-[#7E8597]">
                  <Link href="/home">
                    <a>
                      <li className="mt-4 text-[14px] font-normal Kn">Home</li>
                    </a>
                  </Link>
                  <Link href="/pricing">
                    <a>
                      <li className="mt-4 text-[14px] font-normal Kn">
                        Pricing
                      </li>
                    </a>
                  </Link>
                  <Link href="/whyBursement">
                    <a>
                      <li className="mt-4 text-[14px] font-normal Kn">
                        Why Bursement?
                      </li>
                    </a>
                  </Link>
                  <Link href="https://resources.bursement.com">
                    <a>
                      <li className="mt-4 text-[14px] font-normal Kn">
                        Resources
                      </li>
                    </a>
                  </Link>
                  <Link href="/support">
                    <a>
                      <li className="mt-4 text-[14px] font-normal Kn">
                        Support
                      </li>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="md:w-4/4 w-full mt-[42px] md:mt-0">
              <div>
                <p className="text-[16px] font-medium uppercase">Company</p>
                <ul className="mt-6 space-y-4 text-[#7E8597]">
                  <Link href="/privacy">
                    <a>
                      <li className="mt-4 text-[14px] font-normal Kn">
                        Privacy
                      </li>
                    </a>
                  </Link>
                  <Link href="/terms">
                    <a>
                      <li className="mt-4 text-[14px] font-normal Kn">Terms</li>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 mt-[60px] md:space-x-6 md:flex md:space-y-0">
          <div className="flex items-center md:justify-start justify-center space-x-6 text-[#7E8597]">
            <p className="text-[13px]">© 2022 Bursement</p>
            <p className="text-[13px]">Terms</p>
            <p className="text-[13px]">Privacy</p>
          </div>
          {isCookie && <CookieBanner isSetCookie={isSetCookie} />}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
