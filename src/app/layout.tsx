import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProviderWrapper } from "@/components/QueryProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "FACT 2024",
    description:
        "Filipino Americans Coming Together conference presented by the Philippine Student Association at UIUC",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <QueryProviderWrapper>{children}</QueryProviderWrapper>
            </body>
        </html>
    );
}
