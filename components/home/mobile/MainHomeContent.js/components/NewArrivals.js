import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "../MainHomeContent.module.css";

export default function NewArrivals() {
  return (
    <div className={styles.newArrivals}>
      <h2>New Arrivals</h2>
      <Swiper slidesPerView={4.5} spaceBetween={10} freeMode={true} modules={[FreeMode]}>
        {[1, 2, 3, 4, 5].map((sliderImage) => (
          <SwiperSlide key={sliderImage}>
            <Image src="/newArrival_sample.jpg" alt="sample" width={100} height={100} />
            <span className={styles.arrivalName}>New Arrivals</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
