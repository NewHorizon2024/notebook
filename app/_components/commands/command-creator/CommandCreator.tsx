"use client";

import Form from "next/form";
import { formAction } from "@/actions/formAction";
import { type ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

const btnStyle =
  "p-2 bg-sky-800 text-white font-bold rounded-md cursor-pointer w-full disabled:cursor-not-allowed disabled:opacity-75";

export default function CommandCreator() {
  const [title, setTitle] = useState<string>("");
  const [command, setCommand] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function resetAllInputs() {
    setTitle("");
    setCommand("");
    setDescription("");
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: "title" | "command" | "description"
  ) {
    const value = event.target.value;
    if (type === "title") {
      setTitle(value);
      return;
    }
    if (type === "command") {
      setCommand(value);
      return;
    }
    setDescription(value);
  }

  async function handleSubmitform() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("command", command);
    formData.append("description", description);

    const { error, response } = await formAction(formData);
    if (error) throw error;
    if (response?.acknowledged) {
      toast("Command added successfully");
    }
    if (!response?.acknowledged) {
      toast("Failed to add the command");
    }
    resetAllInputs();
  }

  return (
    <div className="p-4 rounded-md shadow-md bg-white col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4">
      <Form action={handleSubmitform} className="flex flex-col gap-4">
        <input
          required
          value={title}
          onChange={(e) => handleInputChange(e, "title")}
          type="text"
          placeholder="* Title"
          className="h-10 p-2 outline-none border-b-2 border-b-sky-800 w-full"
        />
        <input
          required
          value={command}
          onChange={(e) => handleInputChange(e, "command")}
          type="text"
          placeholder="* Command"
          className="h-10 p-2 outline-none border-b-2 border-b-sky-800 w-full"
        />
        <textarea
          value={description}
          onChange={(e) => handleInputChange(e, "description")}
          placeholder="Description (optional)"
          className="p-2 resize-none outline-none border-b-2 border-b-sky-800"
        ></textarea>
        <div className="flex justify-between gap-4">
          <button
            disabled={!title && !command}
            onClick={resetAllInputs}
            type="button"
            className={btnStyle}
          >
            Cancel
          </button>
          <button
            disabled={!title || !command}
            type="submit"
            className={btnStyle}
          >
            Add
          </button>
        </div>
      </Form>
    </div>
  );
}
