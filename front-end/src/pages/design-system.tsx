import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { RiUser2Fill } from "react-icons/ri";

export default function DesignSystem() {
    return (
        <>
            <Seo title="My first react with nextjs app" description="My first react with next js app"></Seo>
            <Layout isDisplayBreadCrumbs={false}>
                <Container>
                    <div className="flex items-center gap-4 p-10">
                        <Logo size="very-small" />
                        <Logo size="small" />
                        <Logo />
                        <Logo size="large" />
                    </div>

                    <div className="flex items-center gap-4 p-10">
                        <Avatar size="small" src="/asset/images/dugb_o5sj_230522.jpg" alt="Avatar de daniel lincoln" />
                        <Avatar src="/asset/images/dugb_o5sj_230522.jpg" alt="Avatar de daniel lincoln" />
                        <Avatar size="large" src="/asset/images/dugb_o5sj_230522.jpg" alt="Avatar de daniel lincoln" />
                    </div>

                    <div className="flex items-center gap-4 p-10">
                        <Spinner size="small" />
                        <Spinner />
                        <Spinner size="large" />
                    </div>
                    <div className="flex items-center gap-4 p-10">
                        <Button isLoading size="small" iconPosition="left" icon={{ icon: RiUser2Fill }}>Accent</Button>
                        <Button isLoading size="small">Accent</Button>
                        <Button isLoading size="small" variant="secondary">Secondary</Button>
                        <Button isLoading size="small" variant="outline">Outline</Button>
                        <Button isLoading size="small" variant="disabled">Disabled</Button>
                        <Button isLoading size="small" variant="ico" icon={{ icon: RiUser2Fill }} />
                    </div>

                    <div className="flex items-center gap-4 p-10">
                        <Button size="small" iconPosition="left" icon={{ icon: RiUser2Fill }}>Accent</Button>
                        <Button size="small">Accent</Button>
                        <Button size="small" variant="secondary">Secondary</Button>
                        <Button size="small" variant="outline">Outline</Button>
                        <Button size="small" variant="disabled">Disabled</Button>
                        <Button size="small" variant="ico" icon={{ icon: RiUser2Fill }} />
                    </div>

                    <div className="flex items-center gap-4 p-10">
                        <Button>Accent</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="disabled">Disabled</Button>
                        <Button variant="ico" icon={{ icon: RiUser2Fill }} />
                    </div>

                    <div className="flex items-center gap-4 p-10">
                        <Button size="large">Accent</Button>
                        <Button size="large" variant="secondary">Secondary</Button>
                        <Button size="large" variant="outline">Outline</Button>
                        <Button size="large" variant="disabled">Disabled</Button>
                        <Button size="large" variant="ico" icon={{ icon: RiUser2Fill }} />
                        <Button size="large" iconTheme="gray" variant="ico" icon={{ icon: RiUser2Fill }} />
                        <Button size="large" iconTheme="secondary" variant="ico" icon={{ icon: RiUser2Fill }} />
                    </div>

                </Container>
            </Layout>
        </>
    );
}