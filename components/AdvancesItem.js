import Image from "next/image";
import styles from "../styles/AdvancesItem.module.css";

const AdvancesItem = ({
  // newitem,
  index,
  handleCategory,
  handleDescription,
  handleAmount,
  handleRemoveFieds,
}) => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <div className={styles.itemParent}>
      <div>
        <div className="flex justify-between">
          <h1 className={`${styles.itemheading}`}>Advance {index + 1}</h1>
          <div
            className="cursor-pointer"
            onClick={(index) => handleRemoveFieds(index)}
          >
            <Image
              loader={myLoader}
              src="/images/recipt-cancel.png"
              alt=""
              height={45}
              width={45}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between">
          <div>
            <label htmlFor="vendor" className="Dm font-medium">
              Category <span className="text-[18px] text-[#FA0369]">*</span>
            </label>
            <br />
            <select
              id="countries"
              className="md:w-[300px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-2 focus:border-0 mt-2 px-2 Dm"
              onChange={(event) => handleCategory(index, event)}
            >
              <option className="Dm" defaultValue="" disabled selected>
                Choose category
              </option>
              <option className="Dm" value="United States">
                United States
              </option>
              <option className="Dm" value="Canada">
                Canada
              </option>
              <option className="Dm" value="Singapore">
                Singapore
              </option>
              <option className="Dm" value="Germany">
                Germany
              </option>
            </select>
          </div>
          <div>
            <div>
              <label htmlFor="Amount" className="Dm font-medium">
                Amount <span className="text-[18px] text-[#FA0369]">*</span>
              </label>
              <br />
              <div className="flex items-center">
                <span className="flex items-center h-[50px] border-l-2 border-y-2 bg-[#fff] border-gray-300 rounded-l-[8px] outline-2 focus:border-0 mt-2 px-2 text-gray-400 md:text-[15px] text-[12px]">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>{" "}
                  USD
                </span>
                <input
                  type="text"
                  id="Amount"
                  onChange={(event) => handleAmount(index, event)}
                  className="md:w-[250px] w-full h-[50px] border-2 border-gray-300 rounded-r-[8px] outline-2 focus:border-0 mt-2 px-2"
                  placeholder="00.00"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <label className={`Dm font-medium`} htmlFor="Description">
          Description
        </label>
        <br />
        <input
          className="w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-2 focus:border-0 mt-2 px-2"
          // defaultValue={newitem.descript}
          onChange={(event) => handleDescription(index, event)}
          type="text"
          name="description"
          placeholder="Detail Advance"
        />
      </div>
    </div>
  );
};

export default AdvancesItem;
