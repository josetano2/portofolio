import type { ImageMetadata } from "astro";

export function importImageDetails(
  imageFile: Record<string, { default: string }>,
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

  return arr;
}
