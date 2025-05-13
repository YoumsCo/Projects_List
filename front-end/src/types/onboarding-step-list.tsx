export interface BaseComponentProps {
    next: () => void;
    prev: () => void;
    isFirstStep: () => boolean;
    isFinalStep: () => boolean;
    stepsList: OnBoardingStepListInterface[];
    getCurrentStep: () => OnBoardingStepListInterface | undefined;
}

export interface OnBoardingStepListInterface {
    id: number;
    label: string;
    component: {
        step: React.ComponentType<BaseComponentProps>;
    };
}
