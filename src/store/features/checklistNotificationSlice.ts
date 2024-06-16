import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ChecklistNotification } from "@/models/ChecklistNotification";
import api from "@/services/api";
import { NotificationSlice } from "./notificationSlice";

interface ChecklistNotificationState {
  checklistNotification: ChecklistNotification;
  checklistNotificationList: Array<ChecklistNotification>;
}

const initialState: ChecklistNotificationState = {
  checklistNotification: {
    id: "",
    title: "",
    state: "",
    priority: "",
    username: "",
    workGroupId: "",
  },
  checklistNotificationList: new Array<ChecklistNotification>(),
};

export const ChecklistNotificationSlice = createSlice({
  name: "ChecklistNotifications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default ChecklistNotificationSlice.reducer;
export const notificationActions = NotificationSlice.actions;
