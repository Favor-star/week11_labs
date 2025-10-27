"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, LoginSchemaProps } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, TriangleAlert } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaProps>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginSchemaProps> = async ({
    email,
    password,
  }) => {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.error === "CredentialsSignin") {
      setError("root", { message: "Invalid email or password" });
      return;
    }
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="email">Email</Label>
            <p className="text-xs text-red-500">
              {errors.email && errors.email.message}
            </p>
          </div>
          <Input
            id="loginEmail"
            type="email"
            placeholder="m@example.com"
            // required
            {...register("email")}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <p className="text-xs text-red-500">
              {errors.password && errors.password.message}
            </p>
          </div>

          <Input id="loginPassword" type="password" {...register("password")} />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting && <Loader className="animate-spin" />}
          Login
        </Button>
      </div>
      {errors.root && (
        <div className="w-full flex gap-2 rounded-lg border py-3 mt-3 text-red-500 px-3 border-red-500 bg-red-500/20">
          <TriangleAlert size={20} strokeWidth={1.5} />
          <p className="text-red-500">{errors.root?.message}</p>
        </div>
      )}
    </form>
  );
};
