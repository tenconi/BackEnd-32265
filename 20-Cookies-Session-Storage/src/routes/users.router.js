import { Router } from "express";
import UsersManager from "../persistencia/daos/mongoManager/UsersManager.js";

const router = Router();

const usersManager = new UsersManager(); // instancio


router.post("/registro", async (req, res) => {
  const newUser = await usersManager.createUser(req.body);
  if (newUser) {
    res.redirect("/users/login");
  } else {
    res.redirect("/users/errorRegistro");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await usersManager.loginUser(req.body);
  if (user) {
    req.session.email = email;
    req.session.password = password;
    res.redirect("/users/perfil" , {user});
  } else {
    res.redirect("/users/errorLogin");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/users/login");
    }
  });
});

export default router;
