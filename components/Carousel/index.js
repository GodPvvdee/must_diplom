// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          className=" "
          src="https://simple.mn/static/media/planding-1-1.36352387.png"
          alt="Workflow"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className=" "
          src="https://simple.mn/static/media/planding-1-1.36352387.png"
          alt="Workflow"
        />
      </SwiperSlide>
    </Swiper>
  );
}
