import ArrowRightIcon from "@heroicons/react/outline/ArrowRightIcon";
import { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import swal from 'sweetalert';

// Email regular expression
const regexEmailValidation =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// image loader
const myLoader = ({ src, width }) => {
  return `${src}?w=${width}`;
};

const ForgotPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [authError, setAuthError] = useState("");
  // const [user, setUser] = useContext(AuthContext);

  // Email input validation
  const handleEmail = (e) => {
    if (regexEmailValidation.test(e.target.value) || e.target.value === "") {
      setEmail(e.target.value);
      setErrorEmail("");
    } else {
      setErrorEmail("Enter valid email address ");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorEmail === "") {
      fetch("http://localhost:4000/api/v1/users/forgot-password", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      swal("Check your mail", "", "info");
    }
  };

  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Bursement the only company card and spend management platform designed to help you be frugal"
        />
        <link rel="icon" href="https://i.ibb.co/hmxS8dZ/Vector-11-Stroke.png" />
      </Head>

      <section className="min-h-screen bg-white">
        <div>
          <div className="min-h-screen md:flex">
            <div className="hidden bg-cover md:block md:w-1/3 bg-register-page">
              <Sidebar />
            </div>
            <div className="bg-light-blue md:w-2/3 px-[30px] md:py-[18px] py-[14px]">
              <div className="flex items-center justify-center h-full">
                <div className="md:w-[574px] w-full space-y-8">
                  <div className="flex">
                    {/* <ArrowLeftIcon className="w-7 mr-3" /> */}
                    <h1 className="font-medium md:text-[32px] text-[20px] Dm">
                      {" "}
                      Reset Password{" "}
                    </h1>
                  </div>
                  {authError && (
                    <div
                      className="p-4 text-md text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                      role="alert"
                    >
                      <p>{authError}</p>
                    </div>
                  )}
                  <div className="bg-white md:py-[30px] py-[14px] px-[30px] rounded-lg">
                    <p className="text-center text-[#605BFF] text-[17px]">
                      We will send an email to reset your password. Please enter
                      the email address that you used to create your account at
                      Bursement.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-col space-y-2 mt-3">
                        <input
                          className="md:h-[55px] md:w-[498px] h-[40px] w-full rounded-[8px] border-2 border-gray-300 outline-none px-3 focus:border-[#605BFF]"
                          type="email"
                          name="email"
                          placeholder="Email *"
                          onChange={handleEmail}
                          required
                        />
                        <span className="text-red-500">{errorEmail}</span>
                      </div>
                      <button
                        type="submit"
                        className="flex items-center justify-center md:w-[498px] w-full px-6 py-4 space-x-2 rounded-lg bg-[#605BFF] hover:brightness-125 filter mt-4"
                      >
                        <span className="text-white Dm"> Send Mail </span>
                        <ArrowRightIcon className="w-5 text-white" />
                      </button>
                    </form>
                    <Link href="/signin">
                      <a>
                        <p className="mt-4 text-left text-xl">
                          <span className="text-[#605BFF] Dm">Back</span>
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Sidebar = () => (
  <div className="flex flex-col justify-between h-full p-10 py-[47px] bg-black bg-opacity-50">
    <div>
      <Link href="/">
        <a>
          <div className="flex ml-[23px]">
            <Image
              loader={myLoader}
              className="mr-4 w-[18.26px] h-[24.64px]"
              src={"/images/B.png"}
              alt="Bursement Logo"
              width="18.26px"
              height="24.64px"
            />
            <span className="ml-4 -mb-1.5 self-center text-white text-2xl font-normal whitespace-nowrap dark:text-white Kn">
              Bursement
            </span>
          </div>
        </a>
      </Link>
    </div>
    <div>
      <h1 className="text-[16px] ml-[23px] font-bold text-white uppercase">
        {" "}
        Used by teams worldwide{" "}
      </h1>
      <div className="flex flex-wrap mt-[35px] md:flex-nowrap lg:space-y-0">
        <div className="pl-5 w-full my-6 md:my-0 md:mx-0 filter">
          <Image
            loader={myLoader}
            className="w-8 m-auto"
            alt={"Logo"}
            src={"/images/twitterv.png"}
            height={30}
            width={30}
          />
        </div>

        <div className="w-full my-6 md:my-0 md:mx-0 filter">
          <Image
            loader={myLoader}
            className="w-8 m-auto"
            alt={"Logo"}
            src={"/images/slackv.png"}
            height={30}
            width={30}
          />
        </div>

        <div className="w-full my-6 md:my-0 md:mx-0 filter">
          <Image
            loader={myLoader}
            className="w-8 m-auto"
            alt={"Logo"}
            src={"/images/treev.png"}
            height={30}
            width={30}
          />
        </div>

        <div className="w-full my-6 md:my-0 md:mx-0 filter">
          <Image
            loader={myLoader}
            className="w-8 m-auto"
            alt={"Logo"}
            src={"/images/gitv.png"}
            height={30}
            width={30}
          />
        </div>

        <div className="w-full my-6 md:my-0 md:mx-0 filter">
          <Image
            loader={myLoader}
            className="w-8 m-auto"
            alt={"Logo"}
            src={"/images/boxv.png"}
            height={30}
            width={30}
          />
        </div>
      </div>
    </div>
  </div>
);
export default ForgotPassword;
