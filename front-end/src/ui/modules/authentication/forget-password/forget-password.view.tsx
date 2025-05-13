import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";
import { Container } from "@/ui/components/container/container";
import Image from "next/image";
import { ForgetPassworForm } from "./forget-password.form";
import { formType } from "@/types/form";

interface Props {
    form: formType;
}

export const ForgetPasswordView = ({ form }: Props) => {
    return (
        <Container className="grid grid-cols-2 gap-10 mb-32">
            <div className="flex items-center">
                <div className="relative w-full h-[531px]">
                    <Image src="/asset/images/1724936258284.jpg" alt="Description de l'illustration d'un autre mec chill" fill className="" />
                </div>
            </div>
            <div className="flex items-center">
                <Box padding-y="py-5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" component="h1">
                            Mot de passe perdu?
                        </Typography>
                        <Typography variant="caption4" component="h2" theme="primary">
                            <Link href="/connexion">Connexion</Link>
                        </Typography>
                    </div>
                    <ForgetPassworForm form={form} />
                </Box>
            </div >
        </Container >
    );
}