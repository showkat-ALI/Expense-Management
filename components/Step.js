import Head from "next/head";

const StepTile = ({ icon, text, description }) => (
  <div className="bg-white font-kn-sans rounded-3xl h-[280px] md:w-[362px] w-full py-[36px] px-[31px] shadow-sm shadow-gray-300 transition-all duration-300">
    <div>
      {/* <img className="w-12 h-12 " src={icon} alt={text} /> */}
      <div className="flex justify-center items-center w-12 h-12 bg-[#4D49FF] rounded-full text-white text-lg">
        {icon}
      </div>
      <div className="mb-0 mt-6">
        <span className="text-[20px] font-bold text-[#2C3242] Dm">{text}</span>
      </div>
      <p className="mt-3 font-normal text-[18px] text-[#2C3242] Dm">
        {description}
      </p>
    </div>
  </div>
);

const Step = () => (
  <>
    {/* <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Head> */}
    <section className="bg-light-blue">
      <div className="py-12 px-6 md:px-0 md:py-[90px] max-w-default m-auto">
        <div className="text-left pl-2">
          <h2 className="mt-[18px] font-medium text-[42px] Kn md:text-desktop-h2 text-slate-body">
            Pocket more money <br /> and time.
          </h2>
          <p className="xl mt-2 text-[#2C3242] text-[21px] Dm">
            Bursement replaces manual expensing. <br /> We save you time and
            money on expenses, invoices, reimbursements and so much more.
          </p>
        </div>
        <div className="mt-[60px] space-y-[30px] md:space-y-0 md:space-x-[30px] md:flex">
          <StepTile
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            }
            text={"All of your expenses, covered"}
            description={
              "Issue Bursement smart company cards with individual spending limits."
            }
          />
          <StepTile
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            }
            text={"Easy as Pie"}
            description={
              "Get started in minutes with corporate cards and simple software that helps you work better."
            }
          />
          <StepTile
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            }
            text={"Save More"}
            description={
              "Cut out wasteful spending and save money with unlimited cashback and insights that maximize savings."
            }
          />
        </div>
      </div>
    </section>
  </>
);

export default Step;
