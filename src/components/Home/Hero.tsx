"use client";
import { Upload } from "lucide-react"
import Image from "next/image"
import logoImage from "../../assets/horeimg.webp"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Features from "./Features";

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(titleRef.current, {
                y: 70,
                opacity: 0,
                duration: 1,
                delay: 0.3,
            })
                .from(
                    subtitleRef.current,
                    { y: 40, opacity: 0, duration: 0.8 },
                    "-=0.5",
                )
                .from(buttonRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
        }, heroRef);

        return () => ctx.revert();
    }, []);
    return (
        <div>
            <div ref={heroRef} className="flex flex-col-reverse lg:flex-row justify-between mt-10 gap-5 w-full">
                <section className="w-full lg:w-1/2 space-y-4">
                    <h1 ref={titleRef} className="text-blue-950 font-bold text-2xl lg:text-4xl xl:text-5xl lg:leading-14 mt-4">
                        An intelligence layer that reveals the skills behind your experience-and the opportunities they unlock.
                    </h1>
                    <p ref={subtitleRef} className="text-gray-800 font-semibold">
                        Designed for job seekers, career switchers, side hustlers, new graduates and freelancers
                    </p>
                    <button ref={buttonRef} className="bg-blue-950 flex py-3 px-6 rounded-xl gap-2 my-10 cursor-pointer hover:opacity-90 items-center">
                        <span className="text-white text-sm sm:text-md md:text-base lg:text-lg font-medium leading-7">
                            Upload Your Resume
                        </span>
                        <Upload className="text-white text-md md:text-lg lg:text-xl" />
                    </button>
                </section>
                <section className="w-full lg:w-1/2 flex justify-center items-center">
                    <Image
                        src={logoImage}
                        alt="logoImage"
                        className="w-full max-w-75 lg:max-w-125 xl:max-w-150 h-auto"
                    />
                </section>
            </div>
            <Features />
        </div>
    )
}

export default Hero