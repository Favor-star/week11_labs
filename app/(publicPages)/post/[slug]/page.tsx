import { PostContent } from "@/components/featureSpecific/post-content";
import { PostImage } from "@/components/featureSpecific/post-content-image";
import { PostTitle } from "@/components/featureSpecific/post-title-card";
import { fetchPosts } from "@/lib/api";

export async function generateStaticParams() {
  const posts: apiDataProps[] = await fetchPosts();
  return posts.map(({ slug }) => ({ slug }));
}
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const posts: apiDataProps[] = await fetchPosts();
  const singlePost = posts.find((post) => post.slug === slug);
  if (!singlePost) return <div>Post not found. Please try again</div>;
  const { title, user, tag_list, cover_image, social_image, created_at } =
    singlePost;
  return (
    <section className="w-full mx-auto max-w-screen-lg ">
      <PostTitle headerData={{ title, user, tag_list, created_at }} />
      <PostImage imagesLink={{ cover_image, social_image }} />
      <PostContent />
    </section>
  );
};

export default page;
