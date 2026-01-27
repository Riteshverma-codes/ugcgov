import Image from 'next/image'
import React from 'react'
import Sunita from '../../public/SUNITA.jpg';
import Umesh from '../../public/Umesh.jpg';
import Sridhar from '../../public/Sridhar.jpg';
import Raj from '../../public/Raj.jpg';
import Marquee from "react-fast-marquee";

export default function PartnerSection() {
    return (
        <div className=''>
            <div className='max-w-310 mx-auto rounded-4xl'>
                <div className='flex flex-center flex-col'>
                    <h1 className='text-4xl text-center mt-10 font-bold text-[#ff6c3a]'>Star Performer<span className='text-[#3f495a]'> of the Month</span></h1>
                    <div className='flex flex-wrap items-center justify-center mt-10 gap-10'>

                        <div className='flex flex-col items-center rounded-xl py-10 px-3 justify-center text-center w-60 h-50'>
                            <Image src={Sunita} width={154} height={165} alt='Content1' className='rounded-tl-3xl rounded-br-3xl shadow-xl hover:shadow-xl/30 transition-shadow duration-300'></Image>
                        </div>
                        <div className='flex flex-col items-center rounded-xl py-10 px-3 justify-center text-center w-60 h-50'>
                            <Image src={Umesh} width={154} height={165} alt='Content1' className='rounded-tl-3xl rounded-br-3xl shadow-xl hover:shadow-xl/30 transition-shadow duration-300'></Image>
                        </div>
                        <div className='flex flex-col items-center rounded-xl py-10 px-3 justify-center text-center w-60 h-50'>
                            <Image src={Sridhar} width={154} height={165} alt='Content1' className='rounded-tl-3xl rounded-br-3xl shadow-xl hover:shadow-xl/30 transition-shadow duration-300'></Image>
                        </div>
                        <div className='flex flex-col items-center rounded-xl py-10 px-3 justify-center text-center w-60 h-50'>
                            <Image src={Raj} width={154} height={165} alt='Content1' className='rounded-tl-3xl rounded-br-3xl shadow-xl hover:shadow-xl/30 transition-shadow duration-300'></Image>
                        </div>
                    </div>
                    <button className='bg-[#3f495a] w-30 rounded-3xl text-white m-10 mx-auto px-4 py-3'>View All</button>
                </div>
            </div>

            <div className="bg-[#e3def7] py-20">
                <div className="max-w-7xl mx-auto flex justify-center gap-10">

                    <div className="relative bg-white w-380px rounded-3xl shadow-lg overflow-hidden">

                        <div className="bg-[#232c3b] h-20"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2
                      bg-orange-500 text-white px-8 py-2
                      rounded-b-2xl font-semibold text-lg shadow">
                            Notices
                        </div>

                        {/* Content */}
                        <div className="px-6 pt-12 pb-24 text-sm text-gray-700 space-y-4">
                            <div className="border-b pb-3">
                                <p className="font-medium">
                                    Hon'ble Prime Minister’s Address during VBTD 2026 on 12th January 2026 – Instructions for Compliance.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">📅 Published on : 09/01/2026</p>
                            </div>

                            <div className="border-b pb-3">
                                <p className="font-medium">
                                    UGC letter regarding: New Delhi World Book Fair 2026.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">📅 Published on : 05/01/2026</p>
                            </div>
                        </div>


                        <div className="absolute bottom-6 w-full px-6">
                            <button className="w-full border border-gray-400 rounded-full py-3
                           text-sm font-medium hover:bg-gray-100 transition">
                                Read More
                            </button>
                        </div>

                    </div>
                    <div className="relative bg-white w-380px rounded-3xl shadow-lg overflow-hidden">


                        <div className="bg-[#232c3b] h-20"></div>


                        <div className="absolute top-0 left-1/2 -translate-x-1/2
                      bg-[#1f7dda] text-white px-8 py-2
                      rounded-b-2xl font-semibold text-lg shadow">
                            Circular
                        </div>


                        <div className="px-6 pt-12 pb-24 text-sm text-gray-700 space-y-4">
                            <div className="border-b pb-3">
                                <p className="font-medium">
                                    Hon'ble Prime Minister’s Address during VBTD 2026 on 12th January 2026 – Instructions for Compliance.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">📅 Published on : 09/01/2026</p>
                            </div>

                            <div className="border-b pb-3">
                                <p className="font-medium">
                                    UGC letter regarding: New Delhi World Book Fair 2026.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">📅 Published on : 05/01/2026</p>
                            </div>
                        </div>


                        <div className="absolute bottom-6 w-full px-6">
                            <button className="w-full border border-gray-400 rounded-full py-3
                           text-sm font-medium hover:bg-gray-100 transition">
                                Read More
                            </button>
                        </div>

                    </div>
                    <div className="relative bg-white w-380px rounded-3xl shadow-lg overflow-hidden">


                        <div className="bg-[#232c3b] h-20"></div>


                        <div className="absolute top-0 left-1/2 -translate-x-1/2
                      bg-[#407f46] text-white px-8 py-2
                      rounded-b-2xl font-semibold text-lg shadow whitespace-nowrap">
                            International Cooperation
                        </div>


                        <div className="px-6 pt-12 pb-24 text-sm text-gray-700 space-y-4">
                            <div className="border-b pb-3">
                                <p className="font-medium">
                                    Hon'ble Prime Minister’s Address during VBTD 2026 on 12th January 2026 – Instructions for Compliance.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">📅 Published on : 09/01/2026</p>
                            </div>

                            <div className="border-b pb-3">
                                <p className="font-medium">
                                    UGC letter regarding: New Delhi World Book Fair 2026.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">📅 Published on : 05/01/2026</p>
                            </div>
                        </div>


                        <div className="absolute bottom-6 w-full px-6">
                            <button className="w-full border border-gray-400 rounded-full py-3
                           text-sm font-medium hover:bg-gray-100 transition">
                                Read More
                            </button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
