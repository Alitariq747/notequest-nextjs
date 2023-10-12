import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin-ahmed:tariq@cluster0.r1h5jam.mongodb.net/noteQuest?retryWrites=true&w=majority";

export const client = new MongoClient(uri);
