"use client";
import Image from "next/image";
import { FC } from "react";
export const AuthorCard: FC<Pick<apiDataProps, "user" | "created_at">> = ({
  user,
  created_at,
}) => {
  if (!user) return null;
  return (
    <div className="w-full flex flex-row gap-2 items-center ">
      <Image
        src={user.profile_image}
        alt="The image of the post's author"
        width={40}
        height={40}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/avatar-placeholder.gif";
        }}
        className="rounded-full"
      />
      {/* <User size={30} className="rounded-full border border-foreground" /> */}
      <p className="text-base text-black/70 font-bold">{user.name}</p>
      <p className="text-sm text-black/70">
        {new Date(created_at).toLocaleString()}
      </p>
    </div>
  );
};
