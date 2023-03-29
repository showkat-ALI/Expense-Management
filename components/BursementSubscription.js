import ArrowRightIcon from "@heroicons/react/outline/ArrowRightIcon";
import Link from "next/link";

const ContinueButton = () => (
  <Link href="/signupForm">
    <a>
      <button className="flex items-center justify-center w-full px-6 py-4 space-x-2 rounded-lg bg-[#6964FF] hover:brightness-105 filter mt-6">
        <span className="text-white Dm text-[18px]"> Sign up</span>
        <ArrowRightIcon className="w-5 text-white" />
      </button>
    </a>
  </Link>
);

const BursementSubscription = () => {
  return (
    <>
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head> */}

      <section className="pb-[40px] font-kn-sans bg-light-blue">
        <div className="mx-6 max-w-default md:m-auto">
          <div className="justify-center md:flex">
            <div>
              <div className="p-6 bg-white shadow-sm shadow-gray-300 md:py-[90px] md:px-[340px] rounded-3xl md:min-w-[482px]">
                <h2 className="font-medium text-[40px] text-center text-[#131240] Kn mb-2">
                  Sign up for Bursement
                </h2>
                <h5 className="text-center text-[#2C3242] text-[21px] font-medium Dm">
                  Try Bursement for free
                </h5>
                <ContinueButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BursementSubscription;
