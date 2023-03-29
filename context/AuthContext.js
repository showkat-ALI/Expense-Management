import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // console.log("Hello ",user);
  const [isRequireDescription, setIsRequireDescription] = useState(false);

  // expense state
  const [expense, setExpense] = useState({
    vendorName: "",
    expenseTime: "",
    items: [{ itemAmount: "", itemCategory: "", itemDescription: "" }],
    participants: [],
    reviewers: [],
    rules: [
      {
        amountLimit: "",
        occurrenceLimit: "",
        requireDescription: false,
      },
    ],
    payment: [{ bursementWallet: "", bankAccount: "" }],
  });

  // Advance and Bills state
  const [advance, setAdvance] = useState({
    invoice: "",
    invoiceDate: "",
    billDueDate: "",
    vendorName: "",
    vendorBankAccount: "",
    paymentScheduled: "",
    items: [{ itemAmount: "", itemCategory: "", itemDescription: "" }],
    participants: [],
    reviewers: [],
    rules: [
      {
        amountLimit: "",
        occurrenceLimit: "",
        requireDescription: false,
      },
    ],
    payment: [{ bursementWallet: "", bankAccount: "" }],
  });

  // Advances and Bills Updated State
  const [newBills, setNewBills] = useState({
    vendorName: "",
    vendorContact: "",
    invoice: "",
    invoiceDate: "",
    billDueDate: "",
    memo: "",
    items: [
      {
        itemAmount: "",
        itemCategory: "",
        itemDescription: "",
        class: "",
        customer: "",
        status: "",
      },
    ],
    paymentMethod: "",
    paymentSchedule: "",
    receiverAccount: "",
    participants: [],
    reviewers: [],
    rules: [
      {
        amountLimit: "",
        occurrenceLimit: "",
        requireDescription: false,
      },
    ],
    payment: [{ bursementWallet: "", bankAccount: "" }],
  });

  // Bursement App sidebar state
  const [openMenu, setOpenMenu] = useState(true);

  // Bursement People Menu State
  const [openPeople, setOpenPeople] = useState(false);

  let token;
  useEffect(() => {
    setIsLoading(true);
    token = localStorage.getItem("user");
    if (!token) {
      setUser({});
    } else {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      setUser(JSON.parse(window.atob(base64)));
    }
    setIsLoading(false);
  }, [token]);




  // money calculation
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()
  const submit = () => {

    if (!companyName) {
      swal({

        text: "Your Company Name is missing",
        icon: "warning",
      })
      return;
    }
    router.replace(`/company/companyName`)

  }


  const [que1, setQue1] = useState(0)
  const handleChange1 = (que1) => {
    setQue1(que1)
  }
  const [que2, setQue2] = useState(1)
  const handleChange2 = (que2) => {
    setQue2(que2)
  }
  const [que3, setQue3] = useState(5)
  const handleChange3 = (que3) => {
    setQue3(que3)
  }
  const [que4, setQue4] = useState(2000)
  const handleChange4 = (que4) => {
    setQue4(que4)
  }
  const [que5, setQue5] = useState(1)
  const handleChange5 = (que5) => {
    setQue5(que5)
  }

  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const [timeSpentOnExpenseReports, setTimeSpentOnExpenseReports] = useState();
  const [moneySpentOnExpenseReports, setMoneySpentOnExpenseReports] = useState();
  const [moneySpentOnExpenseInvoiceProcessing, setMoneySpentOnExpenseInvoiceProcessing] = useState();

  const [calculationOption, setCalculationOption] = useState('manual');
  const [time, setTime] = useState(91);
  const [cost, setCost] = useState(82)
  const buttonManual = () => {
    setBtn1(true);
    setBtn2(false);
    setBtn3(false);
    setTimeSpentOnExpenseReports(((5 * que1) + (que2 * 91)) * 12);
    setMoneySpentOnExpenseReports(((5 * que1) + (que2 * 82)) * 12);
    setMoneySpentOnExpenseInvoiceProcessing(((5 * que1) + (que2 * 30)) * 12)
    setCalculationOption('manual');
    setTime(91);
    setCost(82)
  }
  const buttonSemiAutomatic = () => {
    setBtn1(false);
    setBtn2(true);
    setBtn3(false);
    setTimeSpentOnExpenseReports(((5 * que1) + (que2 * 62)) * 12);
    setMoneySpentOnExpenseReports(((5 * que1) + (que2 * 52)) * 12);
    setMoneySpentOnExpenseInvoiceProcessing(((5 * que1) + (que2 * 21)) * 12)
    setCalculationOption('Semi-automatic')
    setTime(62);
    setCost(52);
  }
  const automatic = () => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(true);
    setTimeSpentOnExpenseReports(((5 * que1) + (que2 * 34)) * 12);
    setMoneySpentOnExpenseReports(((5 * que1) + (que2 * 32)) * 12);
    setMoneySpentOnExpenseInvoiceProcessing(((5 * que1) + (que2 * 14)) * 12);
    setCalculationOption('automatic');
    setTime(34);
    setCost(32)

  }

  return (
    <AuthContext.Provider
      value={{
        auth: [user, setUser, isLoading],
        expenses: [expense, setExpense],
        advances: [advance, setAdvance],
        bills: [newBills, setNewBills],
        RequireDescription: [isRequireDescription, setIsRequireDescription],
        sideMenu: [openMenu, setOpenMenu],

        //  money calculation
        companyName, setCompanyName, submit,
        que1,
        setQue1,
        handleChange1,
        que2,
        setQue2,
        handleChange2,
        que3,
        setQue3,
        handleChange3,
        que4,
        setQue4,
        handleChange4,
        que5,
        setQue5,
        handleChange5,
        btn1, setBtn1, btn2, setBtn2, btn3, setBtn3,
        timeSpentOnExpenseReports,
        setTimeSpentOnExpenseReports,
        moneySpentOnExpenseReports,
        setMoneySpentOnExpenseReports,
        moneySpentOnExpenseInvoiceProcessing,
        setMoneySpentOnExpenseInvoiceProcessing,
        buttonManual,
        buttonSemiAutomatic,
        automatic,
        calculationOption, setCalculationOption,
        email, setEmail,
        time, setTime,
        cost, setCost,
        peopleMenu: [openPeople, setOpenPeople],
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
