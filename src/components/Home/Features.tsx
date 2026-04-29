import aihero from "@/assets/icons/aihero.svg";
import gaphero from "@/assets/icons/gaphero.svg";
import jobhero from "@/assets/icons/jobhero.svg";
import { FaRegFileLines } from "react-icons/fa6";
import HeroCard from "../ui/custom-ui/HeroCard";

const features = [
    {
        title: "Smart Resume Parsing",
        description:
            "Upload your resume and our AI extracts your skills, experience, and qualifications instantly.",
        icon: FaRegFileLines,
        iconColor: "text-[#5E41DB]",
        bgColor: "bg-[#E0E0FC]",
    },
    {
        title: "ATS Score & Optimization",
        description:
            "Instant analysis of how well your resume passes Applicant Tracking Systems + fix suggestions.",
        icon: aihero,
        iconColor: "text-[#00991C]",
        bgColor: "bg-[#CCEBD2]",
    },
    {
        title: "Keyword Intelligence",
        description:
            "Compare your resume with job descriptions and get exact missing keywords to include.",
        icon: gaphero,
        iconColor: "text-[#005EEB]",
        bgColor: "bg-[#CCDEF8]",
    },
    {
        title: "Professional Formatting",
        description:
            "Choose clean, modern templates that look great in PDF and impress recruiters.",
        icon: jobhero,
        iconColor: "text-[#E80000]",
        bgColor: "bg-[#FACCCC]",
    },
];
const Features = () => {
    return (
        <div>
            {
                features.map((feature, idx) => (
                    <HeroCard
                        key={idx}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        iconColor={feature.iconColor}
                        bgColor={feature.bgColor}
                    />
                ))
            }
        </div>
    )
}

export default Features
