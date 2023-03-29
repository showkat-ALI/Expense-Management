import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import BursementHeader from "../components/BursementHeader";
import ExpencesForm from "../components/ExpencesForm";
import styles from "../styles/NewExpences.module.css";
import { AuthContext } from "../context/AuthContext";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { useRouter } from "next/router";

const Newexpences = () => {
  const router = useRouter();
  const { expenses } = useContext(AuthContext);
  const [expense, setExpense] = expenses;

  const handleVendorName = (event) => {
    expense.vendorName = event.target.value;
  };

  const handleExpenseDate = (event) => {
    expense.expenseTime = event.target.value;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      router.push('/signin');
    }
  }, [router])

  return (
    <div>
      <Head>
        <title>Bursement - New Expense</title>
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
          <BursementHeader></BursementHeader>
          <h1 className={`text-4xl	md:mx-60 mx-5 my-12 ${styles.newExpencesHeader}`}>
            New Expense
          </h1>
            <ExpencesForm
              handleFormSubmit={handleFormSubmit}
              handleVendorName={handleVendorName}
              handleExpenseDate={handleExpenseDate}
            ></ExpencesForm>

          {/* <div className="mx-96 my-10 flex justify-center  ">
            <div
              className={`w-40 h-12  flex justify-between items-center ${styles.newExpencesBtn}`}
              onClick={(index) => handleAddForm(index)}
            >
              <Image loader={myLoader} src="/images/addIcon.png" alt="" height={20} width={20} />

              <h1 className={`${styles.addingtext} text-[#4D49FF] Dm mt-1`}>
                New Expenses
              </h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Newexpences;