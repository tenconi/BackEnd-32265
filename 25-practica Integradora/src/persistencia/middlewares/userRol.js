export const userPermision = (req, res, next) => {
    // const user = req.body;
    const statusRol = req.cookies.userInfo;
    // console.log(statusRol.rol);
    if (statusRol) {
        if (statusRol.rol !== 'admin' || statusRol.rol === 'user' || statusRol === 'undefined' || statusRol === null) { // admin /o/ user
            res.status(403).redirect('/users/notAuthorized'); //403: El cliente quiere acceder a un recurso con credenciales de una jerarquía no autorizada.
        } else {
            next(); // puede continuar        
        }
    } else {
        res.status(403).redirect('/users/notAuthorized')
    }
}

