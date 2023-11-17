import { autor } from "../models/Autor.js";

import livroModel from "../models/Livro.js";  
//import livroModel from "../models/Livro.js";
//import livro from "../models/Livro.js";
import livro from "../models/Livro.js";
import editoraController from "./editoraController.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livroModel.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA NA REQUISIÇÃO` });
    };
  };

  static async listarLivroID(req, res) {
    try {
      const id = req.params.id;
      const livro = await livroModel.findById(id);
      res.status(200).json(livro);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA NA REQUISIÇÃO` });
    };
  };

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livroModel.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado!" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA NA ATUALIZAÇÃO` });
    };
  };


  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
      const livroCriado = await livroModel.create(livroCompleto);
      res.status(201).json({ message: "Cadastrado com sucesso!", livro: novoLivro });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA NO CADASTRO DO LIVRO` });
    };
  };


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
  const novoLivro = req.body;
  try{
    const autorEncontrado = await autor.findById(novoLivro.autor);
    const livroCompleto = {...novoLivro, autor:{...autorEncontrado._doc}};
    const livroCriado = await livro.create(livroCompleto);
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
      res.status(500).json({ message: `${error.message} - FALHA AO DELETAR LIVRO` });
    };
  };

 /* static async livroPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livrosEditora = await livroModel.find({ editora: editora });
      res.status(200).json(livrosEditora);
    } catch (error) {
      res.status(500).json({ message: "FALHA NA BUSCA" });
    };
  };*/
};      /*res
        .status(500)
        .json({ message: `${error.message} - FALHA AO DELETAR LIVRO` });
    };
  };*/

/* static async livroPorEditora (req,res){
    const editora = req.query.editora;
    try{
    const livrosEditora = await livroModel.find({editora:editora})
    res.status(200).json(livrosEditora)
    } catch (error){
    res.status(500).json({message: "FALHA NA BUSCA"})
    };
  };
};*/


export default LivroController;
