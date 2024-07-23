import Head from "next/head";
import React from "react";
import Globals from "../../WoodShow/Globals";
import Link from "next/link";
import ContentMainComponent from "../../components/ContentMainComponent";
var id="";
export default class startupPage extends React.Component<
    {},
    {
    }
> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        id = window.location.pathname.replace("/cairo/thank-you/","").replace("-"," ");
        var thankyou = $("#message").html();
        thankyou = thankyou.replace("[name]", "<span id='UserName'></span>");
        $("#message").html(thankyou);
        $("#UserName").html(String(id));
    }
    getName() {
     
    }

    render(): React.ReactNode {
     
        return (
            <React.Fragment>
                <Head>
                    <title>{`${Globals.SITE_NAME} | Thank You`}</title>
                    <meta name="title" content={"Thank You"} />
                    <meta name="description" content={"Thank You"} />
                </Head>

                <ContentMainComponent track="Register" heading="Thank you">
                    <div className="form-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                        <div className="_form-thank-you">
                                        <span id="message">
                                                Dear [name]
                                                <br />
                                                Greetings from the Wood Show Global Organizing Committee
                                                <br />
                                                Thank you for your interest in becoming part of the Wood Show Global – Cairo edition, your submission has been submitted successfully.
                                                <br />
                                                The Organizing Committee will revert to you shortly with the final confirmation for your registration.
                                                <br />
                                                For Sponsorship Opportunity, please contact Mr. Mohamed Rilwan at <a style={{ color: "#0a58ca", textDecoration: "underline" }} href="mailto:mohamed.rilwan@woodshowglobal.com">mohamed.rilwan@woodshowglobal.com</a> or Call <a style={{ color: "#0a58ca", textDecoration: "underline" }} href="tel:971561889859">+971 56 188 9859</a>
                                                <br />
                                                For Partnership Opportunity, please contact Mr Dilip Kumar at <a style={{ color: "#0a58ca", textDecoration: "underline" }} href="mailto:Dilip.kumar@woodshowglobal.com">Dilip.kumar@woodshowglobal.com</a> or Call <a style={{ color: "#0a58ca", textDecoration: "underline" }} href="tel:971564034042">+971 56 403 4042</a>
                                                <br />
                                                For Marketing Opportunity, please contact Ms. Rowaida Elbatrawy at <a style={{ color: "#0a58ca", textDecoration: "underline" }} href="mailto:rowaida.elbatrawy@woodshowglobal.com">rowaida.elbatrawy@woodshowglobal.com</a>
                                                <br />
                                                For General Inquiries, please email us at <a style={{ color: "#0a58ca", textDecoration: "underline" }} href="mailto:info@woodshowglobal.com">info@woodshowglobal.com</a>
                                            </span>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </ContentMainComponent>
            </React.Fragment >
        );
    }
}
