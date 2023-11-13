import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";

import { Customer } from "@/models/Customer"
import { Address } from "@/models/Address"

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

export const CustomerSlice = createSlice({
  name: "Customers",
  initialState,
  reducers: {

  }
})

export default CustomerSlice.reducer;
export const { } = CustomerSlice.actions;