import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { LogOut } from "lucide-react";
import { SignOutButton } from "./sign-out";

export const Navbar = async () => {
  const session = await auth();
  console.log(session?.user);

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
        </div>
      )}
    </header>
  );
};
