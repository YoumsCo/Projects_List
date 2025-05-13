import { GUEST } from "@/lib/session-statut";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { LoginContainer } from "@/ui/modules/authentication/login/login.container";

export default function Connexion() {
    return <>
        <Seo title="Connexion sur coders monkeys" description="Page de connexion"></Seo>
        <Layout sessionStatut={GUEST}>
            <LoginContainer />
        </Layout>
    </>

}
