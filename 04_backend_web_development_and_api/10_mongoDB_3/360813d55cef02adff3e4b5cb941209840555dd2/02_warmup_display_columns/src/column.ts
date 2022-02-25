export function column(numberOfLines: number, lineContent: string): string {
  const character = "\n";
  const result = [];
  for (let i = 0; i < numberOfLines; i++) {
    result.push(`${lineContent}${character}`);
  }
  return result.join("");
}
