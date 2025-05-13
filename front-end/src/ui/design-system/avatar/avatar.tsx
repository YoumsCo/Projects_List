import clsx from "clsx";
import Image from "next/image";

interface Props {
    size?: "small" | "medium" | "large";
    src: string;
    alt: string;
    bgWhiteNone?: boolean;
}

export const Avatar = ({ size = "medium", src, alt, bgWhiteNone = false }: Props) => {
    let sizeStyle: string;

    switch (size) {
        case "small":
            sizeStyle = "w-[24px] h-[24px]";
            break;
        case "medium": // dedfault
            sizeStyle = "w-[34px] h-[34px]";
            break;
        case "large":
            sizeStyle = "w-[50px] h-[50px]";
            break;
    }
    return <div className={clsx(
        sizeStyle,
        bgWhiteNone ? "relative" : "relative bg-gray-400")}>
        <Image
            src={src ? src : "/asset/images/user.png"}
            alt={alt}
            fill
            className={clsx("object-cover rounded-full")}
        />
    </div>
}