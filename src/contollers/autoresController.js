import autor from "../models/Autor";

class AutorController{
    static async listarAutor(req, res){
        const listaAutor = await autor.find({});
        res.status(200).json(listaAutor)
    };

    static async listarAutor(req, res){
        try{
            const listaAutor = await autorModel.find({})
            res.status(200).json(listaAutor);
        } catch(error){
            res.status(500).json({message: `${error.message} - FALHA NA REQUISIÇÃO`})
        };
    }
}
