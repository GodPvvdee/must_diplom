import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
export default class Company extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="mx-auto w-5/6 divide-y" >
        <Slider {...settings}>
          <div >
          <img
                    className="block lg:hidden h-[140px] w-auto "
                    src="https://www.stackbit.com/images/Frame%201.svg"
                    alt="Workflow"
                  />     
                       </div>
          <div>
          <img
                    className="block lg:hidden h-[140px] w-auto"
                    src="https://www.stackbit.com/images/MD%20logo.svg"
                    alt="Workflow"
                  />           </div>
          <div>
          <img
                    className="block lg:hidden  h-[140px] w-auto"
                    src="https://www.stackbit.com/images/Tailwind%20logo.svg"
                  />           </div>
          <div>
          <img
                    className="block lg:hidden  h-[140px] w-auto"
                    src="https://www.stackbit.com/images/Next%20logo.svg"
                    alt="Workflow"
                  />           </div>
          <div>
          <img
                    className="block lg:hidden h-[140px] w-auto"
                    src="https://www.stackbit.com/images/React%20logo.svg"
                    alt="Workflow"
                  />           </div>
         
        </Slider>
        <div className="divide-y">
  
</div>
      </div>
      
    );
  }
}