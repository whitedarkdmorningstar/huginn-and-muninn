export function capitalize(text: string) {
  const splitAtThese = [" ", "-", "_", ",", "[", "]"];
  let newText = text;

  splitAtThese.map((e) => {
    newText = text
      .split(e)
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(e);
  });

  return newText;
}
