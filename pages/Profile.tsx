import React from 'react'
import Image from "next/image"
import profile from '../public/love.png'
import card from '../public/card.jpg'
function Profile() {
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
                <p className='font-bold text-xl py-8'> My profile</p>
            </div>

            <div>
                <Image
                    src={profile}
                    alt=""
                    className="w-full h-full"
                >
                </Image>
            </div>


            <div className='pl-5'>
                <p className='font-bold text-xl py-3'> Card</p>
            </div>

            <div>
                <Image
                    src={card}
                    alt=""
                    className="w-full h-full px-5 py-5"
                >
                </Image>
            </div>
        </div>
    )
}

export default Profile