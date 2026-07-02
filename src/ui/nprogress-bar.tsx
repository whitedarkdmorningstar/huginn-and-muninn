"use client";

import { AppProgressProvider } from "@bprogress/next";

export default function NPorgessBar({ children }: any) {
  return (
    <AppProgressProvider
      height="3px"
      color="#0076FF"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </AppProgressProvider>
  );
}
