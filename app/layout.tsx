import type { Metadata } from "next"; import "./globals.css"; import { Header } from "@/components/Header"; import { Footer } from "@/components/Footer";
export const metadata: Metadata = { title: { default: "Maximus | AI Workers", template: "%s | Maximus" }, description: "Deploy capable AI workers for the work that moves your business forward." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>; }
