import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "../MainHomeContent.module.css";

export default function TopOffersOnBrands() {
  return (
    <div className={styles.topOffersOnBrands}>
      <h2>Top Offers On Brands</h2>
      <Swiper slidesPerView={2.2} spaceBetween={10} freeMode={true} modules={[FreeMode]}>
        {[1, 2, 3, 4, 5].map((sliderImage) => (
          <SwiperSlide key={sliderImage}>
            <div className={styles.card}>
              
              <Image src="/newArrival_sample.jpg" alt="sample" width={150} height={150} />
              <h3>Bentley</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
