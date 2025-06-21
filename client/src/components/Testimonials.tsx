// src/components/Testimonials.js

import Slider from "react-slick";
import { testimonialData } from "../constants";

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-secondary">Top selling</p>
          <h1 data-aos="fade-up" className="font-bold text-2xl dark:text-white">Testimonials Cards</h1>
          <p data-aos="fade-up" className="text-sm text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio voluptate.
          </p>
        </div>
        {/* Cards section */}
        <div>
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id}>
                <div data-aos="zoom-in" className="space-y-3 flex flex-col gap-4 border shadow-xl py-8 px-6 rounded-xl mx-2 dark:bg-gray-800 bg-primary/10">
                  <div>
                    <img src={data.img} alt="profile" className="rounded-full w-20 h-20 bg-primary border border-gray-400" />
                  </div>
                  <div className="top-2">
                    <p className="text-xs text-gray-500 dark:text-white">{data.text}</p>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-black dark:text-white">{data.name}</h1>
                  </div>
                  <div className="absolute top-0 right-0">
                    <p className="text-black/40 text-9xl font-serif dark:text-white">,,</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;