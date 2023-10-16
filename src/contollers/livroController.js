//centraliza toda logica das acoes que podem ser feitas em um livro; o que as rotas vao chamar para executar as operações e o manejo das requisições e respostas correspondentes

import livro from "../models/Livro.js";

//static é usado quando se quer usar metodos de uma classe sem ter  que instanciar a classe, criando um obj new

class LivroController{

    static async listarLivros(req, res){
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros)
    }
};

export default LivroController;