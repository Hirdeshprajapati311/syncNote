import { CalendarArrowUp, Download } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


const paymentCards = [
  { id: 1, name: "Visa ending in 4242", path: "/visa.png", expiry: "Expires 12/28 • Default" },
  { id: 2, name: "Mastercard ending in 8891", path: "/mastercard.png", expiry: "Expires 05/26" }
]

const billingHistory = [
  {
    id: 1,
    date: "Aug 12, 2024",
    description: "Pro Subscription (Monthly)",
    amount: "$12.00",
  },
  {
    id: 2,
    date: "Jul 12, 2024",
    description: "Pro Subscription (Monthly)",
    amount: "$12.00",
  },
  {
    id: 3,
    date: "Jun 12, 2024",
    description: "Pro Subscription (Monthly)",
    amount: "$12.00",
  },
];

const page = () => {
  return (
    <div className='mt-4 lg:mt-6  flex flex-col  w-full gap-6 py-2 px-4 sm:px-6  overflow-y-auto h-screen'>

      <div className='grid grid-cols-1 gap-3 md:grid-cols-7 '>
        <div className='flex flex-col col-span-1 md:col-span-5'>
          <span className='text-2xl font-bold font-inter'>Billing & Subscription</span>
          <p className='text-sm text-gray-500'>Manage your premium features, review payment history, and update your billing credentials in a secure workspace.</p>
        </div>


        <div className='col-span-1 md:col-span-2 flex flex-row items-center gap-4 '>
          <button className='px-4 py-1 rounded-lg md:text-base text-sm border text-blue-700 bg-white'>Download Annual Report</button>
          <button className='px-4 py-1 rounded-lg border bg-blue-700 text-white'>Manage Subscription</button>

        </div>
      </div>

      {/* Current Plan & Next Charge */}
      <div className='grid grid-cols-1 md:grid-cols-7 gap-6'>
        <div className='p-6 col-span-1 md:col-span-5 border gap-4 flex flex-col bg-white rounded-2xl shadow'>
          <div className='flex flex-row justify-between items-center'>
            <span className='px-3 py-1 rounded-xl bg-primary text-white text-[10px] md:text-sm'>Current Plan</span>
            <span className='font-mono text-[10px] md:text-sm text-gray-600'>Started Oct 12, 2026</span>
          </div>


          <div className='flex flex-col'>
            <span className='text-2xl font-bold'>SyncNote Pro</span>
            <p className='text-gray-500 '>Unlimited notes, collaborative workspaces, and AI-powered insights for
              power users.</p>
          </div>


          <div className='flex flex-col gap-1 md:flex-row mt-4 items-start md:items-center justify-between'>
            <div className='flex flex-col'>
              <span className='font-semibold text-xs md:text-sm text-gray-500'>Price</span>
              <span className='font-bold text-lg md:text-xl leading-5 text-gray-800'>$12.00 / mo</span>

            </div>


            <div className='flex flex-col'>
              <span className='font-semibold text-xs md:text-sm text-gray-500'>Storage</span>
              <span className='font-bold text-lg md:text-xl leading-5 text-gray-800'>500 GB</span>

            </div>

            <div className='flex flex-col'>
              <span className='font-semibold text-xs md:text-sm text-gray-500'>Next Renewal</span>
              <span className='font-bold text-lg md:text-xl leading-5 text-gray-800'>Oct 12, 2024</span>

            </div>

          </div>


        </div>

        <div className='p-6 col-span-1 md:col-span-2 border gap-4 flex flex-col rounded-2xl shadow bg-orange-200 '>
          <div className='text-orange-950 flex flex-row gap-2'>
            <CalendarArrowUp />
            <span>NEXT CHARGE</span>
          </div>

          <div className='flex flex-col gap-1'>
            <span className='font-bold text-xl text-orange-950'>$144.00</span>
            <p className='font-light text-orange-950'>Your annual subscription will
              renew automatically on October
              12, 2024.</p>

          </div>


          <button className='bg-orange-950 text-white py-2 rounded-lg'>
            Update to Monthly
          </button>

        </div>

      </div>



      {/* Payment Methods & Billing History */}
      <div className='grid grid-cols-1 md:grid-cols-5 gap-6 mb-20'>

        <div className='col-span-1 md:col-span-2 gap-3 bg-white rounded-2xl border p-6'>
          <div className='flex flex-row items-center justify-between'>
            <span className='text-sm md:text-xl font-semibold'>Payment Methods</span>
            <button className=' text-xs md:text-base text-primary'>+ Add New</button>
          </div>


          <div className='mt-6 flex flex-col gap-2'>
            {paymentCards.map((p) => <Card key={p.id} name={p.name} expiry={p.expiry} path={p.path} />)}
          </div>

        </div>





        {/* Billing History Card */}
        <div className="col-span-1 md:col-span-3 rounded-2xl border bg-white p-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Billing History
          </h2>

          {/* Table Header (Desktop Only) */}
          <div className="mt-8 hidden grid-cols-12 border-b pb-3 text-sm font-medium text-gray-500 md:grid">
            <span className="col-span-3">Date</span>
            <span className="col-span-5">Description</span>
            <span className="col-span-2 text-right">Amount</span>
            <span className="col-span-2 text-right">Invoice</span>
          </div>

          {/* Rows */}
          <div className="mt-4">
            {billingHistory.map((invoice) => (
              <div
                key={invoice.id}
                className="border-b py-4 last:border-none"
              >
                {/* Mobile */}
                <div className="flex flex-col gap-3 md:hidden">
                  <span className="text-sm text-gray-500">
                    {invoice.date}
                  </span>

                  <span className="font-medium text-gray-800">
                    {invoice.description}
                  </span>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">
                      {invoice.amount}
                    </span>

                    <button className="rounded-md p-2 text-primary transition hover:bg-primary/10">
                      <Download size={18} />
                    </button>
                  </div>
                </div>

                {/* Desktop */}
                <div className="hidden grid-cols-12 items-center md:grid">
                  <span className="col-span-3 text-gray-700">
                    {invoice.date}
                  </span>

                  <span className="col-span-5 font-medium text-gray-800">
                    {invoice.description}
                  </span>

                  <span className="col-span-2 text-right font-medium text-gray-700">
                    {invoice.amount}
                  </span>

                  <div className="col-span-2 flex justify-end">
                    <button className="rounded-md p-2 text-primary transition hover:bg-primary/10">
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-6 text-center">
            <button className="font-medium text-primary transition hover:underline">
              View all invoices
            </button>
          </div>
        </div>

      </div>









    </div >
  );
}

export default page;


const Card = ({ name, expiry, path }: { name: string, expiry: string, path: string }) => {
  return (
    <div className='p-4 gap-4 flex flex-row items-center bg-primary/10 rounded-lg border'>
      <Image src={path} className='w-12 h-8' alt='card logo' width={40} height={10} />

      <div className='flex flex-col leading-5'>
        <span className='text-sm md:text-base font-semibold'>{name}</span>
        <p className='text-xs md:text-sm'>{expiry}</p>

      </div>
    </div>
  )
}
