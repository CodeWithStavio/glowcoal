import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "جلو كول | فحم مضغوط طبيعي 100%",
  description:
    "جلو كول - فحم نشارة خشب طبيعي 100%. فحم مضغوط عالي الجودة بدون مواد كيميائية، بدون دخان، بدون رائحة. مثالي للمطاعم والشواء والاستخدام الخارجي.",
  keywords: [
    "فحم مضغوط",
    "فحم طبيعي",
    "فحم شواء",
    "فحم بدون دخان",
    "جلو كول",
    "GlowCoal",
  ],
  authors: [{ name: "GlowCoal" }],
  openGraph: {
    title: "جلو كول | فحم مضغوط طبيعي 100%",
    description: "فحم نشارة خشب طبيعي 100% - بدون مواد كيميائية، بدون دخان، بدون رائحة",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-cairo antialiased">{children}</body>
    </html>
  );
}
