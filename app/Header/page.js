import Image from "next/image";
import ugc_logo from "../../public/ugc_logo.png";
import G20_logo from "../../public/G20_India_Logo.png";
import MHRD_logo from "../../public/MHRD_logo.png";
import MegaMenu from "../MegaMenu/page";

export default function Header() {
    const navList = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },

        {
            label: "Organization",
            megaMenu: {
                columns: [
                    {
                        title: "Commission",
                        links: [
                            "Commission Members",
                            "Commission Decisions",
                        ],
                    },
                    {
                        title: "Administration",
                        links: [
                            "Chairman",
                            "Vice Chairman",
                            "Secretary",
                            "Financial Advisor",
                            "Additional Secretaries",
                        ],
                    },
                    {
                        title: "",
                        links: [
                            "Joint Secretaries",
                            "Deputy Secretaries",
                            "Education Officers",
                            "Under Secretaries",
                        ],
                    },
                ],
            },
        },

        {
            label: "HEIs",
            megaMenu: {
                columns: [
                    {
                        title: "Universities",
                        links: [
                            "Central Universities",
                            " State Universities",
                            " Deemed to be Universities",
                            " State Private Universities",
                            " Fake Universities"
                        ],
                    },
                    {
                        title: "Colleges",
                        links: [
                            " Colleges (12(B)/2(f))",
                            " Autonomous Colleges"
                        ],
                    },
                    {
                        title: "Institution",
                        links: [
                            "Institutions of National Importance",
                            "Institutions of Eminence"
                        ],
                    },
                ],
            },
        },
        { label: "Key Initiatives", path: "/initiatives" },
        { label: "Guidelines", path: "/guidelines" },
        { label: "Regulations", path: "/regulations" },
        { label: "FHEI List", path: "/fhei-list" },
        { label: "e-Publications", path: "/publications" },
    ];

    return (
        <>
            {/* Top Logos */}
            <div className='flex items-center justify-around py-2 px-5 '>
                <div> <Image src={ugc_logo} width={364} height={80} alt='UGC Logo'></Image> </div>
                <div className='flex items-center'>
                    <div> <Image src={G20_logo} width={158} height={81} alt='G20 Logo'></Image></div>
                    <div> <Image src={MHRD_logo} width={46} height={77} alt='MHRD Logo'></Image> </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="bg-[#ff6c3a] px-5">
                <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-6 text-white font-bold text-lg">

                    {navList.map((item, i) => (
                        <li key={i} className="relative group py-2">

                            {!item.megaMenu ? (
                                <a href={item.path}>{item.label}</a>
                            ) : (
                                <>
                                    <span className="flex items-center gap-1 cursor-pointer">
                                        {item.label}
                                        <svg
                                            className="w-4 h-4 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>

                                    <MegaMenu data={item.megaMenu} />
                                </>
                            )}

                        </li>
                    ))}

                </ul>
            </div>
        </>
    );
}
