import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notosans = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KisoCore Ver2",
  description: "基礎を固めるために作成されたサービス「KisoCore Ver2」です。このサイトでプロダクト紹介ページからサービスへアクセスできます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notosans.className}>{children}</body>
    </html>
  );
}
