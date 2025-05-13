import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register.form";
import { formType } from "@/types/form";

interface Props {
    form: formType;
}

export const RegisterView = ({ form }: Props) => {
    return (
        <Container className="grid grid-cols-2 gap-10 mb-32">
            <div className="flex items-center">
                <div className="relative w-full h-[531px]">
                    <Image src="/asset/images/register.jpg" alt="Description de l'illustration d'un mec chill" fill className="" />
                </div>
            </div>
            <div className="flex items-center">
                <Box padding-y="py-5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" component="h1">
                            Inscription
                        </Typography>
                        <div className="flex items-center gap-2">
                            <Typography variant="caption4" component="span" theme="gray">
                                Tu as déjà un compte?
                            </Typography>
                            <Typography variant="caption4" component="h2" theme="primary">
                                <Link href="/connexion">Connexion</Link>
                            </Typography>
                        </div>
                    </div>
                    <RegisterForm form={form} />
                    <Typography variant="caption4" theme="gray" className="max-w-md mx-auto space-y-1 text-center">
                        <div>
                            En t'inscrivant tu accepte les
                        </div>
                        <div>
                            <Link href="/#" className="text-gray">conditions d'utisations</Link>
                            &nbsp; et la &nbsp;
                            <Link href="/#" className="text-gray">politique de confidentialité.</Link>
                        </div>
                    </Typography>
                </Box>
            </div >
        </Container >
    );
}