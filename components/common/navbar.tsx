import React from "react";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="w-full max-w-screen-xl py-5 flex items-center justify-between">
      <h1>InsightEdge</h1>
      <nav className="w-fit">
        <ul className="flex gap-3 items-center justify-center ">
          <li>Home</li>
          <li>About</li>
          <li>Posts</li>
        </ul>
      </nav>
      <div className="md:flex items-center gap-3 justify-center w-fit hidden">
        <Button variant={"secondary"}>Sign in</Button>
        <Button variant={"default"}>Register</Button>
      </div>
    </header>
  );
};
