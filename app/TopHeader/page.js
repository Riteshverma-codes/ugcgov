import Link from "next/link";
import React from "react";

export default function TopHeader() {
    return (
        <>
            <div className="bg-[#3d344b] py-1">
                <div className="flex flex-wrap items-center justify-center text-white gap-5">
                    <Link href="/" className="text-[#ff6c3a]">Home</Link>
                    <Link href="/">Skip to main content</Link>
                    <Link href="/">Skip to Navigation</Link>
                    <Link href="/">Sreen Reader</Link>
                    <Link href="/">Text Size: A- A A+</Link>
                    <Link href="/">Hindi</Link>
                    <Link href="/">Contact Us</Link>
                    <Link href="/">FAQs</Link>
                    <Link href="/">e-Procurement</Link>
                    <Link href="/">Tenders</Link>
                    <Link href="/">Jobs</Link>
                    <Link href="/">Search</Link>
                </div>
            </div>
        </>
    )
}