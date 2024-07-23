import Link from "next/link";
import React, { useState } from "react";
import Globals from "../WoodShow/Globals";
import { Buttons } from "../models/buttons";
import Head from "next/head";
import { Basiccontentpage } from "../models/basiccontentpage";
import ContentMainComponent from "../components/ContentMainComponent";
import { Partneritem } from "../models/partneritem";
import ModalComponent from "../components/UI/ModalComponent";
import BookYourStandComponent from "../components/BookYourStandComponent";
import Image from "next/image";

export async function getStaticProps() {
    const datasourceStr: string = await Globals.KontentClient.item("exhibitors_profile_page")
        .withParameter("depth", "4")
        .languageParameter(Globals.CURRENT_LANG_CODENAME)
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.item);
        });

    const data: Basiccontentpage = JSON.parse(datasourceStr);

    const exhibitorBenefitDataStr: string = await Globals.KontentClient.item("exhibitors_benefits_page")
        .languageParameter(Globals.CURRENT_LANG_CODENAME)
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.item);
        });

    const exhibitorBenefitData: Basiccontentpage = JSON.parse(exhibitorBenefitDataStr);

    return {
        props: {
            data,
            exhibitorBenefitData
        },
        revalidate: 120,
    };
}

function ListPage({ data, exhibitorBenefitData }: { data: Basiccontentpage, exhibitorBenefitData: Basiccontentpage }) {
    const [modalData, setModalData] = useState<Partneritem | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleClick = (item: Partneritem) => {
        setModalData(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
                <meta property="og:url" content={`https://cifac.woodshowglobal.com/exhibitors-profile`} />
                <meta name="twitter:card" content={`https://cifac.woodshowglobal.com/assets/imgs/logo.png`} />

                <meta property="og:description" content={data.metaDescription.value} />
                <meta property="og:site_name" content={Globals.SITE_NAME} />
                <meta name="twitter:image:alt" content={data.metaTitle.value} />
                <link href={`https://cifac.woodshowglobal.com/exhibitors-profile`} rel='canonical' />
            </Head>

            <ContentMainComponent track="Exhibitors" heading={data.pageTitle.value}>
                <div className="event-page-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <h2 className="section-heading text-dark">{data.heading.value}</h2>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center align-items-center">
                            {/* {
                                data.items.value.map((d: any) => {
                                    var item: Partneritem = d;
                                    return (
                                        <div className="col-12 col-md-6 col-lg-3 text-center m-b-20">
                                            <div className="event-page-item" onClick={() => handleClick(item)}>
                                                <img src={item.image.value[0].url} />
                                                <p>{item.name.value}</p>

                                            </div>
                                        </div>
                                    )
                                })
                            } */}

                            {data.items.value.map((d: any) => {
                                var item: Partneritem = d;
                                return (
                                    <div className="col-lg-3 col-md-6 col-12 m-b-20">
                                        <div className="exhibitor-profile-item" onClick={() => handleClick(item)}>
                                            <div>

                                                <img className="exhibitor-profile-item-img" src={item.image.value[0].url} alt="" />

                                                <div className="item-text-content">
                                                    <p className="item-name">{item.name.value}</p>
                                                    <p className="view-details">View Details</p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                )
                            })}






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

                <ModalComponent
                    showModal={showModal}
                    item={modalData}
                    onClick={handleCloseModal}
                />
                <BookYourStandComponent />
                <div className="exhibitors-benefits-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <h2 className="section-heading text-dark">{exhibitorBenefitData.heading.value}</h2>
                            </div>
                        </div>
                        <div className="row">
                            {
                                exhibitorBenefitData.items.value.map((d: any) => {
                                    var item: Partneritem = d;
                                    return (
                                        <div className="col-12 col-md-6  text-center m-b-20">
                                            <div className="exhibitor-benefit-item" >
                                                <Image width={1000} height={450} alt={item.name.value} src={item.image.value[0].url} className="exhibitor-benefit-item-img" />
                                                <div className="black-overlay"></div>
                                                <div className="description">

                                                    <span dangerouslySetInnerHTML={{ __html: item?.content.value }} />
                                                </div>
                                                <div className="text-contents">
                                                    <p className="name">{item.name.value}</p>
                                                </div>

                                            </div>
                                        </div>
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
