//centraliza toda logica das acoes que podem ser feitas em um livro; o que as rotas vao chamar para executar as operações e o manejo das requisições e respostas correspondentes

import livro from "../models/Livro.js";
import livro from "../models/Livro.js";

//static é usado quando se quer usar metodos de uma classe sem ter  que instanciar a classe, criando um obj new

class LivroController{

    static async listarLivros(req, res){
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros)

};
//try and catch: o servidor vai tentar/try rodar a requisição e, caso não haja sucesso, retornará o catch; por isso, a resposta deve ir tanto no sucesso, quanto no erro (res tanto no try quanto no catch)

//res.status(201).json({message: "cadastrado com sucesso!", livro: novoLivro}); mensagem com base no json, sendo assim, pode-se passar em forma de objeto e trazer com propriedades

//catch(error){res.status(500).json({message:`${error.message} - FALHA NO CADASTRO DO LIVRO`}) - tratativa de erro, trazendo a mensagem de falha caso o try falhe, sem derrubar a aplicação e possibilitando saber o que e onde aconteceu

    static async cadastrarLivro(req, res){
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "cadastrado com sucesso!", livro: novoLivro});
        } catch(error){
            res.status(500).json({message:`${error.message} - FALHA NO CADASTRO DO LIVRO`})
        }
    }
};



export default LivroController;

