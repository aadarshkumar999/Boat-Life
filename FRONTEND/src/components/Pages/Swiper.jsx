import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "./Carousel";

const Swiper = () => {
  let sliders = [
    "https://www.boat-lifestyle.com/cdn/shop/files/IVY_PRO_a7b9e77a-71a5-402c-811b-49471017a689_1600x.png",
    "https://www.boat-lifestyle.com/cdn/shop/files/Artboard_1_837556a9-85d4-429d-a557-e8e3ddddea84_1440x.png",
    "https://www.boat-lifestyle.com/cdn/shop/files/silicon-cover-new-web_1600x.jpg",
    "https://www.boat-lifestyle.com/cdn/shop/files/Artboard_1_837556a9-85d4-429d-a557-e8e3ddddea84_1440x.png",
    "https://www.boat-lifestyle.com/cdn/shop/files/desktop_banner_eae66d9b-996f-4a84-b945-b8df00a062ad_1600x.png",
    "https://www.boat-lifestyle.com/cdn/shop/files/Artboard_copy_4_2fcd7516-e3be-441b-b18c-b1d16ec1ebc6_1600x.png",

    "https://www.boat-lifestyle.com/cdn/shop/files/Artboard_1_copy_2_54619113-614c-471f-a3d6-3899672ec8d7_1440x.png",
  ];
  return (
    <div className="flex items-center justify-center min-w-full h-full">
      <Carousel>
        {sliders.map((s) => (
          <img src={s} key={sliders.id} alt="sliders-img" />
        ))}
      </Carousel>
    </div>
  );
};

export default Swiper;
