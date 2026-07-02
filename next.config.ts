import type { NextConfig } from "next"
import nextra from "nextra"

const withNextra = nextra({/**Nextra config */})

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      "next-mdx-import-source-file": "./src/mdx-components.tsx",
    },
  },
}

export default withNextra(nextConfig)
