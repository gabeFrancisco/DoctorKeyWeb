import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Key } from "@/models/Key";
import api from "@/app/services/api";

interface KeyState {
  key: Key;
  keyList: Array<Key>;
}

const initialState: KeyState = {
  key: {
    id: "",
    manufactor: null,
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

export const postKey = createAsyncThunk(
  "keys/post",
  async (data: {}, thunkAPI) => {
    return await api.post("/keys", data).then((res) => {
      if (res.status === 200) {
        thunkAPI.dispatch(getAllKeys());
        return res.data;
      }
    });
  }
);

export const KeySlice = createSlice({
  name: "Keys",
  initialState,
  reducers: {
    readKey: (state, action: PayloadAction<string>) => {
      state.key = current(
        state.keyList.find((key) => key.id === action.payload) as Key
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllKeys.fulfilled, (state, action) => {
      state.keyList = action.payload;
    });
  },
});

export default KeySlice.reducer;
export const { readKey} = KeySlice.actions;
