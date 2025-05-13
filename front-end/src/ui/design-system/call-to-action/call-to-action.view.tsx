import { Container } from "@/ui/components/container/container";
import { Typography } from "../typography/typography";
import { Button } from "../button/button";
import { LinkTypes } from "@/lib/link-type";
import Image from "next/image";

export const CallToActionView = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            <Container className="py-20">
                <div className="relative z-10 max-w-3xl space-y-5">
                    <Typography variant="h2" theme="white" component="h2">
                        N&rsquo;attends pas pour developper tes compétences
                    </Typography>
                    <div>
                        <Button variant="success" baseUrl="#" linkType={LinkTypes.EXTERNAL}>Formation react gratuite</Button>
                    </div>
                </div>
                <div className="relative">
                    <Image src="/asset/images/camera2.png" alt="Une image" width={700} height={700} className="absolute -top-[320px] right-0" />
                </div>
            </Container>
        </div>
    );
}