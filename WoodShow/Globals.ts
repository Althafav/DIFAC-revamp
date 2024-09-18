import { ManagementClient } from "@kentico/kontent-management";
const KontentDelivery = require("@kentico/kontent-delivery");
import { TypeResolver } from "./TypeResolvers";

export default class Globals {
  static PROJECT_ID: string = "a6247815-8ce0-00a4-920e-2687d8f4861e";

  static SECURE_API_KEY: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZDU3ODgwNTJmMjU0NDg2Yjg3NTg5ODY3NzEwNzNjOCIsImlhdCI6MTcxNzU3MDYzMCwibmJmIjoxNzE3NTcwNjMwLCJleHAiOjE3NDkxMDY1NjAsInZlciI6IjIuMC4wIiwic2NvcGVfaWQiOiIwMzNlNThmYWI0MDE0ZTNhYWU5YWRmMmQ1MTFkZGM5ZiIsInByb2plY3RfY29udGFpbmVyX2lkIjoiZjhjYWEwZDdhZDZjMDBlZjVlNjg5Y2M5MTk0ZDAzODQiLCJhdWQiOiJkZWxpdmVyLmtvbnRlbnQuYWkifQ.PwOXFM43byfFBhUaVGhCUJCThpjapUd-kwZe5BHi7mM";


  static WSD_PROJECT_ID: string = "3916305d-d8b4-00e2-8e6e-ef4d879c5255";

  static WSD_SECURE_API_KEY: string =
    "ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjM3ZDlmM2Y3ZGNhYjRhNzU5MTRkMjFmNjg3YjliMGNjIiwNCiAgImlhdCI6ICIxNjkyNjkxMTk5IiwNCiAgImV4cCI6ICIxNzI0MzEzNTQwIiwNCiAgInZlciI6ICIyLjAuMCIsDQogICJzY29wZV9pZCI6ICI2ZDM5MWE1YzlkNjk0OTMwYWE2ZDE4YzUzNGI0NzZiZCIsDQogICJwcm9qZWN0X2NvbnRhaW5lcl9pZCI6ICI4MDA4ZjE2ODUzYzgwMGQxNTg2OWU4ZjY5NjU5MzY5ZSIsDQogICJhdWQiOiAiZGVsaXZlci5rb250ZW50LmFpIg0KfQ.eE_blOkZCt9izco5V76ig6q11vg4izwD1dMaYJkJUcw";

  static CIFAC_PROJECT_ID: string = "4afbe688-848d-0088-0d41-6d84b430a529";
  static CIFAC_SECURE_API_KEY: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZDU3ODgwNTJmMjU0NDg2Yjg3NTg5ODY3NzEwNzNjOCIsImlhdCI6MTcxNzU3MDYzMCwibmJmIjoxNzE3NTcwNjMwLCJleHAiOjE3NDkxMDY1NjAsInZlciI6IjIuMC4wIiwic2NvcGVfaWQiOiIwMzNlNThmYWI0MDE0ZTNhYWU5YWRmMmQ1MTFkZGM5ZiIsInByb2plY3RfY29udGFpbmVyX2lkIjoiZjhjYWEwZDdhZDZjMDBlZjVlNjg5Y2M5MTk0ZDAzODQiLCJhdWQiOiJkZWxpdmVyLmtvbnRlbnQuYWkifQ.PwOXFM43byfFBhUaVGhCUJCThpjapUd-kwZe5BHi7mM";

  static KontentClient: any = new KontentDelivery.DeliveryClient({
    projectId: Globals.PROJECT_ID,
    globalQueryConfig: {
      useSecuredMode: true, // Queries the Delivery API using secure access.
    },
    secureApiKey: Globals.SECURE_API_KEY,
    typeResolvers: TypeResolver,
  });

  static WSD_KontentClient: any = new KontentDelivery.DeliveryClient({
    projectId: Globals.WSD_PROJECT_ID,
    globalQueryConfig: {
      useSecuredMode: true, // Queries the Delivery API using secure access.
    },
    secureApiKey: Globals.WSD_SECURE_API_KEY,
    typeResolvers: TypeResolver,
  });

  static CIFAC_KontentClient: any = new KontentDelivery.DeliveryClient({
    projectId: Globals.CIFAC_PROJECT_ID,
    globalQueryConfig: {
      useSecuredMode: true, // Queries the Delivery API using secure access.
    },
    secureApiKey: Globals.CIFAC_SECURE_API_KEY,
    typeResolvers: TypeResolver,
  });

  static SITE_NAME = "DIFAC";

  static BASE_URL: string =
    process.env.NODE_ENV === "production"
      ? "https://difac.woodshowglobal.com/"
      : "http://localhost:4000/";

  static ALLOW_COOKIE: string = `${Globals.PROJECT_ID}-allow-cookie`;

  static LANG_COOKIE: string = `${Globals.PROJECT_ID}-lang-cookie`;

  static CURRENT_LANG: string = "English";

  static CURRENT_LANG_CODENAME: string = "default";
}
