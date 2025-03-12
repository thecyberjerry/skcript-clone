import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Roadmap | FeatureOS",
  description: "Programmed by Himanshu | @thecyberjerry",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased container mx-auto my-2 px-2 xl:px-36`}
      >
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
