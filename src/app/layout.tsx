import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Smart", template: "%s · Smart" },
  description: "Launch-readiness assessment for startups",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${arimo.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
