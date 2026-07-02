import APP from "@/constants/configs/app"
import Image from "next/image"
import { Navbar as NextraNavbar } from "nextra-theme-docs"

export function Logo() {
  return (
    <div className="flex flex-row items-center gap-3">
      <Image
        src={"/favicon.ico"}
        width={APP.logoSize}
        height={APP.logoSize}
        alt={"Logo"}
        className="flex dark:hidden"
      />
      <Image
        src={"/favicon-dark.ico"}
        width={APP.logoSize}
        height={APP.logoSize}
        alt={"Logo"}
        className="hidden dark:flex"
      />
      <span className="hidden lg:inline-flex ms-2 text-2xl font-bold">
        Huginn & Muninn
      </span>
    </div>
  )
}

export default function Navbar() {
  return (
    <NextraNavbar
      logo={<Logo />}
      projectLink={undefined}
      chatLink={undefined}
    ></NextraNavbar>
  )
}
