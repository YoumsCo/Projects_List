import { Container } from "@/ui/components/container/container";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface FeaturesListInterface {
    imagePath: string;
    imageAlt: string;
    title: string;
    description: string;
}

const featureData: FeaturesListInterface[] = [
    {
        imagePath: "/asset/images/camera1.png",
        imageAlt: "Illustration",
        title: "Ressources",
        description: "Consulte et partage des ressouces pour les devs",
    },
    {
        imagePath: "/asset/images/cake.png",
        imageAlt: "Illustration",
        title: "Entrainement",
        description: "Entaine-toi à devenir le mailleur et trouve de l'inspiration",
    },
    {
        imagePath: "/asset/images/manette.png",
        imageAlt: "Illustration",
        title: "Visiblité",
        description: "Expose tes projets et créés toi des opportunités",
    },
    {
        imagePath: "/asset/images/camera2.png",
        imageAlt: "Illustration",
        title: "Relation",
        description: "Connecte-toi avec des devs web et booste ta carrière",
    },
];

export const FeaturedView = () => {

    const featuredList = featureData.map(feature => {
        return <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
            <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
                <Image src={feature.imagePath} alt={feature.imageAlt} fill className="object-scale-down blur-2xl" />
                <Image src={feature.imagePath} alt={feature.imageAlt} fill className="object-scale-down" />
            </div>
            <Typography variant="h5" component="div" weight="medium" className="text-center mb-2.5">
                {feature.title}
            </Typography>
            <Typography variant="body-base" component="p" theme="gray" className="text-center">
                {feature.description}
            </Typography>
        </div>
    });

    return (
        <div className="bg-gray-800">
            <Container className="grid grid-cols-12 gap-20 py-24">
                <div className="grid grid-cols-2 col-span-7 gap-7">{featuredList}</div>
                <div className="flex flex-col justify-between gap-10 col-span-5">
                    <div>
                        <Typography variant="h3" component="h2" className="mb-5">
                            C&rsquo;est l&rsquo;endroit le pus cool pour devenir developpeur
                        </Typography>
                        <Typography variant="body-lg" theme="gray" component="p" className="mb-8">
                            C&rsquo;est l&rsquo;endroit le pus cool pour devenir developpeur
                        </Typography>
                        <Button variant="secondary" baseUrl="" icon={{ icon: RiArrowRightLine }} iconPosition="right" className="mt-6">Commencer</Button>
                    </div>
                    <div>
                        <Typography variant="caption3" theme="gray" component="div" className="mb-4">
                            Réseaux sociaux                        
                        </Typography>
                        <SocialNetworksButtons />
                    </div>

                </div>
            </Container>
        </div>
    );
}