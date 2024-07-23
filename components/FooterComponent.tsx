import Link from "next/link";
import React from "react";
import Globals from "../WoodShow/Globals";
import JsLoader from "../WoodShow/JsLoader";
import { Footer } from "../models/footer";
import BookYourStandComponent from "./BookYourStandComponent";

export default class FooterComponent extends React.Component<
  {},
  {
    sectionData: Footer;
    isLoaded: Boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      sectionData: new Footer(),
      isLoaded: false,
    };
  }

  componentDidMount() {
    Globals.KontentClient.item("footer")
      .languageParameter(Globals.CURRENT_LANG_CODENAME)
      .toObservable()
      .subscribe((response: any) => {
        this.setState({
          sectionData: response.item,
          isLoaded: true,
        });
      });
  }

  render(): React.ReactNode {
    const { sectionData, isLoaded } = this.state;

    if (!isLoaded) {
      return <React.Fragment />;
    }
    try {
      JsLoader.loadFile(`${Globals.BASE_URL}assets/js/newsLetter.js`);
    }
    catch (e) {

    }

    return (
      <React.Fragment>
       

        <div className="newsletter-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="newsletter-heading">Subscribe to our Newsletter</h2>
                <p className="newsletter-subheading">Subscribe to know latest updates from us</p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <form method="POST" action="//ac.strategic.ae/proc.php" id="_form_44_" className="_form _form_44 _inline-form  _dark" noValidate>
                  <input type="hidden" name="u" value="44" />
                  <input type="hidden" name="f" value="44" />
                  <input type="hidden" name="s" />
                  <input type="hidden" name="c" value="0" />
                  <input type="hidden" name="m" value="0" />
                  <input type="hidden" name="act" value="sub" />
                  <input type="hidden" name="v" value="2" />
                  <input type="hidden" name="or" value="9d60e43a0688d03e7fae24dba3ef60bf" />

                  <div className="_form-content">
                    <div className="newsletter-container m-b-10 text-center" style={{ border: "none" }}>
                      <input type="text" id="email" name="email" style={{ width: "100%", border: "1px solid #e59450", borderRadius: "25px" }} required className="newsletter-field text-center m-b-10" placeholder="Enter Your Email" />

                      <div className="g-recaptcha m-b-5" data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go">
                      </div>
                      <button type="submit" id="_form_44_submit" className="newsletter-submit">Subscribe</button>

                    </div>

                  </div>
                  <div className="_form-thank-you-newsletter" style={{ display: "none", textAlign: "center", color: "#036203", marginBottom: "15px" }}>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>

        <div className="bottom-footer-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                {
                  sectionData.logo.value[0] ? (
                    <img className="footer-logo" src="/assets/imgs/Difac-logo.png" />
                  ) : ""
                }
                <p className="footer-content">Dubai International Furniture Accessories, Components & Semi-Finished Products 2025 is all set to wow the interior from 14 - 16 April 2025 at Dubai World Trade Centre. With the huge demand of exhibitors during the previous editions of the Dubai WoodShow for a dedicated furniture event, a special show within Dubai WoodShow comes to fore. The DIFAC Show is bringing decision-makers and high level management across the Middle East region and worldwide looking for the latest products in surfaces and fittings, elements and systems, semi-finished products and materials, furniture fabrics and upholstery materials.</p>


              </div>
              <div className="col-12 col-md-3">
                <p className="footer-label">
                  Contact us
                </p>
                <hr className="footer-line" />

                <p className="footer-text">
                  {sectionData.address.value}
                </p>

                {
                  sectionData.phone.value ? (
                    <p className="footer-text">
                      Phone: {sectionData.phone.value}
                    </p>
                  ) : ""
                }

                {
                  sectionData.email.value ? (
                    <p className="footer-text">
                      Email: {sectionData.email.value}
                    </p>
                  ) : ""
                }


              </div>
              <div className="col-12 col-md-2">
                <p className="footer-label">
                  Follow us on
                </p>
                <hr className="footer-line" />


                {/* <ul className="social-ul">
                  {
                    sectionData.facebook.value ? (
                      <li className="social-li">
                        <a href={sectionData.facebook.value} target="_blank">
                          <img src={`${Globals.BASE_URL}assets/imgs/facebook.png`} />
                        </a>
                      </li>
                    ) : ""
                  }
                  {
                    sectionData.linkedin.value ? (
                      <li className="social-li">
                        <a href={sectionData.linkedin.value} target="_blank">
                          <img src={`${Globals.BASE_URL}assets/imgs/linkedin.png`} />
                        </a>
                      </li>
                    ) : ""
                  }
                  {
                    sectionData.twitter.value ? (
                      <li className="social-li">
                        <a href={sectionData.twitter.value} target="_blank">
                          <img src={`${Globals.BASE_URL}assets/imgs/twitter.png`} />
                        </a>
                      </li>
                    ) : ""
                  }
                  {
                    sectionData.instagram.value ? (
                      <li className="social-li">
                        <a href={sectionData.instagram.value} target="_blank">
                          <img src={`${Globals.BASE_URL}assets/imgs/instagram.png`} />
                        </a>
                      </li>
                    ) : ""
                  }
                </ul> */}

                <p className="inner-brought-label">Brought to You By:</p>
                <a href="https://strategic.ae/" target="_blank">
                  <img className="inner-brought-img" src={`${Globals.BASE_URL}assets/imgs/strategic.png`} />
                </a>
              </div>

              <div className="col-12 col-md-3">
                <p className="footer-label" style={{visibility:"hidden"}}>
                  Menu
                </p>
                <hr className="footer-line" style={{visibility:"hidden"}} />
                {
                  sectionData.map.value[0] ? (
                    <img className="footer-map" src={sectionData.map.value[0].url} />
                  ) : ""
                }
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <p className="copyright-content">{sectionData.copyright.value}</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
