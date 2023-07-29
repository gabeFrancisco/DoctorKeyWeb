import api from "@/app/services/api";
import { BladeType } from "@/models/BladeType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface BladeTypeState {
  bladeType: BladeType;
  bladeTypeList: Array<BladeType>;
}

const initialState: BladeTypeState = {
  bladeType: {
    id: "",
    name: "",
    description: "",
  },
  bladeTypeList: new Array<BladeType>(),
};

export const getAllBladeTypes = createAsyncThunk(
  "bladeTypes/getAll",
  async () => await api.get("/bladeTypes").then((res) => res.data)
);

export const BladeTypeSlice = createSlice({
  name: "BladeTypeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBladeTypes.fulfilled, (state, action) => {
      state.bladeTypeList = action.payload;
    });
  },
});

export default BladeTypeSlice.reducer;
export const {} = BladeTypeSlice.actions;
