import {createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export const WorkGroupSlice = createSlice({
 name: "WorkGroup",
 initialState,
 reducers: {},
 extraReducers: {}
})

export default WorkGroupSlice.reducer;
export const { } = WorkGroupSlice.actions;

