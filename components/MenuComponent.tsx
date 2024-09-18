import Link from "next/link";
import React from "react";
import DOMPurify from "dompurify";
import Globals from "../WoodShow/Globals";
import Helpers from "../WoodShow/Helper";
import { Menu } from "../models/menu";
import { Menuitem } from "../models/menuitem";
import Helper from "../WoodShow/Helper";

export default class MenuComponent extends React.Component<
  {},
  {
    sectionData: Menu;
    isLoaded: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      sectionData: new Menu(),
      isLoaded: false,
    };
  }

  componentDidMount = () => {
    Globals.KontentClient.item("menu")
      .withParameter("depth", "2")
      .toObservable()
      .subscribe((response: any) => {
        this.setState({
          sectionData: response.item,
          isLoaded: true,
        });
      });
  };

  changewebsite() {
    var website = $("#website").val();
    if (website == "cifac") {
      window.location.href = "https://cifac.woodshowglobal.com/";
    } else {
      window.location.href = "https://difac.woodshowglobal.com/";
    }
  }

  openMenu() {
    $(".menu-container").removeClass("d-none");
    $(".body").css("overflow-y", "hidden");

    $(".menu-bars").addClass("d-none");
    $(".brown-bars").addClass("d-none");
    $(".close-btn").removeClass("d-none");
  }

  closeMenu() {
    $(".menu-container").addClass("d-none");
    $(".body").css("overflow-y", "unset");

    $(".menu-bars").removeClass("d-none");
    $(".close-btn").addClass("d-none");
  }

  render() {
    const { sectionData, isLoaded } = this.state;
    if (!isLoaded) {
      return <React.Fragment />;
    }

    return (
      <React.Fragment>
        <div className="top-menu">
          <div className="container top-menu-items ">
            <div className={`menu-dropdown`}>
              <select
                onChange={(e) => {
                  this.changewebsite();
                }}
                id="website"
              >
                <option value="difac" style={{ color: "black" }}>
                  DIFAC
                </option>
                <option value="cifac" style={{ color: "black" }}>
                  CIFAC
                </option>
              </select>

            </div>

            <div className={`menu-btn`}>
              <a href="https://assets-us-01.kc-usercontent.com/a6247815-8ce0-00a4-920e-2687d8f4861e/59450c6f-f064-46d6-a8b2-bdba9e8f950e/DIFAC%20Brochure%20-%202025%203.pdf">
                <span>Download Brochure</span>

              </a>
            </div>
          </div>
        </div>
        <div className="menu-wrapper">
          <div className="row">
            <div className="col-12 menu-bars-wrap">
              <Link
                passHref={true}
                legacyBehavior={true}
                href={Globals.BASE_URL}
              >
                <a>
                  <img
                    className="logo white-logo d-none"
                    style={{ display: "inline" }}
                    src={sectionData.logo.value[0].url}
                  />
                  <img
                    className={`logo brown-logo float-left m-r-15 m-l-0`}
                    style={{ display: "inline" }}
                    src="/assets/imgs/Difac-logo.png"
                  />
                </a>
              </Link>

              <div className={`menu-event-detail`}>
                <p>{sectionData.date.value}</p>
                <p>{sectionData.venue.value}</p>
              </div>

              <div>
                <img
                  src={`${Globals.BASE_URL}assets/imgs/bars-brown.png`}
                  onClick={(e) => {
                    this.openMenu();
                  }}
                  className={`menu-bars brown-bars`}
                />
                <img
                  src={`${Globals.BASE_URL}assets/imgs/close_btn.png`}
                  width="45"
                  onClick={(e) => {
                    this.closeMenu();
                  }}
                  className={`menu-bars close-btn d-none`}
                />
              </div>
            </div>
          </div>

          <div className="desktop-menu">
            <ul className={`desktop-menu-ul`}>
              {sectionData.items.value.map((m: any) => {
                var item: Menuitem = m;
                return (
                  <li className="desktop-menu-li">
                    <Link
                      passHref={true}
                      legacyBehavior={true}
                      href={item.link.value}
                    >
                      <a
                        className="desktop-menu-a"
                        target={item.target.value == 1 ? "_blank" : "_self"}
                      >
                        {item.name.value}{" "}
                        {item.items.value.length > 0 ? (
                          <i
                            className="fa fa-caret-down"
                            aria-hidden="true"
                          ></i>
                        ) : (
                          ""
                        )}
                      </a>
                    </Link>

                    {item.items.value.length > 0 ? (
                      <div className="desktop-menu-sub-wrap">
                        <ul className="desktop-menu-sub-ul">
                          {item.items.value.map((s: any) => {
                            var sub: Menuitem = s;
                            return (
                              <li className="desktop-menu-sub-li">
                                <Link
                                  passHref={true}
                                  legacyBehavior={true}
                                  href={sub.link.value}
                                >
                                  <a
                                    className="desktop-menu-sub-a"
                                    target={
                                      sub.target.value == 1 ? "_blank" : "_self"
                                    }
                                  >
                                    {sub.name.value}
                                  </a>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="register-mini-banner">
            <div>
            <p>14 - 16 April 2025</p>
            <p>Dubai World Trade Centre</p>
            </div>
            <div>
            </div>
          </div>

          <div className="menu-container d-none">
            <div className="row">
              <div className="col-12 p-0 sub-menu-wrapper">
                <div className="sub-menu-container">
                  <div className="sub-menu"></div>
                  <div className="menu-content">
                    <ul className="menu-ul">
                      {sectionData.items.value.map((m: any) => {
                        var item: Menuitem = m;
                        return (
                          <li className="menu-li">
                            <a
                              href={item.link.value}
                              target={
                                item.target.value == 1 ? "_blank" : "_self"
                              }
                              className="menu-link"
                            >
                              {item.name.value}
                            </a>
                            {item.items.value.length > 0 ? (
                              <div className="menu-content-inner-wrapper">
                                <ul className="menu-content-inner-ul">
                                  {item.items.value.map((s: any) => {
                                    var sub: Menuitem = s;
                                    return (
                                      <li className="menu-content-inner-li">
                                        <a
                                          href={sub.link.value}
                                          target={
                                            sub.target.value == 1
                                              ? "_blank"
                                              : "_self"
                                          }
                                        >
                                          {sub.name.value}
                                        </a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ) : (
                              ""
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
