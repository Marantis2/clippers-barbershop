import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HairParticles } from "@/components/shared/HairParticles";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://clippers-ginnheim.de"),
  title: "Clippers Ginnheim | Barbershop Frankfurt",
  description:
    "Professionelle Haarschnitte und Bartpflege in Frankfurt-Ginnheim. 4.7 Sterne auf Google · Jetzt online buchen via Booksy.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Clippers Ginnheim",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HairParticles />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
