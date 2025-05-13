import { BaseComponentProps } from "@/types/onboarding-step-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { ProfileStepForm } from "./profile-step-form";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingProfileFormFieldsType } from "@/types/form";
import { useToggle } from "@/hooks/use-toggle";
import { Container } from "@/ui/components/container/container";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { Typography } from "@/ui/design-system/typography/typography";
import { firestoreCreateDocument } from '@/api/firestore';
import { useAuth } from "@/hooks/mine-useAuth";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const ProfileStep = ({
    prev,
    next,
    isFirstStep,
    isFinalStep,
    stepsList,
    getCurrentStep,
}: BaseComponentProps) => {
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const { authUser } = useAuth();
    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        reset,
        setValue,
    } = useForm<OnboardingProfileFormFieldsType>();

    const { displayName, expertise, biography } = authUser.userDocument;

    useEffect(() => {
        const filedsToUpdate: ('displayName' | 'expertise' | 'biography')[] = [
            "displayName",
            "expertise",
            "biography",
        ];
        setValue("displayName", displayName);

        for(const field of filedsToUpdate) {
            setValue(field, authUser.userDocument[field]);
        }
    });

    const handleUpdateUserDocuemnt = async (
        formData: OnboardingProfileFormFieldsType
    ) => {
        
        const { error } = await firestoreCreateDocument("users", authUser.uid, formData);

        if(error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        setIsLoading(false);
        reset();
        next();

    }

    const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (formData) => {
        setIsLoading(true);
        if(displayName !== formData.displayName || expertise !== formData.expertise || biography !== formData.biography) {
            handleUpdateUserDocuemnt(formData);
        }
    }


    return (
        <div>
            <div className="h-full overflow-auto">
                <Container className="grid h-full grid-cols-12 place-items-center">
                    <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                        <div className="w-full space-y-5 pb-4.5">
                            <OnboardingTabs tabs={stepsList} getCurrentStep={getCurrentStep} />
                            <Typography variant="h1" component="h1">
                                Presente-toi !
                            </Typography>
                            <Typography variant="body-base" component="p" theme="gray">
                                Dis-nous tout sur toi! remplis notre formulaire et presente-toi pour qu'on puisse mieux te connaitre. On veut savoir qui tu es, ce que tu fais  et comment t'as attéris ici. Plus on en saura sur toi plus on pourra personnaliser notre plate-forme
                            </Typography>
                        </div>
                    </div>
                    <div className="flex items-center h-full col-span-6">
                        <div className="flex justify-end w-full">
                            <ProfileStepForm form={
                                {
                                    errors,
                                    control,
                                    register,
                                    handleSubmit,
                                    onSubmit,
                                    isLoading
                                }
                            }
                            />
                        </div>
                    </div>
                </Container>
            </div>
            <OnboardingFooter
                prev={prev}
                next={handleSubmit(onSubmit)}
                isFirstStep={isFirstStep}
                isFinalStep={isFinalStep}
                isLoading={isLoading}
            />
        </div >
    );
}