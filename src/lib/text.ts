/** Joins items into a Swedish sentence list: "A, b och c". */
export function sentenceList(items: readonly string[]) {
  const [first, ...rest] = items;
  const words = [first, ...rest.map((item) => item.charAt(0).toLowerCase() + item.slice(1))];
  return words.length > 1 ? `${words.slice(0, -1).join(", ")} och ${words.at(-1)}` : (first ?? "");
}
