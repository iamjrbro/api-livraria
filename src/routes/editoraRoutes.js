import express from "express";
import AutorController from "../controllers/autoresController";
import LivroController from "../controllers/livroController";

const routesEditora = express.Router();

routes.get("/livros/busca", LivroController?.livroPorEditora);

export default routesEditora;
