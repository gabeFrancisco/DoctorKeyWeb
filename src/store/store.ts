import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { KeySlice } from "./features/keySlice";
import { CustomerSlice } from "./features/customerSlice";
import { DashboardSlice } from "./features/dashboardSlice";
import socketMiddleware from "./middlewares/socketMiddleware";
import { NotificationSlice } from "./features/notificationSlice";
import { WorkGroupSlice } from "./features/workGroupSlice";
import { ServiceOrderSlice } from "./features/serviceOrderSlice";

export const store = configureStore({
  reducer: {
    dashboard: DashboardSlice.reducer,
    keys: KeySlice.reducer,
    customers: CustomerSlice.reducer,
    notifications: NotificationSlice.reducer,
    workGroups: WorkGroupSlice.reducer,
    serviceOrders: ServiceOrderSlice.reducer,
  },
  devTools: true,
  // middleware: (getDefaultMiddleware) =>{
  //   return getDefaultMiddleware().concat([socketMiddleware])
  // }
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
