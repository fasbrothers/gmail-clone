import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "counter",
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.openSendMessage = true;
    },
    decrement: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
