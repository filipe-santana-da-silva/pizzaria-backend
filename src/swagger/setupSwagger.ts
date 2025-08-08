import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { Express } from 'express';
import fs from 'fs';
import path from 'path';

const cssPath = path.join(__dirname, '../node_modules/swagger-ui-dist/swagger-ui.css');
const customCss = fs.readFileSync(cssPath, 'utf8');

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
    title: "API Sujeito Pizza",
    version: "1.0.0",
    description: "Documentação da API do sistema de pizzaria"
    },

    servers: [
      { url: "https://pizzaria-backend-pi.vercel.app/", description: "Produção" },
      { url: "http://localhost:3333", description: "Local" }
    ]
  },
  apis: ["./src/routes.ts", "./src/swagger/swaggerDocs.ts"]
};

const swaggerSpec = swaggerJsDoc(options);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss
  }));
}
