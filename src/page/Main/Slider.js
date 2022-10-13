import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styled from "styled-components";

const StyledSwiper = styled(Swiper)`
  //styled-components적용시 이름을 같이 지정하고 styled(Swiper)로 사용함
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 890px;
  background-color: rgba(0, 0, 0, 0.2);
`;

function Slider() {
  return (
    <StyledSwiper
      pagination={{ type: "fraction" }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>img1</SwiperSlide>
      <SwiperSlide>img2</SwiperSlide>
      <SwiperSlide>img3</SwiperSlide>
      <SwiperSlide>img4</SwiperSlide>
      <SwiperSlide>img5</SwiperSlide>
    </StyledSwiper>
  );
}
export default Slider;
