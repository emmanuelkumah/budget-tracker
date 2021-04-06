import React, { useState } from "react";
import Data from "./Data";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import { FaQuoteRight } from "react-icons/fa";
import "./Testimonials.css";

function Testimonials() {
  const [index, setIndex] = useState(0);

  //get the first values from the data
  const { name, job, image, text } = Data[index];

  //check the number of items in the array
  const checkNumber = (number) => {
    //if number is greater than last element in the array
    if (number > Data.length - 1) {
      return 0;
    }
    //if number is less than the first element in the array return the last element
    if (number < 0) {
      return Data.length - 1;
    }
    //else return the number
    return number;
  };

  //get the next testimonials
  const nextTestimonial = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      //pass newIndex to checkNumber
      return checkNumber(newIndex);
    });
  };

  //get the previous testimonials
  const prevTestimonial = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <section className="testimonials-container">
      <div>
        <h1 className="title ">What People Think About Us</h1>
      </div>
      <article>
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <div className="details-testimony">
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
        </div>

        <div className="btn-container">
          <button className="prev-btn">
            <HiOutlineChevronDoubleLeft onClick={prevTestimonial} />
          </button>
          <button className="next-btn">
            <HiOutlineChevronDoubleRight onClick={nextTestimonial} />
          </button>
        </div>
      </article>
    </section>
  );
}

export default Testimonials;
