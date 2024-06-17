import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "@/services/api";
import { ServiceOrderNotification } from "@/models/ServiceOrderNotification";

interface ServiceNotificationState {
  serviceNotificatoin: ServiceOrderNotification;
  serviceNotificationList: Array<ServiceOrderNotification>;
}

const initialState: ServiceNotificationState = {
  serviceNotificatoin: {
    id: "",
    title: "",
    message: "",
    priority: "",
    state: "",
    username: "",
    workGroupId: "",
  },
  serviceNotificationList: new Array<ServiceOrderNotification>(),
};

export const ServiceNotificationSlice = createSlice({
  name: "ServiceNotifications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default ServiceNotificationSlice.reducer;
export const serviceNotificationActions = ServiceNotificationSlice.actions;
