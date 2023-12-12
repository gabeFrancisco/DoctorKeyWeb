import { Dashboard } from "@/models/Dashboard";
import api from "@/services/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface DashboardState {
  data: Dashboard;
}

const initialState: DashboardState = {
  data: {
    keyCount: 0,
    serviceOrderCount: 0,
    customerCount: 0,
    checklistCount: 0,
  },
};

export const getAllData = createAsyncThunk(
  "dashboard/getAllData",
  async () =>
    await api.get("/api/dashboard").then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
);

export const DashboardSlice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      console.log(action);
      state.data = action.payload
    });
  },
});

export default DashboardSlice.reducer;
export const {} = DashboardSlice.actions;
