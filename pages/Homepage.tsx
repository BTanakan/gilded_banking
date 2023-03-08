import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import profile from '../public/zenitsu.jpg'
import Navbar from '@/component/navbar'
function Homepage() {
    return (
        <div>
            <div>
                <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-24 mx-5 my-5 rounded-2xl from-[#EB5F59] to-[#F6B552]">
                    <div className="shadow-md shadow-[#18274b40] bg-white flex  h-20 w-20 border-solid  border-2 rounded-full absolute top-3 left-5 ">
                        <Image
                            src={profile}
                            alt="Logo images"
                            className="border-solid  border-2 rounded-full w-full h-full"
                        >
                        </Image>

                    </div>
                    <div className="flex justify-between">
                        <div className="pl-28 py-4">
                            <div className=" text-[#ffff]">userxxx</div>
                            <button className="text-white font-bold text-center rounded-full bg-[#cca060]  ">
                                Show Balance
                            </button>

                        </div>
                        <div className="flex justify-end px-4 py-4 justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ffff]"> <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /> </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ffff]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </div>
                    </div>


                </div>

                <div className='px-10  flex justify-between'>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>

                </div>

                <div className='px-10 py-5 flex justify-between'>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                    <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                </div>

            </div>

            <div className="flex-grow mx-5 my-5 border-t border-gray-400"></div>
            <div className='mx-5'>
                <p>Favorite</p>
            </div>
            <div className='px-10 py-2 flex justify-between'>
                <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                <button className="w-12 h-12 bg-red-400 rounded-full"></button>
                <button className="w-12 h-12 bg-red-400 rounded-full"></button>

            </div>
            <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-24 mx-5 my-5 rounded-2xl from-[#EB5F59] to-[#F6B552]">




            </div>

            <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-24 mx-5 my-5 rounded-2xl from-[#EB5F59] to-[#F6B552]">




            </div>

            <Navbar/>
        </div>

    )
}

export default Homepage