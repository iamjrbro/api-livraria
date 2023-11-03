import express from "express";
import LivroController from "../contollers/livroController.js";



const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.listarLivroID);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/id:", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;



//import express from "express";
i//mport LivroController from "../contollers/livroController.js";



/*const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.livroPorEditora);
routes.get("/livros/:id", LivroController.listarLivroID);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/id:", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);


export default routes;*/