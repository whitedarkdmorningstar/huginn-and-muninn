export default function Code(props: any) {
  return (
    <code
      className={
        "text-black dark:text-white text-base bg-slate-100 dark:bg-slate-800 rounded-sm px-1 py-0.5 me-0.5"
      }
      {...props}
    />
  );
}
