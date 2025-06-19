import { message } from "@/utils/messages";
import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error(message.ERROR_MONGODB_EMPTY_ENV);
}

const uri = process.env.MONGODB_URI;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  let globalWithMongo = global as typeof globalThis & {
    _mongoclient?: MongoClient;
  };

  if (!globalWithMongo._mongoclient) {
    globalWithMongo._mongoclient = new MongoClient(uri, options);
  }
  client = globalWithMongo._mongoclient;
} else {
  client = new MongoClient(uri, options);
}
export default client;
