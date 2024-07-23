import Link from "next/link";
import React from "react";
import { Partnerspage } from "../models/partnerspage";
import Globals from "../WoodShow/Globals";
import Services from "../WoodShow/Services";
import { Partneritem } from "../models/partneritem";
import { Buttons } from "../models/buttons";



export default class MediaPartnerComponent extends React.Component<
  {},
  {
    pageData: Partnerspage;
    isLoaded: Boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      pageData: new Partnerspage(),
      isLoaded: false,
    };
  }

  componentDidMount() {

    Globals.KontentClient.item("media_partners_page")

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

        <div className="media-carousel owl-carousel">
          {pageData.items.value.map((m: any, index: number) => {
            var item: Partneritem = m;
            return (
              <div className="media-img">
                {
                  item.image.value[0] ? (
                    <img src={item.image.value[0].url} />

                  ) : ""
                }
              </div>

            )
          })}
        </div>

        <div className="cta-btn-wrapper text-center mt-5">
          {pageData.cta.value.map((m: any, index: number) => {
            var item: Buttons = m;
            return (
              <button className="media-cta-btn">{item.name.value}</button>
            )
          })}
        </div>

        <button></button>

      </div>
    );
  }
}
