import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { resolve, join, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = resolve(fileURLToPath(import.meta.url), '..');
const PORT = process.env.PORT || 3000;
const DIST_DIR = resolve(__dirname, 'dist');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = createServer((req, res) => {
  // Remover query params
  let requestPath = req.url.split('?')[0];
  
  // Intentar servir archivo exacto
  let filePath = join(DIST_DIR, requestPath);
  
  // Validar que está dentro de DIST_DIR (seguridad)
  if (!filePath.startsWith(DIST_DIR)) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Acceso denegado</h1>');
    return;
  }

  // Si es un archivo que existe, servirlo
  if (existsSync(filePath) && !filePath.endsWith('/')) {
    try {
      const content = readFileSync(filePath);
      const ext = extname(filePath);
      const mimeType = mimeTypes[ext] || 'application/octet-stream';
      
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(content);
      return;
    } catch (err) {
      console.error('Error serving file:', err);
    }
  }

  // Si pide una ruta sin extensión o es raíz, servir index.html (SPA)
  const indexPath = resolve(DIST_DIR, 'index.html');
  if (existsSync(indexPath)) {
    try {
      const content = readFileSync(indexPath);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
      return;
    } catch (err) {
      console.error('Error serving index.html:', err);
    }
  }

  // 404
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>404 - Página no encontrada</h1>');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en http://0.0.0.0:${PORT}`);
  console.log(`📁 Sirviendo archivos desde: ${DIST_DIR}`);
});
