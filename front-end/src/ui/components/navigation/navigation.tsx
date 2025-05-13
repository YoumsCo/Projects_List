import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";
import { useAuth } from "@/hooks/mine-useAuth";
import { AccountAvatarNavigationLink } from "./account-avatar-link";

export const Navigation = () => {
    const { authUser } = useAuth();
    console.log(authUser);

    const authenticationSystem = (
        <div className="flex items-center gap-2">
            <Button baseUrl="/connexion" size="small">Connexion</Button>
            <Button baseUrl="/connexion/inscription" size="small" variant="secondary">Rejoindre</Button>
        </div>
    );

    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-around py-1.5 gap-7">
                <Link href="/">
                    <div className="flex items-center gap-2.5">
                        <Logo size="small" />
                        <div className="flex flex-col">
                            <div className="text-gray font-extrabold text-[24px]">
                                Coders Monkeys
                            </div>
                            <Typography
                                variant="caption4"
                                component="span"
                                theme="gray"
                            >
                                Trouve de l&rsquo;inspiration et reçois des feedback !
                            </Typography>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center gap-7">
                    <Typography variant="caption3" component="div" className="flex items-center gap-7">
                        <ActiveLink href="/design-system">Design-system</ActiveLink>
                    </Typography>
                    <Typography variant="caption3" component="div" className="flex items-center gap-7">
                        <ActiveLink href="/projets">Projet</ActiveLink>
                    </Typography>
                    <Typography variant="caption3" component="div" className="flex items-center gap-7">
                        <ActiveLink href="/formations">Formation</ActiveLink>
                    </Typography>
                    <Typography variant="caption3" component="div" className="flex items-center gap-7">
                        <ActiveLink href="/contact">Contact</ActiveLink>
                    </Typography>
                    {!authUser ? authenticationSystem : <AccountAvatarNavigationLink></AccountAvatarNavigationLink>}
                </div>
            </Container>
        </div>
    );
}