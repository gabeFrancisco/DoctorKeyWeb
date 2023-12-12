import { Dashboard } from "@/models/Dashboard";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Dashboard = {
  keyCount: 0,
  serviceOrderCount: 0,
  customerCount: 0,
  checklistCount: 0
}

export const DashboardSlice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {}
})

export default DashboardSlice.reducer;
export const { } = DashboardSlice.actions;