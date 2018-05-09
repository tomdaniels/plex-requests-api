var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log(`plex-requests API running on port: ${port}`);
