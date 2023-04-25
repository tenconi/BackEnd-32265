import jwt from 'jsonwebtoken';

export function jwtValidation(req, res, next) {
  const autHeader = req.get('Authorization');
  console.log('autHeader', req)
  const token = autHeader && autHeader.split(' ')[1];
  if (!token) {
    //si no existe
    // return res.json({ message: ' NO TOKEN' });
    return res.redirect('errorAuthorization');
  }

  const isValidUser = jwt.verify(token, 'secretJWT');
  if (isValidUser) {
    console.log(isValidUser);
    req.user = isValidUser.user; // LO GUARDO en propiedad req/request
    next();
  } else {
    // res.json({ message: ' User not valid.' });
    res.redirect('errorAuthorization');
  }

  res.send(token);
  console.log(token);
  next();
}
