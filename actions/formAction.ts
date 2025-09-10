"use server";

import { client } from "@/mongodb/mongodb.config";
import { v4 as uuidv4 } from "uuid";
import { NOTEBOOK_DB, COMMANDS_COLLECTION } from "@/mongodb/variables";
import { FormSubmissionResponse } from "./types";

export async function formAction(
  fomrData: FormData
): Promise<FormSubmissionResponse> {
  try {
    const data = { title: "", command: "", description: "", id: "" };
    const id = uuidv4();
    for (const [key, value] of fomrData.entries())
      data[key as keyof typeof data] = value as string;
    data.id = id;
    await client.connect();
    const notebook = client.db(NOTEBOOK_DB);
    const commands = notebook.collection(COMMANDS_COLLECTION);
    const res = await commands.insertOne(data);
    const response = {
      acknowledged: res.acknowledged,
    };
    return { error: null, response };
  } catch (error) {
    console.error(error);
    return { error, response: null };
  } finally {
    await client.close();
  }
}
