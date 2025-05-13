import { useState } from "react";
import { OnBoardingView } from "./onboarding.view";
import { WelcomeStep } from "./component/steps/welcome-step/welcome-step";
import { OnBoardingStepListInterface } from "@/types/onboarding-step-list";
import { ProfileStep } from "./component/steps/profile-step/profile-step";

export const OnBoardingContainer = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const stepsList: OnBoardingStepListInterface[] = [
        {
            id: 1,
            label: "Bienvenue",
            component: {
                step: WelcomeStep,
            },
        },
        {
            id: 2,
            label: "Profile",
            component: {
                step: ProfileStep,
            },
        },
        {
            id: 3,
            label: "Avatar",
            component: {
                step: ProfileStep,
            },
        },
    ];

    const getCurrentStep = () => {
        return stepsList.find(element => element.id == currentStep);
    }

    const next = () => {
        if (currentStep < stepsList.length) {
            setCurrentStep(currentStep + 1);
        }
    }

    const prev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    }

    const isFirstStep = () => {
        if (currentStep === 1) {
            return true;
        }
        return false;
    }

    const isFinalStep = () => {
        if (currentStep === stepsList.length) {
            return true;
        }
        return false;
    }

    return <OnBoardingView
        getCurrentStep={getCurrentStep}
        next={next}
        prev={prev}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
        stepsList={stepsList}
    />
}