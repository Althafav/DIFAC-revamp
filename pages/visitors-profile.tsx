import Link from "next/link";
import React, { useEffect } from "react";
import Globals from "../WoodShow/Globals";
import { Buttons } from "../models/buttons";
import Head from "next/head";
import { Basiccontentpage } from "../models/basiccontentpage";
import ContentMainComponent from "../components/ContentMainComponent";
import { Partneritem } from "../models/partneritem";
import JsLoader from "../WoodShow/JsLoader";
import Services from "../WoodShow/Services";

export async function getStaticProps() {
    const datasourceStr: string = await Globals.KontentClient.item("visitors_profile_page")
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

    try {
        Services.loadFile(
            `${Globals.BASE_URL}assets/js/owl.carousel.min.js`,
            () => {
                Services.loadFile(
                    `${Globals.BASE_URL}assets/js/visitor-profile-carousel.js`
                );
            }
        );
    }
    catch {

    }


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
                <meta property="og:url" content={`https://cifac.woodshowglobal.com/visitors-profile`} />
                <meta name="twitter:card" content={`https://cifac.woodshowglobal.com/assets/imgs/logo.png`} />

                <meta property="og:description" content={data.metaDescription.value} />
                <meta property="og:site_name" content={Globals.SITE_NAME} />
                <meta name="twitter:image:alt" content={data.metaTitle.value} />
                <link href={`https://cifac.woodshowglobal.com/visitors-profile`} rel='canonical' />
            </Head>

            <ContentMainComponent track="Exhibitors" heading={data.pageTitle.value}>
                <div className="visitor-page-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="section-heading text-dark">{data.heading.value}</h2>
                            </div>
                            <div className="col-12">

                                {
                                    data.content.value ? (
                                        <span className="content m-b-15"
                                            dangerouslySetInnerHTML={{ __html: data.content.value }}
                                        />
                                    ) : ""
                                }



                            </div>
                        </div>


                        <div className="row m-t-10 relative">
                            <div className="col-12">
                                <div className="Visitor-profle owl-carousel">
                                    {
                                        data.items.value.map((d: any) => {
                                            var item: Partneritem = d;
                                            return (
                                                <div className="mr-2 m-b-20">
                                                    <div className="visitors-profile-item">
                                                        <img src={item.image.value[0].url} />
                                                        <p className="name">{item.name.value}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }




                                </div>

                                <div className="owl-nav-custom d-flex justify-content-center justify-content-lg-end">
                                    <div className="owl-next-custom">
                                        <img src="/assets/imgs/right.png" alt="" />
                                    </div>
                                </div>

                            </div>

                        </div>

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
