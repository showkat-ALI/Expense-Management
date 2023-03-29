import React from "react";
import Head from "next/head";
import BursementHero from "../components/BursementHero";
import BursementHomeForm from "../components/BursementHomeForm";
import BursementProducts from "../components/BursementProducts";
import Footer from "../components/Footer";
import BursementHomeFAQ from "../components/BursementHomeFAQ";
import WhyBursementBetter from "../components/WhyBursementBetter";
import ClientSays from "../components/ClientSays";

const BursementCampaign = () => {
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

      <BursementHero />
      <BursementHomeForm />
      <BursementProducts />
      <BursementHomeFAQ />
      <WhyBursementBetter />
      {/* <ClientSays /> */}
      <Footer />
    </div>
  );
};

export default BursementCampaign;
