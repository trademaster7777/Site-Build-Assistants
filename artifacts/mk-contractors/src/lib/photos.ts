const AVAILABLE_PHOTOS = new Set<number>([2, 3, 4, 5, 6, 7]);

export function getPhoto(number: number | undefined): string | undefined {
  if (typeof number !== "number") return undefined;
  if (!AVAILABLE_PHOTOS.has(number)) return undefined;
  return `${import.meta.env.BASE_URL}photos/photo-${number}.jpg`;
}
