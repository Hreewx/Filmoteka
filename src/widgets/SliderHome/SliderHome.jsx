import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./SliderHome.module.scss";
import "swiper/scss";
import "swiper/modules";

function SliderHome() {
  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 3500,
      }}
      speed={1800}
      loop={true}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img src="/images/blade-runner.webp" alt="Poster of Blade Runner" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/lalaland.webp" alt="Poster of Lalaland" />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/images/ready-player-one.jpeg"
          alt="Poster of Ready player one"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/images/last-night-soho.webp"
          alt="Poster of Last night in Soho"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/john-wick.jpeg" alt="Poster of John Wick" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderHome;
