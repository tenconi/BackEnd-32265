import { Router } from "express";
import UsersManager from "../persistencia/daos/mongoManager/UsersManager.js";

const router = Router();

const usersManager = new UsersManager(); // instancio


router.post("/users/session/registro", async (req, res) => {
  const newUser = await usersManager.createUser(req.body);
  if (newUser) {
    res.redirect("/users/sessions");
  } else {
    res.redirect("/users/sessions/errorRegistro");
  }
});

router.post("/users/session", async (req, res) => {
  const { email, password } = req.body;
  const user = await usersManager.loginUser(req.body);
  if (user) {
    req.session.email = email;
    req.session.password = password;
    res.redirect("/sessions/perfil");
  } else {
    res.redirect("/sessions/errorLogin");
  }
});

router.get("/users/session/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/users/sessions");
    }
  });
});

export default router;
