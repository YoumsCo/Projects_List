import { BaseComponentProps } from "@/types/onboarding-step-list";

export const OnBoardingView = ({
    next,
    prev,
    isFirstStep,
    isFinalStep,
    stepsList,
    getCurrentStep,
}: BaseComponentProps) => {

    if (getCurrentStep()?.component) {
        const Component = getCurrentStep()?.component.step;

        return (
            <div>
                {
                    Component && (
                        <Component
                            next={next}
                            prev={prev}
                            isFirstStep={isFirstStep}
                            isFinalStep={isFinalStep}
                            stepsList={stepsList}
                            getCurrentStep={getCurrentStep}
                        />
                    )
                }
            </div>
        );
    }

    return null;
}