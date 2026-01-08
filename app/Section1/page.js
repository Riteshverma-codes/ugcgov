import Image from 'next/image'
import React from 'react'
import my_gov from "../../public/mygov_.jpg"

export default function Section1() {
    return (
        <div>
            <div className='relative w-full bg-[#f0f0f0] flex items-center justify-center'>
                <div className=' max-w-250 h-45 mx-auto'>
                    {/* <h1>This is section content</h1> */}
                    <div className='relative w-full h-full overflow-hidden'>
                        <Image src={my_gov} width={1000} alt='My_gov' className='object-cover'></Image>
                    </div>
                </div>
            </div>
            <div className=' max-w-250 mx-auto pt-8 pb-8'>
                <h2 className='text-[#515151] font-bold text-3xl mt-3'>About University Grants Commission</h2>
                <p>The University Grants Commission (UGC) came into existence on 28th December, 1953 and became a statutory Organization of the Government of India by an Act of Parliament in 1956, for the coordination,determination and maintenance of standards of teaching, examination and research in university education.</p>
                <button className='bg-[#ff6c3a] rounded-3xl px-5 py-2 text-lg mt-6'>Read More</button>
            </div>
        </div>
    )
}
