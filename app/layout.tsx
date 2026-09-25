import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bússola do Emagrecimento",
  description: "Guia prático sobre emagrecimento com saúde: alimentação, exames, suplementação e uma jornada real.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
