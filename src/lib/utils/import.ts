import type { ImageMetadata } from "astro";

export function importImageDetails(
  imageFile: Record<string, unknown>,
): ImageMetadata[] {
  let arr: ImageMetadata[] = [];

  for (const p in imageFile) {
    const imageMetadata: ImageMetadata = {
      src: p,
      width: 1000,
      height: 500,
      format: "png",
    };
    arr.push(imageMetadata);
  }

  arr.sort((a, b) => {
    const nameA = a.src.split("/").pop() || "";
    const nameB = b.src.split("/").pop() || "";
    return nameA.localeCompare(nameB);
  });

  return arr;
}
