import React from 'react'
import styles from './styles/InvoiceTile.module.css'
import { useDispatch, useSelector, Provider } from 'react-redux'
import store from '../app/store'
import Link from 'next/link'

export default function InvoiceTile({invoice, darkMode}) {
    const capLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1)
    const dispatch = useDispatch()
    const setInvoice = () =>{
        dispatch(changeInvoice(invoice))
    }
    
  return (
    <Provider store={store}>
    <div onClick={setInvoice} className={styles.wrapper} style={darkMode? {background: '#1e2139', color:'#fff'}:{background:"#fff", color: '#333'}}>
        <div className='flex justify-between items-center'>
            <p className='w-20'><span className='text-sidebar-inner'>#</span>{invoice.id.slice(1)}</p>
            <p className='w-36'>{invoice.paymentDue}</p>
            <p>{invoice.client}</p>
        </div>
        <div className='flex items-center'>
            <p className='font-extrabold text-lg'>₦{invoice.price.toLocaleString()}</p>
            <p className={styles.status} style={invoice.status == 'paid'? {background:'#33d69f31', color: '#33d69f'}
            : invoice.status == 'pending' ? {background:'#ff8f002f', color: '#ff8f00'} : {background:'#dfe3f84f', color: 'inherit'} }>•{capLetter(invoice.status)}</p>
            <img src="/images/icon-arrow-right.svg" alt="" className='cursor-pointer' />
        </div>      
    </div>
    </Link>
    </Provider>
  )
}
