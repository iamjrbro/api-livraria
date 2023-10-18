import express from "express";
import livros from "./livrosRoutes.js"
import app from "./scr/app.js";


//import app from "../src/app.js"


const routes = (app)=>{
    app.route("/").get((req,res)=>res.status(200).send("Node.js"));

    app.use(express.json(), livros);
};

export default routes;

