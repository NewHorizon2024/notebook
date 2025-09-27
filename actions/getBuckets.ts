"use server";

import { client } from "@/mongodb/mongodb.config";
import { BUCKETS_COLLECTION, NOTEBOOK_DB } from "@/mongodb/variables";
import type { Bucket, GetBucketsResponse } from "./types";

export async function getBuckets(): Promise<GetBucketsResponse> {
  try {
    await client.connect();
    const notebook = client.db(NOTEBOOK_DB);
    const collection = notebook.collection(BUCKETS_COLLECTION);
    const buckets = (await collection.find({}).toArray()).map(
      (bucket): Bucket => ({
        _id: bucket._id.toString(),
        name: bucket.name,
      })
    );

    return { error: null, response: buckets };
  } catch (error) {
    console.error(error);
    return { error, response: null };
  } finally {
    await client.close();
  }
}
