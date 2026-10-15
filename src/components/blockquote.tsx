import { cn } from "@/lib/cn";
import React from "react";

// Types

export type CalloutType =
  | "default"
  | "error"
  | "info"
  | "warning"
  | "important";

// Functions

function isReactElementWithChildren(
  node: React.ReactNode,
): node is React.ReactElement<{ children?: React.ReactNode }> {
  return React.isValidElement(node);
}

/**
 * Extracts plain text across all nested React elements to check the final ending character(s)
 */
const extractInnerText = (node: React.ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractInnerText).join("");
  }

  if (isReactElementWithChildren(node) && node.props.children) {
    return extractInnerText(node.props.children);
  }

  return "";
};

const getBlockquoteStatus = (children: React.ReactNode): CalloutType => {
  const fullText = extractInnerText(children).trim();

  // Check punctuation rules in precedence order
  if (fullText.endsWith("!!")) return "error";
  if (fullText.endsWith("!")) return "warning";
  if (fullText.endsWith(".") || fullText.endsWith("။")) return "info";
  if (fullText.endsWith(")")) return "important";

  return "default";
};

// Component

export default function Blockquote({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const calloutType: CalloutType = getBlockquoteStatus(children);

  return (
    <div
      className={cn(
        "blockquote my-4 overflow-x-auto rounded-lg border p-2 font-normal transition-colors [&>p]:m-0",
        // Color themes matching Nextra blockquote/callout style (Light / Dark)
        (calloutType === "info" || calloutType === "default") &&
          "border-blue-700 text-blue-700 bg-blue-100/50 dark:bg-blue-800/20 dark:text-blue-600 dark:border-blue-600",
        calloutType === "error" &&
          "border-red-700 text-red-700 bg-red-100/50 dark:bg-red-800/20 dark:text-red-600 dark:border-red-600",
        calloutType === "warning" &&
          "border-yellow-600 text-yellow-600 bg-yellow-100/50 dark:bg-yellow-700/20",
        calloutType === "important" &&
          "border-purple-700 text-purple-700 bg-purple-100/50 dark:bg-purple-800/20 dark:text-purple-600 dark:border-purple-600",

        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
