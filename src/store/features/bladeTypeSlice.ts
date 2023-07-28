import { BladeType } from "@/models/BladeType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface BladeTypeState{
  bladeType: BladeType;
  bladeTypeList: Array<BladeType>;
}

const initialState: BladeTypeState = {
  bladeType: {
    id: '',
    name: '',
    description: '',
  },
  bladeTypeList: new Array<BladeType>()
}

export const BladeTypeSlice = createSlice({
  name: "BladeTypeSlice",
  initialState,
  reducers: {}
})

export default BladeTypeSlice.reducer;
export const {} = BladeTypeSlice.actions