"use client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

const EmailCheck = () => {
  const [email, setEmail] = useState("");
  const [loading, ] = useState(false);

  return (
    <div className="flex justify-evenly items-start flex-col w-[400] h-[300] shadow-2xl border-2 p-5 m-2 rounded-2xl">
      <p className="font-bold">Enter Your Email</p>
      <Label className="font-medium" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Button
        type="submit"
        disabled={loading}
        className=" border shadow cursor-pointer"
        onClick={() => {
          toast("", {
            action: {
              label: "Undo",
              onClick: () => Label,
            },
          });
        }}
      >
        {loading ? "Logging in..." : "submit"}
      </Button>
    </div>
  );
};

export default EmailCheck;
