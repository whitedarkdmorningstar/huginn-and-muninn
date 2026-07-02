import { NotFoundPage } from "nextra-theme-docs"

export default function NotFound() {
  return (
    <NotFoundPage labels={"404 Not Found."} content={null}>
      <h1
        className={
          "gap-4 flex lg:flex-row flex-col justify-center items-center"
        }
      >
        <div className={"font-bold pe-4 text-2xl "}>404 Error</div>
        <div className={"w-0.5 h-12 bg-neutral-700 lg:block hidden"} />
        <div className={"text-lg"}>This page is not found.</div>
      </h1>
    </NotFoundPage>
  )
}
