import session from "express-session";
// application.use('session')
// console.log(session)
export const userPermision =(req, res, next)=>{
    const user = req.body;
    const statusRol = user.rol;
    
    if(statusRol !== 'admin' || statusRol === 'user' || statusRol === 'undefined' || statusRol === null){ // admin /o/ user
        res.status(403).redirect('/users/notAuthorized'); //403: El cliente quiere acceder a un recurso con credenciales de una jerarquía no autorizada.
    }else{
        next(); // puede continuar        
    }
}