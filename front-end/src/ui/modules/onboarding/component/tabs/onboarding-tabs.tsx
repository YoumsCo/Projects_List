import { OnBoardingStepListInterface } from "@/types/onboarding-step-list";
import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";

interface Props {
    tabs: OnBoardingStepListInterface[];
    getCurrentStep: () => OnBoardingStepListInterface | undefined;
}

export const OnboardingTabs = ({ tabs, getCurrentStep }: Props) => {
    return (
        <div className="relative inline-block">
            <div className="flex items-center space-x-6">
                {
                    tabs && tabs.map((tab) => (
                        <div key={tab.id} className={clsx(
                            getCurrentStep && getCurrentStep()?.id === tab.id ? "border-primary" : "border-gray",
                            "relative z-10 py-2.5 border-b-[2px]"
                        )}>
                            <Typography
                                variant="caption3"
                                weight="medium"
                                theme={getCurrentStep && getCurrentStep()?.id === tab.id ? "primary" : "gray-600"}
                            >
                                {tab.label}
                            </Typography>
                        </div>
                    ))
                }
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray"></div>
        </div>
    );
}