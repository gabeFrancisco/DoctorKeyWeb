import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "@/services/api";
import { ServiceNotification } from "@/hooks/ServiceNotification";

interface ServiceNotificationState {
  serviceNotificatoin: ServiceNotification;
  serviceNotificationList: Array<ServiceNotification>;
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
  serviceNotificationList: new Array<ServiceNotification>(),
};

export const ServiceNotificationSlice = createSlice({
  name: "ServiceNotifications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default ServiceNotificationSlice.reducer;
export const serviceNotificationActions = ServiceNotificationSlice.actions;
