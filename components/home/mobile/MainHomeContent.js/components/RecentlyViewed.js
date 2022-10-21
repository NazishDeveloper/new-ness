import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "../MainHomeContent.module.css";

export default function RecentlyViewed() {
  return (
    <div className={styles.recentlyViewed}>
      <h2>Recently Viewed</h2>
      <div className={styles.cardContainer}>
        {[1, 2, 3].map((i) => (
          <div className={styles.card} key={i}>
            <div>
              <Image src="/newArrival_sample.jpg" alt="sample" width={75} height={75} />
            </div>
            <div>
              <h3>Xerjoff Shooting</h3>
              <p>
                BDT 16,858 <s>BDT 20,230</s>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
