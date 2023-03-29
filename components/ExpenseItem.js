import styles from "../styles/Items.module.css";
import Image from "next/image";

// image loader
const myLoader = ({ src, width }) => {
  return `${src}?w=${width}`;
}

const Item = ({
  // newitem,
  index,
  // formIndex,
  handleAmount,
  handleDescription,
  handleCategory,
  handleRemoveFieds,
}) => {
  return (
    <div className={styles.itemParent}>
      <div>
        <div className="flex justify-between">
          <h1 className={`${styles.itemheading}`}>Items {index + 1}</h1>
          <div
            className="cursor-pointer"
            onClick={() => handleRemoveFieds(index)}
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
          <div className="md:mb-0 mb-4">
            <div>
              <label htmlFor="Amount" className="Dm font-medium">
                Amount
              </label>
              <br />
              <div className="flex items-center">
                <input
                  type="text"
                  onChange={(event) => handleAmount(index, event)}
                  id="Amount"
                  className="md:w-[300px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-2 focus:border-0 mt-2 px-2"
                  placeholder="00.00"
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="vendor" className="Dm font-medium">
              Category
            </label>
            <br />
            <select
              id="countries"
              className="md:w-[300px] w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-2 focus:border-0 mt-2 px-2 Dm"
              onChange={(event) => handleCategory(index, event)}
            >
              <option className="Dm" defaultValue="" disabled selected>Choose category</option>
              <option className="Dm" value="United States">United States</option>
              <option className="Dm" value="Canada">Canada</option>
              <option className="Dm" value="Singapore">Singapore</option>
              <option className="Dm" value="Germany">Germany</option>
            </select>
          </div>
        </div>
        <br />
        <label className={`${styles.formlabel}`} htmlFor="Description">
          Description
        </label>
        <br />
        <input
          // id={styles.Description}
          // defaultValue={newitem.descript}
          onChange={(event) => handleDescription(index, event)}
          type="text"
          name="description"
          className="w-full h-[50px] border-2 border-gray-300 rounded-[8px] outline-2 focus:border-0 mt-2 px-2"
        />
      </div>
    </div>
  );
};

export default Item;