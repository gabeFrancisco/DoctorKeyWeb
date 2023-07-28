import { KeyType } from "@/models/KeyType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface KeyTypeState{
  keyType: KeyType,
  keyTypeList: Array<KeyType>;
}

const initialState: KeyTypeState = {
  keyType: {
    id: '',
    name: '',
    description: ''
  },
  keyTypeList: new Array<KeyType>()
}

export const keyTypeSlice = createSlice({
  name: "KeyTypes",
  initialState,
  reducers: {}
})

export default keyTypeSlice.reducer;
export const {} = keyTypeSlice.actions;