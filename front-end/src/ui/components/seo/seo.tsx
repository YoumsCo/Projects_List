import Head from "next/head";

interface Props {
    title: string;
    description: string;
    children?: React.ReactNode;
}

export const Seo = ({title, description, children}: Props) => {
    return <>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="description" content={description}/>
            <meta name="viewport" content="width=device-width; initial-scale=1.0"/>
            <meta name="author" content="Youms choco"/>
            <title>{title}</title>
        </Head>
        <span className="text-red-500 text-3xl underline">{children}</span>
    </>
}