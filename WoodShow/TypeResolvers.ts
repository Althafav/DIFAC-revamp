import { Banner } from "../models/banner";
import { Basiccontentpage } from "../models/basiccontentpage";
import { Buttons } from "../models/buttons";
import { Eventinformation } from "../models/eventinformation";
import { Footer } from "../models/footer";
import { Gallery } from "../models/gallery";
import { Galleryphoto } from "../models/galleryphoto";
import { Galleryyears } from "../models/galleryyears";
import { Homepage } from "../models/homepage";
import { Menu } from "../models/menu";
import { Menuitem } from "../models/menuitem";
import { PartnerPage } from "../models/partner_page";
import { Partneritem } from "../models/partneritem";
import { Partnerspage } from "../models/partnerspage";
import { Statsitems } from "../models/statsitems";
import { Tabitems } from "../models/tabitems";

const KontentDelivery = require("@kentico/kontent-delivery");

export const TypeResolver = [
  new KontentDelivery.TypeResolver(
    "Menu",
    (rawData: any) => new Menu()
  ),
  new KontentDelivery.TypeResolver(
    "Menuitem",
    (rawData: any) => new Menuitem()
  ),
  new KontentDelivery.TypeResolver(
    "Banner",
    (rawData: any) => new Banner()
  ),
  new KontentDelivery.TypeResolver(
    "Buttons",
    (rawData: any) => new Buttons()
  ),
  new KontentDelivery.TypeResolver(
    "Homepage",
    (rawData: any) => new Homepage()
  ),
  new KontentDelivery.TypeResolver(
    "Footer",
    (rawData: any) => new Footer()
  ),
  new KontentDelivery.TypeResolver(
    "Statsitems",
    (rawData: any) => new Statsitems()
  ),
  new KontentDelivery.TypeResolver(
    "Tabitems",
    (rawData: any) => new Tabitems()
  ),
  new KontentDelivery.TypeResolver(
    "Basiccontentpage",
    (rawData: any) => new Basiccontentpage()
  ),
  new KontentDelivery.TypeResolver(
    "Eventinformation",
    (rawData: any) => new Eventinformation()
  ),
  new KontentDelivery.TypeResolver(
    "Partnerspage",
    (rawData: any) => new Partnerspage()
  ),
  new KontentDelivery.TypeResolver(
    "Partneritem",
    (rawData: any) => new Partneritem()
  ),
  new KontentDelivery.TypeResolver(
    "Gallery",
    (rawData: any) => new Gallery()
  ),
  new KontentDelivery.TypeResolver(
    "Galleryphoto",
    (rawData: any) => new Galleryphoto()
  ),
  new KontentDelivery.TypeResolver(
    "Galleryyears",
    (rawData: any) => new Galleryyears()
  ),

  new KontentDelivery.TypeResolver(
    "PartnerPage",
    (rawData: any) => new PartnerPage()
  ),


];
