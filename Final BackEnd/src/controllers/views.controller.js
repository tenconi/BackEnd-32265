class viewControlls {
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
    res.render('profile');
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
  err_log = async (req, res) => {
    res.render('errorLogin');
  };
  err_aut = async (req, res) => {
    res.render('errorAuthorization');
  };
}

export default new viewControlls();
