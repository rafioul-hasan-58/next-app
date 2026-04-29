import Image from "next/image"
import logo from "../../assets/skillQuix.logo.svg"
import { navItems } from "./Navbar.halper"

const Navbar = () => {
    return (
        <div className="h-24 w-full border border-gray-300 mx-5 lg:mx-20 2xl:mx-auto 2xl:max-w-7xl mt-5 rounded-xl ">
            <nav className="flex items-center h-full px-3">
                {/* logo section */}
                <section className=" w-1/3 flex   justify-start">
                    <Image src={logo} width={120} height={50} alt="navbar/logo" />
                </section>
                {/* navItem section */}
                <section className="w-1/3 flex justify-center">
                    <ul className="flex gap-4 lg:gap-6">
                        {
                            navItems.map((nav) => <li className="text-gray-600 font-semibold">{nav.label}</li>)
                        }
                    </ul>
                </section>
                {/* button/profile section */}
                <section className="w-1/3 flex justify-end gap-3">
                    <button className="bg-white text-blue-900 border rounded-lg text-sm border-blue-950 px-5 py-2 font-semibold cursor-pointer hover:bg-gray-200">
                        Log In
                    </button>
                    <button className="bg-blue-900 text-white border rounded-lg text-sm border-blue-950 px-4 py-2 font-semibold hover:opacity-90 cursor-pointer">
                        Sign Up
                    </button>
                </section>
            </nav>
        </div>
    )
}

export default Navbar
