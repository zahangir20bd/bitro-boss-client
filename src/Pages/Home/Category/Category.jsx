import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import backgroundImage from "../../../assets/home/chef-service.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="mb-24">
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-28 mt-20"
      >
        <SwiperSlide>
          <img className="w-full mx-auto" src={slide1} alt="" />
          <p className="text-4xl  text-center w-full -mt-10 text-white font-serif uppercase">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full mx-auto"  src={slide2} alt="" />
          <p className="text-4xl text-center -mt-10 text-white font-serif uppercase">
            Pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full mx-auto"  src={slide3} alt="" />
          <p className="text-4xl text-center -mt-10 text-white font-serif uppercase">
            Soup
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full mx-auto"  src={slide4} alt="" />
          <p className="text-4xl text-center -mt-10 text-white font-serif uppercase">
            Desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full mx-auto"  src={slide5} alt="" />
          <p className="text-4xl text-center -mt-10 text-white font-serif uppercase">
            Salads
          </p>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center items-center ">
      <div className="relative">
        <img src={backgroundImage} alt="Image" className="w-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-16 px-20 w-3/4 bg-white text-center">
        <h2 className="text-3xl text-center font-bold mb-10">Bistro Boos</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            alias rerum odio, delectus sequi optio rem recusandae deleniti
            libero distinctio dolores? Repellendus laboriosam sequi delectus
            maxime est soluta saepe magni non dolorum quod. Ad alias sequi esse,
            sapiente possimus eaque ipsam voluptates cupiditate illum laudantium
            perspiciatis deserunt natus maxime accusamus velit et maiores
            dolore, atque ipsum ea dicta corrupti consequatur?
          </p>
        </div>
      </div>
    </div>
      <div className="w-full bg-black mt-32">
        <h3 className="text-3xl text-center text-white py-20 font-serif font-bold">Call Us: +88 01611391706</h3>
      </div>
    </section>
  );
};

export default Category;
