/** @type {ExportedHandler<Env>} */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Local preview retains the asset router's behavior.
    if (url.hostname !== 'nexttoken.tv') {
      return env.ASSETS.fetch(request);
    }
    if (url.protocol === 'https:') {
      const response = await env.ASSETS.fetch(request);
      const location = response.headers.get('Location');
      // The asset router uses 307 for drop-trailing-slash. Only promote that
      // exact normalization, after routing confirms the destination exists.
      if (response.status === 307 && location && url.pathname !== '/' && url.pathname.endsWith('/')) {
        const target = new URL(location, url);
        if (target.origin === url.origin && target.pathname === url.pathname.slice(0, -1)
          && target.search === url.search && target.hash === url.hash) {
          return new Response(response.body, { status: 308, headers: response.headers });
        }
      }
      return response;
    }

    url.protocol = 'https:';
    url.port = '';
    // Resolve the asset router's slash and legacy redirects before redirecting
    // the client, so an old HTTP URL reaches its final address in one hop.
    let target = url;
    for (let hop = 0; hop < 8; hop++) {
      const response = await env.ASSETS.fetch(new Request(target, { method: 'HEAD', redirect: 'manual' }));
      const location = response.headers.get('Location');
      if (![301, 302, 303, 307, 308].includes(response.status) || !location) {
        return Response.redirect(target.href, 308);
      }
      const next = new URL(location, target);
      if (next.origin !== url.origin || next.href === target.href) {
        return Response.redirect(target.href, 308);
      }
      target = next;
    }
    return new Response('Redirect configuration error', { status: 508 });
  },
};
