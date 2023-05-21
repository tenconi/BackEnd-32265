class viewControlls {

  // intento de pasar el ROL a toda la aplicacion
  // main = async (req, res) => {
  //   let isAdmin
  //   if(req.user.rol){
  //     isAdmin = 'admin';
  //     return isAdmin
  //   }
  //   console.log(isAdmin);

  //   res.render('main', { isAdmin });
  // };

  home = async (req, res) => {
    res.render('home', { req });
  };

  // USERS:
  user_log = async (req, res) => {
    res.render('login');
  };
  user_reg = async (req, res) => {
    res.render('register');
  };
  user_prof = async (req, res) => {
    const user = req.session.user
    res.render('profile', {user});
  };

  // PRODS:
  /* prods_all = async (req, res) => {
    res.render('products');
  }; */
  prods_add = async (req, res) => {
    res.render('addProduct');
  };

  // ERRORS:
  error = async (req, res) => {
    res.render('errorGeneral');
  };
  err_aut = async (req, res) => {
    res.render('errorAuthorization');
  };
  err_log = async (req, res) => {
    res.render('errorLogin');
  };
  err_ups = async (req, res) => {
    res.render('errorOops');
  };
  
}

export default new viewControlls();
