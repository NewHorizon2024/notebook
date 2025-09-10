export type FormSubmissionResponse = {
  error: unknown;
  response: {
    acknowledged: boolean;
  } | null;
};

export type DeleteCommandResponse = {
  error: unknown;
  response: {
    acknowledged: boolean;
    deletedCount: number;
  } | null;
};

export type Command = {
  title: string;
  command: string;
  description: string;
  id: string;
  _id: string;
};

export type GetCommandResponse = {
  error: unknown;
  response: Command[] | null;
};
