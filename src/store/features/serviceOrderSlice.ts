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
    value: 0,
    workgroupId: "",
    customer: {
      name: "",
      phone: "",
      email: "",
      address: nullAddress,
    },
    address: nullAddress,
  },
  serviceOrderList: new Array<ServiceOrder>(),
};

export const ServiceOrderSlice = createSlice({
  name: "ServiceOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default ServiceOrderSlice.reducer;
export const {} = ServiceOrderSlice.actions;
