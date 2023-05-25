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
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-28 "
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-4xl text-center -mt-10 text-black font-serif uppercase">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-4xl text-center -mt-10 text-white font-serif uppercase">
            Pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-4xl text-center -mt-10 text-white font-serif uppercase">
            Soup
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-4xl text-center -mt-10 text-white font-serif uppercase">
            Desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="text-4xl text-center -mt-10 text-white font-serif uppercase">
            Salads
          </p>
        </SwiperSlide>
      </Swiper>
      <div className="relative">
        <img src={backgroundImage} alt="" />
        <div className="w-10/12 h-10/12 absolute top-1/4 left-28  bg-white p-12">
          <h2>Bistro Boos</h2>
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
    </section>
  );
};

export default Category;
