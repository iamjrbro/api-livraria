import mongoose, {mongo} from "mongoose";

async function conectaDB() {
  mongoose.connect(process.env.DB_CONECTION_STRING);
  return mongoose.connection;
}

export {conectaDB};


