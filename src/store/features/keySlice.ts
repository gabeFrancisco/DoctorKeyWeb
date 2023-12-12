import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";

import { Key } from "@/models/Key";
import api from "@/services/api";

interface KeyState {
  key: Key;
  keyList: Array<Key>;
  filteredList: Array<Key>;
}

const initialState: KeyState = {
  key: {
    id: "",
    manufactor: "",
    model: "",
    year: "",
    buttons: 0,
    price: 0,
    keyType: "",
    bladeType: "",
    serviceType: "",
    observation: "",
    userId: "",
  },
  keyList: new Array<Key>(),
  filteredList: new Array<Key>(),
};

export const getAllKeys = createAsyncThunk(
  "keys/getAll",
  async () => await api.get("/api/keys").then((res) => {
    if(res.status === 200){
      return res.data;
    }
  })
);

export const getAllByModel = createAsyncThunk(
  "keys/getAllByModel",
  async (id: string) =>
    await api.get(`/api/keys/byModel/${id}`).then((res) => {
      if(res.status === 200){
        return res.data;
      }
    })
);

export const postKey = createAsyncThunk(
  "keys/post",
  async (data: {}, thunkAPI) => {
    return await api.post("/api/keys", data).then((res) => {
      if (res.status === 200) {
        thunkAPI.dispatch(getAllKeys());
        return res.data;
      }
    });
  }
);

export const updateKey = createAsyncThunk(
  "keys/update",
  async (data: { key: Object; id: string }, thunkAPI) => {
    return await api.put(`/api/keys/${data.id}`, data.key).then((res) => {
      if (res.status === 200) {
        thunkAPI.dispatch(getAllKeys());
        return res.data;
      }
    });
  }
);

export const deleteKey = createAsyncThunk(
  "keys/delete",
  async (data: string, thunkAPI) => {
    return await api.delete(`/api/keys/${data}`).then((res) => {
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
      if (state.keyList.length === 0) {
        getAllKeys();
      }
      state.key = current(
        state.keyList.find((key) => key.id === action.payload) as Key
      );
    },
    searchKey: (state, action: PayloadAction<string>) => {
      let filtered = state.keyList.filter((key) =>
        key.model.toLowerCase().startsWith(action.payload.toLowerCase())
      );
      state.filteredList = filtered;
    },
    clearSearch: (state) => {
      state.filteredList.length = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllKeys.fulfilled, (state, action) => {
      state.keyList = action.payload;
    });
    builder.addCase(getAllByModel.fulfilled, (state, action) => {
      state.keyList = action.payload;
    })
  },
});

export default KeySlice.reducer;
export const { readKey, searchKey, clearSearch } = KeySlice.actions;
