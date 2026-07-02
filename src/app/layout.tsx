import "@/constants/styles/globals.css"
import Footer from "@/ui/footer"
import Head from "@/ui/head"
import Navbar from "@/ui/navbar"
import NPorgessBar from "@/ui/nprogress-bar"
import { Layout } from "nextra-theme-docs"
import "nextra-theme-docs/style.css"
import { getPageMap } from "nextra/page-map"
import React from "react"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          pageMap={await getPageMap()} // require
          navbar={<Navbar />}
          footer={<Footer />}
          sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 1 }}
          navigation={{ prev: true, next: true }}
          editLink={null}
          docsRepositoryBase={undefined}
          feedback={{ content: null }}
          toc={{ title: "Contents" }}
        >
          <main data-pagefind-body>
            <NPorgessBar>{children}</NPorgessBar>
          </main>
        </Layout>
      </body>
    </html>
  )
}
