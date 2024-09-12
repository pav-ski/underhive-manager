import "@mantine/core/styles.css";
import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";

import { AppShell } from "@mantine/core";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Header, Navbar, Main } from "./components/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Underhive managment",
  description: "Underhive managment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider>
          <AppShell
            header={{ height: { base: 48, sm: 60, lg: 76 } }}
            navbar={{ width: { sm: 200, lg: 300 }, breakpoint: "sm" }}
          >
            <Header />
            <Main>{children}</Main>
            <Navbar />
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
