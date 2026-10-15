import { HTMLAttributes } from "react";

interface BoldProps extends HTMLAttributes<HTMLSpanElement> {}

export default function Bold(props: BoldProps) {
  return <span className={"text-blue-700 dark:text-blue-600"} {...props} />;
}
