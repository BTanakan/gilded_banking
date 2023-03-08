import React from 'react'
import Image from "next/image"
import profile from '../public/zenitsu.jpg'
import Link from 'next/link'
import Navbar from '@/component/navbar'
function Balance() {
    return (
        <div>
            <div>
                <div className='mx-5 mt-5 '>
                    <p>My Balance</p>
                </div>
                <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-40 mx-5 my-1 rounded-2xl from-[#EB5F59] to-[#F6B552]">

                    <div className="flex">
                        <div className="pl-4 py-5">
                            <svg className="w-6 h-6 mb-1 text-[#F6B552] white:text-[#F6B552] group-hover:text-[#F6B552] white:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                            </svg>
                        </div>
                        <div className="pl-4 py-4">

                            <div className=" text-[#ffff]">Deposit</div>
                            <div className=" text-[#ffff]">xxx-xxxxxx-x</div>


                        </div>

                    </div>

                    <div className="text-end px-5 py-1  ">
                        <div className=" text-[#ffff] font-bold text-2xl">9,999,999.00</div>
                    </div>
                </div>
                <div className="flex-grow mx-5 my-5 border-t border-gray-400"></div>
                <div className='mx-5'>
                    <p>Quick access</p>
                </div>
                <div className='px-10  flex justify-between'>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>

                </div>
                <div className="flex-grow mx-5 my-5 border-t border-gray-400"></div>
                <div className='mx-5'>
                    <p>Favorite</p>
                </div>
                <div className='px-10 py-5 flex justify-between'>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>

                </div>
            </div>




            <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-24 mx-5 my-5 rounded-2xl from-[#EB5F59] to-[#F6B552]">




            </div>

            <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-24 mx-5 my-5 rounded-2xl from-[#EB5F59] to-[#F6B552]">




            </div>

            <Navbar/>

        </div>

    )
}

export default Balance