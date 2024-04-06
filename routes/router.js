import express from "express";
const router = express();

router.get("/", (req, res) => res.send("Servidor Express ES6 Iniciado"));
export default router;
