import React, { useContext } from "react";
import Head from "next/head";
import styles from "../styles/NewExpences.module.css";
import BillsForm from "../components/BillsForm";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import BillsHeader from "../components/BillsHeader";

const NewBills = () => {
  const router = useRouter();
  const { bills } = useContext(AuthContext);
  const [newBills, setNewBills] = bills;

  const handleVendorName = (event) => {
    newBills.vendorName = event.target.value;
  };

  const handleVendorContact = (event) => {
    newBills.vendorContact = event.target.value;
  };

  const handleInvoice = (event) => {
    newBills.invoice = event.target.value;
  };

  const handleInvoiceDate = (event) => {
    newBills.invoiceDate = event.target.value;
  };

  const handleBillDueDate = (event) => {
    newBills.billDueDate = event.target.value;
  };

  const handleMemo = (event) => {
    newBills.memo = event.target.value;
  };

  //   const handleFormSubmit = (e) => {
  //     e.preventDefault();
  //   };

  return (
    <>
      <Head>
        <title>Bursement - New Bills</title>
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

      <div className={styles.newexpencesparent}>
        <div className="md:mx-14 mx-2 pt-3 pb-[50px]">
          <BillsHeader></BillsHeader>
          <h1
            className={`text-4xl	md:mx-60 mx-5 my-12 ${styles.newExpencesHeader}`}
          >
            New Bills
          </h1>
          <BillsForm
            handleVendorName={handleVendorName}
            handleVendorContact={handleVendorContact}
            handleInvoice={handleInvoice}
            handleInvoiceDate={handleInvoiceDate}
            handleBillDueDate={handleBillDueDate}
            handleMemo={handleMemo}
          ></BillsForm>
        </div>
      </div>
    </>
  );
};

export default NewBills;
