import session from "express-session";


export const isLogged =(req, res, next)=>{
    const isConected = req;

    console.log('isConected',isConected)
    
    /* if(isConected === false || isConected === 'undefined' || isConected === null){ // admin /o/ user
        res.status(401).redirect('/users/login'); //401: Unauthorized Obligándolo a primero autenticarse.
    }else{
        next(); // puede continuar        
    } */
}