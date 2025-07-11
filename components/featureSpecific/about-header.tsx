import { Button } from "../ui/button";

export const AboutHeader = () => {
  return (
    <div className="py-10 px-5 flex items-center flex-col gap-4 justify-center  bg-gray-200 rounded-xl mt-10">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-center max-w-96 w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
        officiis beatae molestiae aliquam provident amet error distinctio
        molestias quasi saepe?
      </p>
      <div className="flex gap-3">
        <Button variant={"outline"}>View Articles</Button>
        <Button variant={"default"}>Sign up</Button>
      </div>
    </div>
  );
};
