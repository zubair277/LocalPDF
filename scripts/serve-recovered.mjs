import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";

const root = resolve(import.meta.dirname, "../dist");
const port = Number(process.env.PORT || 4173);
const mime = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".wasm": "application/wasm",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const sendFile = async (file, response, headOnly = false) => {
  const info = await stat(file);
  response.writeHead(200, {
    "Content-Type": mime[extname(file)] || "application/octet-stream",
    "Content-Length": info.size,
    "Cache-Control": file.endsWith("index.html") ? "no-cache" : "public, max-age=31536000, immutable",
  });
  if (headOnly) response.end();
  else createReadStream(file).pipe(response);
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const requested = resolve(root, `.${pathname}`);
    if (requested !== root && !requested.startsWith(`${root}${sep}`)) {
      response.writeHead(400).end("Bad request");
      return;
    }

    try {
      const info = await stat(requested);
      if (info.isFile()) {
        await sendFile(requested, response, request.method === "HEAD");
        return;
      }
    } catch {}

    if (pathname.startsWith("/assets/") || extname(pathname)) {
      response.writeHead(404).end("Not found");
      return;
    }

    await sendFile(resolve(root, "index.html"), response, request.method === "HEAD");
  } catch (error) {
    response.writeHead(500).end("Internal server error");
    console.error(error);
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Recovered application available at http://127.0.0.1:${port}`);
});
