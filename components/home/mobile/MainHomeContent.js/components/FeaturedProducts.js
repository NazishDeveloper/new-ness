import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "../MainHomeContent.module.css";

export default function FeaturedProducts() {
  return (
    <div className={styles.featuredProducts}>
      <div className={styles.featuredProductsHeader}>
        <h2>Featured Products</h2>
        <button>View All</button>
      </div>
      <Swiper slidesPerView={2.2} spaceBetween={10} freeMode={true} modules={[FreeMode]}>
        {[1, 2, 3, 4, 5].map((sliderImage) => (
          <SwiperSlide key={sliderImage}>
            <div className={styles.card}>
              <Image src="/newArrival_sample.jpg" alt="sample" width={150} height={150} />
              <h3>Xerjoff Shooting</h3>
              <p>
                BDT 16,858 <s>BDT 20,230</s>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
