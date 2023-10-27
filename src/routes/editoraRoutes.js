import express from "express";
import AutorController from "../contollers/autoresController";
import LivroController from "../contollers/livroController";

const routesEditora = express.Router();

routes.get("/livros/busca", LivroController.livroPorEditora);

export default routesEditora;
