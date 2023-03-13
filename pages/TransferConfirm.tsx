import React from 'react'


function TransferConfirm() {
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
            <div className='text-center'>
                <p className='font-bold text-xl py-8'>Confirm Transaction</p>
            </div>


            <div className='justify-center flex'>
                <div className=' text-center  py-5 '>
                    <p className='font-bold  text-2xl '>0.00</p>
                    <p className='test-xs text-[#d5d5d5]'>0.00 fee</p>
                    <p className='test-xs text-[#d5d5d5]'>00 jan 0000  00:00</p>
                </div>


            </div>

            <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-30 mx-5 my-1 ">

                <div className=" flex-col px-5 py-5  ">
                    <div>
                        <p className='text-[#F6B552] text-xl'>From</p>
                    </div>
                    <div>
                        <div className=" ">Deposit</div>
                        <div className="">xxx-xxxxxx-x</div>
                    </div>


                </div>

            </div>
            <div className='py-5'></div>
            <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-30 mx-5 my-1 ">

                <div className=" flex-col px-5 py-5  ">
                    <div>
                        <p className='text-[#F6B552]  text-xl'>To</p>
                    </div>
                    <div>
                        <div className=" ">Deposit</div>
                        <div className="">xxx-xxxxxx-x</div>
                    </div>


                </div>

            </div>


            <div className='py-16'></div>
            <div className='text-center'>
                <button type="submit" className=" text-xl shadow-md shadow-[#18274b40] rounded-lg py-2 px-10 w-80 text-white font-bold  bg-gradient-to-l from-[#F6B552] to-[#EB5F59]">Confirm</button>
            </div>
        </div>
    )
}

export default TransferConfirm