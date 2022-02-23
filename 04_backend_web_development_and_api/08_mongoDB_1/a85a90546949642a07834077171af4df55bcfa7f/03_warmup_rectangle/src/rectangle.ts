export function rectangle(width: number, height: number): string {
  let star = "\n";
  const result = [];
  for (let i = 1; i <= width; i++) {
    star += "*";
  }
  for (let i = 1; i <= height; i++) {
    result.push(star);
  }
  return result.join("");
}

console.log(rectangle(2, 4));
