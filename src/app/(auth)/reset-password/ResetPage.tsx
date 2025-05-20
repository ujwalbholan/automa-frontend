"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const ResetPage = () => {
  const resetUrl = process.env.NEXT_PUBLIC_RESET_URL as string;
  const [email, setEmail] = useState("");
  const [Oldpassword, setOldPassword] = useState("");
  const [Newpassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(resetUrl, {
        email: email,
        Oldpassword: Oldpassword,
        Newpassword: Newpassword,
      });

      if (response.status >= 200 && response.status < 300) {
        router.push("/login");
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
    <div className="flex justify-center items-center flex-col">
      <form
        onSubmit={handleSubmit}
        className="w-[425] h-[400] flex justify-center items-center flex-col border shadow-2xl rounded-2xl space-y-3 "
      >
        <div className="grid w-full max-w-sm gap-1.5">
          <div className="flex justify-center items-center">
            <p className="font-medium">Reset Password</p>
          </div>
          <Label className="m-1" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="grid w-full max-w-sm gap-1.5">
          <Label className="m-1" htmlFor="Oldpassword">
            Old Password
          </Label>
          <Input
            id="password"
            type="Oldpassword"
            value={Oldpassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Old Password"
          />
        </div>

        <div className="grid w-full max-w-sm gap-1.5">
          <Label className="m-1" htmlFor="Newpassword">
            New Password
          </Label>
          <Input
            id="password"
            type="Newpassword"
            value={Newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full border max-w-sm shadow cursor-pointer"
          onClick={() => {
            toast("User Login Successully", {
              action: {
                label: "Undo",
                onClick: () => Label,
              },
            });
          }}
        >
          {loading ? "Logging in..." : "Reset"}
        </Button>
        <div className="flex justify-center items-center">
          <p>
            <Link className="text-blue-500" href={"/login"}>
              Go To Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ResetPage;
