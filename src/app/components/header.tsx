'use client';
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const linkData = [
    { href: '/Performance', label: 'Performance' },
    { href: '/Reliability', label: 'Reliability' },
    { href: '/Scale', label: 'Scale' },
];

const accessLink = [
    '/',
    '/Performance',
    '/Reliability',
    '/Scale',
];

export default function header() {
    const pathname = usePathname();

    if (!accessLink.includes(pathname)) return null;

    console.log("PATH:", pathname);
    return (
        <div className="absolute w-full z-10">
            <div className="flex container items-center justify-between p-5 mx-auto border-b border-gray-300 mb-8 text-white">

                <div className='flex flex-row'>
                    <Image src={"/icon.svg"} alt='icon' width={"28"} height={"28"}></Image>
                    <Link href="/"
                        className={`text-3xl font-bold ml-2
                        ${pathname === "/" ? "text-amber-500" : ""}`}>
                        Home
                    </Link>
                </div>


                <div className="text-2xl space-x-5">
                    {
                        linkData.map(({ href, label }) => (
                            <Link key={href} className={pathname === href ? 'text-amber-500' : ''} href={href}>{label}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
