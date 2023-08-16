import InvoiceTile from '@/components/InvoiceTile'
import './globals.css'
export default function Home({darkMode, allInvoices, changeInvoice}) {
  return (
    <main className="w-full pr-12 pl-28 py-16">
      <div className='main_container'>
        <header className="flex justify-between mb-16 items-center" style={darkMode? {color:'#fff'} : {color:'#111'}}>
          <div>
            <h1 className="m-0 font-bold text-4xl">Invoices</h1>
            <p className="text-gray-400">You have 5 total invoices</p>
          </div>
          <div className='flex text-sm font-bold'>
            <div className='flex w-44 items-center cursor-pointer'>
              <label className='cursor-pointer'>Filter by status </label>
              <img className="h-2 ml-2" src='/images/icon-arrow-down.svg'/>
            </div>
            <div className="rounded-full flex p-2 bg-sidebar-top ml-2 cursor-pointer">
              <div className='p-2 rounded-full bg-white'><img src="/images/icon-plus.svg" alt="" /></div>
              <p className='p-0 mx-2 my-auto text-white'>New Invoice</p>
            </div>
          </div>
        </header>
        <div className="invoice_wrapper">
          {allInvoices && allInvoices.map((invoice)=>(<InvoiceTile key={invoice.id} setInvoice={changeInvoice} invoice={invoice} darkMode={darkMode}/>))}
        </div>
      </div>
    </main>
  )
}
