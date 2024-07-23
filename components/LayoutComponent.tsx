import { useRouter } from "next/router";
import React from "react";
import Globals from "../WoodShow/Globals";
import HeaderComponent from "./HeaderComponent";
import MenuComponent from "./MenuComponent";
import FooterComponent from "./FooterComponent";
import ScriptsComponent from "./ScriptsComponent";
import MetaTagsComponent from "./MetaTagsComponent";

export default function LayoutComponent({ children }: any) {
  const router = useRouter();
  return (
    <React.Fragment>
      <MetaTagsComponent />
      <HeaderComponent />
      <header>
        <MenuComponent />
      </header>
      {children}
      <FooterComponent />

      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THXPZM8Q"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>

      <ScriptsComponent />
    </React.Fragment>
  );
}
