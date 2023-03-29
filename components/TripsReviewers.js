import React from "react";
import Image from "next/image";

const TripsReviewers = () => {
  const handleEmail = (e) => {
    e.preventDefault();
  };
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <div className="pb-[60px]">
      <h1 className="md:text-[32px] text-[20px] text-[#0D172C] Kn">
        Add Reviewers
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
        <form>
          <input
            className="md:h-[55px] md:w-[339px] h-[40px] w-full rounded-[8px] border-2 border-gray-300 outline-none px-3 focus:border-[#605BFF]"
            type="email"
            name="email"
            placeholder="Invite participants..."
            onChange={handleEmail}
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
    </div>
  );
};

export default TripsReviewers;
