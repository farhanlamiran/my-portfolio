// src/components/layout/CustomHead.tsx
import Head from "next/head";

interface CustomHeadProps {
    title?: string;
    description?: string;
}

const CustomHead = ({
    title = "Farhan Lamiran | Portfolio",
    description = "Portfolio website of Farhan Lamiran",
}: CustomHeadProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    );
};

export default CustomHead;
