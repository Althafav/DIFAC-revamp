import Link from "next/link";
import React from "react";
import Globals from "../WoodShow/Globals";
import { Buttons } from "../models/buttons";
import Head from "next/head";
import { Basiccontentpage } from "../models/basiccontentpage";
import ContentMainComponent from "../components/ContentMainComponent";

export async function getStaticProps() {
    const datasourceStr: string = await Globals.KontentClient.item("venue_information_page")
        .languageParameter(Globals.CURRENT_LANG_CODENAME)
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.item);
        });

    const data: Basiccontentpage = JSON.parse(datasourceStr);

    return {
        props: {
            data,
        },
        revalidate: 120,
    };
}

function ListPage({ data }: { data: Basiccontentpage }) {
    return (
        <React.Fragment>
            <Head>
                <title>{`${Globals.SITE_NAME} | ${data.pageTitle.value}`}</title>
                <meta name="title" content={data.metaTitle.value} />
                <meta name="description" content={data.metaDescription.value} />
                <meta name="keywords" content={data.metaTitle.value} />

                <meta property="og:title" content={data.metaTitle.value} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={`https://cifac.woodshowglobal.com/assets/imgs/logo.png`} />
                <meta property="og:url" content={`https://cifac.woodshowglobal.com/venue-information`} />
                <meta name="twitter:card" content={`https://cifac.woodshowglobal.com/assets/imgs/logo.png`} />

                <meta property="og:description" content={data.metaDescription.value} />
                <meta property="og:site_name" content={Globals.SITE_NAME} />
                <meta name="twitter:image:alt" content={data.metaTitle.value} />
                <link href={`https://cifac.woodshowglobal.com/venue-information`} rel='canonical' />
            </Head>

            <ContentMainComponent track="Visit" heading={data.heading.value}>
                <div className="event-page-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 m-b-10">
                                {
                                    data.content.value ? (
                                        <span className="content m-b-15"
                                            dangerouslySetInnerHTML={{ __html: data.content.value }}
                                        />
                                    ) : ""
                                }
                            </div>
                        </div>

                        {
                            data.image.value[0] ? (
                                <div className="row">
                                    <div className="col-12 m-b-20">
                                        <img src={data.image.value[0].url} style={{maxWidth: "850px", width: "100%", objectFit: "cover"}}/>
                                    </div>
                                </div>
                            ) : ""
                        }

                        <div className="row">
                            <div className="col-12 m-b-30">
                                {
                                    data.buttons.value.map((b: any) => {
                                        var item: Buttons = b;
                                        return (
                                            <a href={item.link.value} className="btn-red-transparent m-r-20" target={item.target.value == 1 ? "_blank" : "_self"}>{item.name.value}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </ContentMainComponent>

        </React.Fragment>

    );

}

export default ListPage;
