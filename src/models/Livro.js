import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
  },
  { versionKey: false }
); //sem versionamento de schema

const livroModel = mongoose.model("livros", livroSchema); //referente a colecao, por isso passa-se a coleção de referencia e seu schema

export { livroModel };

//schema é um obj de configuração que define a estrutura e as propriedades de um documento; relacionado a APIs e DBs em geral
//{type: mongoose.Schema.Types.String} //o que se passa nesse objeto é o tipo de dado dentro do mongoDB
//model: obj que representa uma coleção em uma DB; interface para que a API interaja com os documentos de uma coleção; o modelo informa a API as acoes do CRUD que podem ser realizadas
