const { Router } = require('express');

// const Service = require('./services/example');
// const Controller = require('./controllers/example');

const router = new Router({
  strict: true,
  caseSensitive: true,
});

// router.use('/endpoint', Service);
// router.get('/endpoint', Controller);

module.exports = router;
