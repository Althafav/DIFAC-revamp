import Head from "next/head";
import React from "react";
import Globals from "../WoodShow/Globals";

export default function HeaderComponent() {
  return (
    <Head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.min.css" />
      <link
        href={`${Globals.BASE_URL}assets/css/owl.carousel.min.css`}
        rel="stylesheet"
        media="all"
      />
      <link
        href={`${Globals.BASE_URL}assets/css/viewer.min.css`}
        rel="stylesheet"
        media="all"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <link
        href={`${Globals.BASE_URL}assets/css/main.min.css`}
        rel="stylesheet"
        media="all"
      />

      <link href='https://fonts.googleapis.com/css?family=Cormorant Garamond' rel='stylesheet' />
      <link href="http://fonts.cdnfonts.com/css/proxima-nova-2" rel="stylesheet" />
    </Head>
  );
}
