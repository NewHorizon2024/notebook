import { createSlice } from "@reduxjs/toolkit";

export interface CommandsState {
  refetch: boolean;
}

const initialState: CommandsState = {
  refetch: false,
};

export const commandsSlice = createSlice({
  name: "commands",
  initialState,
  reducers: {
    startrefetch(state) {
      state.refetch = !state.refetch;
    },
  },
});

export const { startrefetch } = commandsSlice.actions;

export default commandsSlice.reducer;
