import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";

export default function Home() {
  return <>
    <Seo title="My first react with nextjs app" description="My first react with next js app"></Seo>
    <Layout isDisplayBreadCrumbs={false}>
      <LandingPageContainer />
    </Layout>
  </>

}
