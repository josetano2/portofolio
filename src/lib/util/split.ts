export function splitText(text: string): string[] {
  return text.split("");
}

export function renderSplittedSentence(text: string): string{
  return text === " " ? "\u00A0" : text;
}