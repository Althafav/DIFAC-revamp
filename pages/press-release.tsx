import Head from "next/head";
import React from "react";
import Globals from "../WoodShow/Globals";
import Link from "next/link";
import ContentMainComponent from "../components/ContentMainComponent";
import { Partnerspage } from "../models/partnerspage";
import { Partneritem } from "../models/partneritem";


export async function getStaticProps() {
    const datasourceStr: string = await Globals.KontentClient.item("press_release_page")
        .languageParameter(Globals.CURRENT_LANG_CODENAME)
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.item);
        });

    const data: Partnerspage = JSON.parse(datasourceStr);

    return {
        props: {
            data,
        },
        revalidate: 120,
    };
}

function ListPage({ data }: { data: Partnerspage }) {
    return (
        <React.Fragment>
            <Head>
                <title>{`${Globals.SITE_NAME} | ${data.pageTitle.value}`}</title>
                <meta name="title" content={data.metaTitle.value} />
                <meta name="description" content={data.metaDescription.value} />
                <meta name="keywords" content={data.metaTitle.value} />

                <meta property="og:title" content={data.metaTitle.value} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={`https://www.woodshowglobal.com/cairo/assets/imgs/logo.png`} />
                <meta property="og:url" content={`${Globals.BASE_URL}press-release`} />
                <meta name="twitter:card" content={`https://www.woodshowglobal.com/cairo/assets/imgs/logo.png`} />

                <meta property="og:description" content={data.metaDescription.value} />
                <meta property="og:site_name" content={Globals.SITE_NAME} />
                <meta name="twitter:image:alt" content={data.metaTitle.value} />
                <link href={`${Globals.BASE_URL}press-release`} rel='canonical' />
            </Head>

            <ContentMainComponent track="Media" heading={data.heading.value}>

                <div className="exhibitor-wrapper">
                    <div className="container">
                        <div className="row">
                            {
                                data.items.value.map((p: any) => {
                                    var item: Partneritem = p;
                                    return (
                                        item.image.value[0] ? (
                                            <div className="col-12 col-sm-6 col-lg-4 m-b-30">
                                                <a href={item.link.value} target="_blank">
                                                    <div className="exhibitor-container">
                                                        <div className="exhibitor-bg" style={{ background: `url(${item.image.value[0].url})`, maxWidth: "100%" }}>
                                                        </div>
                                                        <p className="partner-name" style={{ height: "75px" }}>{item.name.value}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        ) : ""
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </ContentMainComponent>

        </React.Fragment>

    );

}

export default ListPage;
