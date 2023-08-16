import { createSlice } from '@reduxjs/toolkit'

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    invoice: {
        id: "#AB1234",
        desc: "Logo Design",
        address: "123 Main Street, Lagos, Nigeria",
        invoiceDate: "2023-06-15",
        paymentDue: "2023-06-25",
        client: "Alice Johnson",
        price: 175000,
        status: "paid",
      }
  },
  reducers: {
    changeInvoice: (state, action) => {
      state.invoice = action.payload
    }
  }
})


export const { changeInvoice } = invoiceSlice.actions

export default invoiceSlice.reducer