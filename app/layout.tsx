import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Redirect, Session} from "../shared/components/auth/session";
import {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Bunny Web",
    description: "Generated by Ruiwen Zeng, zrwaus@gmail.com",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Session>
            <Redirect>
                {children}
            </Redirect>
        </Session>
        </body>
        </html>
    );
}
