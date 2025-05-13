import { Container } from "@/ui/components/container/container";
import { OnboardingTabs } from "../tabs/onboarding-tabs";
import { Typography } from "@/ui/design-system/typography/typography";
import { OnBoardingStepListInterface } from "@/types/onboarding-step-list";
import { useForm } from "react-hook-form";
import { OnboardingProfileFormFieldsType } from "@/types/form";

interface Props {
    stepsList: OnBoardingStepListInterface[];
    getCurrentStep: () => OnBoardingStepListInterface | undefined;
    children: React.ReactNode;
    title: string;
    formElement?: { formStep: React.ComponentType };
}

export const OnboardingLayout = ({
    stepsList,
    getCurrentStep,
    children,
    title,
    formElement,
}: Props) => {

    return (
        <div className="h-full overflow-auto">
            <Container className="grid h-full grid-cols-12 place-items-center">
                <div className="relative z-10 flex items-center h-full  col-span-6 py-10">
                    <div className="w-full space-y-5 pb-4.5">
                        <OnboardingTabs tabs={stepsList} getCurrentStep={getCurrentStep} />
                        <Typography variant="h1" component="h1">
                            {title}
                        </Typography>
                        <Typography variant="body-base" component="p" theme="gray">
                            {children}
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center h-full col-span-6">
                    <div className="flex justify-end w-full">
                        {
                            formElement && formElement?.formStep && <formElement.formStep  />
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
}