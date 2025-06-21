import { message } from "@/utils/messages";
import mongoose from "mongoose";
import { UserModel } from "./models/userModels";
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(message.ERROR_MONGODB_EMPTY_ENV);
}

let isConnected = false;

export const connectMongo = () => {
  if (isConnected) {
    return;
  }
  try {
    isConnected = true;
    mongoose
      .connect(uri)
      .then(() => console.log("Banco conectado"))
      .catch((error) =>
        console.log("Falha ao conectar com o banco", error.message)
      );
  } catch (error) {
    console.log(" ❌Erro ao conectar ao banco!!");
  }
};
