var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const router = require('./api/routes/plex-requests-routes');

router(app);

app.listen(port);

console.log(`plex-requests API running on port: ${port}`);
