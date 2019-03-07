module.exports = function noCache(req, res, next) {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Expires', '0');

  next();
};
