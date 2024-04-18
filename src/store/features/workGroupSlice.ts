import {createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import api from "@/services/api";
import { WorkGroup } from '@/models/WorkGroup';

interface WorkGroupState{
  workGroup: WorkGroup;
  workGroupList: Array<WorkGroup>;
}

const initialState: WorkGroupState = {
  workGroup: {
    title: "",
    description: "",
    userId: ""
  },
  workGroupList: new Array<WorkGroup>()
}

export const getAllWorkGroups = createAsyncThunk(
  "workGroups/getAll",
  async () => {
    return await api.get('/api/workGroups').then((res) => {
      if(res.status === 200){
        return res.data;
      }
    })
  }
)

export const WorkGroupSlice = createSlice({
 name: "WorkGroup",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(getAllWorkGroups.fulfilled, (state, action) => {
    state.workGroupList = action.payload;
  })
 }
})

export default WorkGroupSlice.reducer;
export const { } = WorkGroupSlice.actions;

