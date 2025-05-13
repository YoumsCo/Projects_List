import { BaseComponentProps } from "@/types/onboarding-step-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { OnboardingLayout } from "../../onboarding-layout/onboarding-layout";

export const WelcomeStep = ({
    next,
    isFirstStep,
    isFinalStep,
    stepsList,
    getCurrentStep,
}: BaseComponentProps) => {

    return (
        <div className="relative h-screen pb-[90.67px]">
            <OnboardingLayout stepsList={stepsList} getCurrentStep={getCurrentStep} title="Bienvenue sur l'appli des singes codeurs !">
                Viens trainer avec des developpeurs aussi fous que toi, montre tes projets persos et reçois des feebacks constructifs (ou fais-toi carrément descendre). Près à créer des trucs incroyables ?
            </OnboardingLayout>
            <OnboardingFooter
                next={next}
                isFirstStep={isFirstStep}
                isFinalStep={isFinalStep}
            />
        </div>
    );
}