class viewControlls {
  home = async (req, res) => {
    res.render('home', { req });
  };

  user_register = async (req, res) => {
    res.render('register');
  };

  user_login = async (req, res) => {
    res.render('login');
  };

  user_profile = async (req, res) => {
    const { userData } = req.user;
    res.render('profile', userData);
  };

  user_error = async (req, res) => {
    res.render('errorGeneral');
  };

  user_error_registro = async (req, res) => {
    res.render('errorRegistro');
  };

  user_error_login = async (req, res) => {
    res.render('errorLogin');
  };

  user_error_authorization = async (req, res) => {
    res.render('errorAuthorization');
  };

  products_all = async (req, res) => {
    res.render('products');
  };

  products_add = async (req, res) => {
    res.render('addProduct');
  };

  chat_room = async (req, res) => {
    res.render('chat');
  };
}
export default new viewControlls();
