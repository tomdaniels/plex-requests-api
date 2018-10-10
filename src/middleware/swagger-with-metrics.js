const path = require('path');
const swaggerTools = require('swagger-tools');
const readYaml = require('read-yaml');

// swaggerRouter configuration
const options = {
  useStubs: false,
};

const initializeMiddleware = callback => middleware => {
  callback([
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    middleware.swaggerMetadata(),

    // Validate Swagger requests
    middleware.swaggerValidator(),

    // Route validated requests to appropriate controller
    middleware.swaggerRouter(options),

    // Serve the Swagger documents and Swagger UI
    middleware.swaggerUi({ apiDocs: '/swagger-docs', swaggerUi: '/swagger' }),
  ]);
};

function configureSwaggerWithMetrics() {
  const swaggerSpec = readYaml.sync(
    path.resolve(__dirname, '..', 'config/swagger/swagger.yaml'),
  );

  // Initialize the Swagger middleware
  return new Promise(resolve => {
    swaggerTools.initializeMiddleware(
      swaggerSpec,
      initializeMiddleware(resolve),
    );
  });
}

module.exports = configureSwaggerWithMetrics;
