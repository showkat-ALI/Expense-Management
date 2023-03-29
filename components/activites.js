import styles from "../styles/Activities.module.css";
import Link from "next/link";
import Image from "next/image";

const Activites = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <section className={styles.activitiesSection}>
      <div className={`${styles.top} flex justify-between `}>
        <h1 className={`${styles.topheading} text-[40px] text-[#4D49FF]`}>Activites</h1>
        <button className={styles.middleheading}>Create New Activity</button>
      </div>
      <p className={`${styles.secondmiddleheading} ${styles.middle} my-6`}>
        Start creating new Activity by selecting one of these defaults
      </p>
      <div className="flex">
        <Link href="/bursementApp/Expenses">
          <a>
            <div className={`w-80	h-64 ${styles.expences}`}>
              <Image
                loader={myLoader}
                src="/images/Cover.png"
                height={210}
                width={320}
                alt=""
                className={styles.expencesimg}
              />
              <div className={`pl-3 py-5 ${styles.expencestext}`}>
                <h1 className="text-base leading-10">Expenses</h1>
                <p className={styles.textsm}>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.{" "}
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/newAdvances">
          <a>
            <div className={`${styles.bills} mx-6 w-80 h-64 `}>
              <Image
                loader={myLoader}
                src="/images/Cover.png"
                alt=""
                height={210}
                width={320}
                className={styles.billsimg}
              />
              <div className={`pl-3 py-5 ${styles.billstext}`}>
                <h1 className="text-base leading-10">Bills/Advances</h1>
                <p className={styles.textsm}>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.{" "}
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/newtrip">
          <a>
            <div className={`w-80 h-64 ${styles.trip}`}>
              <Image
                loader={myLoader}
                src="/images/Cover.png"
                alt=""
                height={210}
                width={320}
                className={styles.tripimg}
              />
              <div className={`pl-3 py-5 ${styles.triptext}`}>
                <h1 className="text-base leading-10">Trip</h1>
                <p className={styles.textsm}>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.{" "}
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Activites;
