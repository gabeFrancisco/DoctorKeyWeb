import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import NextAuthSessionProvider from "./providers/NextAuthSessionProvider";

import "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";

import { Providers } from "@/components/Provider/Provider";
config.autoAddCss = false;

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doctor Key",
  description: "Gerenciador de chaves automotivas inteligente.",
  icons: ["favicon.ico"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={josefin.className}>
        <Providers>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </Providers>
      </body>
    </html>
  );
}
