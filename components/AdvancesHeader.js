// import styles from "../styles/BursementHeader.module.css";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import swal from "sweetalert";

const AdvancesHeader = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  const { advances, auth } = useContext(AuthContext);
  const [advance] = advances;
  const [user] = auth;

  const image = user.img;
  console.log(image);

  // advance handle approved button
  const handleApprovedSubmit = () => {
    advance.creatorId = user?.userId ? user?.userId : user?._id;
    fetch("http://localhost:4000/api/v1/bills", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(advance),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "Bills successfully created") {
          swal("Advance & Bills submit successful", "", "success");
        } else if (data.status === "Failed") {
          swal(data.message, "", "error");
        }
      });
  };

  return (
    <div className="flex md:flex-row flex-col justify-between items-center md:mx-14">
      <div>
        <Link href="/home">
          <a>
            <Image
              loader={myLoader}
              src="/images/Bursement-Logo.png"
              alt="Bursement-Logo"
              width="161.68px"
              height="37.26px"
            />
          </a>
        </Link>
      </div>
      <div className="flex">
        <button
          className={`border-2 border-[#4D49FF] md:py-[15px] md:px-[30px] px-[20px] rounded-[80px] md:text-[16px] text-[12px] mr-4 Kn`}
        >
          Draft Autosaved
        </button>
        <button
          onClick={handleApprovedSubmit}
          className={`bg-[#4D49FF] text-white md:py-[15px] md:px-[30px] px-[20px] rounded-[80px] md:text-[16px] text-[12px] mr-4 Kn`}
        >
          Submit for approval
        </button>
        <div className="rounded-[50%]">
          <Image
            loader={myLoader}
            className="h-3/4 w-3/4 rounded-[50%]"
            src={`${user.img}`}
            alt=""
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancesHeader;
