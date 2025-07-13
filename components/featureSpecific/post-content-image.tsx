import Image from "next/image";
import React, { FC } from "react";
import PlaceholderImage from "@/public/placeholder.webp";
export const PostImage: FC<{
  imagesLink: Pick<apiDataProps, "social_image" | "cover_image">;
}> = ({ imagesLink }) => {
  const { cover_image, social_image } = imagesLink;
  return (
    <div className="w-full min-h-[400px] h-full relative mt-3">
      <Image
        src={cover_image || social_image || PlaceholderImage}
        alt="Text hero image"
        fill
        className="rounded-xl object-cover  shadow-lg"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UA8AAgUBQbH2eGIAAAAASUVORK5CYII="
      />
    </div>
  );
};
