// routes/index.mjs
import path from 'node:path';
import { readFile } from 'node:fs/promises';

export const routeHandlers = async (req, rootDir, pathURL, routeHTML) => {
  if (req.url === pathURL && req.method === 'GET') {
    try {
      const publicDir = path.join(rootDir, '..', 'public');
      const htmlContent = await readFile(path.join(publicDir, routeHTML), 'utf8');
      return {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
        body: htmlContent,
      };
    } catch (error) {
      console.error('Error al leer el archivo HTML:', error);
      return {
        status: 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Error interno del servidor',
      };
    }
  } 
};
