import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { ServiceOrder } from "@/models/ServiceOrder";
import api from "@/services/api";
import { Address } from "@/models/Address";

interface ServiceOrderState {
  serviceOrder: ServiceOrder;
  serviceOrderList: Array<ServiceOrder>;
}
const nullAddress: Address = {
  cep: "",
  city: "",
  complement: "",
  neighborhood: "",
  number: "",
  road: "",
  state: "",
};

const initialState: ServiceOrderState = {
  serviceOrder: {
    title: "",
    description: "",
    priority: "",
    value: 0,
    workgroupId: "",
    customer: {
      name: "",
      phone: "",
      email: "",
      address: nullAddress,
    },
    address: nullAddress,
    state: "",
  },
  serviceOrderList: new Array<ServiceOrder>(),
};

export const getAllServiceOrders = createAsyncThunk(
  "serviceOrders/getAll",
  async () => {
    return await api.get("/api/serviceOrders").then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    });
  }
);

export const ServiceOrderSlice = createSlice({
  name: "ServiceOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllServiceOrders.fulfilled, (state, action) => {
      state.serviceOrderList = action.payload;
    });
  },
});

export default ServiceOrderSlice.reducer;
export const {} = ServiceOrderSlice.actions;
