import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TechClassNavbar } from "@/components/tech-class-navbar";

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

// Static inline script to prevent theme flash (FOUC).
// This is a hardcoded string with no user input — safe to use with dangerouslySetInnerHTML.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className={`${nunito.variable} antialiased`}>
        <ThemeProvider>
          <a
            href="#inicio"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
          >
            Pular para o conteúdo
          </a>
          <TechClassNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
