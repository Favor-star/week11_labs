import { PostCard } from "../common/post-card";
// import { Button } from "../ui/button";

export const HomePostCards = () => {
  return (
    <section className="w-full space-y-3">
      <h1 className="font-bold text-xl">Latest posts</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {Array.from({ length: 9 }, (data, i) => crypto.randomUUID()).map(
          (data) => (
            <PostCard key={data} />
          )
        )}
      </div>
      {/* <Button variant={"outline"} size={"lg"} className="mx-auto flex w-fit">
        View all posts
      </Button> */}
    </section>
  );
};
