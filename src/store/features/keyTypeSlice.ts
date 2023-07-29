import api from "@/app/services/api";
import { KeyType } from "@/models/KeyType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface KeyTypeState {
  keyType: KeyType;
  keyTypeList: Array<KeyType>;
}

const initialState: KeyTypeState = {
  keyType: {
    id: "",
    name: "",
    description: "",
  },
  keyTypeList: new Array<KeyType>(),
};

export const getAllKeyTypes = createAsyncThunk(
  "keTypes/getAll",
  async () => await api.get("/keyTypes").then((res) => res.data)
);

export const KeyTypeSlice = createSlice({
  name: "KeyTypes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllKeyTypes.fulfilled, (state, action) => {
      state.keyTypeList = action.payload;
    });
  },
});

export default KeyTypeSlice.reducer;
export const {} = KeyTypeSlice.actions;
