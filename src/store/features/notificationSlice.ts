import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Notification } from "@/models/Notification";

interface NotificationState{
  notification: Notification;
  notificationList: Array<Notification>;
}

const initialState: NotificationState = {
  notification: {
    id: "",
    title: "",
    message: "",
    workGroupId: ""
  },
  notificationList: new Array<Notification>()
}

export const NotificationSlice = createSlice({
  name: "Notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notificationList.push(action.payload);  
    }
  }
})

export default NotificationSlice.reducer;
export const notificationActions = NotificationSlice.actions;