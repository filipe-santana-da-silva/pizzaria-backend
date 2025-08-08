import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';

const options: swaggerJsDoc.Options = {
    definition: {
        openapi: "3.0.0",
            info: {
                title: "API Sujeito Pizza",
                version: "1.0.0",
                description: "Documentação da API do sistema de pizzaria",
            },
            servers: [
                {
                    url: "https://pizzaria-backend-pi.vercel.app/",
                    description: "API em produção"
                }, {
                    url: "http://localhost:3333",
                    description: "Servidor Local",
                },
                
            ],
    },
    apis: ["./dist/routes.js", "./dist/swagger/swaggerDocs.js"]
};

const swaggerSpec = swaggerJsDoc(options);

export function setupSwagger(app: Express) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css'
}));

}