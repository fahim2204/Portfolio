import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fahimfaisal.net"),
  title: "Fahim Faisal | Full Stack Developer",
  description:
    "Compact modern portfolio for Fahim Faisal, a Bangladesh-based full stack developer building web products and software with React, Next.js, ASP.NET, PHP, and Flutter.",
  openGraph: {
    title: "Fahim Faisal | Full Stack Developer",
    description:
      "Selected work, experience, and contact details for Fahim Faisal.",
    images: ["/assets/imgs/FahimFaisal.webp"],
    url: "https://fahimfaisal.net",
    siteName: "Fahim Faisal",
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
