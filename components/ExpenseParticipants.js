import React, { useContext, useState } from "react";
import Image from "next/image";
import { AuthContext } from "../context/AuthContext";
import swal from "sweetalert";

const ExpenseParticipants = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  const { expenses } = useContext(AuthContext);
  const [expense, setExpense] = expenses;
  const [email, setEmail] = useState("");
  const [oneOff, setOneOff] = useState(false);
  const [participant, setParticipant] = useState({
    participantsName: "",
    participantsEmail: "",
    isOneOff: false,
  });

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(expense);
  };

  const handleInvite = (e) => {
    e.preventDefault();
    participant.participantsEmail = email;
    participant.isOneOff = oneOff;
    expense.participants.push(participant);
    swal("Participants Invited Added", "", "success");
    setParticipant({
      participantsName: "",
      participantsEmail: "",
      isOneOff: false,
    });
    // console.log(expense);
    e.target.reset();
  };

  return (
    <div className="pb-[60px]">
      <h1 className="md:text-[32px] text-[20px] text-[#0D172C] Kn">
        Add Participants
      </h1>
      <div className="md:flex items-center my-[42px]">
        <div className="md:flex items-center hidden">
          <Image
            loader={myLoader}
            src={"/images/participantsimg.png"}
            alt="participantImage"
            width={50}
            height={50}
          />
        </div>
        <div className="md:ml-[16px]">
          <h3 className="md:text-[21px] text-[16px] text-[#0D172C] Kn">Name</h3>
          <p className="md:text-[16px] text-[13px] text-[#7E8597] Dm">
            emailaddress@gamil.com
          </p>
        </div>
      </div>

      <div className="md:flex items-center my-[42px]">
        <div className="md:flex items-center hidden">
          <Image
            loader={myLoader}
            src={"/images/participantsimg.png"}
            alt="participantImage"
            width={50}
            height={50}
          />
        </div>
        <div className="md:ml-[16px]">
          <h3 className="md:text-[21px] text-[16px] text-[#0D172C] Kn">Name</h3>
          <p className="md:text-[16px] text-[13px] text-[#7E8597] Dm">
            emailaddress@gamil.com
          </p>
        </div>
      </div>

      <div className="mt-[40px] mb-[24px]">
        <form onSubmit={handleInvite}>
          <input
            className="md:h-[55px] md:w-[339px] h-[40px] w-full rounded-[8px] border-2 border-gray-300 outline-none px-3 focus:border-[#605BFF]"
            type="email"
            name="email"
            onChange={handleEmail}
            placeholder="Participant Email..."
            required
          />
          <button
            type="submit"
            className={`bg-[#605BFF] text-white md:py-[16px] py-[8px] md:px-[32px] px-[25px] rounded-[8px] Dm md:ml-[18px] md:mt-0 mt-3`}
          >
            Invite
          </button>
        </form>
      </div>

      <div className="flex items-center">
        <input
          id="check"
          type="checkbox"
          className="w-5 h-5 text-[#605BFF] bg-gray-100 rounded border-gray-300 focus:ring-[#605BFF] dark:focus:ring-[#605BFF] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onClick={() => setOneOff(!oneOff)}
        />
        <label htmlFor="check" className="Dm ml-2 md:text-[16px] text-[13px]">
          One-off participant ?
        </label>
      </div>
    </div>
  );
};

export default ExpenseParticipants;
