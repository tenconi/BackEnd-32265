export const isAuthenticated = (req, res, next) => {
  

  // Se puede usar
  // npm install @express-love/authorization-middleware
  // sn passport

  
    if (req.session) {
      return next();
    }
    res.status(501).redirect('/error-authorization')
    // res.json({message:'Logueate por favor.'});
  };
  