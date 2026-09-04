import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const host = "127.0.0.1";
const port = 4173;
const indexPath = fileURLToPath(new URL("./index.html", import.meta.url));
const terminologyPath = fileURLToPath(
  new URL("../next-token/materials/术语库.txt", import.meta.url),
);

const routes = new Map([
  ["/", { path: indexPath, contentType: "text/html; charset=utf-8" }],
  ["/index.html", { path: indexPath, contentType: "text/html; charset=utf-8" }],
  ["/terms.txt", { path: terminologyPath, contentType: "text/plain; charset=utf-8" }],
]);

const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, `http://${host}:${port}`).pathname;
  const route = routes.get(pathname);

  if (!route || !["GET", "HEAD"].includes(request.method)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  try {
    const body = await readFile(route.path);
    response.writeHead(200, {
      "Cache-Control": "no-store",
      "Content-Length": body.byteLength,
      "Content-Type": route.contentType,
      "X-Content-Type-Options": "nosniff",
    });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch (error) {
    console.error(error);
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Local file unavailable");
  }
});

server.listen(port, host, () => {
  console.log(`SRT review tool: http://${host}:${port}/`);
  console.log(`Terminology: ${terminologyPath}`);
});
