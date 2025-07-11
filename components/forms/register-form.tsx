import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";

export const RegisterForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="fullName">Full name</Label>
            <p className="text-xs text-red-500"> Name is required</p>
          </div>
          <Input
            id="fullName"
            type="text"
            placeholder="Favour Eliab"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="email">Email</Label>
            <p className="text-xs text-red-500">Invalid email</p>
          </div>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <p className="text-xs text-red-500"> Minimum 8 characters</p>
          </div>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="confirmPassword">Confirm Passowrd</Label>
            <p className="text-xs text-red-500"> Passowrd must match</p>
          </div>
          <Input id="confirmPassword" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
};
