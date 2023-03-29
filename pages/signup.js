import ArrowRightIcon from "@heroicons/react/outline/ArrowRightIcon";
import ArrowLeftIcon from "@heroicons/react/outline/ArrowLeftIcon";
import GoogleLogin from "react-google-login";
import { useState, useContext } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";

// regular expression for email and password validation
const regexEmailValidation =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPasswordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// image loader
const myLoader = ({ src, width }) => {
  return `${src}?w=${width}`;
};

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [userInfo, setUserInfo] = useState({});

  // user context
  const { auth } = useContext(AuthContext);
  const [user, setUser] = auth;

  // Google Login
  const onLoginSuccess = (res) => {
    // console.log(res.wc.id_token);
    const user = {};
    user.name = res.profileObj.name;
    user.email = res.profileObj.email;
    user.img = res.profileObj.imageUrl;
    fetch("http://localhost:4000/api/v1/users/google", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("user", data.data.token);
        setUser(data.data.user);
        router.push("/");
      });
  };

  // Email input validation
  const handleEmail = (e) => {
    if (regexEmailValidation.test(e.target.value) || e.target.value === "") {
      setEmail(e.target.value);
      setErrorEmail("");
    } else {
      setErrorEmail("Enter a valid email address ");
    }
  };

  // Password input validation
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (regexPasswordValidation.test(e.target.value) || e.target.value === "") {
      setPassword(e.target.value);
      setErrorPassword("");
    } else {
      setErrorPassword(
        "Minimum eight characters, at least one letter and one number"
      );
    }
  };
  // Confirm Password Validation
  const handlePasswordtwo = (e) => {
    setErrorConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setErrorConfirmPassword("Password does not match");
    } else if (e.target.value === "") {
      setErrorConfirmPassword("");
    } else {
      setConfirmPassword(e.target.value);
      setErrorConfirmPassword("");
    }
  };

  // Email Password Registration
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...userInfo };
    newUser[field] = value;
    setUserInfo(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userInfo.email = email;
    userInfo.password = password;
    userInfo.img =
      "https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png";
    if (
      errorEmail === "" &&
      errorPassword === "" &&
      errorConfirmPassword === ""
    ) {
      fetch("http://localhost:4000/api/v1/users/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "user successfully created") {
            localStorage.setItem("user", data.data.token);
            setUser(data.data.user);
            setAuthError("");
            router.push("/");
          } else if (data.status === "Failed") {
            setAuthError(data.message);
          }
        });
      // console.log(userInfo);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
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
            <div className="bg-light-blue md:w-2/3 px-[30px] md:py-[70px] py-[22px]">
              <div className="flex items-center justify-center h-full w-full">
                <div className="md:w-[574px] w-full space-y-4">
                  <div className="flex">
                    <ArrowLeftIcon className="w-7 mr-3" />
                    <h1 className="font-medium md:text-[32px] text-[20px] Dm">
                      {" "}
                      Sign Up{" "}
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
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-col space-y-2 mt-3 Dm">
                        <label className="md:text-[16px] text-[13px] font-medium text-[#2C3242]">
                          Full Name *
                        </label>
                        <input
                          className="md:h-[55px] md:w-[498px] h-[40px] w-full rounded-[8px] border-2 border-gray-300 outline-none px-3 focus:border-[#605BFF]"
                          type="text"
                          name="name"
                          placeholder=""
                          onBlur={handleBlur}
                          required
                        />
                      </div>
                      <div className="flex flex-col space-y-2 mt-3">
                        <label className="md:text-[16px] text-[13px] Dm font-medium text-[#2C3242]">
                          Email *
                        </label>
                        <input
                          className="md:h-[55px] md:w-[498px] h-[40px] w-full rounded-[8px] border-2 border-gray-300 outline-none px-3 focus:border-[#605BFF]"
                          type="email"
                          name="email"
                          placeholder=""
                          onChange={handleEmail}
                          required
                        />
                        <span className="text-red-500">{errorEmail}</span>
                      </div>
                      <div className="flex flex-col space-y-2 mt-3">
                        <label className="md:text-[16px] text-[13px] Dm font-medium text-[#2C3242]">
                          Password *
                        </label>
                        <input
                          className="md:h-[55px] md:w-[498px] h-[40px] w-full rounded-[8px] border-2 border-gray-300 outline-none px-3 focus:border-[#605BFF]"
                          type="password"
                          name="password"
                          placeholder=""
                          onChange={handlePassword}
                          required
                        />
                        <span className="text-red-500">{errorPassword}</span>
                      </div>
                      <div className="flex flex-col space-y-2 mt-3">
                        <label className="md:text-[16px] text-[13px] Dm font-medium text-[#2C3242]">
                          Confirm Password *
                        </label>
                        <input
                          className="md:h-[55px] md:w-[498px] h-[40px] w-full rounded-[8px] border-2 border-gray-300 outline-none px-3 focus:border-[#605BFF]"
                          type="password"
                          name="confirmPassword"
                          placeholder=""
                          onChange={handlePasswordtwo}
                          required
                        />
                        <span className="text-red-500">
                          {errorConfirmPassword}
                        </span>
                      </div>
                      <button
                        type="submit"
                        className="flex items-center justify-center md:w-[498px] w-full px-[32px] md:py-[16px] py-[8px] space-x-2 rounded-lg bg-[#605BFF] hover:brightness-125 filter mt-4"
                      >
                        <span className="text-white md:text-[18px] text-[13px] Dm">
                          {" "}
                          Continue{" "}
                        </span>
                        <ArrowRightIcon className="w-5 text-white" />
                      </button>
                    </form>
                    <div className="text-left mt-2">
                      <p className="text-[#2C3242] md:text-[18px] text-[13px] Dm">
                        Have an account?{" "}
                        <Link href="/signin">
                          <a>
                            <span className="underline Dm text-[#605BFF] md:text-[18px] text-[13px]">
                              Sign in
                            </span>
                          </a>
                        </Link>
                      </p>
                    </div>
                    <div className=" my-6 text-center Dm">
                      <p className="text-gray-500 md:text-[18px] text-[13px]">
                        or sign in with
                      </p>
                      <GoogleLogin
                        clientId="420639272862-dlp7fedf0gs1dr52496h7au7rjn3imqe.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={onLoginSuccess}
                        // onFailure={onFailedSuccess}
                        cookiePolicy={"single_host_origin"}
                        className="mt-5"
                      >
                        Sign In With Google
                      </GoogleLogin>
                      {/* <button
                      onClick={onLoginSuccess}
                      className="Dm px-8 py-4 mt-6 font-medium text-[#4D49FF] border-2 border-[#4D49FF] hover:bg-[#4D49FF] hover:text-white text-desktop-paragraph group filter hover:brightness-125 rounded-full"
                    >
                      Sign In With Google
                    </button> */}
                    </div>
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
      <Link href="/signin">
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
export default SignUp;
