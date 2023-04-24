import React from "react";
import HeroSection from "./HeroSection";
import TopPodcast from "./TopPodcast";
import AllPodcast from "./AllPodcast";

const MainScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-20">
      <HeroSection />
      <TopPodcast />
      <AllPodcast />
    </div>
  );
};

export default MainScreen;
