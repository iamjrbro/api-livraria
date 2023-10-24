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
            res.status(500).json({message: `${error.message} - FALHA NA REQUISIÇÃO`});
        };
    }

    static async listarAutorId(req, res){
        try{
            const id = req.params.id;
            const autor = await autorModel.findByID(id);
            res.status(200).json(autor);
        } catch(error){
            res.status(500).json({message: `${error.message} - FALHA NA REQUISIÇÃO`});
        };
    };


    static async cadastrarAutor(req, res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Autor cadastrado com sucesso!", autor: novoAutor});
        } catch(error){
            res.status(500).json({message: `${error.message} - FALHA AO CADASTRAR AUTOR`});
        };
    };

    static async atualizarAutor(req, res){
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"Autor atualizado!"})
        } catch(error){
            res.status(500).json({message:`${error.message} - FALHA AO ATUALIZAR AUTOR`})
        };
    };

    static async deletarAutor(req, res){
        try{
            const id = req.params.id;
            await autorModel.findByIdAndDelete(id);
            res.status(200).json({message:"Autor excluído com sucesso!"})
        } catch(error){
            res.status(500).json({message:`${error.message} - FALHA AO EXCLUIR AUTOR`});
        };
    };
}
