# RUTAS:
http://localhost:8080/ : home

♠ Rutas de Usuarios:
http://localhost:8080/user : registro de usuarios
http://localhost:8080/user/register : registro de usuarios
http://localhost:8080/user/login : login de usuarios
http://localhost:8080/user/profile : perfil de usuario - acceso con middleware "isAuthenticated"
http://localhost:8080/user/logout : cierre de sesión

♦ Rutas de Errores para Usuarios:
http://localhost:8080/user/error : error general de sesion
http://localhost:8080/user/errorRegistro : error de registro
http://localhost:8080/user/errorLogin : error para accesos con atentificación
http://localhost:8080/user/errorAuthorization : error de autorización

♣ Rutas de Productos:
http://localhost:8080/products/all : listado de productos
http://localhost:8080/products/:id : productos seleccionado
http://localhost:8080/products/add : agregar products - acceso con middleware "isAuthorized"

♥ Rutas de Carts:


☺ Ruta de Chat:
http://localhost:8080/chat : sala de chat