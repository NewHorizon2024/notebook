"use server";

import { client } from "@/mongodb/mongodb.config";
import { COMMANDS_COLLECTION, NOTEBOOK_DB } from "@/mongodb/variables";
import type { Command, GetCommandResponse } from "./types";

export async function getCommands(): Promise<GetCommandResponse> {
  try {
    await client.connect();
    const notebook = client.db(NOTEBOOK_DB);
    const collection = notebook.collection(COMMANDS_COLLECTION);
    const commands = (await collection.find({}).toArray()).map(
      (cmd): Command => ({
        _id: cmd._id.toString(),
        title: cmd.title,
        command: cmd.command,
        description: cmd.description,
        id: cmd.id,
      })
    );

    return { error: null, response: commands };
  } catch (error) {
    console.error(error);
    return { error, response: null };
  } finally {
    await client.close();
  }
}
