import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { KeySlice } from "./features/keySlice";
import { CustomerSlice } from "./features/customerSlice";

export const store = configureStore({
  reducer: {
    keys: KeySlice.reducer,
    customers: CustomerSlice.reducer
  },
  devTools: true,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
