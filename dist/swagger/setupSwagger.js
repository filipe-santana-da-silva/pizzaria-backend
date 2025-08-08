"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
function setupSwagger(app) {
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
}
