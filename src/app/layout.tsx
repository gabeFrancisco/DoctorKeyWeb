import "./globals.css";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import NextAuthSessionProvider from "./providers/NextAuthSessionProvider";

import "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";

import { Providers } from "@/components/Provider/Provider";
config.autoAddCss = false;

const ubuntu = Archivo({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Doctor Key",
  description: "Seu gerenciador de chaves automotivas moderno e inteligente.",
  icons: ["favicon.ico"],
  manifest: 'manifest.json',
  themeColor: "#22C55E"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={ubuntu.className}>
        <Providers>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </Providers>
      </body>
    </html>
  );
}
