import { User } from "lucide-react";
export const AuthorCard = () => {
  return (
    <div className="w-full flex flex-row gap-2 items-center ">
      <User size={30} className="rounded-full border border-foreground" />
      <p className="text-sm text-black/70">Jason Fransisco</p>
      <p className="text-sm text-black/70">August 20, 2024</p>
    </div>
  );
};
