import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Key } from "@/models/Key";
import api from "@/app/services/api";

interface KeyState {
  key: Key;
  keyList: Array<Key>;
}

const initialState: KeyState = {
  key: {
    id: "",
    manufactor: "",
    model: "",
    year: "",
    buttons: 0,
    price: 0,
    keyType: null,
    bladeType: null,
    userId: "",
  },
  keyList: new Array<Key>(),
};

export const getAllKeys = createAsyncThunk(
  "keys/getAll",
  async () => await api.get("/keys").then((res) => res.data)
);

export const KeySlice = createSlice({
  name: "Keys",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllKeys.fulfilled, (state, action) => {
      state.keyList = action.payload;
    });
  },
});

export default KeySlice.reducer;
export const {} = KeySlice.actions;
