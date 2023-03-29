import Image from "next/image";
import Link from "next/link";
const SupportPageArtical = (props) => {
  const { title, description, id, img, link } = props.card;

  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };
  return (
    <div className="cursor-pointer">
      <div className="md:w-[362px] w-[295px] h-[270px] rounded-[24px] md:mb-[40px] mb-[15px]">
        <Link href={link}>
          <a>
            <Image
              loader={myLoader}
              width={362}
              height={270}
              src={img}
              alt=""
            />
          </a>
        </Link>
      </div>
      <Link href={link}>
        <a>
          <p className="text-black/75 mb-[24px] text-[20px] leading-[24px] font-bold Kn">
            {title}
          </p>
        </a>
      </Link>
      <Link href={link}>
        <a>
          <p className="text-[#2C3242]  text-[16px] leading-[19px] font-normal Kn">
            {description}
          </p>
        </a>
      </Link>{" "}
      <br />
    </div>
  );
};

export default SupportPageArtical;
