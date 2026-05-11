/** Mirrors `basePath` from next.config (set via NEXT_PUBLIC_BASE_PATH on CI). */
export function publicPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
