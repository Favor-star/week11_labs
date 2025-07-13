import React, { FC } from "react";
import { AuthorCard } from "../common/author-card";

export const PostTitle: FC<{
  headerData: Pick<
    apiDataProps,
    "title" | "user" | "tag_list" | "user" | "created_at"
  >;
}> = ({ headerData }) => {
  return (
    <div className="w-full space-y-5 mt-6 py-5">
      <div className="text-sm bg-accent text-white p-2 rounded-lg w-fit">
        {headerData.tag_list[0]}
      </div>
      <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold">
        {headerData.title}
      </h1>
      <AuthorCard user={headerData.user} created_at={headerData.created_at} />
    </div>
  );
};
