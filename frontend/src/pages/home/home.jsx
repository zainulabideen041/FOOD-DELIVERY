import React, { useState } from "react";
import Header from "../../components/Header/header";
import ExploreMenu from "../../components/exploreMenu/explore";
import FoodDisplay from "../../components/foodDisplay/fooddisplay";
import AppDownload from '../../components/appDownload/appdownload'

const home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload />
    </div>
  );
};

export default home;
