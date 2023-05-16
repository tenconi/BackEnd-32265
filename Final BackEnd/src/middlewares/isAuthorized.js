export const isAuthorized = (req, res, next) => {
    // const user = req.body;
    const statusRol = req.user && req.user.rol;
    // console.log(statusRol);
  
    if (statusRol) {
      if (
        statusRol === 'user' ||
        statusRol === undefined ||
        statusRol === 'undefined' ||
        statusRol === null
      ) {
        return res.status(403).redirect('/errorAuthorization'); //403: El cliente quiere acceder a un recurso con credenciales de una jerarquía no autorizada.
        // return res.status(403).json({message: '/errorAuthorization'}); //403: El cliente quiere acceder a un recurso con credenciales de una jerarquía no autorizada.
      }
      return next(); // puede continuar
    }
    // return res.json({message:'No tiene credenciales suficientes.'});
    return res.redirect('/user/errorAuthorization');
    //   next();
  };