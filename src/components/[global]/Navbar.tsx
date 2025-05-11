// import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "@/components/providers/ModeToggle";
import { getUser } from "@/lib/getUser";
// import { Button } from "@/components/ui/button";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// type Props = object;

const Navbar = async () => {
  const isLoggedIn = await getUser();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center
     justify-around w-full h-16 px-4  bg-white border-b
      border-gray-200 dark:bg-neutral-950  dark:border-gray-900 cursor-pointer"
    >
      <aside className="flex items-center gap-4">Automa</aside>
      <nav
        className="absolute left-[50%] top-[50%] transform 
        translate-x-[-50%] translate-y-[-50%] hidden md:block"
      >
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <ModeToggle />
        {/* <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"}>Get Started</Button>
          </PopoverTrigger>
          <PopoverContent> */}
            <Link
              href={isLoggedIn ? "/dashboard" : "/login"}
              className="relative inline-flex h-10 overflow-hidden rounded-full
           p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400
            focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
           bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
              />
              <span
                className="inline-flex h-full w-full cursor-pointer items-center 
          justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium
           text-white backdrop-blur-3xl"
              >
                {isLoggedIn ? "Dashboard" : "Get Started"}
              </span>
            </Link>
          {/* </PopoverContent>
        </Popover> */}
        {/*user ? <UserButton afterSignOutUrl="/" /> : null*/}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export { Navbar };
