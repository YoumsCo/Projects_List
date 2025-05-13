import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { UserAccountContainer } from './../../ui/modules/user-profile/user-account/user-account.container';
import { REGISTERED } from "@/lib/session-statut";

export default function MonEspace() {
    return <>
        <Seo title="Mon espace" description="Description de mo espace"></Seo>
        <Layout widthSidebar sessionStatut={REGISTERED}>
            <UserAccountContainer />
        </Layout>
    </>

}
