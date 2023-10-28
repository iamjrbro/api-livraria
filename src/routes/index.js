import express from "express";
import livros from "./livrosRoutes.js";
import { editora } from "../models/Editora.js";
import app from "../app.js";


const routes = (app)=>{
    app.route("/").get((req,res)=>res.status(200).send("Node.js"));

    app.use(express.json(), livros, editora);
};

export {routes};

