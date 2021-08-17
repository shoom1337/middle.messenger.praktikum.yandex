const DANGEROUS = ["script", "div"];

export default function (str: string): string {
  let result = str;
  for (const danger of DANGEROUS) {
    const start = `<${danger}>`;
    const end = `</${danger}>`;
    while (result.includes(start) || result.includes(end)) {
      result = result.replace(start, "");
      result = result.replace(end, "");
    }
  }
  return result;
}
