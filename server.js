import { createServer } from 'http';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = resolve(fileURLToPath(import.meta.url), '..');
const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  let filePath = resolve(__dirname, 'dist', req.url);
  
  // Si pide una ruta que no es un archivo, sirve index.html (SPA)
  if (!filePath.includes('.') || req.url === '/') {
    filePath = resolve(__dirname, 'dist', 'index.html');
  }

  try {
    const content = readFileSync(filePath);
    const ext = filePath.split('.').pop();
    
    const mimeTypes = {
      'html': 'text/html',
      'js': 'application/javascript',
      'css': 'text/css',
      'json': 'application/json',
      'svg': 'image/svg+xml',
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'gif': 'image/gif',
      'woff': 'font/woff',
      'woff2': 'font/woff2'
    };

    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(content);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Página no encontrada</h1>');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en http://0.0.0.0:${PORT}`);
});
