import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";

import { Customer } from "@/models/Customer"
import { Address } from "@/models/Address"
import api from "@/services/api";

interface CustomerState {
  customer: Customer;
  customerList: Array<Customer>;
}

const initialState: CustomerState = {
  customer: {
    id: "",
    name: "",
    phone: "",
    email: "",
    createdAt: "",
    address: {
      id: "",
      road: "",
      number: "",
      complement: "",
      neighborhood: "",
      cep: "",
      city: "",
      state: "",
    }
  },
  customerList: new Array<Customer>()
  
}

export const getAllCustomers = createAsyncThunk(
  "customers/getAll",
  async () => await api.get("/api/customers").then(res => {
    if(res.status === 200){
      return res.data;
    }
  })
)

export const CustomerSlice = createSlice({
  name: "Customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCustomers.fulfilled, (state, action) => {
      state.customerList = action.payload;
    })
  }
})

export default CustomerSlice.reducer;
export const { } = CustomerSlice.actions;