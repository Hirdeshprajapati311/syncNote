import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";
import QueryProvider from "../../providers/QueryProvider";
import { Toaster } from "sonner";
import StoreProvider from "../../providers/StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "SyncNote",
  description: "yncNote is a local-first collaborative document platform with real-time editing, offline support, version history, and seamless synchronization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StoreProvider>
          <QueryProvider>
            {children}
            <Toaster position="top-right" richColors />
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
