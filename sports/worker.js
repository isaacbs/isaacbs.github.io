// Cloudflare Worker: relays GET /<sport>/<league>/... to ESPN's public API and adds CORS headers,
// so a static page (e.g. GitHub Pages) can call it from the browser.
//
// Optional: set an ALLOWED_ORIGIN variable (e.g. https://yourname.github.io) to accept only your site.

const UPSTREAM = 'https://site.api.espn.com/apis/site/v2/sports/';
const SAFE_PATH = /^[A-Za-z0-9._~\-/]+$/;

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowed = env && env.ALLOWED_ORIGIN;
    const cors = {
      'Access-Control-Allow-Origin': allowed ? (origin === allowed ? origin : allowed) : '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Vary': 'Origin',
    };
    const reply = (body, status, extra = {}) => new Response(body, { status, headers: { ...cors, ...extra } });

    if (request.method === 'OPTIONS') return reply(null, 204);
    if (request.method !== 'GET') return reply('method not allowed', 405);
    if (allowed && origin && origin !== allowed) return reply('forbidden', 403);

    const url = new URL(request.url);
    const rel = url.pathname.replace(/^\/+/, '');
    if (!rel || !SAFE_PATH.test(rel) || rel.includes('..')) return reply('bad path', 400);

    try {
      const upstream = await fetch(UPSTREAM + rel + url.search, {
        headers: { 'User-Agent': 'sports-calendar/1.0' },
        cf: { cacheTtl: 300, cacheEverything: true },
      });
      return reply(upstream.body, upstream.status, {
        'Content-Type': upstream.headers.get('Content-Type') || 'application/json',
        'Cache-Control': 'public, max-age=300',
      });
    } catch (e) {
      return reply('upstream error: ' + e.message, 502);
    }
  },
};
