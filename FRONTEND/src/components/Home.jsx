import React from "react";
import Header from "./Pages/Header";
import Swiper from "./Pages/Swiper";
import SaleIsLive from "./Pages/SaleIsLive";
import Nirvana from "./Pages/Nirvana";
import BigDeals from "./Pages/BigDeals";
import Categories from "./Pages/Categories";
import Bestsellers from "./Pages/Bestsellers";
import TopPicksForYou from "./Pages/TopPicksForYou";
import ShopbyLifestyle from "./Pages/ShopbyLifestyle";
import InThePress from "./Pages/InThePress";
import Footer from "./Pages/Footer";

const Home = () => {
  return (
    <div>
      <Swiper />
      <SaleIsLive />
      <Nirvana />
      <BigDeals />
      <Categories />
      <Bestsellers />
      <TopPicksForYou />
      <ShopbyLifestyle />
      <InThePress />
    </div>
  );
};

export default Home;
