export const isAuthenticated = (req, res, next) => {
  // console.log(req.isAuthenticated)
  // console.log(req.session)
  if (req.session.user) {
    next();
  } else {
    res.status(501).redirect('/error-authorization');
  }
};

// OTRA OPCION
// Se puede usar
// npm install @express-love/authorization-middleware
// sn passport
