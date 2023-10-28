import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";
import livroModel from "./Livro.js";

const editoraSchema = new mongoose.editoraSchema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome:{type: String, required:true}
},
{versionKey: false});

const editora = mongoose.model("Editora", editoraSchema);

<<<<<<< HEAD
export {editora, editoraSchema}; 
=======
export {editora, editoraSchema};
>>>>>>> ef4c7c75302f4f942b0e296d897611fd22fabc60
