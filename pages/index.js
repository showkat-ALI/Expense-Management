import Head from "next/head";
import Hero from "../components/Hero";
import Step from "../components/Step";
import Feature1 from "../components/Feature1";
import Integration from "../components/Integration";
import Feature2 from "../components/Feature2";
import BursementSubscription from "../components/BursementSubscription";
import Footer from "../components/Footer";
import HomeFAQ from "../components/HomeFAQ";
import FinanceStack from "../components/FinanceStack";
import WhyBursementBetter from "../components/WhyBursementBetter";
import CloseBooks from "../components/CloseBooks";
import TransformedExpenses from "../components/TransformedExpenses";

function index() {
  return (
    <div>
      <Head>
        <title>Bursement</title>
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

      <div>
        <Hero />
        <FinanceStack />
        <Step />
        <Feature1 />
        <Integration />
        <CloseBooks />
        <TransformedExpenses />
        <Feature2 />
        <WhyBursementBetter bg={`bg-light-blue`} />
        <BursementSubscription />
        <HomeFAQ />
        <Footer />
      </div>
    </div>
  );
}

export default index;
