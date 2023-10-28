<<<<<<< HEAD
import { autor } from "../models/Autor.js";
import livroModel from "../models/Livro.js";  

class editoraController{
    static async livroPorEditora(req, res) {
        const editora = req.query.editora;
        try {
        const livrosEditora = await livroModel.find({ editora: editora });
        res.status(200).json(livrosEditora);
} catch (error) {
    res.status(500).json({ message: "FALHA NA BUSCA" });
    };
};
};
=======
import { editora } from "../models/Editora";
import livroModel from "../models/Livro";

class editoraController{
    static async livroPorEditora (req,res){
        const editora = req.query.editora;
        try{
        const livrosEditora = await livroModel.find({editora:editora})
        res.status(200).json(livrosEditora)
        } catch (error){
        res.status(500).json({message: "FALHA NA BUSCA"})
        };
    };
};

export default editoraController;
>>>>>>> ef4c7c75302f4f942b0e296d897611fd22fabc60
