import Head from "next/head";
import React from "react";
import Globals from "../WoodShow/Globals";
import Services from "../WoodShow/Services";
import { Homepage } from "../models/homepage";
import Link from "next/link";
import Helper from "../WoodShow/Helper";
import { Buttons } from "../models/buttons";
import { Statsitems } from "../models/statsitems";
import { Tabitems } from "../models/tabitems";
import MediaPartnerComponent from "./MediaPartnerComponent";
import CountUp from 'react-countup';

export default class HomePageComponent extends React.Component<
    {},
    {
        pageData: Homepage;
        isLoaded: Boolean;
    }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            pageData: new Homepage(),
            isLoaded: false,
        };
    }

    componentDidMount() {
        Globals.KontentClient.item("home_page")
            .toObservable()
            .subscribe((response: any) => {
                this.setState({
                    pageData: response.item,
                    isLoaded: true
                });

                Services.loadFile(
                    `${Globals.BASE_URL}assets/js/owl.carousel.min.js`,
                    () => {
                        Services.loadFile(
                            `${Globals.BASE_URL}assets/js/visitCarousel.js`
                        );
                    }
                );
            });
    }



    render(): React.ReactNode {
        const { pageData, isLoaded } = this.state;

        if (!isLoaded) {
            return <React.Fragment />;
        }
        return (
            <React.Fragment>
                <div className="counter-wrapper">
                    <div className="container">
                        <div className="row" style={{ justifyContent: "center" }}>
                            {pageData.stats.value.map((item, index) => (
                                <div key={index} className={`col-12 col-md-3 p-t-15 p-b-15 ${index === 0 ? "" : "border-left-counter"}`}>
                                    <CountUp start={0} end={parseInt(item.counter.value.replace(/\D/g, ''), 10)} duration={2.5} separator="," className="counter" />
                                    <img className="counter-icon" src={item.icon.value[0].url} alt={item.name.value} />
                                    <p className="counter-label">{item.name.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="home-about-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className={`col-12 col-lg-6`}>
                                <h2 className={`section-heading`}>{pageData.aboutHeading.value}</h2>
                                {/* <span className="m-b-40 text-justify about-description"
                                    dangerouslySetInnerHTML={{ __html: pageData.aboutContent.value }}
                                /> */}
                                <p className="description">Dubai International Furniture Accessories & Components & Semi-Finished Products Show will take place from 14 - 16 April 2025, in conjunction with Dubai WoodShow 2025 at Dubai World Trade Centre 
                                The exhibition will showcase the innovative furniture technologies, products and brands. It gives the visitors a chance to educate themselves about the latest products in surfaces and fittings, elements and systems, semi-finished products and materials, furniture fabrics and upholstery materials.</p>
                                {
                                    pageData.aboutBtnLink.value ? (
                                        <Link passHref={true} legacyBehavior={true} href={pageData.aboutBtnLink.value}>
                                            <a className="btn-red-transparent">{pageData.aboutBtnName.value}</a>
                                        </Link>
                                    ) : ""
                                }
                            </div>

                            <div className="col-12 col-lg-6">
                                {
                                    pageData.aboutImage.value[0] ? (
                                        <img src="/assets/imgs/difac-about-img.png" className="about-img" />
                                    ) : ""
                                }
                            </div>


                        </div>
                    </div>
                </div>

                <MediaPartnerComponent />

                {/* <div className="why-saudi-wrapper">
                    <div className="container">
                        <div id="why_carousel" className="owl-carousel">
                            {pageData.tabs.value.map((m: any) => {
                                var item: Tabitems = m;
                                return (
                                    <a href={item.link.value}>
                                    <div className="why-visit-item">
                                        <div className="visit-img">
                                            {
                                                item.image.value[0] ? (
                                                    <img src={item.image.value[0].url} />

                                                ) : ""
                                            }
                                        </div>

                                        <p className="visit-heading">{item.name.value}</p>
                                        <p className="m-b-5">{item.content.value}</p>
                                    </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div> */}
            </React.Fragment>
        );
    }
}

