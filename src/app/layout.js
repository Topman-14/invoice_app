'use client'

import Navbar from '@/components/Navbar'
import Home from '@/app/page'
import './globals.css'
import { useState } from 'react'
import fetchedInvoices from '@/data'

export const metadata = {
  title: 'Invoice app by Topman',
  description: 'Invoice app UI form Frontend Mentor',
}

export default function RootLayout() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [invoices, setInvoices] = useState(fetchedInvoices)
  const [currentInvoice, setCurrentInvoice] = useState({})

  const addInvoice = (invoice) => {
    setInvoices((prevInvoices)=>([
      invoice, ...prevInvoices
    ]))
  }

  const viewCurrentInvoice = (invoice) =>{
    setCurrentInvoice(invoice)
  }

  return (
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Josefin+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        </head>
        <body className="flex justify-between page" style={isDarkTheme? {background: 'rgb(20, 22, 37)'} : {background: '#f1f1f1'}}>
          <Navbar toggleDarkMode={()=>{setIsDarkTheme((prevTheme)=> !prevTheme)}} darkMode={isDarkTheme}/>
          <Home darkMode={isDarkTheme} allInvoices={invoices} changeInvoice={viewCurrentInvoice}/>
        </body>
      </html>
  )
}
