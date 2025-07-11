import { HomeHero } from "@/components/featureSpecific/home-hero";
import { HomePostCards } from "@/components/featureSpecific/home-post-cards";

export default function Home() {
  return (
    <div className="w-full pb-10 space-y-10">
      <HomeHero />
      <div className="w-full py-0 md:py-1" />
      <HomePostCards />
    </div>
  );
}
