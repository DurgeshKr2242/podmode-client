import React, { useEffect, useState } from "react";
import { BiFilter } from "react-icons/bi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import Input from "../UI/Input";

import Modal from "../UI/Modal";
import { PODCASTS_LIST } from "/seed/data";
import PrimaryButton from "../UI/Button/PrimaryButton";
import Loader from "../UI/Loader";

const MainScreen = () => {
  const [isListView, setIsListView] = useState(true);
  const [allPodcast, setAllPodcast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getAllPodcast = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/podcast`
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getAllPodcast();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col items-center justify-center w-full h-full pb-20 mt-52">
      {/* TOP SECTION */}
      <div className="flex items-center justify-center w-full gap-20">
        <div className="flex items-center justify-center w-full basis-1/2">
          <p className="text-6xl font-bold uppercase">
            Here is all our podcasts!
          </p>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-4 basis-1/2">
          <p className="text-lg opacity-70">
            List of all your podcasts List of all your podcasts List of all your
            podcasts List{" "}
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setShowCreateNewModal(true)}
              className="px-12 text-lg py-3 flex items-center justify-center gap-2 font-semibold border-[2px] rounded-xl"
            >
              Create New
            </button>

            <button
              onClick={() => setIsListView(!isListView)}
              className="px-6 text-lg py-3 flex items-center justify-center gap-2 font-semibold border-[2px] rounded-xl"
            >
              <FaListUl />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between w-full mt-24 rounded-xl">
        {PODCASTS_LIST.map((podcast, i) => {
          return (
            <div
              className={`flex flex-col items-center justify-center ${
                isListView ? "w-full" : "w-[45%]"
              } `}
              key={i}
            >
              <div className="flex items-center justify-between w-full px-2 pr-10">
                <div className="flex items-center justify-center gap-8">
                  <p className="text-4xl font-bold">0{i + 1}.</p>
                  {podcast.image ? (
                    <div className="relative w-[140px] h-[70px] ">
                      <Image
                        src={podcast.image}
                        alt="placeholderPodcastImage"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  ) : (
                    <p className="w-[140px] h-[70px] flex items-center justify-center text-3xl bg-gray-300 rounded-xl">
                      <BsMusicNoteBeamed />
                    </p>
                  )}

                  <div className="flex flex-col items-start justify-start w-full gap-1 text-lg">
                    <p className="font-semibold">{podcast.name}</p>
                    <p className="opacity-60">#{podcast.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    console.log("podcast", podcast);
                    setCurrentTrack(podcast);
                  }}
                  className="flex items-center justify-center p-1.5 text-xl bg-white border-[6px] rounded-full text-Black/90 border-Black/80"
                >
                  <IoPlay />
                </button>
              </div>

              <div className="w-[95%] my-12 h-[2px]  rounded-full bg-white/20"></div>
            </div>
          );
        })}
      </div>
      {/*  */}

      {/*  */}
    </div>
  );
};

export default MainScreen;
