import Head from "next/head";
import React from "react";
import Globals from "../WoodShow/Globals";
import Link from "next/link";
import ContentMainComponent from "../components/ContentMainComponent";
import { Partnerspage } from "../models/partnerspage";
import { Partneritem } from "../models/partneritem";
import { PartnerPage } from "../models/partner_page";

export async function getStaticProps() {
    const datasourceStr = await Globals.KontentClient.item("media_partners_page")
        .languageParameter(Globals.CURRENT_LANG_CODENAME)
        .toObservable()
        .toPromise()
        .then((r: any) => JSON.stringify(r.item));

    const WSD_datasourceStr = await Globals.WSD_KontentClient.item("media_partners_page")
        .languageParameter(Globals.CURRENT_LANG_CODENAME)
        .toObservable()
        .toPromise()
        .then((r: any) => JSON.stringify(r.item));


    const DFAC_datasource = JSON.parse(datasourceStr);
    const WSD_datasource = JSON.parse(WSD_datasourceStr);



    return {
        props: {
            DFAC_datasource,
            WSD_datasource
        },
        revalidate: 120,
    };
}


function ListPage({ WSD_datasource }: { WSD_datasource: PartnerPage }) {
    return (
        <React.Fragment>
            <Head>
                <title>{`${Globals.SITE_NAME} | ${WSD_datasource.pagetitle.value}`}</title>
                <meta name="title" content={WSD_datasource.metatitle.value} />
                <meta name="description" content={WSD_datasource.metadescription.value} />
                <meta name="keywords" content={WSD_datasource.metatitle.value} />

                <meta property="og:title" content={WSD_datasource.metatitle.value} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={`https://www.woodshowglobal.com/dubai/assets/imgs/logo-brown.png`} />
                <meta property="og:url" content={`${Globals.BASE_URL}media-partners`} />
                <meta name="twitter:card" content={`https://www.woodshowglobal.com/dubai/assets/imgs/logo-brown.png`} />

                <meta property="og:description" content={WSD_datasource.metadescription.value} />
                <meta property="og:site_name" content={Globals.SITE_NAME} />
                <meta name="twitter:image:alt" content={WSD_datasource.metatitle.value} />
                <link href={`${Globals.BASE_URL}media-partners`} rel='canonical' />
            </Head>

            <ContentMainComponent track="Media" heading={WSD_datasource.heading.value}>

                <div className="exhibitor-wrapper">
                    <div className="container">
                        <div className="row">
                            {
                                WSD_datasource.items.value.map((p: any) => {
                                    var item: Partneritem = p;
                                    return (
                                        item.logo.value[0] ? (
                                            <div className="col-12 col-sm-6 col-lg-3 m-b-30">
                                                <a href={item.website.value} target="_blank">
                                                    <div className="exhibitor-container">
                                                        <div className="exhibitor-bg" style={{ background: `url(${item.logo.value[0].url})`, maxWidth: "100%" }}>
                                                        </div>
                                                        <p className="partner-name">{item.name.value}</p>
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
