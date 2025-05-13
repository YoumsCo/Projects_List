import { useAuth } from "@/hooks/mine-useAuth";
import { GUEST, REGISTERED } from "@/lib/session-statut";
import { SessionStatutTypes } from "@/types/session-statut-types";
import { ScreenSpinner } from "@/ui/design-system/spinner/screen-spinner";
import { useRouter } from "next/router";

interface Props {
    children?: React.ReactNode;
    sessionStatut?: SessionStatutTypes;
}

export const Session = ({ children, sessionStatut }: Props) => {
    const { authUserIsLoading, authUser } = useAuth();
    const router = useRouter();
    const onBoardingIsCompleted = authUser ?.userDocument?.onBoardingIsCompleted

    const shouldRedirectToOnBoarding = () => {
        return (
            authUser && !authUserIsLoading && !onBoardingIsCompleted && router.asPath !== "/onboarding"
        );
    }

    const shouldNotRedirectToOnBoarding = () => {
        return (
            authUser && !authUserIsLoading && onBoardingIsCompleted && router.asPath === "/onboarding"
        );
    }

    if(shouldRedirectToOnBoarding()) {
        router.push("/onboarding");
        return <ScreenSpinner />
    }

    if(shouldNotRedirectToOnBoarding()) {
        router.push("/mon-espace");
        return <ScreenSpinner />
    }

    if(sessionStatut === GUEST && !authUserIsLoading) {
        if(!authUser) {
            return  <>{children}</>
        }
        else {
            router.push("/mon-espace");
        }
    }

    if(sessionStatut === REGISTERED && !authUserIsLoading) {
        if(authUser) {
            return  <>{children}</>
        }
        else {
            router.push("/connexion");
        }
    }

    if (!sessionStatut && !authUserIsLoading) {
        return (
            <>
                {children}
            </>
        );
    }
    return <ScreenSpinner />;
};