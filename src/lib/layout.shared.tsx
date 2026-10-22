import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import { appName } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className={"flex items-center gap-2"}>
          <Image src={"/favicon.ico"} alt={appName} width={48} height={48} />
          <span className={"hidden md:inline"}>{appName}</span>
        </div>
      ),
    },
  };
}
