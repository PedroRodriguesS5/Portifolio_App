import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro (Ochefe) da Silva",
  description: "Meu portifolio, aqui demonstro meus projetos e conquistas no mundo tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
