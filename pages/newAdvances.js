import React, { useEffect, useContext } from "react";
import Head from "next/head";
import AdvancesForm from "../components/AdvancesForm";
import styles from "../styles/newAdvances.module.css";
import { AuthContext } from "../context/AuthContext";
import AdvancesHeader from "../components/AdvancesHeader";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { useRouter } from "next/router";

const NewAdvances = () => {
  const router = useRouter();
  const { advances } = useContext(AuthContext);
  const [advance, setAdvance] = advances;

  const handleVendorName = (event) => {
    advance.vendorName = event.target.value;
  };

  const handleInvoice = (event) => {
    advance.invoice = event.target.value;
  };

  const handleInvoiceDate = (event) => {
    advance.invoiceDate = event.target.value;
  };

  const handleBillDueDate = (event) => {
    advance.billDueDate = event.target.value;
  };

  const handleVendoerAccount = (event) => {
    advance.vendorBankAccount = event.target.value;
  };

  const handlePaymentDate = (event) => {
    advance.paymentScheduled = event.target.value;
  };

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      router.push('/signin');
    }
  }, [router])

  return (
    <>
      <Head>
        <title>Bursement/New Advance</title>
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

      <main className={styles.newexpencesparent}>
        <section className="mx-6 pt-3 pb-[50px]">
          <AdvancesHeader></AdvancesHeader>
          <h1
            className={`md:text-4xl text-[28px]	md:mx-60 md:my-12 mt-12 mb-3 ${styles.newExpencesHeader} Kn`}
          >
            New Advance
          </h1>
          <AdvancesForm
            handleVendorName={handleVendorName}
            handleInvoice={handleInvoice}
            handleInvoiceDate={handleInvoiceDate}
            handleBillDueDate={handleBillDueDate}
            handleVendoerAccount={handleVendoerAccount}
            handlePaymentDate={handlePaymentDate}
          ></AdvancesForm>
        </section>
      </main>
    </>
  );
};

export default NewAdvances;
