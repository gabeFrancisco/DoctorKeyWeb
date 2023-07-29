import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { KeySlice } from "./features/keySlice";
import { KeyTypeSlice } from "./features/keyTypeSlice";
import { BladeTypeSlice } from "./features/bladeTypeSlice";
import { ManufactorSlice } from "./features/manufactorSlice";

export const store = configureStore({
  reducer: {
    keys: KeySlice.reducer,
    keyTypes: KeyTypeSlice.reducer,
    bladeTypes: BladeTypeSlice.reducer,
    manufactors: ManufactorSlice.reducer
  },
  devTools: true,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
