import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
  await mongoClient.connect();
  console.log("Projeto conectado ao banco de dados");
} catch (error) {
  console.log(error);
}

let db = mongoClient.db()
export default db