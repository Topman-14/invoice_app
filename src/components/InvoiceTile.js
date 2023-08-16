import React from 'react'
import styles from './styles/InvoiceTile.module.css'

export default function InvoiceTile({invoice, darkMode, setInvoice}) {
    const capLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1)
    const changeInvoice = () =>{
        setInvoice(invoice)
    }

  return (
    <div onClick={changeInvoice} className={styles.wrapper} style={darkMode? {background: '#1e2139', color:'#fff'}:{background:"#fff", color: '#333'}}>
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
  )
}
