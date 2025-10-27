import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { RegisterForm } from "../forms/register-form";

export function RegisterCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Register a new account</CardTitle>
        <CardDescription>
          Enter your basic information below to register an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter className="flex-col gap-2 ">
        <Link href={"/login"}>
          <Button variant={"link"}>Already have an account? Login</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
