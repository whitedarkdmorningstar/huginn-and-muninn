import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import Blockquote from "./blockquote";
import Img from "./img";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    blockquote: Blockquote,
    img: Img,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
