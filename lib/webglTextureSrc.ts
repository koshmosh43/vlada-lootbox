/** WebGL needs CORS; public CDNs often omit ACAO. wsrv.nl mirrors with permissive headers. */
export function webglTextureSrc(url: string): string {
  const u = url.trim();
  if (!u) return u;
  if (u.startsWith("blob:") || u.startsWith("data:")) return u;
  if (u.startsWith("/") || u.startsWith("./")) return u;
  if (!/^https?:\/\//i.test(u)) return u;
  return `https://wsrv.nl/?url=${encodeURIComponent(u)}`;
}
