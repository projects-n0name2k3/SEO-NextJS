import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Bilibili Shop",
    default: "Bilibili - Shop thời trang hàng đầu",
  },
  description:
    "Tiện lợi mua sắm hàng triệu mặt hàng, dịch vụ. Vô vàn ưu đãi freeship, mã giảm giá.",
  keywords: "shop thời trang, bilibili, mua sắm online",
  openGraph: {
    title: "Bilibili - Shop thời trang hàng đầu",
    description: "Tiện lợi mua sắm hàng triệu mặt hàng, dịch vụ.",
    type: "website",
    images: [
      "https://streamersvisuals.com/cdn/shop/articles/bilibili_gaming.jpg?v=1727965853&width=1100",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={inter.className}
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
