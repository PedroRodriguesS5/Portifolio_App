import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { GlobalContextProvider } from "./Context/project";
import "./css/globals.css";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

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
      <body className={jetBrains.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
