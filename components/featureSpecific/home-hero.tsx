import HeroImage from "@/public/hero-image.png";
import Image from "next/image";
import { AuthorCard } from "../common/author-card";
export const HomeHero = () => {
  return (
    <div className="w-full mt-3 md:mt-8 rounded-xl  max-w-screen-xl p-3 md:ps-20 md:mb-20  flex flex-col justify-end relative min-h-[600px] h-full ">
      <Image
        alt="Hero Image"
        src={HeroImage}
        fill
        className="rounded-xl object-cover"
      />
      <HomeTitleCard />
    </div>
  );
};

const HomeTitleCard = () => {
  return (
    <div className="bg-background w-full rounded-lg  flex flex-col gap-3 p-4 max-w-lg shadow-xl relative md:-mb-20  z-20">
      <p className="w-fit bg-accent text-white p-2 text-sm rounded-sm ">
        Technology
      </p>
      <h1 className="text-2xl font-bold text-foreground">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>
      <AuthorCard />
    </div>
  );
};
