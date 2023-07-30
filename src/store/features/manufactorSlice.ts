import api from "@/app/services/api";
import { Manufactor } from "@/models/Manufactor";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ManufactorState {
  manufactor: Manufactor;
  manufactorList: Array<Manufactor>;
}

const initialState: ManufactorState = {
  manufactor: {
    id: "",
    name: "",
    description: "",
    logoPath: "",
  },
  manufactorList: new Array<Manufactor>(),
};

export const getAllManufactors = createAsyncThunk(
  "manufactors/getAll",
  async () => await api.get("/manufactors").then((res) => res.data)
);

export const ManufactorSlice = createSlice({
  name: "ManufactorSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllManufactors.fulfilled, (state, action) => {
      state.manufactorList = action.payload
    })
  }
});

export default ManufactorSlice.reducer;
export const {} = ManufactorSlice.actions;
