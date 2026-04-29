import { IconType } from "react-icons";
import { PiFilePdf } from "react-icons/pi";

interface HeroCardProps {
    title: string;
    description: string;
    icon?: IconType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    iconColor?: string;
    bgColor?: string;
}
const HeroCard = ({
    title,
    description,
    icon: Icon = PiFilePdf,
    iconColor = "text-indigo-600",
    bgColor = "bg-indigo-50",
}: HeroCardProps) => {
    return (
        <div>
            <div
                className={`xl:p-2 p-1.5 rounded-lg inline-flex justify-start items-center gap-2.5 ${bgColor}`}
            >
                <Icon
                    className={`lg:text-xl md:text-lg text-md ${iconColor} transition-transform duration-300 group-hover:rotate-6`}
                    size={24} // Fallback size for consistency (optional)
                />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default HeroCard
