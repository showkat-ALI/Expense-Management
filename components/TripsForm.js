import { useState } from "react";
import styles from "../styles/Newtrip.module.css";
import Flight from "./Flight";
import TripsParticipants from "./TripsParticipants";
import TripsPayments from "./TripsPayments";
import TripsReviewers from "./TripsReviewers";
import TripsRules from "./TripsRules";
import Image from "next/image";

const TripsForm = ({ traveltype, setTraveltype, triptype, setTriptype }) => {
  const [newFlight, setnewFlight] = useState([
    { departfrom: "", departfrom: "" },
  ]);
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  const handleDescription = (index, event) => {
    const values = [...newFlight];
    // values[index][event.target.name] = event.target.value;
    // setnewFlight(values);
    // console.log(newFlight);
  };
  const handleDepartDatefirst = (event, index) => {};
  const handleDepartDatesecond = (event, index) => {};
  const handleArriveDate = (event, index) => {};
  const handleArriveTime = (event, index) => {};
  // const handleDescription=(event,index)=>{

  // }
  const handleAddNewFlight = () => {
    setnewFlight([...newFlight, { departfrom: "", departfrom: "" }]);
  };
  const handleRemoveFlight = (index) => {
    const values = [...newFlight];
    values.splice(index, 1);
    setnewFlight(values);
  };
  const [settingsComponent, setSettingsComponent] = useState(
    <TripsParticipants />
  );
  return (
    <>
      <div
        className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
        id="large-modal"
      >
        <div className="relative px-4 w-full max-w-5xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal body --> */}
            <div className="md:px-8 px-4 py-10 space-y-6">
              <div className="flex">
                <div className="w-1/4">
                  <div className="flex items-center mb-[50px]">
                    <div className="flex md:justify-center items-center h-10 w-10 rounded-full md:bg-[#4D49FF26] mr-[16px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:h-6 md:w-6 h-4 w-4 text-[#4D49FF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                    </div>
                    <button
                      onClick={() =>
                        setSettingsComponent(<TripsParticipants />)
                      }
                    >
                      <a>
                        <span className="Kn md:text-[21px] text-[14px]">
                          Participants
                        </span>
                      </a>
                    </button>
                  </div>

                  <div className="flex items-center mb-[50px]">
                    <div className="flex md:justify-center items-center h-10 w-10 rounded-full md:bg-[#4D49FF26] mr-[16px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:h-6 md:w-6 h-4 w-4 text-[#4D49FF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <button
                      onClick={() => setSettingsComponent(<TripsReviewers />)}
                    >
                      <a>
                        <span className="Kn md:text-[21px] text-[14px]">
                          Reviewers
                        </span>
                      </a>
                    </button>
                  </div>

                  <div className="flex items-center mb-[50px]">
                    <div className="flex md:justify-center items-center h-10 w-10 rounded-full md:bg-[#4D49FF26] md:mr-[16px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:h-6 md:w-6 h-4 w-4 text-[#4D49FF]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                      </svg>
                    </div>
                    <button
                      onClick={() => setSettingsComponent(<TripsRules />)}
                    >
                      <a>
                        <span className="Kn md:text-[21px] text-[14px]">
                          Rules
                        </span>
                      </a>
                    </button>
                  </div>

                  <div className="flex items-center mb-[50px]">
                    <div className="flex justify-center items-center md:h-10 md:w-10 h-6 w-6 rounded-full md:bg-[#4D49FF26] mr-[16px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:h-6 md:w-6 h-4 w-4 text-[#4D49FF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                    </div>
                    <button
                      onClick={() => setSettingsComponent(<TripsPayments />)}
                    >
                      <a>
                        <span className="Kn md:text-[21px] text-[14px]">
                          Payment
                        </span>
                      </a>
                    </button>
                  </div>
                </div>
                <div className="w-3/4 md:pl-[80px] pl-[60px]">
                  {settingsComponent}
                </div>
              </div>
              <div className="text-right">
                <button type="button" data-modal-toggle="large-modal">
                  <div
                    className={`flex justify-between items-center ${styles.settingrecipt}`}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <h1 className="md:text-[18px] text-[16px] font-medium Dm">
                      Settings
                    </h1>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="w-full h-full bg-[#FFFFFF] md:p-[24px] p-[12px] rounded-[24px] ">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="Dm md:text-left text-center">Travel Type</h1>
          <div
            className={`md:w-[225px] md:mt-0 mt-3 md:h-[39px] w-[225px] h-[full] rounded-[110px] flex justify-between px-[4px] py-[3px] ${styles.bursementDefaultGrayBG} md:mx-0 mx-auto`}
          >
            <div
              onClick={() => setTraveltype("domestic")}
              className={
                traveltype === "domestic"
                  ? "bg-white w-[110px] h-[32px] px-[32px] py-[8px] rounded-[70px] flex justify-center items-center"
                  : " flex justify-center items-center w-[110px] h-[32px] px-[32px] py-[8px] cursor-pointer"
              }
            >
              <p>Domestic</p>
            </div>
            <div
              onClick={() => setTraveltype("international")}
              className={
                traveltype === "international"
                  ? "bg-white w-[110px] h-[32px] px-[32px] py-[8px] rounded-[70px] flex justify-center items-center"
                  : " flex justify-center items-center w-[110px] h-[32px] px-[32px] py-[8px] cursor-pointer"
              }
            >
              <p>International</p>
            </div>
          </div>
        </div>
        <hr className="md:my-12 my-6" />
        <div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <Image
                loader={myLoader}
                height={45}
                width={45}
                src="/images/flight.svg"
                className="mr-4"
                alt=""
              />
              <h1 className="text-lg Kn ml-2">Flight</h1>
            </div>
            <div>
              <Image
                loader={myLoader}
                height={20}
                width={20}
                src="/images/recipt-cancel.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex  justify-center items-center md:my-12 my-6">
            <div
              className={`md:w-[607px] w-[270px] md:h-[45px] h-[full] rounded-[10px] md:rounded-[110px] flex md:flex-row flex-col justify-around items-center md:items-baseline p-2 md:justify-between   md:px-[4px]  md:py-[3px] ${styles.bursementDefaultGrayBG}`}
            >
              <div
                onClick={() => setTriptype("oneWay")}
                className={
                  triptype === "oneWay"
                    ? "bg-white w-[199px] h-[32x] px-[32px] py-[8px] rounded-[70px] flex justify-center items-center"
                    : " flex justify-center items-center w-[199px] h-[32x] px-[32px] py-[8px] cursor-pointer"
                }
              >
                <p className="Dm">One-way trip</p>
              </div>
              <div
                onClick={() => setTriptype("round")}
                className={
                  triptype === "round"
                    ? "bg-white w-[199px] h-[32x] px-[32px] py-[8px] rounded-[70px] flex justify-center items-center"
                    : " flex justify-center items-center w-[199px] h-[32x] px-[32px] py-[8px] cursor-pointer"
                }
              >
                <p className="Dm">Round trip</p>
              </div>
              <div
                onClick={() => setTriptype("multi")}
                className={
                  triptype === "multi"
                    ? "bg-white w-[199px] h-[32x] px-[32px] py-[8px] rounded-[70px] flex justify-center items-center"
                    : " flex justify-center items-center w-[199px] h-[32x] px-[32px] py-[8px] cursor-pointer"
                }
              >
                <p className="Dm">Multi-city</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {newFlight.map((flight, index) => (
            <div key={index}>
              <Flight
                handleDepartDatefirst={handleDepartDatefirst}
                handleDepartDatesecond={handleDepartDatesecond}
                handleArriveDate={handleArriveDate}
                handleArriveTime={handleArriveTime}
                handleDescription={handleDescription}
                flight={flight}
                handleRemoveFlight={handleRemoveFlight}
                index={index}
              ></Flight>
            </div>
          ))}
        </div>
        <div
          onClick={() => handleAddNewFlight()}
          className={`my-4 flex justify-around items-center ${styles.bursementDefaultGrayBG} md:w-[175px] w-[140px] h-[35px] md:h-[43px] rounded-[60px] cursor-pointer`}
        >
          <div>
            <Image
              loader={myLoader}
              height={30}
              width={30}
              src="/images/airplane.svg"
              alt=""
            />
          </div>
          <div className="Dm">
            <p className="text-xs md:text-base">Add more flight</p>
          </div>
        </div>
        <hr className="md:my-6 my-3" />
        <div className="flex justify-between items-center">
          <div className="md:w-[240px]  md:h-[43px] flex justify-center  bg-[#4D49FF26] rounded-[60px]">
            <div className="flex justify-between items-center text-[#4D49FF] p-1 md:p-0 ">
              <div>
                <Image
                  loader={myLoader}
                  height={20}
                  width={20}
                  src="/images/addIcon.png"
                  alt=""
                  className="w-1/2 md:w-full"
                />
              </div>
              <p className="md:mx-5  md:text-base mx-2 text-xs">
                Add more itenerary
              </p>
              <div className="mt-2">
                <Image
                  loader={myLoader}
                  className="w-1/2 md:w-full"
                  src="/images/addVarity.svg"
                  alt=""
                  height={20}
                  width={20}
                />
              </div>
            </div>
          </div>
          <button type="button" data-modal-toggle="large-modal">
            <div
              className={`flex justify-between items-center ${styles.settingrecipt} bg-[#ECECF2] py-[5px] px-[15px] rounded-[50px]`}
            >
              <div className="md:w-4 md:h-4 w-4 h-4 mr-2 md:mr-2">
                <Image
                  loader={myLoader}
                  src="/images/settingIcon.png"
                  alt=""
                  height={30}
                  width={30}
                />
              </div>
              <h1 className="mt-1 md:text-[18px] text-[16px] font-medium Dm">
                Settings
              </h1>
            </div>
          </button>
        </div>
      </main>
    </>
  );
};

export default TripsForm;
