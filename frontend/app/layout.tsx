import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tech Class — Lógica de Programação",
  description:
    "Aulas interativas de Lógica de Programação com quizzes, simuladores e exercícios práticos. Baseado nas aulas do professor André Noel (CETAM).",
  openGraph: {
    title: "Tech Class — Lógica de Programação",
    description:
      "11 aulas interativas de Lógica de Programação com quizzes, simuladores e exercícios práticos.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} antialiased`}>
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
