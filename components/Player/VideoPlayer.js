import React, { useEffect, useRef, useState, useCallback } from "react";
import { PODCASTS_LIST } from "/seed/data";
import Image from "next/image";
import {
  IoPlay,
  IoPause,
  IoPlayForward,
  IoPlaySkipForward,
} from "react-icons/io5";
import { BiFastForward } from "react-icons/bi";
import { IoMdVolumeHigh, IoMdVolumeOff, IoMdVolumeLow } from "react-icons/io";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FaStepBackward } from "react-icons/fa";
import { current } from "tailwindcss/colors";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(PODCASTS_LIST[trackIndex]);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  const [time, setTime] = useState({
    currentTime: 0,
    duration: 0,
  });
  const audioRef = useRef();
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTime({ ...time, currentTime });

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [time]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  useEffect(() => {
    audioRef.current.currentTime = time.currentTime;
  }, [time.currentTime]);

  const onLoadedMetadata = () => {
    console.log("LOADED");
    const seconds = audioRef.current.duration;
    setTime({ ...time, duration: seconds });
  };

  const handleNext = () => {
    if (trackIndex >= PODCASTS_LIST.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(PODCASTS_LIST[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(PODCASTS_LIST[trackIndex + 1]);
    }
  };
  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = PODCASTS_LIST.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(PODCASTS_LIST[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(PODCASTS_LIST[trackIndex - 1]);
    }
  };

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div className="z-[9999] sticky bottom-0 left-0 right-0 flex items-center justify-center w-full ">
      <div className="w-full max-w-[1400px] relative flex items-center h-[90px] justify-between px-8 bg-[#2A2930] shadow-xl text-white ">
        <input
          id="minmax-range"
          type="range"
          min={0}
          max={time.duration}
          value={time.currentTime}
          onChange={(e) => setTime({ ...time, currentTime: e.target.value })}
          className="left-0 right-0 top-0 absolute h-[4px] bg-gray-200 rounded-t-sm range-sm appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div className="flex items-start justify-start gap-8">
          {currentTrack.image ? (
            <div className="relative w-[70px] h-[70px] ">
              <Image
                src={currentTrack.image}
                alt="placeholderPodcastImage"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ) : (
            <p className="p-4 text-4xl bg-gray-300 rounded-xl">
              <BsMusicNoteBeamed />
            </p>
          )}
          <div className="flex flex-col items-start justify-start gap-1">
            <p className="text-lg font-semibold">{currentTrack.name}</p>
            <p className="opacity-70">{currentTrack.user}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div>
            <audio
              onLoadedMetadata={onLoadedMetadata}
              src={currentTrack.file}
              ref={audioRef}
            />
          </div>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center justify-center gap-2">
              <button
                className="text-xl"
                onClick={() => setMuteVolume((prev) => !prev)}
              >
                {muteVolume || volume < 5 ? (
                  <IoMdVolumeOff />
                ) : volume < 40 ? (
                  <IoMdVolumeLow />
                ) : (
                  <IoMdVolumeHigh />
                )}
              </button>
              <input
                id="minmax-range"
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
              />
            </div>
            <p>
              {formatTime(time.currentTime)} /{formatTime(time.duration)}
            </p>
          </div>
          <button
            onClick={handlePrevious}
            className="flex  items-center justify-center p-1.5 text-xl "
          >
            <IoPlaySkipForward className="rotate-180" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center justify-center p-1.5 text-3xl "
          >
            {isPlaying ? <IoPause /> : <IoPlay />}
          </button>
          <button
            onClick={handleNext}
            className="flex  items-center justify-center p-1.5 text-xl "
          >
            <IoPlaySkipForward />
          </button>
          <div className="flex items-center justify-center gap-0">
            <button
              onClick={skipBackward}
              className="flex  items-center justify-center p-1.5 text-2xl "
            >
              <div className="flex flex-col items-center justify-center ">
                <BiFastForward className="rotate-180" />
                <p className="text-xs font-semibold">-15s</p>
              </div>
            </button>
            <button
              onClick={skipForward}
              className="flex  items-center justify-center p-1.5 text-2xl "
            >
              <div className="flex flex-col items-center justify-center ">
                <BiFastForward />
                <p className="text-xs font-semibold">+15s</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
