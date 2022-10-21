import { useState } from "react";
import Categories from "../../../global/mobile/Categories/Categories";
import YouMayLike from "./components/YouMayLike";
import NewArrivals from "./components/NewArrivals";
import FeaturedProducts from "./components/FeaturedProducts";
import TopOffersOnBrands from "./components/TopOffersOnBrands";
import styles from "./MainHomeContent.module.css";
import TrendingProducts from "./components/TrendingProducts";
import TopBrands from "./components/Top Brands";
import SliderBanner from "./components/BannerSlider";
import SliderBanner1 from "./components/BannerSlider2";
import RecentlyViewed from "./components/RecentlyViewed";

const categories = ["Women", "Men", "Kids", "Electronics"];

export default function MainHomeContent() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className={styles.mainHomeContent}>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <YouMayLike />
      <NewArrivals />
      <FeaturedProducts />
      <SliderBanner />
      <TopOffersOnBrands />
      <SliderBanner1 />
      <TrendingProducts />
      <TopBrands />
      <RecentlyViewed />
      <SliderBanner />
    </div>
  );
}
