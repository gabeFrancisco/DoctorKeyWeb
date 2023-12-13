import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { KeySlice } from "./features/keySlice";
import { CustomerSlice } from "./features/customerSlice";
import { DashboardSlice } from "./features/dashboardSlice";
import socketMiddleware from "./middlewares/socketMiddleware";

export const store = configureStore({
  reducer: {
    dashboard: DashboardSlice.reducer,
    keys: KeySlice.reducer,
    customers: CustomerSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat([socketMiddleware])
  }
});



export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
