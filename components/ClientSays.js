import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const ClientSays = () => {
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <div className="md:pb-[90px] pb-[35px] md:pt-[40px] pt-[30px]">
      <h1 className="font-bold text-center text-[28px] md:text-[34px] text-[#0D172C] Kn mb-[30px]">
        What our clients are saying about us
      </h1>

      {/* client testimonial slider */}
      <div className="md:mx-[80px] mx-[10px]">
        <Swiper
          effect={"coverflow"}
          pagination={true}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
          //   className="mySwiper"
        >
          <SwiperSlide>
            <div className="text-center border-2 border-gray-500 bg-[#fff] shadow-lg h-full w-full py-6 px-4 rounded-[12px] mb-[60px]">
              <Image
                loader={myLoader}
                src="/images/person1.png"
                alt=""
                height="130px"
                width="130px"
              />
              <p className="Dm text-[18px]">{`"We initially had Salesforce CRM but didn’t really use it. The instance was incredibly complicated because it allows for so much customization that you end up doing nothing.When we explored Freshsales CRM, the first thing I remember saying is, okay, the interface is clean and simple."`}</p>
              <hr className="border-1 border-gray-700 w-44 mx-auto mt-5" />
              <div className="mt-3 text-center">
                <h2 className="text-[18px] Dm font-medium">
                  Germain Brion, VP-Sales
                </h2>
                <p className="text-[14px] Dm">Chargebee</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center border-2 border-gray-500 bg-[#fff] shadow-lg h-full w-full py-6 px-4 rounded-[12px] mb-[60px]">
              <Image
                loader={myLoader}
                src="/images/person1.png"
                alt=""
                height="130px"
                width="130px"
              />
              <p className="Dm text-[18px]">{`"We initially had Salesforce CRM but didn’t really use it. The instance was incredibly complicated because it allows for so much customization that you end up doing nothing.When we explored Freshsales CRM, the first thing I remember saying is, okay, the interface is clean and simple."`}</p>
              <hr className="border-1 border-gray-700 w-44 mx-auto mt-5" />
              <div className="mt-3 text-center">
                <h2 className="text-[18px] Dm font-medium">
                  Germain Brion, VP-Sales
                </h2>
                <p className="text-[14px] Dm">Chargebee</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center border-2 border-gray-500 bg-[#fff] shadow-lg h-full w-full py-6 px-4 rounded-[12px] mb-[60px]">
              <Image
                loader={myLoader}
                src="/images/person1.png"
                alt=""
                height="130px"
                width="130px"
              />
              <p className="Dm text-[18px]">{`"We initially had Salesforce CRM but didn’t really use it. The instance was incredibly complicated because it allows for so much customization that you end up doing nothing.When we explored Freshsales CRM, the first thing I remember saying is, okay, the interface is clean and simple."`}</p>
              <hr className="border-1 border-gray-700 w-44 mx-auto mt-5" />
              <div className="mt-3 text-center">
                <h2 className="text-[18px] Dm font-medium">
                  Germain Brion, VP-Sales
                </h2>
                <p className="text-[14px] Dm">Chargebee</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center border-2 border-gray-500 bg-[#fff] shadow-lg h-full w-full py-6 px-4 rounded-[12px] mb-[60px]">
              <Image
                loader={myLoader}
                src="/images/person1.png"
                alt=""
                height="130px"
                width="130px"
              />
              <p className="Dm text-[18px]">{`"We initially had Salesforce CRM but didn’t really use it. The instance was incredibly complicated because it allows for so much customization that you end up doing nothing.When we explored Freshsales CRM, the first thing I remember saying is, okay, the interface is clean and simple."`}</p>
              <hr className="border-1 border-gray-700 w-44 mx-auto mt-5" />
              <div className="mt-3 text-center">
                <h2 className="text-[18px] Dm font-medium">
                  Germain Brion, VP-Sales
                </h2>
                <p className="text-[14px] Dm">Chargebee</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientSays;
