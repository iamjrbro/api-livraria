import express from "express";
import livros from "./livrosRoutes.js";
<<<<<<< HEAD
import { editora } from "../models/Editora.js";
import app from "../app.js";
=======
import autores from "./autoresRoutes.js";
>>>>>>> ef4c7c75302f4f942b0e296d897611fd22fabc60


const routes = (app)=>{
    app.route("/").get((req,res)=>res.status(200).send("Node.js"));

<<<<<<< HEAD
    app.use(express.json(), livros, editora);
=======
    app.use(express.json(), livros, autores);
>>>>>>> ef4c7c75302f4f942b0e296d897611fd22fabc60
};

export {routes};

