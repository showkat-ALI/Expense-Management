import BursementHeader from "../components/BursementHeader";
import styles from "../styles/Newtrip.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import TripsForm from "../components/TripsForm";
import { useRouter } from 'next/router';

const Newtrip = () => {

  const router = useRouter();

  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  const [traveltype, setTraveltype] = useState("domestic");
  const [triptype, setTriptype] = useState("oneWay");

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      router.push('/signin');
    }
  }, [router])

  return (
    <>
      <Head>
        <title>Bursement - New Trip</title>
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

      <main className={`${styles.tripParent} h-full w-full`}>
        <section className="md:mx-14 md:py-3 py-3 mx-5 ">
          <BursementHeader></BursementHeader>
          <section className="md:mx-60 md:my-12 mt-6">
            <div>
              <div className="flex ">
                <Image
                  loader={myLoader}
                  className="md:mr-4 mr-2"
                  src="/images/dummyImage.svg"
                  alt=""
                  height="40px"
                  width="40px"
                />
                <input
                  placeholder="New trips..."
                  className={`${styles.bursementBackground} md:text-4xl text-xl   text-[#00000040] outline-none ml-2`}
                />
              </div>
              <input
                placeholder="Add description or detail your Bussiness Purpose...."
                className={`${styles.bursementBackground} text-[#00000040] md:mt-8 mt-4 md:w-full    outline-none`}
              />
            </div>
            <div className="md:mt-14 mt-6">
              <TripsForm
                traveltype={traveltype}
                setTraveltype={setTraveltype}
                triptype={triptype}
                setTriptype={setTriptype}
              ></TripsForm>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Newtrip;
