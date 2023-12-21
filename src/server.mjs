import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { routeHandlers } from './routes/routeHandlers.mjs';
import routesMap from './routes/routeMap.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  const route = req.url;
  if (routesMap.hasOwnProperty(route)) {
    const fileName = routesMap[route];
    const { status, headers, body } = await routeHandlers(req, __dirname, route, fileName);
    res.writeHead(status, headers);
    res.end(body);
  } else {
    try {
      const publicDir = path.join(__dirname, '..', 'public');
      const notFoundContent = await readFile(path.join(publicDir, '404.html'), 'utf8');
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(notFoundContent);
    } catch (error) {
      console.error('Error al leer el archivo HTML de 404:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error interno del servidor');
    }
  }
});

server.listen(3000, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`);
});
