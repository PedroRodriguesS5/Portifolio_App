import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "./Context/project";
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
      <body className={inter.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
