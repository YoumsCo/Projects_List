/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { iconProps } from '@/types/iconProps';
import { clsx } from 'clsx';
import { Spinner } from '../spinner/spinner';
import { LinkType, LinkTypes } from '@/lib/link-type';
import Link from 'next/link';

interface Props {
    size?: "small" | "medium" |"large";
    variant?: "accent" | "secondary" | "outline" | "disabled" | "ico" | "success" | "danger";
    icon?: iconProps;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    baseUrl?: string,
    linkType?: LinkType | string;
    action?: Function;
    className?: string;
    type?: "button" | "submit";
    fullWidth?: boolean;
}

export const Button = ({
    size = "medium", 
    variant = "accent", 
    icon, 
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    isLoading,
    children,
    baseUrl,
    linkType = "internal",
    action = () => {},
    className = "",
    type = "button",
    fullWidth = false,
}: Props) => {
    
    let variantStyle: string = "", 
        sizeStyle: string = "", 
        icoSize: number = 0;

    switch (variant) {
        case "accent": // default
            variantStyle = "bg-primary hover:bg-primary-400 text-white rounded";
        break;
        case "secondary":
            variantStyle = "bg-primary-200 hover:bg-primary-300 text-primary rounded";
        break;
        case "outline":
            variantStyle = "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-800 rounded";
        break;
        case "disabled":
            variantStyle = "bg-gray-400 border-gray-500 text-gray-700 rounded cursor-not-allowed";
        break;
        case "success":
            variantStyle = "bg-secondary hover:bg-secondary-400 text-white rounded";
        break;
        case "danger":
            variantStyle = "bg-alert-danger hover:bg-alert-danger/75 text-white rounded";
        break;
        case "ico": 
            if (iconTheme === "accent") { // default
                variantStyle = "bg-white hover:bg-primary-400 text-primary rounded-full";
            }

            else if (iconTheme === "secondary") {
                variantStyle = "bg-primary-600 hover:bg-primary-300/50 text-white rounded-full";
            }

            else if (iconTheme === "gray") {
                variantStyle = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
            }
        break;
    }

    switch (size) {
        case "small":
            sizeStyle = `text-caption3 font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"
            }`;
            icoSize = 18;
            break;
            case "medium": // default
            sizeStyle = `text-caption2 font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px] flex items-center justify-center" : "px-[10px] py-[15px]"
            }`;
            icoSize = 20;
            break;
        case "large":
                sizeStyle = `text-caption1 font-medium ${
                    variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"
            }`;
                icoSize = 24;
        break;
    }

    const buttonContent = (
        <>
            {isLoading && (
                <div className={clsx("absolute inset-0 flex items-center justify-center")}>
                    {
                        variant === "accent" ? (<Spinner size='small' variant='white' />) : (<Spinner size='small' />)
                    }
                </div>
            )}

            <div className={clsx(isLoading && "invisible")}>
                {icon && variant == "ico" ? (
                    <icon.icon size={icoSize}/>
                ) : (
                    <div className={clsx(icon && "flex items-center gap-1")}>
                        {icon && iconPosition === "left" && (
                            <icon.icon size={icoSize}/>
                        )}
                        {children}
                        {icon && iconPosition === "right" && (
                            <icon.icon size={icoSize}/>
                        )}
                    </div>
                )}
            </div>

        </>
    );

    const handleClick = () => {
        if(action) {
            action();
        }
    }

    const buttonElement = (
        <button 
            type={type}
            className={clsx(
                variantStyle, 
                sizeStyle, 
                icoSize, 
                isLoading && "cursor-not-allowed", 
                fullWidth && "w-full", 
                "relative animate",
                className
            )}
            onClick={handleClick}
            disabled={disabled || isLoading ? true : false}
        >
            {buttonContent}
        </button>
    );

    if(baseUrl) {
        if(linkType === LinkTypes.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank" title="link">{buttonElement}</a>
            );
        }
        else {
            return <Link href={baseUrl}>{buttonElement}</Link>
        }
    }
    return buttonElement;
}