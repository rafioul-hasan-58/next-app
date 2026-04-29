import { Upload } from "lucide-react"
import Image from "next/image"
import logoImage from "../../assets/horeimg.webp"
const Hero = () => {
    return (
        <div className="flex justify-between mt-10 gap-5">
            <section className="w-1/2 space-y-4">
                <h1 className="text-blue-950 font-bold text-3xl lg:text-4xl xl:text-5xl leading-14 mt-4">An intelligence layer that reveals the skills behind your experience-and the opportunities they unlock.</h1>
                <p className="text-gray-800 font-semibold">Designed for job seekers, career switchers, side hustlers, new graduates and freelancers</p>
                <button className="bg-blue-950 flex py-3 px-6 rounded-xl gap-2 my-10 cursor-pointer hover:opacity-90">
                    <span className="text-white  text-sm sm:text-md md:text-base lg:text-lg font-medium leading-7">
                        Upload Your Resume
                    </span>
                    <Upload className="text-white text-md md:text-lg lg:text-xl" />
                </button>
            </section>
            <section className="w-1/2">
                <Image src={logoImage} width={600} height={300} alt="logoImage" />
            </section>
        </div>
    )
}

export default Hero
