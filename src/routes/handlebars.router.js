import { Router } from "express";
import path from "path";

const router = Router();

router.get("/login", (req, res) => {
    res.render("login", { title: "Inicio de Sesion" });
});

router.get("/profile", (req, res) => {
    console.log()
    res.send("dirname")
    //res.render("profile", user);
});

export default router;
