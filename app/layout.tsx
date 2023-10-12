import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "@/providers";
import type { AppProps } from "next/app";

export const metadata: Metadata = {
  title: "NoteQuest",
  description: "Full Stack Note Taking Application",
};

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode;
  },
  pageProps: AppProps
) {
  return (
    <ClerkProvider {...pageProps}>
      <html
        lang="en"
        className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full"
      >
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
