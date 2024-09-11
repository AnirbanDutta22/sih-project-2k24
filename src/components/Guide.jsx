// import React from 'react'
import { GoBook } from "react-icons/go";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { RiFolderVideoLine } from "react-icons/ri";

const guideDiv = `flex items-center gap-x-1.5 font-semibold text-violet-500 capitalize text-lg mt-3 cursor-pointer`;

const Guide = () => {
  return (
    <div className="flex justify-start items-center gap-x-6">
      <div className={guideDiv}>
        <GoBook /> how to get started
      </div>
      <div className={guideDiv}>
        <RiFolderVideoLine /> watch a video
      </div>
      <div className={guideDiv}>
        <MdOutlineFeaturedPlayList /> Take a tour
      </div>
    </div>
  );
};

export default Guide;
