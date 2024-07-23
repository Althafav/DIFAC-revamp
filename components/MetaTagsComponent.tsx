import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Globals from "../WoodShow/Globals"

export default function MetaTagsComponent() {
    const router = useRouter();

    const pathname = router.asPath;

    var title = "";
    var image = "https://cifac.woodshowglobal.com/assets/imgs/logo.png";
    var description = "";
    var url = `${pathname}`;

    if (pathname.includes("/book-your-stand")) {
        title = "CIFAC - Book your stand";
        description = "CIFAC - Book your stand";
    }

    else if (pathname.includes("/register-interest")) {
        title = "CIFAC - Register your interest";
        description = "CIFAC - Register your interest";
    }

    else if (pathname.includes("/media-partner-form")) {
        title = "CIFAC - Media Partner Form";
        description = "CIFAC - Media Partner Form";
    }

    else if (pathname.includes("/contact-us")) {
        title = "CIFAC - Contact Us";
        description = "CIFAC - Contact Us";
    }

    if (title == "")
    {
        return <React.Fragment />
    }
    return (
        <Head>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={title} />

            <meta property="og:title" content={title} />
            <meta property="og:type" content="article" />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content={image} />

            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={Globals.SITE_NAME} />
            <meta name="twitter:image:alt" content={title} />
            <link href={url} rel='canonical' />
        </Head>
    );
}

