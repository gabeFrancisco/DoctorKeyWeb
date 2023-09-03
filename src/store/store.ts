import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { KeySlice } from "./features/keySlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
  reducer: {
    keys: KeySlice.reducer,
  },
  devTools: true,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
