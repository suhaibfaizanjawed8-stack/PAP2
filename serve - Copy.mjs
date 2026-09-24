import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const port = Number(process.env.PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2', '.json': 'application/json' };

const server = http.createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end('Method not allowed');
    return;
  }
  try {
    const url = new URL(request.url, 'http://localhost');
    let file = path.resolve(root, '.' + decodeURIComponent(url.pathname));
    if (file !== root && !file.startsWith(root + path.sep)) {
      response.writeHead(403).end('Forbidden');
      return;
    }
    if ((await fs.stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const content = await fs.readFile(file);
    response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Content-Length': content.length, 'X-Content-Type-Options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('<!doctype html><html lang="en"><meta charset="utf-8"><title>Page not found</title><h1>Page not found</h1><p><a href="/">Return to Prince Art Packages</a></p></html>');
  }
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE' ? `Port ${port} is in use. Stop the other server or set PORT to another number.` : error.message);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => console.log(`Prince Art Packages: http://127.0.0.1:${port}\nPress Ctrl+C to stop.`));
