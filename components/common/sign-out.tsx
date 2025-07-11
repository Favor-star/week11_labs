"use client";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <Button
      variant={"destructive"}
      onClick={() => signOut({ redirectTo: "/login" })}
    >
      Logout
      <LogOut />
    </Button>
  );
};
