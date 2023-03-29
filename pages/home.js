import Head from "next/head";
import React from "react";
import BursementSubscription from "../components/BursementSubscription";
import CloseBooks from "../components/CloseBooks";
import Feature1 from "../components/Feature1";
import Feature2 from "../components/Feature2";
import FinanceStack from "../components/FinanceStack";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeFAQ from "../components/HomeFAQ";
import Integration from "../components/Integration";
import Step from "../components/Step";
import TransformedExpenses from "../components/TransformedExpenses";
import WhyBursementBetter from "../components/WhyBursementBetter";

const home = () => {
  return (
    <div>
      <Head>
        <title>Bursement - Home</title>
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
  );
};

export default home;
