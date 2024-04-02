import React from "react";
import HeroSection from "../HeroSection";
import { homeObjFour} from "./Data";
const Product = () => {
  return (
    <>
      <HeroSection {...homeObjFour} />
    </>
  );
};

export default Product;
