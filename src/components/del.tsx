import { HTMLAttributes } from "react";

interface DelProps extends HTMLAttributes<HTMLSpanElement> {}

export default function Del(props: DelProps) {
  return <span className={"text-red-600 dark:text-red-500"} {...props} />;
}
