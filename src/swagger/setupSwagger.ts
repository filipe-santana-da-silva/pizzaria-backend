import express, { Express } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';
import fs from 'fs';
import { getAbsoluteFSPath } from 'swagger-ui-dist';

const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Sujeito Pizza',
      version: "1.0.0",
      description: 'Documentação da API do sistema de pizzaria',
    },
    servers: [
      { url: 'https://pizzaria-backend-pi.vercel.app', description: 'Produção' },
      { url: 'http://localhost:3333', description: 'Local' },
    ],
  },
  apis: ['./src/routes.ts', './src/swagger/swaggerDocs.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export function setupSwagger(app: Express) {
  const swaggerDistPath = getAbsoluteFSPath();

  app.use('/api-docs', express.static(swaggerDistPath));

  app.get('/api-docs', (_req, res) => {
    const html = fs.readFileSync(path.join(swaggerDistPath, 'index.html'), 'utf8');
    const customizedHtml = html.replace(
      'https://petstore.swagger.io/v2/swagger.json',
      '/swagger.json'
    );
    res.send(customizedHtml);
  });

  app.get('/swagger.json', (_req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}
