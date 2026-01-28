/**
 * When Next.js `basePath` is configured, absolute URLs like `/foo.png`
 * must be prefixed with the base path (e.g. `/my-repo/foo.png`).
 *
 * We expose a tiny helper so components can build correct asset URLs
 * in both dev (no base path) and production (with base path).
 */
// Fallback ensures assets work even if `NEXT_PUBLIC_BASE_PATH` wasn't injected
// into an already-running dev server process.
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH ?? "/San-Angelo-Korean-Baptist-Church-College-Student-Page";

export function withBasePath(path: string) {
  if (!path) return BASE_PATH || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

