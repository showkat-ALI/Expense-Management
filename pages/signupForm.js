import React from "react";
import Head from 'next/head';
import HubspotForm from "react-hubspot-form";
import NavBar2 from "../components/NavBar2";

const HubForm = () => {
  return (
    <>
      <Head>
        <title>Bursement - Register</title>
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
            formId="95a7dc71-bffb-497d-987d-caa607475986"
            onSubmit={() => console.log("Submit!")}
            onReady={(form) => console.log("Form ready!")}
            loading={<div>Loading...</div>}
          />
        </div>
      </div>
    </>
  );
};

export default HubForm;
