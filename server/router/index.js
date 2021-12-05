const Router = require("express").Router;
const userController = require("../contollers/user-controller");
const router = new Router();

//Регістрація
router.post("/registration", userController.registration);
//Логінація
router.post("/login", userController.login);
//Вийти з аккаунта
router.post("/logout", userController.logout);
//Активація аккаунта по ссилці
router.get("/activate/:link", userController.activate);
//Перезаписує access token
router.get("/refresh", userController.refresh);
//
router.get("/user", userController.getUsers);

module.exports = router;