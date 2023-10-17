import express from "express";
import LivroController from "../src/contollers/livroController";

//Router é um metodo especifico do express para lidar com rotas
const routes = express.Router();

//referencias de classes criadas em livroController
routes.get("/livros", LivroController.listarLivros);

export default routes;
