import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";
import livroModel from "./Livro.js";

const editoraSchema = new mongoose.editoraSchema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome:{type: String, required:true}
},
{versionKey: false});

const editora = mongoose.model("Editora", editoraSchema);

export {editora, editoraSchema}; 

