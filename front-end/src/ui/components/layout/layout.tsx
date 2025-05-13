import { SessionStatutTypes } from "@/types/session-statut-types";
import { BreadCrumbs } from "../breadcrumbs/breadcrumbs";
import { Container } from "../container/container";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";
import { UserAccountNavigation } from "../navigation/user-account-navigation";
import { Session } from "../session/session";

interface Props {
    children?: React.ReactNode;
    isDisplayBreadCrumbs?: boolean;
    widthSidebar?: boolean;
    sessionStatut?: SessionStatutTypes;
}

export const Layout = ({ children, isDisplayBreadCrumbs = true, widthSidebar, sessionStatut}: Props) => {

    let view: React.ReactElement = (
        <>
        </>
    );

    if (widthSidebar) {
        view = (
            <Container className="mb-14">
                <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-3">
                        <UserAccountNavigation />
                    </div>
                    <div className="col-span-9">{children}</div>
                </div>
            </Container>
        );
    }
    else {
        view = (<>
            {children}
        </>);
    }

    return (
        <Session sessionStatut={sessionStatut}>
            <Navigation />
            {
                isDisplayBreadCrumbs && <BreadCrumbs />
            }
            {view}
            <Footer />
        </Session>
    );
}