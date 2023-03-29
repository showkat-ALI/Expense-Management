import React from "react";
import Head from "next/head";
import BursementAppMenu from "../../BursementAppLayout/BursementAppMenu";

const SmartWallet = () => {
  return (
    <>
      <Head>
        <title>Bursement App - Wallet</title>
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

      <BursementAppMenu>
        <di>
          <h1>Card Smart Wallet</h1>
        </di>
      </BursementAppMenu>
    </>
  );
};

export default SmartWallet;
