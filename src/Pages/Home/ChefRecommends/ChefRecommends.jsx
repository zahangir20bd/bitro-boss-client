import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/slide1.jpg"

const ChefRecommends = () => {
  return (
    <div className="mt-32 mb-20 ">
        <SectionTitle subHeading={"Should Try"} heading={"Chef Recommends"}></SectionTitle>
      <div className="mt-20  grid gap-10 grid-cols- md:grid-cols-2 lg:grid-cols-3">
      <div className="card w-96 bg-base-100 mx-auto shadow-xl rounded-none">
        <figure>
          <img
          className="w-full max-h-60 overflow-hidden"
            src={img1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Caesar salad!</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Shredded, Chicken, Worcestershire sauce, anchovies, garlic, Dijon Mustard and Black Pepper.</p>
          <div className="card-actions justify-center mt-5">
            <button className="btn btn-warning ">Add to CART</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl rounded-none mx-auto">
        <figure>
          <img
          className="w-full max-h-60 overflow-hidden"
            src={img1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Caesar salad!</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Shredded, Chicken, Worcestershire sauce, anchovies, garlic, Dijon Mustard and Black Pepper.</p>
          <div className="card-actions justify-center mt-5">
            <button className="btn btn-warning ">Add to CART</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl rounded-none mx-auto">
        <figure>
          <img
          className="w-full max-h-60 overflow-hidden"
            src={img1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Caesar salad!</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Shredded, Chicken, Worcestershire sauce, anchovies, garlic, Dijon Mustard and Black Pepper.</p>
          <div className="card-actions justify-center mt-5">
            <button className="btn btn-warning ">Add to CART</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
