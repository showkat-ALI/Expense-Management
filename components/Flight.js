import styles from "../styles/Newtrip.module.css";
import styles1 from "../styles/Flight.module.css";
import Image from "next/image";
const Flight = ({
  flight,
  index,
  handleDepartDatefirst,
  handleDepartDatesecond,
  handleArriveDate,
  handleArriveTime,
  handleDescription,
  handleRemoveFlight,
}) => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <>
      <main
        className={`${styles.bursementDefaultGrayBG} my-[2rem] py-[24px] px-[16px] rounded-[16px]`}
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="Kn text-xl">{`Flight ${index + 1}`}</p>
          </div>

          <div onClick={() => handleRemoveFlight(index)} className="cursor-pointer">
            <Image
              loader={myLoader}
              src="/images/recipt-cancel.png"
              alt=""
              height="40px"
              width="40px"
            />
          </div>
        </div>
        <br />
        <div className="flex md:flex-row flex-col md:justify-between md:items-center">
          <div>
            <label className="Dm" htmlFor="Departfrom1">
              Depart From
            </label>
            <br />
            <input
              name="departfrom1"
              onBlur={(event) => handleDepartDatefirst(event, index)}
              id="Departfrom1"
              defaultValue={flight.departfrom}
              type="text"
              placeholder="Select City"
              className="md:w-[320px] w-full h-[45px] md:h-[59px] rounded-[8px] border-gray-300 my-4 py-[16px] px-[24px]"
            />
          </div>
          <div>
            <label className="Dm" htmlFor="Departfrom2">
              Depart From
            </label>
            <br />
            <input
              name="departfrom2"
              onBlur={(event) => handleDepartDatesecond(event, index)}
              id="Departfrom2"
              type="text"
              placeholder="Select City"
              className=" md:w-[320px] w-full h-[45px] md:h-[59px] rounded-[8px] border-gray-300 my-4 py-[16px] px-[24px]"
              defaultValue={flight.departfrom}
            />
          </div>
        </div>
        <br />
        <label className="Dm" htmlFor="arrivedateandtime">
          Arrive Date & Time
        </label>
        <br />

        <div className="flex md:flex-row flex-col justify-between">
          <input
            onBlur={(event) => handleArriveDate(event, index)}
            name="arrivedate"
            id="arrivedateandtime"
            type="date"
            placeholder="MM/DD/YYYY"
            className={`${styles1.date} md:w-[320px] w-full h-[45px] md:h-[59px] rounded-[8px] border-gray-300 my-4 py-[16px] px-[24px]`}
          />
          <input
            onBlur={(event) => handleArriveTime(event, index)}
            name="arrivetime"
            id="arrivedateandtime"
            type="time"
            placeholder="HH:MM AM"
            className={`${styles1.time} md:w-[320px] w-full h-[45px] md:h-[59px] rounded-[8px] border-gray-300 my-4  py-[16px] px-[24px]`}
          />
        </div>
        <br />
        <label className="Dm" htmlFor="description">
          Description
        </label>
        <br />

        <input
          onBlur={(event) => handleDescription(event, index)}
          name="description"
          id="description"
          placeholder="Detail your flight..."
          type="text"
          className="md:w-full w-full h-[45px] md:h-[59px] rounded-[8px] border-gray-300 py-[16px] px-[24px] my-4"
        />
      </main>
    </>
  );
};

export default Flight;
