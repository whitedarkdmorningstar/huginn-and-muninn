import APP from "@/constants/configs/app"
import { Head as NextraHead } from "nextra/components"

export default function Head() {
  return (
    <NextraHead
      color={{
        hue: { light: 226, dark: 210 },
        saturation: 100,
        lightness: {
          dark: 50,
          light: 50,
        },
      }}
      backgroundColor={{ light: "#fff", dark: "#171717" }}
      // faviconGlyph=""
    >
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#fff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      {/* <meta name="keyword" content={title} />  */}
      <meta name="description" content={APP.description} />
      <meta name="og:description" content={APP.description} />
      {/* <meta
        name="og:title"
        content={title ? `${title} - ${APP.name}` : APP.name}
      /> */}
      <meta name="apple-mobile-web-app-title" content={APP.name} />
      <link rel="icon" href="/favicon.ico" type="image/ico" />
      {/**favicon for dark mode of browser */}
      <link
        rel="icon"
        href="/favicon-dark.ico"
        type="image/ico"
        media="(prefers-color-scheme: dark)"
      />
      {/** favicon for light mode of browser */}
      <link
        rel="icon"
        href="/favicon.ico"
        type="image/ico"
        media="(prefers-color-scheme: light)"
      />
      {/* <title>{title || APP.name}</title> */}
    </NextraHead>
  )
}
