import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { v4 as uuidtv4 } from "uuid";
import { ActiveLink } from './active-link'
import { LinkTypes } from "@/lib/link-type";
import { SocialNetworksButtons } from "./social-networks-buttons";
import { FooterLinks } from "@/types/app-links";
import { footerLinks } from "./app-links";

export const Footer = () => {

    const currentYear = new Date().getFullYear();
    const footerNavigationLinks = footerLinks.map(columnLinks => {
        return <FooterLink key={uuidtv4()} data={columnLinks} />
    });

    return (
        <div className="bg-gray">
            <Container className="flex justify-around pt-16">
                <div className="flex flex-col items-center gap-1">
                    <Typography variant="caption1" theme="white">
                        Fomration gratuite
                    </Typography>
                    <Typography variant="caption3" theme="gray">
                        Abonne toi à la chaine
                    </Typography>
                    <a href="https://youtube.com/@remotemonkey" target="_blank">
                        <Image src="/asset/images/20230808_112957.jpg" alt="Remote monkey | youtube" width={220} height={220} objectFit="cover" objectPosition="center" />
                    </a>
                </div>
                <div className="flex gap-7">
                    {footerNavigationLinks}
                </div>
            </Container>
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800" />
                <div className="flex items-center justify-around">
                    <Typography variant="caption4" theme="gray">
                        {`Copyright &copy; ${currentYear} | Propulsed by `}
                        <a href="https://arnaud-desportes.fr" target="_blank" className="underline">
                            Arnaud Desportes
                        </a>
                        {` - Remote monkey SASU`}
                    </Typography>
                    <div>
                        <SocialNetworksButtons theme="gray"/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

interface footerLinkProps {
    data: FooterLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
    const linksList = data.links.map((link) => {
        return <div key={uuidtv4()}>
            {
                link.type === LinkTypes.INTERNAL && (
                    <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
                )
            }
            {
                link.type === LinkTypes.EXTERNAL && (
                    <a href={link.baseUrl} target="_blank">{link.label}</a>
                )
            }
        </div>
    });

    return <div className="min-w-[190px]">
        <Typography variant="caption2" theme="white" weight="medium" className="pb-5">
            {data.label}
        </Typography>
        <Typography variant="caption3" theme="gray" className="space-y-4">
            {linksList}
        </Typography>
    </div>
} 