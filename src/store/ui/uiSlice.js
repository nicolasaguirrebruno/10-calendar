import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    isDateModalOpen: false,
  },
  reducers: {
    onOpenDateModal: (state /* action */) => {
      state.isDateModalOpen = true;
    },
    onCloseDateModal: (state /* action */) => {
      state.isDateModalOpen = false;
    },
  },
});

export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;
