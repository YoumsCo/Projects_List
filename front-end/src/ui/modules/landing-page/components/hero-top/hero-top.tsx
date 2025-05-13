import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const HeroTopView = () => {
    return <Container className="relative pt-40 pb-52 overflow-hidden">
        <div className="w-full max-w-2xl space-y-5">
            <Typography variant="h3" component="h1" className="mx-w-lg">
                Rejoins les singes codeurs
            </Typography>
            <Typography variant="body-lg" theme="gray" component="p" className="mx-w-xl">
                Ici, on se prend pas la tete, mas on code comme des betes!
                Rejoind notre tribu de singes codeurs, partage tes projets les plus fous et fais-toi de nouveaux amis developpeurs
            </Typography>
            <div className="space-x-5 pt-2.5">
                <Button baseUrl="">Commencer</Button>
                <Button baseUrl="" variant="secondary">En savoir plus</Button>
            </div>
        </div>
        <Image src="/asset/svg/vite.svg" alt="Illustration d'une icone de react conçue par de developpeurs chevronnées" width={411} height={296} className="absolute top-5 right-5 z-0 opacity-75" />
    </Container>
}