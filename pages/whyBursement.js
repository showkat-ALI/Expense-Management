import Head from "next/head";
import React from "react";
import WhyBursementHero from "../components/WhyBursementHero";
import Step from "../components/Step";
import Feature5 from "../components/Feature5";
import Feature6 from "../components/Feature6";
import Feature7 from "../components/Feature7";
import Feature8 from "../components/Feature8";
import BursementCompares from "../components/BursementCompares";
import BursementSubscription from "../components/BursementSubscription";
import Footer from "../components/Footer";

const whyBursement = () => {
  return (
    <div>
      <Head>
        <title>Bursement - Why Bursement</title>
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

      <WhyBursementHero />
      <Step />
      <Feature5 />
      <Feature6 />
      <Feature8 />
      <Feature7 />
      <BursementCompares />
      <BursementSubscription />
      <Footer />
    </div>
  );
};

export default whyBursement;
