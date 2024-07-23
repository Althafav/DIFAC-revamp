

import Link from "next/link";
import React from "react";
import Globals from "../WoodShow/Globals";
import { Buttons } from "../models/buttons";
import Head from "next/head";
import { Banner } from "../models/banner";
import HomePageComponent from "../components/HomePageComponent";
import Services from "../WoodShow/Services";
import BookYourStandComponent from "../components/BookYourStandComponent";

export async function getStaticProps() {
  const datasourceStr: string = await Globals.KontentClient.item("home_banner")
    .languageParameter(Globals.CURRENT_LANG_CODENAME)
    .toObservable()
    .toPromise()
    .then((r: any) => {
      return JSON.stringify(r.item);
    });

  const data: Banner = JSON.parse(datasourceStr);

  return {
    props: {
      data,
    },
    revalidate: 120,
  };
}

function ListPage({ data }: { data: Banner }) {
  try {
    Services.loadFile(
      `${Globals.BASE_URL}assets/js/owl.carousel.min.js`,
      () => {
        Services.loadFile(
          `${Globals.BASE_URL}assets/js/bannerCarousel.js`
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
        <meta property="og:url" content={`https://cifac.woodshowglobal.com`} />
        <meta name="twitter:card" content={`https://cifac.woodshowglobal.com/assets/imgs/logo.png`} />

        <meta property="og:description" content={data.metaDescription.value} />
        <meta property="og:site_name" content={Globals.SITE_NAME} />
        <meta name="twitter:image:alt" content={data.metaTitle.value} />
        <link href={`https://cifac.woodshowglobal.com`} rel='canonical' />
      </Head>
      <div className="home-video-wrapper">
        <div className="banner-overlay"></div>
        {/* <div id="banner_carousel" className="owl-carousel">
          {
            data.images.value.map((m: any) => {
              return (
                <div className="item">
                  <img src={m.url} className="banner-item" />
                </div>
              )
            })
          }
        </div> */}
        <div className="video-container">
          <video autoPlay loop muted controls={false}>
            <source src="https://d2g6bqkf4g3jqe.cloudfront.net/videos/CIFAC%20Website%20Banner.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="inner-banner-content-wrapper">
          <div className="container">
            <div className={`inner-bottom-content`}>
              <p className="banner-event">Dubai International Furniture Accessories & Components & Semi-Finished Products Show The Leading Exhibition Platform </p>

              {
                data.buttons.value.map((b: any, index: number) => {

                  var btn: Buttons = b;
                  const buttonClass = index === 0 ? 'button-1' : 'button-2';
                  return (
                    <React.Fragment >
                      {btn.link.value ? (
                        <Link passHref={true} legacyBehavior={true} href={btn.link.value}>
                          <a target={btn.target.value == 1 ? "_blank" : "_self"} className={`banner-btn ${buttonClass}`}>{btn.name.value}</a>
                        </Link>
                      ) : ""}

                    </React.Fragment>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <HomePageComponent />
      <BookYourStandComponent />
    </React.Fragment>

  );

}

export default ListPage;
