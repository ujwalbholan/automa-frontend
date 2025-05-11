// "use client";

// import { Button } from "../ui/button";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { Checkbox } from "../ui/checkbox";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// // import api from "@/lib/api";

// const ACCESS_TOKEN = "accessToken";
// const REFRESH_TOKEN = "refreshToken";

// interface Props {
//   route: string;
//   method: "login" | "register";
// }

// const Form = ({ route, method }: Props) => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const name = method === "login" ? "Login" : "Register";

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const payload =
//         method === "login"
//           ? { email, password }
//           : { username, email, password };
//       const response = await api.post(route, payload);

//       if (method === "login") {
//         localStorage.setItem(ACCESS_TOKEN, response.data.access);
//         localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
//         router.push("/dashboard");
//       } else {
//         router.push("/login");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full h-screen">
//       <div
//         className="flex flex-col items-center justify-evenly w-[500px] h-[600px]
//        max-w-sm p-4 space-y-2 border rounded-lg shadow-lg"
//       >
//         <div className="flex flex-col items-center justify-center">
//           <div className="w-[60px] h-[30px] m-4 font-bold">Automa.</div>
//           <div className="text-center space-y-2">
//             <h1 className="font-bold text-xl">Welcome Back</h1>
//             <p>Please Enter Your Details To {name}</p>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="w-full space-y-3">
//           {method === "register" && (
//             <div className="grid w-full max-w-sm gap-1.5">
//               <Label htmlFor="username">Username</Label>
//               <Input
//                 id="username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//               />
//             </div>
//           )}

//           <div className="grid w-full max-w-sm gap-1.5">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//             />
//           </div>

//           <div className="grid w-full max-w-sm gap-1.5">
//             <div className="flex justify-between">
//               <Label htmlFor="password">Password</Label>
//               <Link href="/forget-password" className="text-sm text-blue-500">
//                 Forgot Password?
//               </Link>
//             </div>
//             <Input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//             />
//           </div>

//           <div className="flex items-center space-x-2 cursor-pointer">
//             <Checkbox id="remember" />
//             <Label htmlFor="remember">Remember me</Label>
//           </div>

//           <Button
//             type="submit"
//             disabled={loading}
//             className="w-full border shadow cursor-pointer"
//           >
//             {loading ? "Processing..." : name}
//           </Button>

//           <div className="text-center text-sm text-gray-400">
//             -------------------- OR --------------------
//           </div>

//           <div className="flex flex-col space-y-2 w-full">
//             <Button
//               type="button"
//               onClick={() => (window.location.href = "/api/auth/signin/google")}
//               className="w-full bg-white text-black border border-gray-300 shadow-sm hover:bg-gray-100 cursor-pointer"
//             >
//               {/* <img src="/google.svg" alt="Google" className="h-5 w-5 mr-2" /> */}
//               Continue with Google
//             </Button>
//             <Button
//               type="button"
//               onClick={() => (window.location.href = "/api/auth/signin/github")}
//               className="w-full bg-black text-white hover:bg-gray-900 cursor-pointer"
//             >
//               {/* <img
//                 src="/github.svg"
//                 alt="GitHub"
//                 className="h-5 w-5 mr-2 invert"
//               /> */}
//               Continue with GitHub
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;
