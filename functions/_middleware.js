// Content negotiation for Markdown: the same URL serves HTML by default
// and a real Markdown twin when the client explicitly asks for
// text/markdown. See /.well-known/ai-catalog.json for the catalog.
function markdownQuality(accept) {
  if (!accept) return null;
  let mdQ;
  let htmlQ;
  for (const part of accept.split(',')) {
    const segments = part.trim().split(';').map((s) => s.trim());
    const type = segments[0].toLowerCase();
    let q = 1;
    for (const p of segments.slice(1)) {
      const m = p.match(/^q=([0-9.]+)$/);
      if (m) q = parseFloat(m[1]);
    }
    if (type === 'text/markdown') mdQ = q;
    if (type === 'text/html') htmlQ = q;
  }
  if (mdQ === undefined || mdQ <= 0) return null;
  if (htmlQ !== undefined && mdQ < htmlQ) return null;
  return mdQ;
}

export async function onRequest(context) {
  const { request, next, env } = context;
  if (request.method !== 'GET' && request.method !== 'HEAD') return next();
  if (markdownQuality(request.headers.get('Accept')) === null) return next();
  const url = new URL(request.url);
  if (url.pathname.endsWith('.md')) return next();
  if (/\/[^/]+\.[a-z0-9]+$/i.test(url.pathname)) return next();
  const mdPath = url.pathname.endsWith('/')
    ? url.pathname + 'index.md'
    : url.pathname + '/index.md';
  const asset = await env.ASSETS.fetch(new URL(mdPath, url));
  if (!asset.ok) return next();
  const headers = new Headers(asset.headers);
  headers.set('Content-Type', 'text/markdown; charset=utf-8');
  headers.set('Vary', 'Accept');
  return new Response(asset.body, { status: 200, headers });
}
