import React from "react";
import Head from 'next/head';
import HubspotForm from "react-hubspot-form";
import NavBar2 from "../components/NavBar2";

const ContactForm = () => {
  return (
    <>
      <Head>
        <title>Bursement - Contact US</title>
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

      <div className="pt-[20px] bg-light-blue">
        <NavBar2 />
        <div className="mt-[100px] md:px-[400px] px-[15px]">
          <HubspotForm
            region="na1"
            portalId="21718124"
            formId="cdf42a4b-405c-4c11-a796-c55de11d642e"
            onSubmit={() => console.log("Submit!")}
            onReady={(form) => console.log("Form ready!")}
            loading={<div>Loading...</div>}
          />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
