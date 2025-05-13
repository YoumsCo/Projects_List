import { clsx } from "clsx";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "white";
}

export const Spinner = ({size = "medium", variant = "primary"}: Props) => {
    let variantStyle: string = "", sizeStyle: string = ""; 

    switch (size) {
        case "small":
            sizeStyle = "w-5 h-5";
            break;
        case "medium": // default
            sizeStyle = "w-9 h-9";
            break;
        case "large":
            sizeStyle = "w-12 h-12";
            break;
    
        default:
            break;
    }

    switch (variant) {
        case "primary": // default
            variantStyle = "text-primary";
            break;
        case "white": 
            variantStyle = "text-white";
            break;
    }

    return (
        <svg
            role="spinner"
            className={clsx(variantStyle, sizeStyle, "animate-spin")}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle  
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
        </svg>
    )
}