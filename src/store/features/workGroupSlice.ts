import {createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import api from "@/services/api";
import { WorkGroup } from '@/models/WorkGroup';
import { getSession } from 'next-auth/react';

interface WorkGroupState{
  workGroup: WorkGroup;
  workGroupList: Array<WorkGroup>;
  isWebSocketConnected: boolean,
  isWebSocketConnecting: boolean,
  workGroupSocketId: string
}

const initialState: WorkGroupState = {
  workGroup: {
    title: "",
    description: "",
    userId: ""
  },
  workGroupList: new Array<WorkGroup>(),
  isWebSocketConnected: false,
  isWebSocketConnecting: false,
  workGroupSocketId: ""
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

export const getActualWorkGroup = createAsyncThunk(
  "workGroups/getActual",
  async () => {
    return await api.get('/api/workGroups/actual').then((res) => {
      if(res.status === 200){
        return res.data;
      }
    })
  }
)

export const selectWorkGroup = createAsyncThunk(
  "workGroups/select",
  async (data: string) => {
    return await api.post(`/api/workGroups/${data}`).then(res => {
      // if(res.status === 200){
      //   window.location.reload();
      // }
    })
  }
)

export const connectToWebSocket = createAsyncThunk(
  "workGroups/connectToWebSocket",
  async (data: boolean) => {
    return await api.get("/api/workGroups/actualId").then(res => {
      if(res.status === 200){
        return res.data;
      }
    })
  }
)

export const WorkGroupSlice = createSlice({
 name: "WorkGroup",
 initialState,
 reducers: {
  setConnecting: (state, action: PayloadAction<boolean>) => {
    state.isWebSocketConnecting = action.payload
  }
 },
 extraReducers: (builder) => {
  builder.addCase(getAllWorkGroups.fulfilled, (state, action) => {
    state.workGroupList = action.payload;
  }),
  builder.addCase(getActualWorkGroup.fulfilled, (state, action) => {
    state.workGroup = action.payload;
  })
  builder.addCase(connectToWebSocket.fulfilled, (state,action) => {
    state.workGroupSocketId = action.payload!;
    state.isWebSocketConnected = true;
  })
 }
})

export default WorkGroupSlice.reducer;
export const { setConnecting } = WorkGroupSlice.actions;

