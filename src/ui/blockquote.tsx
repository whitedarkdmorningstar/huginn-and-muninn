import { Callout } from "nextra/components";
import React from "react";

// Types

declare const TypeToEmoji: {
  default: React.JSX.Element;
  error: React.JSX.Element;
  info: React.JSX.Element;
  warning: React.JSX.Element;
  important: React.JSX.Element;
};

type CalloutType = keyof typeof TypeToEmoji;

type BlockquoteProps = Omit<
  React.DetailedHTMLProps<
    React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >,
  "ref"
>;

// Functions

function isReactElementWithChildren(
  node: React.ReactNode,
): node is React.ReactElement<{ children?: React.ReactNode }> {
  return React.isValidElement(node);
}

const getBlockquoteStatus = (children: React.ReactNode): CalloutType => {
  // Helper function to recursively check children
  const checkChildren = (nodes: React.ReactNode): CalloutType => {
    for (const child of React.Children.toArray(nodes)) {
      if (isReactElementWithChildren(child)) {
        // Check if the current element is a blockquote
        if (child.props && child.props.children) {
          const textContent = React.Children.toArray(child.props.children)
            .filter((c) => typeof c === "string") // Extract only text nodes
            .join("")
            .trim();

          // Error callout must end with !!!
          if (textContent.endsWith("!!")) return "error";
          // Warning callout must end with !
          if (textContent.endsWith("!")) return "warning";
          // Info callout must end with . or ။
          if (textContent.endsWith(".") || textContent.endsWith("။"))
            return "info";
          if (textContent.endsWith(")")) return "important";
        }

        // Recursively check nested children
        const nestedStatus = checkChildren(child.props.children);
        if (nestedStatus !== "default") return nestedStatus;
      }
    }

    return "default"; // Default status if no match is found
  };

  return checkChildren(children);
};

export default function Blockquote({ children }: BlockquoteProps) {
  if (!children) return null;

  const calloutType: CalloutType = getBlockquoteStatus(children);

  return <Callout type={calloutType}>{children}</Callout>;
}
