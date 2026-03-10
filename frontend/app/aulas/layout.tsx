import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function AulasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`aula-theme ${spaceMono.variable} bg-(--color-background) text-(--color-foreground) min-h-screen`}
    >
      <div className="aula-grid-bg relative z-10">{children}</div>
    </div>
  );
}
