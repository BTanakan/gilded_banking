import React from 'react'

function TransferBill() {
    return (
        <div>
            <ul className="flex bg-gradient-to-b h-20 from-[#EB5F59] to-[#F6B552] justify-start py-8">
                <li className='px-5 flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ffff]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <span className='text-[#ffff] font-bold'>Back</span>
                </li>



            </ul>
            <div className='justify-center pt-8 flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <p className='font-bold text-xl text-green-400'>Transfer Success</p>
            </div>


            <div className='justify-center flex'>
                <div className=' text-center '>

                    <p className='test-xs text-[#d5d5d5]'>00 jan 0000 - 00:00</p>
                    <p className='test-xs text-[#d5d5d5]'>Referral code:222222222258452ddfwS</p>
                </div>


            </div>



            <div className=" justify-between flex px-5 py-5  ">
                <div>
                    <p className='text-[#F6B552] text-xl'>From</p>
                </div>
                <div>
                    <div className=" font-bold">Deposit</div>
                    <div className="text-xs text-[#d5d5d5]">xxx-xxxxxx-x</div>
                </div>


            </div>




            <div className="justify-between flex px-5 py-5  ">
                <div>
                    <p className='text-[#F6B552] text-xl'>To</p>
                </div>
                <div>
                    <div className="font-bold ">Deposit</div>
                    <div className="text-xs text-[#d5d5d5]">xxx-xxxxxx-x</div>
                </div>


            </div>

            <div className="flex-grow mx-5 my-5 border-t border-gray-400"></div>

            <div className=" justify-between flex px-5 py-5  ">
                <div>
                    <p className='text-[#F6B552] text-xl'>Amount</p>
                </div>
                <div>
                    <div className=" font-bold">0.00</div>

                </div>


            </div>


            <div className="justify-between flex px-5 py-5  ">
                <div>
                    <p className='text-[#F6B552] text-xl'>Fee</p>
                </div>
                <div>
                    <div className="font-bold ">0.00</div>

                </div>


            </div>

        </div>

    )
}

export default TransferBill