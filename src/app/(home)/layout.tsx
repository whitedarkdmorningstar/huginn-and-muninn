import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huginn and Muninn",
  icons: { icon: "/favicon.ico" },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
