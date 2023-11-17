import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";
import livroModel from "./Livro.js";

const editorasSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome:{type: String, required:true}
},
{versionKey: false});

const editora = mongoose.model("Editora", editorasSchema);

export {editora, editorasSchema};

