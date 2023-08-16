import React from 'react'
import store from '../store'
import { Provider, useSelector } from 'react-redux'

export default function Invoice() {
    const { invoice } = useSelector((state)=> state.invoice)
    console.log(invoice)
  return (
    <Provider store={store}>
        <div>Invoice</div>
    </Provider>
  )
}