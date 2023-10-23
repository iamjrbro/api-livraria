import express from "express";
import LivroController from "../contollers/livroController";



const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.listarLivroID);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/id:", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);

export  {routes};
