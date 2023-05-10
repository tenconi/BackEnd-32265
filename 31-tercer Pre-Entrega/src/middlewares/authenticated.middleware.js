export const isAuthenticated = (req, res, next) => {
  //  console.log(req.session.isAuthenticated);
  // console.log(req.session);
 

  if (req.session.passport) {
    next();
  } else {
    res.redirect('/user/errorLogin');
  }
};
