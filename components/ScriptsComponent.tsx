import React from "react";
import Globals from "../WoodShow/Globals";

export default function ScriptsComponent() {
  return (
    <React.Fragment>
      <script
        type="text/javascript"
        src={`${Globals.BASE_URL}assets/js/jquery-3.5.1.min.js`}
      ></script>
      <script
        type="text/javascript"
        src={`${Globals.BASE_URL}assets/js/popper.min.js`}
      ></script>
      <script
        type="text/javascript"
        src={`${Globals.BASE_URL}assets/js/bootstrap.min.js`}
      ></script>
      <script
        type="text/javascript"
        src={`${Globals.BASE_URL}assets/js/wow.min.js`}
      ></script>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-9712H9C33Y"></script>
      <script
        type="text/javascript"
        src={`${Globals.BASE_URL}assets/js/gtag.js`}
      ></script>

      <script
        type="text/javascript"
        src={`${Globals.BASE_URL}assets/js/main.js`}
      ></script>
    </React.Fragment>
  );
}
