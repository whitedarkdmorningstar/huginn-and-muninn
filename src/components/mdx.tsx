import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import Blockquote from "./blockquote";
import Code from "./code";
import Del from "./del";
import Bold from "./bold";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    blockquote: Blockquote,
    code: Code,
    del: Del,
    bold: Bold,
    strong: Bold,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
