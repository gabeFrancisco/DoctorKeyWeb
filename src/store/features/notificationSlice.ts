import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Notification } from "@/models/Notification";
import api from "@/services/api";

interface NotificationState {
  notification: Notification;
  notificationList: Array<Notification>;
}

const initialState: NotificationState = {
  notification: {
    id: "",
    title: "",
    message: "",
    readed: false,
    username: "",
    workGroupId: "",
  },
  notificationList: new Array<Notification>(),
};

export const getAllNotifications = createAsyncThunk(
  "notifications/getAll",
  async () =>
    await api.get("/api/notifications").then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
);

export const setNotificationState = createAsyncThunk(
  "notification/setState",
  async (data: { notificationId: string; state: boolean }, thunkAPI) =>
    await api
      .get(
        `/api/notifications/state/${data.notificationId}/?state=${data.state}`
      )
      .then((res) => {
        if (res.status === 200) {
          thunkAPI.dispatch(getAllNotifications());
        }
      })
);

export const NotificationSlice = createSlice({
  name: "Notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notificationList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllNotifications.fulfilled, (state, action) => {
      state.notificationList = action.payload;
    });
  },
});

export default NotificationSlice.reducer;
export const notificationActions = NotificationSlice.actions;
