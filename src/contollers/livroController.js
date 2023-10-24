import livro from "../models/Livro.js";
import livro from "../models/Livro.js";
import livro from "../models/Livro.js";

class LivroController{

    static async listarLivros(req, res){
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros)

};


  static async listarLivros(req, res) {
    try {
      const listaLivros = await livroModel.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - FALHA NA REQUISIÇÃO` });
    }
  }

  static async listarLivroID(req, res) {
    try {
      const id = req.params.id;
      const livro = await livroModel.findByID(id);
      res.status(200).json(livro);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - FALHA NA REQUISIÇÃO` });
    }
  }


static async atualizarLivro(req,res){
    try{
        const id = req.params.id;
        await livro.findByIdAndUpdate(id, req.body);
        res.status(200).json({message:"Livro atualizado!"})
    } catch(error){
    res.status(500).json({message:`${error.message} - FALHA NA ATUALIZAÇÃO`})        
    }
  }

static async cadastrarLivro(req, res){
    try{
    const novoLivro = await livro.create(req.body);
        res.status(201).json({message: "Cadastrado com sucesso!", livro: novoLivro});
        } catch(error){
        res.status(500).json({message:`${error.message} - FALHA NO CADASTRO DO LIVRO`})
        }
    }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livroModel.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro excluído com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - FALHA AO DELETAR LIVRO` });
    }
  }
}

export { LivroController };
