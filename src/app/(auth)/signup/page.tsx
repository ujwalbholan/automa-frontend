"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";

const Signup = () => {
  const signupUrl = process.env.NEXT_PUBLIC_SIGN_UP_URL;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(signupUrl as string, {
        fullName: username,
        email: email,
        password: password,
      });

      console.log(response);

      // Set the token to cookie
      if (response.status >= 200 && response.status < 300) {
        const { accessToken } = response.data;
        Cookies.set("access_token", accessToken, {
          expires: 0.0104,
          secure: true,
        }); // expires in 15min

        toast("User Login Successully", {
          action: {
            label: "Undo",
            onClick: () => Label,
          },
        });

        router.push("/dashboard");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        throw {
          message: err.response?.data?.message || err.message,
          statusCode: err.response?.status || 500,
        };
      } else {
        throw {
          message: (err as Error).message,
          statusCode: 500,
        };
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div
          className="flex flex-col items-center justify-evenly w-[500px] h-[600px]
       max-w-sm p-4 space-y-2 border rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="w-[60px] h-[30px] m-4 font-bold">Automa.</div>
            <div className="text-center space-y-2">
              <h1 className="font-bold text-xl">Welcome Back</h1>
              <p>Please Enter Your Details To Register</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-3">
            <div className="grid w-full max-w-sm gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>

            <div className="grid w-full max-w-sm gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="grid w-full max-w-sm gap-1.5">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full border shadow cursor-pointer"
            >
              {loading ? "loading..." : "Signup"}
            </Button>
            <div className="text-center text-sm text-gray-400">
              -------------------- OR --------------------
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <Button
                type="button"
                onClick={() =>
                  (window.location.href = "/api/auth/signin/google")
                }
                className="w-full bg-white text-black border border-gray-300 shadow-sm
               hover:bg-gray-100 cursor-pointer"
              >
                {/* <img src="/google.svg" alt="Google" className="h-5 w-5 mr-2" /> */}
                Continue with Google
              </Button>
              <Button
                type="button"
                onClick={() =>
                  (window.location.href = "/api/auth/signin/github")
                }
                className="w-full bg-black text-white hover:bg-gray-900 cursor-pointer"
              >
                {/* <img
                src="/github.svg"
                alt="GitHub"
                className="h-5 w-5 mr-2 invert"
              /> */}
                Continue with GitHub
              </Button>
            </div>
            <div className="flex justify-center items-center">
              <p>
                Do you have an account?{" "}
                <Link className="text-blue-500" href={"/login"}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
