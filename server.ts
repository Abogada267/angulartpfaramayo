import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { join } from 'path';


const indexHtml = join(__dirname, 'src/index.html');


const commonEngine = new CommonEngine();

// Crear la aplicación Express
const server = express();

// Configurar el motor de vistas para usar HTML
server.set('view engine', 'html');

// Definir la ruta de los archivos estáticos
server.use(express.static(join(__dirname, 'dist/finalaramayo')));

// Manejar todas las solicitudes
server.get('*', (req, res, next) => {
  // Renderizar la aplicación Angular Universal
  commonEngine
    .render({
      documentFilePath: indexHtml,
      url: req.originalUrl,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    })
    .then((html: any) => res.send(html))
    .catch((err: any) => next(err));
});

// Escuchar en el puerto definido por la variable de entorno PORT o en el puerto 4000 por defecto
const port = process.env && process.env['PORT'] ? process.env['PORT'] : 4000;
server.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});

