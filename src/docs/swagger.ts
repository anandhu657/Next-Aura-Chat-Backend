import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NexAura Chat App API',
      version: '1.0.0',
      description: 'API documentation for NexAura Chat application',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local Development Server',
      },
      {
        url: 'https://api.production.com',
        description: 'Production Server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
