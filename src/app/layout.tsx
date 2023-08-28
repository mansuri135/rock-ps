import "./globals.css";
import React from "react";

export const metadata = {
  title: "RPS Clash",
  description:
    "RPS Clash is a web-based Rock Paper Scissors game that allows users to play against a computer opponent. The objective of the game is to defeat the computer by choosing the winning move in each round",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
