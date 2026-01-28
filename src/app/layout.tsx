import type { Metadata, Viewport } from "next";
import "./globals.css";
import { withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "KBC 청년부",
  description: "San Angelo Korean Baptist Church 청년부 정보 페이지",
  manifest: withBasePath("/manifest.json"),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "KBC 청년부",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#4A6FA5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="apple-touch-icon" href={withBasePath("/icons/apple-icon.png")} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
