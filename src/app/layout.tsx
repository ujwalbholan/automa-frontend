import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ModalProvider from "@/components/providers/model-provider";

// Geist
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// Geist_Mono
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Automa",
  description: "Automation tool to auomate your workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={font.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
