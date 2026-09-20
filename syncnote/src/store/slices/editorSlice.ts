import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SaveStatus = "saved" | "saving" | "error";

interface EditorState {
  saveStatus: SaveStatus;
}

const initialState: EditorState = {
  saveStatus: "saved",
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setSaveStatus: (state, action: PayloadAction<SaveStatus>) => {
      state.saveStatus = action.payload;
    },
  },
});

export const { setSaveStatus } = editorSlice.actions;
export default editorSlice.reducer;
