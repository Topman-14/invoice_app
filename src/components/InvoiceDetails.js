import React from 'react'
import styles from './styles/InvoiceDetails.module.css'

export default function InvoiceDetails({invoice, handlePrev, darkMode}) {
  const capLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1)
  return (
      <div className="main_container" style={darkMode? {color:'#fff'}:{color: '#333'}}>
        <div className='my-16 mr-3 ml-28 pb-10'>
          <div onClick={handlePrev} className='flex items-center gap-2 mb-7 cursor-pointer'>
            <img className="h-3" src="./images/icon-arrow-left.svg" alt="" />
            <p>Go back</p> 
          </div>
          
          <header className='rounded-xl p-6 flex justify-between' style={darkMode? {background: '#1e2139', color:'#fff'}:{background:"#fff", color: '#333'}}>
            <div className='flex gap-6 items-center'>
              <p className='font-thin'>Status</p>
              <p className='font-bold px-10 py-2 rounded-lg' style={invoice.status == 'paid'? {background:'#33d69f31', color: '#33d69f'} : invoice.status == 'pending' ? {background:'#ff8f002f', color: '#ff8f00'} : {background:'#dfe3f84f', color: 'inherit'}} >{capLetter(invoice.status)}</p>
            </div>
            <div className='flex gap-3'>
              <button className='font-bold p-2 rounded-full w-20 bg-edit-btn transition-colors'>Edit</button>
              <button className='font-bold p-2 rounded-full w-20 bg-red-400 text-white'>Delete</button>
            </div>
          </header>

          <div className='rounded-xl p-8 mt-7 transition-colors' style={darkMode? {background: '#1e2139', color:'#fff'}:{background:"#fff", color: '#333'}}>
            <div className="flex justify-between">
              <div>
                <p><span className='text-sidebar-inner'>#</span>{invoice.id.slice(1)}</p>
                <p className='font-light'>{invoice.desc}</p>
              </div>
              <p className='w-28 text-right font-light'>3rd floor, ITF Building, Costain, Lagos, Nigeria</p>
            </div>
            <div className="flex mt-11 justify-between h-32">
              <div className="flex flex-col justify-between">
                <div>
                  <p className='w-28 font-light'>Invoice date</p>
                  <p className='w-28 text-xl font-bold'>{invoice.invoiceDate}</p>
                </div>
                <div>
                  <p className='w-28 font-light'>Payment due</p>
                  <p className='w-28 text-xl font-bold'>{invoice.paymentDue}</p>
                </div>
              </div>
              <div>
                <p className='w-28 font-light'>Bill to</p>
                <p className='w-28 text-xl font-bold'>{invoice.client}</p>
                <p className='w-28 font-light'>{invoice.address}</p>
              </div>
              <div>
                <p className='font-light'>Sent to</p>
                <p className='text-xl font-bold'>{invoice.client.toLowerCase().split(" ")[0] + "@customer.com"}</p>
              </div>
            </div>
            <div className='mt-11 h-52 rounded-xl flex flex-col' style={darkMode? {background: '#252945'}:{background:"#f2f2f8"}}>
              <div className={styles.summaryTop}>
                <p className='text-gray-400'>Item Name</p>
                <p className='text-gray-400'>QTY</p>
                <p className='text-gray-400'>Price</p>
                <p className='text-gray-400 text-right mr-3'>Total</p>
                <p className='font-bold'>{invoice.desc}</p>
                <p className='font-bold text-gray-400'>1</p>
                <p className='font-bold text-gray-400'>₦{invoice.price}</p>
                <p className='font-bold text-right mr-3'>₦{invoice.price}</p>
              </div>
              <div className={styles.summaryBottom} style={darkMode? {background: 'rgb(12, 14, 22)'}:{background:"rgb(55, 59, 83)"}}>
                <p className='font-bold'>Amount Due</p>
                <p className='font-extrabold text-3xl'>₦{invoice.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}