import Link from "next/link";
import React from "react";
import { Partnerspage } from "../models/partnerspage";
import Globals from "../WoodShow/Globals";
import Services from "../WoodShow/Services";
import { Partneritem } from "../models/partneritem";
import { Buttons } from "../models/buttons";
import { PartnerPage } from "../models/partner_page";



export default class MediaPartnerComponent extends React.Component<
  {},
  {
    pageData: PartnerPage;
    isLoaded: Boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      pageData: new PartnerPage(),
      isLoaded: false,
    };
  }

  componentDidMount() {

    Globals.WSD_KontentClient.item("media_partners_page")

      .toObservable()
      .subscribe((response: any) => {
        this.setState({
          pageData: response.item,
          isLoaded: true,
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
      <div className="container carousel-wrapper-MediaPartners" id="MediaPartners">
        <div className="section-heading-wrapper">
          <h2 className="section-heading">{pageData.heading.value}</h2>
        </div>

        <div className="media-carousel owl-carousel mt-4">
          {pageData.items.value.map((m: any, index: number) => {
            var item: Partneritem = m;
            return (
              <div className="media-img">
                {
                  item.logo.value[0] ? (
                    <img src={item.logo.value[0].url} style={{height: "180px",  objectFit: "contain" , objectPosition: "center"}}/>

                  ) : ""
                }
              </div>

            )
          })}
        </div>

        <div className="cta-btn-wrapper text-center mt-5">

          <Link href='/media-partners'>

            <button className="media-cta-btn">View More</button>
          </Link>


        </div>

        <button></button>

      </div>
    );
  }
}
