const express = require('express');
const router = require('./src/routes/routes');

const app = express();
const port = process.env.PORT || 3000;

router(app);

app.listen(port);

console.log(`plex-requests API running on port: ${port}`);
