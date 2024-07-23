import Head from "next/head";
import React from "react";
import Globals from "../WoodShow/Globals";
import Link from "next/link";
import ContentMainComponent from "../components/ContentMainComponent";
import { Gallery } from "../models/gallery";
import { Galleryyears } from "../models/galleryyears";
import { Galleryphoto } from "../models/galleryphoto";


export async function getStaticProps() {
    const datasourceStr: string = await Globals.KontentClient.item("gallery_page")
    .withParameter("depth", "2")
        .languageParameter(Globals.CURRENT_LANG_CODENAME)
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.item);
        });

    const data: Gallery = JSON.parse(datasourceStr);

    return {
        props: {
            data,
        },
        revalidate: 120,
    };
}

function showGallery(id: any) {
    $(".gallery").removeClass("selected");
    $("#tab_" + id).addClass("selected");

    $(".image-block").addClass("d-none");
    $("#image_" + id).removeClass("d-none");
}

function ListPage({ data }: { data: Gallery }) {
    var gallery = 0;
    var image = 0;
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
                <meta property="og:url" content={`${Globals.BASE_URL}gallery`} />
                <meta name="twitter:card" content={`https://www.woodshowglobal.com/cairo/assets/imgs/logo.png`} />

                <meta property="og:description" content={data.metaDescription.value} />
                <meta property="og:site_name" content={Globals.SITE_NAME} />
                <meta name="twitter:image:alt" content={data.metaTitle.value} />
                <link href={`${Globals.BASE_URL}gallery`} rel='canonical' />
            </Head>

            <ContentMainComponent track="Media" heading={data.heading.value} subheading={data.subHeading.value}>
                    <div className="gallery-wrapper">
                        <div className="row">
                            <div className="col-12 p-0">
                                <ul className="gallery-ul">
                                    {
                                        data.items.value.map((m: any) => {
                                            var item: Galleryyears = m;
                                            gallery++;

                                            return (
                                                <React.Fragment>
                                                    <li className="gallery-li">
                                                        <a className={`gallery ${gallery == 1 ? "selected" : ""}`}
                                                            onClick={((e) => {
                                                                showGallery(item.system.id);
                                                            })}
                                                            id={`tab_${item.system.id}`} href="javascript:0">{item.year.value}</a>
                                                    </li>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        {
                            data.items.value.map((m: any) => {
                                var item: Galleryyears = m;
                                image++

                                return (
                                    <React.Fragment>
                                        <div className={`row image-block ${image == 1 ? "" : "d-none"}`} id={`image_${item.system.id}`}>
                                            {
                                                item.items.value.map((p: any) => {
                                                    var photo: Galleryphoto = p;
                                                    return (
                                                        photo.image.value[0] ? (
                                                            <div className="col-12 col-md-4">
                                                                <div className="gallery-bg" style={{ background: `url(${photo.image.value[0].url})` }}></div>
                                                            </div>
                                                        ) : ""
                                                    )
                                                })
                                            }
                                        </div>
                                       
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </ContentMainComponent >

        </React.Fragment>

    );

}

export default ListPage;
