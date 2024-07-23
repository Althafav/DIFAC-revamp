import Head from "next/head";
import React from "react";
import Globals from "../WoodShow/Globals";
import Link from "next/link";
import { Eventinformation } from "../models/eventinformation";
import ContentMainComponent from "../components/ContentMainComponent";


export async function getStaticProps() {
    const datasourceStr: string = await Globals.KontentClient.item("event_information_page")
        .languageParameter(Globals.CURRENT_LANG_CODENAME)
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.item);
        });

    const data: Eventinformation = JSON.parse(datasourceStr);

    return {
        props: {
            data,
        },
        revalidate: 120,
    };
}

function ListPage({ data }: { data: Eventinformation }) {
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
                <meta property="og:url" content={`${Globals.BASE_URL}event-information`} />
                <meta name="twitter:card" content={`https://www.woodshowglobal.com/cairo/assets/imgs/logo.png`} />

                <meta property="og:description" content={data.metaDescription.value} />
                <meta property="og:site_name" content={Globals.SITE_NAME} />
                <meta name="twitter:image:alt" content={data.metaTitle.value} />
                <link href={`${Globals.BASE_URL}event-information`} rel='canonical' />
            </Head>

            <ContentMainComponent track="Visit" heading={data.heading.value} subheading={data.subHeading.value}>
                <div className="event-page-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                {
                                    data.content.value ? (
                                        <span className="content m-b-15"
                                            dangerouslySetInnerHTML={{ __html: data.content.value }}
                                        />
                                    ) : ""
                                }

                                <table className="event-timing">
                                    <thead>
                                        <tr>
                                            <th>Show Dates</th>
                                            <th>Timings</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>{data.date.value}</td>
                                            <td>{data.time.value}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                            {
                                data.image.value[0] ? (
                                    <div className="col-12 col-md-6 m-b-15">
                                        <div className="event-page-image" style={{ background: `url(${data.image.value[0].url})` }}></div>
                                    </div>
                                ) : ""
                            }
                        </div>


                        <hr className="red-line" />


                        <div className="row">
                            <h1 className="admission-heading">Admission Policy</h1>
                        </div>

                        <div className="row">
                            {
                                data.admissionPolicyImage.value[0] ? (
                                    <div className="col-12 col-md-6 m-b-15">
                                        <div className="event-page-image" style={{ background: `url(${data.admissionPolicyImage.value[0].url})` }}></div>
                                    </div>
                                ) : ""
                            }

                            <div className="col-12 col-md-6">
                                {
                                    data.admissionPolicyContent.value ? (
                                        <span className="content m-b-15"
                                            dangerouslySetInnerHTML={{ __html: data.admissionPolicyContent.value }}
                                        />
                                    ) : ""
                                }
                                <p className="admission-note">{data.admissionPolicyNote.value}</p>
                            </div>


                        </div>
                    </div>
                </div>
            </ContentMainComponent>

        </React.Fragment>

    );

}

export default ListPage;
