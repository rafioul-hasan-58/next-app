"use client";

import Image from "next/image"
import logo from "../../assets/skillQuix.logo.svg"
import { navItems } from "./Navbar.halper"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="h-20 lg:h-24 lg:w-full border border-gray-300 mx-2 lg:mx-20 2xl:mx-auto 2xl:max-w-7xl mt-5 rounded-xl">
            <nav className="flex items-center h-full px-3 w-full ">
                {/* logo section */}
                <section className="w-1/3 flex justify-start">
                    <Image src={logo} width={120} height={50} alt="navbar/logo" />
                </section>

                {/* navItem section desktop */}
                <section className="w-1/3 lg:flex justify-center hidden">
                    <ul className="flex gap-4 lg:gap-6">
                        {navItems.map((nav) => (
                            <li key={nav.label} className="text-gray-600 font-semibold">{nav.label}</li>
                        ))}
                    </ul>
                </section>

                {/* button/profile section desktop */}
                <section className="w-1/3 hidden lg:flex justify-end gap-3">
                    <button className="bg-white text-blue-900 border rounded-lg text-sm border-blue-950 px-5 py-2 font-semibold cursor-pointer hover:bg-gray-200">
                        Log In
                    </button>
                    <button className="bg-blue-900 text-white border rounded-lg text-sm border-blue-950 px-4 py-2 font-semibold hover:opacity-90 cursor-pointer">
                        Sign Up
                    </button>
                </section>

                {/* hamburger icon mobile */}
                <section className="flex justify-end lg:hidden ml-auto">
                    <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
                        <SheetTrigger asChild>
                            <button
                                onClick={() => setIsNavOpen(true)}
                                className="cursor-pointer text-gray-700 bg-gray-200 p-1 rounded-sm"
                            >
                                <Menu size={25} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>
                                    <Image src={logo} width={100} height={40} alt="navbar/logo" />
                                </SheetTitle>
                            </SheetHeader>
                            <ul className="flex flex-col gap-5 mt-6 px-4">
                                {navItems.map((nav) => (
                                    <li
                                        key={nav.label}
                                        className="text-gray-600 font-semibold text-lg cursor-pointer hover:text-blue-900"
                                        onClick={() => setIsNavOpen(false)}
                                    >
                                        {nav.label}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col gap-3 mt-8 px-4">
                                <button className="bg-white text-blue-900 border rounded-lg text-sm border-blue-950 px-5 py-2 font-semibold cursor-pointer hover:bg-gray-200">
                                    Log In
                                </button>
                                <button className="bg-blue-900 text-white border rounded-lg text-sm border-blue-950 px-4 py-2 font-semibold hover:opacity-90 cursor-pointer">
                                    Sign Up
                                </button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </section>
            </nav>
        </div>
    )
}

export default Navbar