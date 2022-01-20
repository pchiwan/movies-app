exports.isAllowed = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send("<h1>Access Denied</h1>");
};
