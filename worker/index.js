/** @type {ExportedHandler<Env>} */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Local preview remains HTTP; only the configured production host upgrades.
    if (url.hostname !== 'nexttoken.tv' || url.protocol !== 'http:') {
      return env.ASSETS.fetch(request);
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
