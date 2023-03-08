import React from 'react'
import Link from 'next/link'
function SettingA() {
    return (
        <div>
            <div className='bg-gradient-to-b h-20 from-[#EB5F59] to-[#F6B552] flex py-6 justify-between'>
                <div className='pl-36'>
                    <p className="font-bold text-[#ffff] text-2xl ">Account</p>
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
                <p>Email</p>
            </div>
            <div className='px-5'>
                <input type="email" className="shadow-md shadow-[#18274b40] border rounded-full   py-2 px-3 w-full placeholder-[#ACACAC] font-bold" placeholder="Email"></input>
            </div>
            <div className='py-1'></div>
            <div className='pl-5'>
                <p>Password</p>
            </div>
            <div className='px-5 flex justify-end'>
                <button type="submit" className="absolute focus:outline-none focus:shadow-outline py-2 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                </button>
                <input type="password" className="shadow-md shadow-[#18274b40] border rounded-full   py-2 px-3 w-full placeholder-[#ACACAC] font-bold" placeholder="***********"></input>

            </div>
            <div className='py-2'></div>
            <div className='pl-5'>
                <p>Phone Number</p>
            </div>
            <div className='px-5'>
                <input type="phone" className="shadow-md shadow-[#18274b40] border rounded-full   py-2 px-3 w-full placeholder-[#ACACAC] font-bold" placeholder="xxx-xxxxxxx"></input>
            </div>
            <div className='py-2'></div>
            <div className='pl-5'>
                <p>Pin</p>
            </div>
            <div className='px-5'>
                <input type="pin" className="shadow-md shadow-[#18274b40] border rounded-full   py-2 px-3 w-full placeholder-[#ACACAC] font-bold" placeholder="xxxxxx"></input>
            </div>
            <div className='py-2'></div>
            <div className='pl-5'>
                <p>User name</p>
            </div>
            <div className='px-5'>
                <input type="name" className="shadow-md shadow-[#18274b40] border rounded-full   py-2 px-3 w-full placeholder-[#ACACAC] font-bold" placeholder="userxxxxxx"></input>
            </div>








        </div>
    )
}

export default SettingA