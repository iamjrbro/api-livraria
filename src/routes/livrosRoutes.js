import express from "express";
import LivroController from "../contollers/livroController";
import livro from "../models/Livro";

//Router é um metodo especifico do express para lidar com rotas
const routes = express.Router();

//referencias de classes criadas em livroController
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.listarLivroID);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/id:", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;


