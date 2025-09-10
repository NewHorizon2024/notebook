import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://techcmaster:${process.env.NEXT_PUBLIC_MONGODB_PASSWORD}@mest1.pfxl6.mongodb.net/?retryWrites=true&w=majority&appName=Mest1`;

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
