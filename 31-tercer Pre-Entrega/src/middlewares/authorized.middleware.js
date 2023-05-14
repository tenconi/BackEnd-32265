export const isAuthorized = (req, res, next) => {
  // const user = req.body;
  const statusRol = req.user && req.user.rol;

  if (statusRol) {
    if ( statusRol === 'user' || statusRol === undefined || statusRol === 'undefined' || statusRol === null ) {
      return res.status(403).redirect('/user/errorAuthorization'); //403: El cliente quiere acceder a un recurso con credenciales de una jerarquía no autorizada.
    } else{

      return next(); // puede continuar
    }
  }
  return res.status(403).redirect('/user/errorAuthorization');
  //   next();
};


