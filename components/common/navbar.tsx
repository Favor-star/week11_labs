import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { SignOutButton } from "./sign-out";
import { ModeToggle } from "./theme-toggle";

export const Navbar = async () => {
  const session = await auth();

  return (
    <header className="w-full max-w-screen-xl py-5 flex items-center justify-between">
      <h1 className="text-xl md:text-2xl font-black ">InsightEdge</h1>
      <nav className="w-fit">
        <ul className="md:flex gap-3 items-center justify-center hidden ">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
      {!session && (
        <div className="md:flex items-center gap-3 justify-center w-fit hidden">
          <Link href={"/login"}>
            <Button variant={"secondary"}>Sign in</Button>
          </Link>
          <Link href={"/register"}>
            <Button variant={"default"}>Register</Button>
          </Link>
        </div>
      )}
      {session && (
        <div className="flex gap-2">
          <SignOutButton />
          <Link href={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
          <ModeToggle />
        </div>
      )}
    </header>
  );
};
