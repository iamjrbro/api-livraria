import mongoose, { mongo } from "mongoose";

//import mongoose, {mongo} from "mongoose"

async function conectaDB() {
  mongoose.connect(process.env.DB_CONECTION_STRING);
  return mongoose.connection;
}

export { conectaDB };

/*quando foor configurar a string de conexao do db com o link de conexao, tem que passar a senha que usou na criacao do db no password e coloca o nome da database antes do ?

"mongodb+srv://admin:admin123@cluster0.6yw9lcl.mongodb.net/?retryWrites=true&w=majority"*/
