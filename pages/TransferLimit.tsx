import React from 'react'
import Link from 'next/link'
function TransferLimit() {
  return (
    <div>
      <div className='bg-gradient-to-b h-20 from-[#EB5F59] to-[#F6B552] flex py-6 justify-between'>
        <div className='pl-28'>
          <p className="font-bold text-[#ffff] text-2xl ">Transfer Limit</p>
        </div>
        <div className='pr-5'>
          <Link href="/Setting">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#ffff]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </Link>


        </div>
      </div>
      <div className='py-5'></div>
      <div className='pl-5'>
        <p>Limit</p>
      </div>
      <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-40 mx-5 my-2 rounded-2xl ">
        <div className='px-5 py-3'>
          <p className='font-bold'>Account</p>
        </div>
        <div className='flex justify-between py-5' >
          <div className='px-5  py-2'>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

          </div>
          <div className='px-5'>
            <p className='font-bold text-3xl'>1,000,000</p>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className='px-5 py-2'>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </button>

          </div>
        </div>
        <div className='text-end pr-5'>
          <button>
            <p className='text-[#F6B552] font-bold'>Done</p>
          </button>
        </div>
      </div>

    </div>
  )
}

export default TransferLimit