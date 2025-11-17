'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from "lucide-react";

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

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    if (!accessLink.includes(pathname)) return null;

    return (
        <div className="absolute w-full z-10 bg-black/5 backdrop-blur">
            <div className="flex items-center justify-between p-5 mx-auto container border-b border-gray-300 text-white">

                {/* LOGO + Home */}
                <div className="flex items-center">
                    <Image src={"/icon.svg"} alt="icon" width={28} height={28} />
                    <Link
                        href="/"
                        className={`text-3xl font-bold ml-2 ${pathname === "/" ? "text-amber-500" : ""}`}
                    >
                        Home
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex text-2xl space-x-5">
                    {linkData.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={pathname === href ? "text-amber-500" : ""}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Hamburger Button (Mobile) */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-black/80 text-white text-2xl border-b border-gray-500">
                    {linkData.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`${pathname === href ? "text-amber-500" : ""} py-1`}
                            onClick={() => setOpen(false)}  // 點了自動收起
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
