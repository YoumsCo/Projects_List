import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import { useRouter } from "next/router";
import { RiHome3Line } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { Container } from "../container/container";
import Link from "next/link";

export const BreadCrumbs = () => {

    const router = useRouter();
    const asPath = router.asPath;
    const segment = asPath.split("/");
    const lastSegment = segment[segment.length - 1];
    segment[0] = "accueil";
    const view = segment.map((path, index) => {
        return <div key={uuidv4()}>
            <Link href={
                index > 0 ? `/${segment.slice(1, index + 1).join("/")}` : "/"
            }>
                <Typography variant="caption3" component="span" className={clsx(
                    path !== lastSegment ? "text-gray-600" : "text-gray",
                    "capitalize hover:text-white animate",
                )}>
                    {
                        path !== "accueil" ? path.replace(/-/g, " ") : <RiHome3Line className="inline -mt-1" />
                    }
                </Typography>
                {
                    path !== lastSegment && (
                        <Typography variant="caption2" component="span" className="ml-2 text-gray-600">
                            /
                        </Typography>
                    )
                }
            </Link>
        </div>
    });

    return (
        <Container className="flex items-center gap-2 py-7">
            {view}
        </Container>
    );
}