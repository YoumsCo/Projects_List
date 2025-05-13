import { REGISTERED } from "@/lib/session-statut";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { Session } from "@/ui/components/session/session";
import { OnBoardingContainer } from "@/ui/modules/onboarding/onboarding.container";

export default function OnBoarding() {
    return <>
        <Seo title="OnBoarding" description="Description de la page onboarding"></Seo>
        <Session sessionStatut={REGISTERED}>
            <OnBoardingContainer />
        </Session>
    </>

}
