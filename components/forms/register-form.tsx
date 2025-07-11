"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { signUpSchema, SignUpSchemaProps } from "@/schema";
import { TriangleAlert, Loader } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchemaProps>({
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit: SubmitHandler<SignUpSchemaProps> = async ({
    name,
    email,
    password,
  }) => {
    const errorMessage = await signUp({
      email,
      password,
      name,
    });
    if (errorMessage) {
      setError("root", { message: errorMessage });
      return;
    }
    router.push("/login");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="fullName">Full name</Label>
            <p className="text-xs text-red-500">{errors.name?.message}</p>
          </div>
          <Input
            id="fullName"
            type="text"
            placeholder="Favour Eliab"
            {...register("name")}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="email">Email</Label>
            <p className="text-xs text-red-500">{errors.email?.message}</p>
          </div>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email")}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <p className="text-xs text-red-500">{errors.password?.message}</p>
          </div>
          <Input id="password" type="password" {...register("password")} />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="confirmPassword">Confirm Passowrd</Label>
            <p className="text-xs text-red-500">
              {errors.confirmPassword?.message}
            </p>
          </div>
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
          />
        </div>
        <Button type="submit" className="w-full">
          {isSubmitting && <Loader className="animate-spin" />}
          Register
        </Button>
      </div>
      {errors.root && (
        <div className="w-full flex gap-2 rounded-lg border py-3 mt-3 text-red-500 px-3 border-red-500 bg-red-500/20">
          <TriangleAlert size={20} strokeWidth={1.5} />
          <p className="text-xs text-red-500">{errors.root.message}</p>
        </div>
      )}
    </form>
  );
};
