import React, { useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";
import placeholderPodcastImage from "./assets/placeholderPodcastImage.jpg";
import placeholderPodcastImage1 from "./assets/placeholderPodcastImage1.jpg";
import placeholderPodcastImage2 from "./assets/placeholderPodcastImage2.jpg";

import Image from "next/legacy/image";
import { PODCASTS_LIST } from "/seed/data";
// const PODCASTS_LIST = [
//   {
//     name: "Haq se single",
//     category: "Comedy",
//     image: placeholderPodcastImage,
//   },
//   {
//     name: "Bass kar bassi",
//     category: "Comedy",
//     image: placeholderPodcastImage1,
//   },
//   {
//     name: "Thathatsu",
//     category: "Comedy",
//     image: placeholderPodcastImage2,
//   },
// ];

const AllPodcast = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 mt-72">
      <div className="flex items-center justify-center w-full gap-20">
        <div className="flex items-center justify-center w-full basis-1/2">
          <p className="text-6xl font-bold uppercase">All the podcasts!</p>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-4 basis-1/2">
          <p className="text-lg opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elitconsectetur
            adipisicing elit. Accusamus, perspiciatis.
          </p>
          <button className="px-12 text-lg py-3 flex items-center justify-center gap-2 font-semibold border-[2px] rounded-xl">
            Show All <BsArrowUpRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllPodcast;
