import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { AuthorCard } from "./author-card";
import { FC } from "react";
import Link from "next/link";
import PlaceholderImage from "@/public/placeholder.webp";
export const PostCard: FC<{ post: apiDataProps }> = ({ post }) => {
  const { title, slug, cover_image, tag_list, social_image, user, created_at } =
    post;
  return (
    <Link href={`/post/${slug}`} className="w-full h-full">
      <Card className="w-full h-full shadow-none ">
        <CardContent className="w-full relative">
          <Image
            src={cover_image || social_image || PlaceholderImage}
            alt="Card image"
            width={360}
            height={240}
            className="w-full aspect-video object-cover rounded-sm"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk1/1VDwADIAGv5IhXNQAAAABJRU5ErkJggg=="
          />
        </CardContent>
        <CardHeader>
          <CardDescription className="text-sm text-accent bg-gray-100 w-fit p-1 rounded-sm capitalize">
            {tag_list[0]}
          </CardDescription>

          <CardTitle
            title={title}
            className="text-lg font-bold line-clamp-2 h-14  w-full text-ellipsis"
          >
            {title}
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <AuthorCard created_at={created_at} user={user} />
        </CardFooter>
      </Card>
    </Link>
  );
};
