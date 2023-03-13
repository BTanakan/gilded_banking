import React from 'react'

function TransferMoney() {
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
                <p className='font-bold text-xl py-8'>Transfer</p>
            </div>

            <div className='justify-center flex'>
                <div className='flex py-5'>
                    <p className='font-bold text-[#F6B552] text-lg '>From</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-[#F6B552]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>


            </div>
            <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-30 mx-5 my-1 rounded-2xl from-[#EB5F59] to-[#F6B552]">


                <div className="justify-between flex px-5 py-5  ">
                    <div>
                        <div className=" text-[#ffff]">Deposit</div>
                        <div className=" text-[#ffff]">xxx-xxxxxx-x</div>
                    </div>
                    <div>
                        <div className=" text-[#ffff] font-bold text-2xl">9,999,999.00</div>
                        <div className=" text-[#ffff] pl-16 font-bold ">Account</div>
                    </div>

                </div>

            </div>
            <div className='justify-center flex'>
                <div className='flex py-5'>
                    <p className='font-bold text-gray text-lg '>To</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>


            </div>

            <div className="overflow-hidden shadow-lg relative bg-gray-400 h-30 mx-5 my-1 rounded-2xl ">


                <div className="justify-between flex px-5 py-5  ">
                    <div>
                        <div className=" text-[#ffff]">xxx-xxxxxx-x</div>
                        <div className=" text-[#ffff]  font-bold">Bank name</div>
                    </div>


                </div>

            </div>
            <div className='justify-center flex'>
                <div className='flex py-5'>
                    <p className='font-bold text-[#F6B552] text-lg '>Amount</p>

                </div>


            </div>
            <form action="">
                <div className="relative z-0 w-full mb-6 group px-5">
                    
                    <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-center text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />

                </div>
                <div className='px-5'>
            
                    <input type="text" id="small-input" className="block w-full p-2 text-gray-400 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 gray:bg-gray-700 gray:border-gray-600 gray:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-[#F6B552] font-bold"  placeholder="Recode" ></input>
                    
                </div>
                <div className='py-5'></div>
                <div className='text-center'>
                    <button type="submit" className=" text-xl shadow-md shadow-[#18274b40] rounded-lg py-2 px-10 w-50 text-white font-bold  bg-gradient-to-l from-[#F6B552] to-[#EB5F59]">Information checking</button>
                </div>
                
            </form>
        </div>
    )
}

export default TransferMoney