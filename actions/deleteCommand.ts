"use server";

import { client } from "@/mongodb/mongodb.config";
import { COMMANDS_COLLECTION, NOTEBOOK_DB } from "@/mongodb/variables";
import type { DeleteCommandResponse } from "./types";

export default async function deleteCommand(
  id: string
): Promise<DeleteCommandResponse> {
  const query = { id };
  try {
    await client.connect();
    const notebook = client.db(NOTEBOOK_DB);
    const collection = notebook.collection(COMMANDS_COLLECTION);
    const response = await collection.deleteOne(query);
    return { error: null, response };
  } catch (error) {
    console.error(error);
    return { error, response: null };
  }
}
