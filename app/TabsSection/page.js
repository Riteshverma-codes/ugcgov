import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdComputer } from "react-icons/md";
import { FaRegHandPointUp } from "react-icons/fa";
import Tab1 from "../../public//7032830_UGC_Equivalence.jpg"

export default function TabSection() {
    return (
        <div className='bg-[#2a243e] pb-5'>
            <div className='flex items-center justify-center gap-5 pt-12 flex-wrap'>
                <div className='bg-white flex flex-col items-center rounded-xl justify-center text-center w-45 h-40 border-l-5 border-[#ff6c3a]'>
                    <div className='text-3xl text-[#ff6c3a]'><MdComputer /></div>
                    <p className='text-xl font-medium text-gray-500 pt-3'>e-Governance @UGC</p>
                </div>
                <div className='bg-white flex flex-col items-center rounded-xl justify-center text-center w-45 h-40 border-l-5 border-[#ff6c3a]'>
                    <div className='text-3xl text-[#ff6c3a]'><FaRegHandPointUp /></div>
                    <p className='text-xl font-medium text-gray-500 pt-3'>e-Governance @UGC</p>
                </div>
                <div className='bg-white flex flex-col items-center rounded-xl justify-center text-center w-45 h-40 border-l-5 border-[#ff6c3a]'>
                    <div className='text-3xl text-[#ff6c3a]'><MdComputer /></div>
                    <p className='text-xl font-medium text-gray-500 pt-3'>e-Governance @UGC</p>
                </div>
                <div className='bg-white flex flex-col items-center rounded-xl justify-center text-center w-45 h-40 border-l-5 border-[#ff6c3a]'>
                    <div className='text-3xl text-[#ff6c3a]'><MdComputer /></div>
                    <p className='text-xl font-medium text-gray-500 pt-3'>e-Governance @UGC</p>
                </div>
                <div className='bg-white flex flex-col items-center rounded-xl justify-center text-center w-45 h-40 border-l-5 border-[#ff6c3a]'>
                    <div className='text-3xl text-[#ff6c3a]'><MdComputer /></div>
                    <p className='text-xl font-medium text-gray-500 pt-3'>e-Governance @UGC</p>
                </div>
                <div className='bg-white flex flex-col items-center rounded-xl justify-center text-center w-45 h-40 border-l-5 border-[#ff6c3a]'>
                    <div className='text-3xl text-[#ff6c3a]'><MdComputer /></div>
                    <p className='text-xl font-medium text-gray-500 pt-3'>e-Governance @UGC</p>
                </div>
            </div>
            
            <div className='bg-white max-w-310 mx-auto my-10 rounded-4xl'>
                <div className='flex flex-center flex-col'>
                    <h1 className='text-4xl text-center mt-10 font-bold text-[#ff6c3a]'>e-Governance <span className='text-[#3f495a]'>@UGC</span></h1>
                    <div className='flex flex-wrap items-center justify-center mt-10 gap-10'>
                        <div className='bg-[#efefef] flex flex-col items-center rounded-xl py-10 px-3 justify-center text-center w-60 h-50'>
                            <Image src={Tab1} width={200} height={200} alt='Content1'></Image>
                            <Link href="/" className='text-xl font-medium text-gray-500 pt-8'>UGC Equivalence Portal</Link>
                        </div>
                        <div className='bg-[#efefef] flex flex-col items-center rounded-xl py-10 px-3 justify-center text-center w-60 h-50'>
                            <Image src={Tab1} width={200} height={200} alt='Content1'></Image>
                            <Link href="/" className='text-xl font-medium text-gray-500 pt-8'>UGC Equivalence Portal</Link>
                        </div>
                        <div className='bg-[#efefef] flex flex-col items-center rounded-xl py-10 px-3 justify-center text-center w-60 h-50'>
                            <Image src={Tab1} width={200} height={200} alt='Content1'></Image>
                            <Link href="/" className='text-xl font-medium text-gray-500 pt-8'>UGC Equivalence Portal</Link>
                        </div>
                        <div className='bg-[#efefef] flex flex-col items-center rounded-xl py-10 px-3 justify-center text-center w-60 h-50'>
                            <Image src={Tab1} width={200} height={200} alt='Content1'></Image>
                            <Link href="/" className='text-xl font-medium text-gray-500 pt-8'>UGC Equivalence Portal</Link>
                        </div>
                    </div>
                    <button className='bg-[#3f495a] w-30 rounded-3xl text-white m-10 mx-auto px-4 py-3'>View All</button>
                </div>
            </div>
        </div>
    )
}
