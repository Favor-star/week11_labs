import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { User } from "lucide-react";
import { AuthorCard } from "./author-card";
export const PostCard = () => {
  return (
    <Card className="w-full shadow-none ">
      <CardContent className="w-full relative">
        <Image
          src={"/card-image.png"}
          alt="Card image"
          width={360}
          height={240}
          className="w-full aspect-video rounded-sm"
        />
      </CardContent>
      <CardHeader>
        <CardDescription className="text-sm text-accent bg-gray-100 w-fit p-1 rounded-sm">
          Technology
        </CardDescription>
        <CardTitle className="text-xl font-bold  w-full">
          The Impact of Technology on the Workplace: How Technology is Changing
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <AuthorCard />
      </CardFooter>
    </Card>
  );
};
