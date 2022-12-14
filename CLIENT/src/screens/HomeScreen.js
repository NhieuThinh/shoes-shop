import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import Categories from "./../components/homeComponents/Categories";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import Slider from "./../components/homeComponents/Slider"
const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <Slider/>
      <Categories/>
      <ShopSection cate={""} keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <Footer />
    </div>
  );
};

export default HomeScreen;
