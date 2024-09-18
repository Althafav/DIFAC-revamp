import React from "react";
import Globals from "../WoodShow/Globals";
import Link from "next/link";

export default function ContentMainComponent(props: any) {
  return (
    <React.Fragment>

      <div className="inner-banner-wrapper" style={{
        backgroundImage: "url('/assets/imgs/inner-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="inner-banner-content">
          {
            props.track ? (
              <p className="inner-banner-label">
                <a href="/">Home</a> {">"} {props.track}</p>
            ) : ""
          }
          <p className="inner-banner-heading">{props.heading}</p>
          <p className="inner-banner-heading">{props.subheading}</p>
        </div>
      </div>

      {props.children}
    </React.Fragment>
  );
}
