import React from 'react'
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import { useLocation } from "react-router-dom";
import styled from "styled-components";


const Title = styled.h1`
  margin-left:140px;
`;
const ListProduct = ({ match }) => {
    const location = useLocation();
    const cate = location.pathname.split("/")[2];
    window.scrollTo(0, 0);
    const keyword = match.params.keyword;
    const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <Title>{cate.toUpperCase()}</Title>
      <ShopSection cate={cate} keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <Footer />
      </div>
  )
}

export default ListProduct