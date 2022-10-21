import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineHeart } from "react-icons/ai";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "../MainHomeContent.module.css";

export default function YouMayLike() {
  return (
    <div className={styles.youMayLike}>
      <h2 style={{ marginBottom: 20 }}>You May Like</h2>
      <Swiper slidesPerView={2.2} spaceBetween={5} freeMode={true} modules={[FreeMode]}>
        {[1, 2, 3, 4, 5].map((sliderImage) => (
          <SwiperSlide key={sliderImage}>
            <div className={styles.imageContainer}>
              <Image src="/sample.png" alt="sample" width={154} height={232} />
              <AiOutlineHeart />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.buttonContainer}>
        <button>View all</button>
      </div>
    </div>
  );
}
