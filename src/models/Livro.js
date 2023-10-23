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

