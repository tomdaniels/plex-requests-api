const express = require('express');
const router = require('./src/routes/routes');
const configureSwaggerWithMetrics = require('./src/middleware/swagger-with-metrics');

const app = express();
const port = process.env.PORT || 3000;

router(app);
app.use(configureSwaggerWithMetrics);

app.listen(port);

console.log(`plex-requests API running on port: ${port}`);
