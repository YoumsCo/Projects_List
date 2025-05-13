import { v4 as uuidv4 } from "uuid";
import { footerSocialsNetworksLinks } from "./app-links";
import { Button } from "@/ui/design-system/button/button";
import { RiFacebookBoxLine } from "react-icons/ri";
import clsx from "clsx";

interface Props {
    className?: string;
    theme?: "gray" | "accent" | "secondary";
}
export const SocialNetworksButtons = ({className}: Props) => {
    const icoList = footerSocialsNetworksLinks.map(socialNetwork => {
        return <Button key={uuidv4()} variant="ico" iconTheme="gray" icon={{ icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxLine }} baseUrl={socialNetwork.baseUrl} linkType={socialNetwork.type} />
    });

    return (
        <div className={clsx(className, "flex items-center gap-2.5")}>
            {icoList}
        </div>
    );
}