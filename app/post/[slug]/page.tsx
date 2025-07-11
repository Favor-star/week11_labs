import { PostContent } from "@/components/featureSpecific/post-content";
import { PostImage } from "@/components/featureSpecific/post-content-image";
import { PostTitle } from "@/components/featureSpecific/post-title-card";

const page = () => {
  return (
    <section className="w-full mx-auto max-w-screen-lg ">
      <PostTitle />
      <PostImage />
      <PostContent />
    </section>
  );
};

export default page;
