import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("Erro, não encontrado as crendenciais do mongo no ENV");
}

const options = {
  serverApi: {
    version: ServerApiVersion,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;
