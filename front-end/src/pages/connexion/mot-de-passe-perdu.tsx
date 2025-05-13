import { GUEST } from "@/lib/session-statut";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { ForgetPasswordContainer } from "@/ui/modules/authentication/forget-password/forget-password.container";

export default function ForgetPassword() {
    return (
        <>
            <Seo title="Connexion" description="Page de connexion"></Seo>
            <Layout sessionStatut={GUEST}>
                <ForgetPasswordContainer />
            </Layout>
        </>
    );
}