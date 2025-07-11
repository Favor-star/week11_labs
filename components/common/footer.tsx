import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 px-4 mt-10 ">
      <section className="w-full max-w-screen-xl mx-auto flex flex-col gap-5 md:flex-row  items-start justify-start md:justify-between py-10">
        <div className="w-full ">
          <h1 className="text-xl font-semibold">About us</h1>
          <p className="text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint aut reprehenderit earum in recusandae ipsa quas natus inventore
            accusantium porro ab asperiores vero explicabo nam unde, vitae
            tempore corporis eligendi alias!
          </p>
        </div>
        <div className="space-y-5 w-full">
          <h1 className="text-xl font-semibold mx-auto w-full text-start md:text-center">
            Useful links
          </h1>
          <nav className="w-full ">
            <ul className="flex flex-col md:mx-auto w-fit ">
              <ul>Home</ul>
              <ul>About</ul>
              <ul>Dashboard</ul>
            </ul>
          </nav>
        </div>
        <div className="space-y-5 w-full">
          <h1 className="text-xl font-semibold">Join us Now</h1>
          <p>Join our weekly newspaper</p>
          <div className="w-full flex flex-col gap-3 md:flex-row items-center ">
            <Button variant={"outline"} className="flex-1 w-full">
              Sign In
            </Button>
            <Button className="flex-1 w-full">Rgister</Button>
          </div>
        </div>
      </section>
    </footer>
  );
};
