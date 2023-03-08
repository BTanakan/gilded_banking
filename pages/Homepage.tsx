import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import profile from '../public/zenitsu.jpg'
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

            <div className="fixed bottom-0 left-0 z-50 pb-20 w-full h-16 bg-white border-t border-gray-200 white:bg-gray-700 white:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                   
                    <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50 white:hover:bg-gray-800 group">
                        <svg className="w-6 h-6 mb-1 text-[#F6B552] white:text-gray-400 group-hover:text-[#F6B552] white:group-hover:text-[#F6B552] " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        <span className="sr-only">Home</span>
                    </button>
                    <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Home
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                   
                    <button  data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 white:hover:bg-gray-800 group">
                      
                        <Link href="/Balance">
                              <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-[#F6B552] white:group-hover:text-[#F6B552]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                        </svg>
                        </Link>
                        <span className="sr-only">Wallet</span>
                    </button>
                    
                    <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Wallet
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <div className="flex items-center justify-center ">
                        <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-20 h-20  font-medium bg-yellow-600 rounded-full hover:bg-yellow-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                            <svg className="w-12 h-12 text-white pr-2 pb-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span className="sr-only">New item</span>
                        </button>
                    </div>
                    <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Create new item
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 white:hover:bg-gray-800 group">
                        <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-[#F6B552] white:group-hover:text-[#F6B552]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"></path>
                        </svg>


                        <span className="sr-only">History</span>
                    </button>
                    <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Settings
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50 white:hover:bg-gray-800 group">
                    <Link href="/Setting">
                             <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-[#F6B552] white:group-hover:text-[#F6B552]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"></path>
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        </Link>
                        <span className="sr-only">Setting</span>
                    </button>
                    <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Profile
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Homepage