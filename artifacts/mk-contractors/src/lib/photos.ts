const AVAILABLE_PHOTOS = new Set<number>([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32]);

export function getPhoto(number: number | undefined): string | undefined {
  if (typeof number !== "number") return undefined;
  if (!AVAILABLE_PHOTOS.has(number)) return undefined;
  return `${import.meta.env.BASE_URL}photos/photo-${number}.jpg`;
}
