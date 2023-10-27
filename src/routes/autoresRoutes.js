import express from "express"
import AutorController from "../contollers/autoresController"


const routesAutor = express.Router();

routesAutor.get("/autor", AutorController.listarAutor);
routesAutor.get("/autor/:id", AutorController.listarAutorId);
routesAutor.post("/autor", AutorController.cadastrarAutor);
routesAutor.put("/autor;id:", AutorController.atualizarAutor);
routesAutor.delete("/autor/id:", AutorController.deletarAutor);

export {routesAutor};
