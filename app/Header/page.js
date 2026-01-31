import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ugc_logo from "../../public/ugc_logo.png"
import G20_logo from "../../public/G20_India_Logo.png"
import MHRD_logo from "../../public/MHRD_logo.png"

const navList = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },

    {
        label: "Organization",
        dropdown: [
            { label: "Structure", path: "/organization/structure" },
            { label: "Members", path: "/organization/members" },
        ],
    },

    {
        label: "Key Initiatives",
        dropdown: [
            { label: "Initiative 1", path: "/initiatives/1" },
            { label: "Initiative 2", path: "/initiatives/2" },
        ],
    },

    { label: "Guidelines", path: "/guidelines" },
    { label: "Regulations", path: "/regulations" },
    { label: "HEIs", path: "/heis" },
    { label: "FHEI List", path: "/fhei-list" },
    { label: "e-Publications", path: "/e-publications" },
];


export default function Header() {

    return (
        <div>
            <div className='flex items-center justify-around py-2 px-5 '>
                <div>
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
            <div className="bg-[#ff6c3a] py-4 px-5">
                <ul className="flex flex-wrap items-center justify-center gap-6 text-white font-bold text-lg">

                    {navList.map((item, index) => (
                        <li key={index} className="relative group">

                            {/* Normal Link */}
                            {!item.dropdown && (
                                <Link
                                    href={item.path}
                                    className="hover:bg-"
                                >
                                    {item.label}
                                </Link>
                            )}

                            {/* Dropdown */}
                            {item.dropdown && (
                                <>
                                    <span className="flex items-center justify-center gap-1 cursor-pointer">
                                        {item.label}

                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>

                                    <ul className="absolute left-0 top-full mt-3 hidden group-hover:block
                                         bg-white text-black rounded-md shadow-lg min-w-[200] z-50">

                                        {item.dropdown.map((subItem, i) => (
                                            <li key={i}>
                                                <Link
                                                    href={subItem.path}
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                        </li>
                    ))}

                </ul>
            </div>

        </div>
    )
}
