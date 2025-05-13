import { GUEST } from "@/lib/session-statut";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { RegisterContainer } from "@/ui/modules/authentication/register/register.container";

export default function Register() {
    return <>
        <Seo title="Inscription sur coders monkeys" description="Page de inscription"></Seo>
        <Layout sessionStatut={GUEST}>
            <RegisterContainer />
        </Layout>
    </>

}
