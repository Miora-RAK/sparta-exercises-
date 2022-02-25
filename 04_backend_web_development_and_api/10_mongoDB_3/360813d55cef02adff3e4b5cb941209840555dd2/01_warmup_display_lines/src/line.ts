export function line(numberOfStars: number): string {
  let star = "";
  for (let i = 0; i < numberOfStars; i++) {
    star += "*";
  }
  return star;
}
