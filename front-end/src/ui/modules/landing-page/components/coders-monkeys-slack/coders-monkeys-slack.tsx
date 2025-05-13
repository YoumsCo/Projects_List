import { Container } from "@/ui/components/container/container";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { LinkTypes } from '@/lib/link-type';
import { Button } from "@/ui/design-system/button/button";

export const CodersMonkeysSlackView = () => {
    return (
        <Container className="flex justify-between py-10">
            <div className="flex flex-col justify-center max-w-2xl space-y-5">
                <div className="flex items-center gap-2">
                    <Logo size="very-small" />
                    <Typography variant="caption2" component="span" weight="medium">
                        Coders monkeys
                    </Typography>
                </div>
                <Typography variant="h2" component="h2">
                    Rejoins nous sur le slack des singes codeurs
                </Typography>
                <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
                    Rejoins nous et obtiens de l&rsquo;aide, des conseils et pourquoi pas de nouveaux potes?
                </Typography>
                <Button baseUrl="/#" linkType={LinkTypes.EXTERNAL}>Rejoins le groupe d&rsquo;aide</Button>
            </div>
            <div className="relative w-[300px] h-[300px]">
                <Image src="/asset/svg/react.svg" alt="Groupe slack coders monkeys" fill />
            </div>
        </Container>
    );
}