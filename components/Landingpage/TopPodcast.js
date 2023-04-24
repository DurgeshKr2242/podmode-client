import React, { useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";
import placeholderPodcastImage from "./assets/placeholderPodcastImage.jpg";
import placeholderPodcastImage1 from "./assets/placeholderPodcastImage1.jpg";
import placeholderPodcastImage2 from "./assets/placeholderPodcastImage2.jpg";
import { BsMusicNoteBeamed } from "react-icons/bs";
import Image from "next/legacy/image";
import { useGlobalPlayerContext } from "/context/PlayerContext";
import { PODCASTS_LIST } from "/seed/data";

const TopPodcast = () => {
  const { currentTrack, setCurrentTrack } = useGlobalPlayerContext();

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10">
      <div className="flex items-center justify-center w-full gap-20">
        <div className="flex items-center justify-center w-full basis-1/2">
          <p className="text-6xl font-bold uppercase">
            Our Most Popular Podcast
          </p>
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

      <div className="flex items-center justify-center w-full gap-20 mt-10">
        <div className="flex flex-col items-center justify-center w-full basis-1/2">
          {PODCASTS_LIST.map((podcast, i) => {
            return (
              <div
                className="flex flex-col items-center justify-center w-full"
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
                {i !== PODCASTS_LIST.length - 1 && (
                  <div className="w-[95%] my-12 h-[2px]  rounded-full bg-white/20"></div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center w-full basis-1/2">
          {PODCASTS_LIST.map((podcast, i) => {
            return (
              <div
                className="flex flex-col items-center justify-center w-full"
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
                    onClick={() => setCurrentTrack(podcast)}
                    className="flex items-center justify-center p-1.5 text-xl bg-white border-[6px] rounded-full text-Black/90 border-Black/80"
                  >
                    <IoPlay />
                  </button>
                </div>
                {i !== PODCASTS_LIST.length - 1 && (
                  <div className="w-[95%] my-12 h-[2px]  rounded-full bg-white/20"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopPodcast;
