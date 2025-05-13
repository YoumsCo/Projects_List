import { clsx } from "clsx";
import React from "react";

interface Props {
    variant?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "lead" | "body-lg" | "body-base" | "body-sm" | "caption1" | "caption2" | "caption3" | "caption4";
    children?: React.ReactNode;
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
    theme?: "black" | "gray" | "gray-600" | "white" | "primary" | "secondary" | "danger" | "success" | "warning";
    weight?: "regular" | "medium";
    className?: string;
}

export const Typography = ({variant = "h3", children, component: Component = "div", theme = "black", weight = "regular", className}: Props) => {
    let variantStyle:string = "", colorStyle:string = "";

    switch (variant) {
        case "display":
            variantStyle = "text-8xl";
            break;
        
        case "h1":
            variantStyle = "text-7xl";
            break;
    
        case "h2":
            variantStyle = "text-6xl";
            break;
    
        case "h3":
            variantStyle = "text-5xl";
            break;
    
        case "h4":
            variantStyle = "text-4xl";
            break;
    
        case "h5":
            variantStyle = "text-3xl";
            break;
    
        case "lead":
            variantStyle = "text-2xl";
            break;
    
        case "body-lg":
            variantStyle = "text-lg";
            break;
    
        case "body-base":
            variantStyle = "text-base";
            break;
    
        case "body-sm":
            variantStyle = "text-sm";
            break;
    
        case "caption1":
            variantStyle = "text-caption1";
            break;
    
        case "caption2":
            variantStyle = "text-caption2";
            break;
    
        case "caption3":
            variantStyle = "text-caption3";
            break;
    
        case "caption4":
            variantStyle = "text-caption4";
            break;
    
        default:
          variantStyle = "text-base"; // Valeur par défaut pour variante
    }

    switch (theme) {
        case "black":
            colorStyle = "text-gray";
            break;
    
        case "gray":
            colorStyle = "text-gray-700";
            break;

        case "gray-600":
            colorStyle = "text-gray-600";
            break;
    
        case "white":
            colorStyle = "text-white";
            break;
    
        case "primary":
            colorStyle = "text-primary";
            break;
    
        case "secondary":
            colorStyle = "text-secondary";
            break;
        case "danger":
            colorStyle = "text-alert-danger";
            break;
        case "success":
            colorStyle = "text-alert-sucess";
            break;
        case "warning":
            colorStyle = "text-alert-warning";
            break;
                        
        default:
          colorStyle = "text-gray"; // Valeur par défaut pour theme
    }
    
    return <Component className={clsx(variantStyle, colorStyle, weight, className)}>
        {children}
    </Component>
}