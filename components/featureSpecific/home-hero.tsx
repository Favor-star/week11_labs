import HeroImage from "@/public/hero-image.png";
import Image from "next/image";
import { AuthorCard } from "../common/author-card";
import { FC } from "react";
import Link from "next/link";
export const HomeHero: FC<{ post: apiDataProps }> = ({ post }) => {
  const { user, created_at, title, slug, tag_list } = post;
  return (
    <div className="w-full mt-3 md:mt-8 rounded-xl  max-w-screen-xl p-3 md:ps-20 md:mb-20  flex flex-col justify-end relative min-h-[600px] h-full ">
      <Image
        alt="Hero Image"
        src={HeroImage}
        fill
        className="rounded-xl object-cover"
        placeholder="blur"
      />
      <HomeTitleCard data={{ user, title, created_at, slug, tag_list }} />
    </div>
  );
};

const HomeTitleCard: FC<{
  data: Pick<
    apiDataProps,
    "user" | "created_at" | "title" | "slug" | "tag_list"
  >;
}> = ({ data }) => {
  return (
    <Link href={`/post/${data.slug}`}>
      <div className="bg-background w-full rounded-lg  flex flex-col gap-3 p-4 max-w-lg shadow-xl relative md:-mb-20  z-20">
        <p className="w-fit bg-accent text-white p-2 text-sm rounded-sm ">
          {data.tag_list[0]}
        </p>
        <h1 className="text-2xl font-bold text-foreground">{data.title}</h1>
        <AuthorCard user={data.user} created_at={data.created_at} />
      </div>
    </Link>
  );
};
