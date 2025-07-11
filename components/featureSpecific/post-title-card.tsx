import React from "react";
import { AuthorCard } from "../common/author-card";

export const PostTitle = () => {
  return (
    <div className="w-full space-y-5 mt-6 py-5">
      <div className="text-sm bg-accent text-white p-2 rounded-lg w-fit">
        Technologia
      </div>
      <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>
      <AuthorCard />
    </div>  
  );
};
