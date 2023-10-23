import { Router } from "express";
import { LivroController } from "../contollers/livroController.js";

//Router é um metodo especifico do express para lidar com rotas
const livrosRoutes = Router();

//referencias de classes criadas em livroController
livrosRoutes.get("/livros", LivroController.listarLivros);
livrosRoutes.get("/livros/:id", LivroController.listarLivroID);
livrosRoutes.post("/livros", LivroController.cadastrarLivro);
livrosRoutes.put("/livros/id:", LivroController.atualizarLivro);
livrosRoutes.delete("/livros/:id", LivroController.deletarLivro);

export { livrosRoutes };
