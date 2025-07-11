import Image from "next/image";
import React from "react";

export const PostImage = () => {
  return (
    <div className="w-full min-h-[400px] h-full relative mt-3">
      <Image
        src={"/hero-image.png"}
        alt="Text hero image"
        fill
        className="rounded-xl object-cover"
      />
    </div>
  );
};
