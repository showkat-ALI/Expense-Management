import Head from "next/head";
import React from "react";
import PricingHero from "../components/PricingHero";
import PricingPlan from "../components/PricingPlan";
import Footer from "../components/Footer";

const pricing = () => {
  return (
    <div>
     <Head>
        <title>Bursement - Pricing</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Bursement the only company card and spend management platform designed to help you be frugal" />
        <link rel="icon" href="https://i.ibb.co/hmxS8dZ/Vector-11-Stroke.png" />
      </Head>

      <PricingHero />
      <PricingPlan />
      <Footer />
    </div>
  );
};

export default pricing;
