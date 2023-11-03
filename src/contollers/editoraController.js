import { editora } from "../models/Editora.js";
import { autor } from "../models/Autor.js";
import livroModel from "../models/Livro.js";

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



/*import { autor } from "../models/Autor.js";
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
};*/