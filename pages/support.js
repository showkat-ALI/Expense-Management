import BodySectionTwoSupportPage from "../components/BodySectionTwoSupportPage";
import BodySectionThreeSupportPage from "../components/BodySectionThreeSupportPage";
import BodySectionFourSupportPage from "../components/BodySectionFourSupportPage";
import Footer from "../components/Footer";
import BodySectionFiveSupportPage from "../components/BodySectionFiveSupportPage";
import NavBar2 from "../components/NavBar2";
import Head from "next/head";

const support = () => {
  return (
    <>
      <Head>
        <title>Bursement - Support</title>
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

      <div className="bg-light-blue py-[20px]">
        {/* <SupportPageHeader></SupportPageHeader> */}
        <NavBar2></NavBar2>
        <BodySectionTwoSupportPage></BodySectionTwoSupportPage>
        <BodySectionThreeSupportPage></BodySectionThreeSupportPage>
        <BodySectionFiveSupportPage></BodySectionFiveSupportPage>
        <BodySectionFourSupportPage></BodySectionFourSupportPage>
        <Footer></Footer>
      </div>
    </>
  );
};

export default support;
