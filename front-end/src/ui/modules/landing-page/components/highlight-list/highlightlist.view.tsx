import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri";

export const HighlightListView = () => {
    return (
        <Container className="py-24 space-y-10">
            <div className="flex justify-center gap-24">
                <div className="w-[520px] h-[350px] relative mt-10 bg-gray-400">
                    <Image src="/asset/images/cake.png" alt="Illustration d'un gateau" fill />
                </div>
                <div className="max-w-md space-y-7">
                    <Typography variant="h2" component="h2">
                        De novice à developpeur en un clin d&rsquo;oeil
                    </Typography>
                    <div className="space-y-3">
                        <div className="flex flex-col justify-center gap-2">
                            <ListPoint>Progresse rapidement</ListPoint>
                            <ListPoint>Inspire toi</ListPoint>
                            <ListPoint>Gagne de l&rsquo;assurance</ListPoint>
                        </div>
                    </div>
                    <div className="relative">
                        <Button baseUrl="#" icon={{ icon: RiArrowRightLine }} iconPosition="right">Let&rsquo;s go</Button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-24">
                <div className="max-w-md space-y-7">
                    <Typography variant="h2" component="h2">
                        Booste ta carrière de developpeur
                    </Typography>
                    <div className="space-y-3">
                        <div className="flex flex-col justify-center gap-2">
                            <ListPoint>Partage tes projets, obtiens des feedbacks</ListPoint>
                            <ListPoint>Connecte-toi, elargi ton réseau pro!</ListPoint>
                            <ListPoint>Reste inspiré, motivé avec notre communauté</ListPoint>
                        </div>
                    </div>
                    <div className="relative">
                        <Button baseUrl="#" variant="secondary" icon={{ icon: RiArrowRightLine }} iconPosition="right">Démarrer</Button>
                    </div>
                </div>
                <div className="w-[520px] h-[350px] relative mt-10 bg-gray-400">
                    <Image src="/asset/images/forget.jpg" alt="Illustration d'un gar qui pense à un truc" fill />
                </div>
            </div>
        </Container>
    );
}

interface Props {
    children: React.ReactNode;
}

const ListPoint = ({ children }: Props) => {
    return (
        <div className="flex items-center gap-2">
            <RiCheckboxCircleLine size={24} className="mt-1 text-secondary" />
            <Typography variant="body-lg" component="span">
                {children}
            </Typography>
        </div>
    );
}