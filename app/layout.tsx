import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Notable } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const notable = Notable({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-notable",
});
export const metadata: Metadata = {
  title: "TechWolf",
  description: "A Design & Development Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notable.variable} font-normalText bg-[#151616]`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
