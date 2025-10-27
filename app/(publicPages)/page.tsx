import { HomeHero } from "@/components/featureSpecific/home-hero";
import { HomePostCards } from "@/components/featureSpecific/home-post-cards";
import { fetchPosts } from "@/lib/api";

export default async function Home() {
  const data: apiDataProps[] = await fetchPosts();
  return (
    <div className="w-full pb-10 space-y-10">
      <HomeHero post={data[0]} />
      <div className="w-full py-0 md:py-1" />
      <HomePostCards data={data.slice(1)} />
    </div>
  );
}
