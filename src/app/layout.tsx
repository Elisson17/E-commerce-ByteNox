import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Container from "@/components/DefaultContainer/Container";
import { Hydration } from "@/components/Hydration";
import { useServerSession as getServerSession } from "@/hooks/useServerSession";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteNox",
  description: "ByteNox - Hardware e Tecnologia",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers session={session}>
          <Hydration>
            <Container>{children}</Container>
          </Hydration>
        </Providers>
      </body>
    </html>
  );
}
