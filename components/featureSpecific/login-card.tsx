import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "../forms/login-form";

export function LoginCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="flex-col gap-2 ">
        {/* <div className="flex flex-row w-full items-center gap-2">
          <Button variant="outline" className="flex-1">
            Login with Google
          </Button>
          <Button variant="outline" className="flex-1">
            Login with Github
          </Button>
        </div> */}
        <Link href={"/register"}>
          <Button variant={"link"}>Don&apos;'t have an account? Sign up</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
