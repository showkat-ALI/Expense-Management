import React, { useState } from "react";
import Activites from "../../components/activites";
import Head from 'next/head';
import BursementAppMenu from "../../BursementAppLayout/BursementAppMenu";

const Activity = () => {
  const [active, setActive] = useState("activites");

  return (
    <>
      <Head>
        <title>Bursement App - Activites</title>
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
        <section
          className={`bg-[#F3F2FF] h-full pr-[52px] md:py-[20px] py-[40px]`}
        >
          <div className="ml-14 py-3">
            <div className="flex mb-[70px]">
              <div className="ml-6">
                {active == "activites" && <Activites />}
              </div>
            </div>
          </div>
        </section>
      </BursementAppMenu>
    </>
  );
};

export default Activity;
