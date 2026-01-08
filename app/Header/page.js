import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ugc_logo from "../../public/ugc_logo.png"
import G20_logo from "../../public/G20_India_Logo.png"
import MHRD_logo from "../../public/MHRD_logo.png"

let array = ["Home",
    "About Us",
    "Organization",
    "Key Initiatives",
    "Guidelines",
    "Regulations",
    "HEIs",
    "FHEI List",
    "e-Publications"];

export default function Header() {

    return (
        <div>
            <div className='flex items-center justify-around py-2 '>
                <div>
                    {/* <Image src="https://carwise.in/guides/wp-content/uploads/2025/01/Scorpio.png" width={200} height={300} alt='car image'></Image> */}
                    <Image src={ugc_logo} width={364} height={80} alt='UGC Logo'></Image>
                </div>
                <div className='flex items-center'>
                    <div>
                        <Image src={G20_logo} width={158} height={81} alt='G20 Logo'></Image>
                    </div>
                    <div>
                        <Image src={MHRD_logo} width={46} height={77} alt='MHRD Logo'></Image>
                    </div>
                </div>
            </div>
            <div className='bg-[#ff6c3a] py-4'>
                <div className=''>
                    <ul className='flex flex-wrap items-center justify-center text-white gap-5 text font-bold text-lg'>
                        {
                            array.map((item, index) => (
                                <li key={index}>
                                    <Link href="">{item}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
