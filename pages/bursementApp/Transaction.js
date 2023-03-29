import React from "react";
import Head from "next/head";
import BursementAppMenu from "../../BursementAppLayout/BursementAppMenu";

const Transaction = () => {
  return (
    <>
      <Head>
        <title>Bursement App - Transaction</title>
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
        <div>
          <h1>Transaction Card</h1>
        </div>
      </BursementAppMenu>
    </>
  );
};

export default Transaction;
