import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";
import { Container } from "@/ui/components/container/container";
import Image from "next/image";
import { LoginForm } from './login.form';
import { formType } from "@/types/form";

interface Props {
    form: formType;
}

export const LoginView = ({ form }: Props) => {
    return (
        <Container className="grid grid-cols-2 gap-10 mb-32">
            <div className="flex items-center">
                <div className="relative w-full h-[531px]">
                    <Image src="/asset/images/login.jpg" alt="Description de l'illustration d'un autre mec chill" fill className="" />
                </div>
            </div>
            <div className="flex items-center">
                <Box padding-y="py-5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" component="h1">
                            Connexion
                        </Typography>
                        <div className="flex items-center gap-2">
                            <Typography variant="caption4" component="span" theme="gray">
                                Tu n&rsquo;as pas de compte?
                            </Typography>
                            <Typography variant="caption4" component="h2" theme="primary">
                                <Link href="/connexion/inscription">S&rsquo;inscrire</Link>
                            </Typography>
                        </div>
                    </div>
                    <LoginForm form={form} />
                    <Typography variant="caption4" theme="primary">
                        <Link href="/connexion/mot-de-passe-perdu" className="flex justify-center">Mot de passe perdu ?</Link>
                    </Typography>
                </Box>
            </div >
        </Container >
    );
}