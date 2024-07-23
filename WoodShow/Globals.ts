import { ManagementClient } from "@kentico/kontent-management";
const KontentDelivery = require("@kentico/kontent-delivery");
import { TypeResolver } from "./TypeResolvers";

export default class Globals {
  static PROJECT_ID: string = "4afbe688-848d-0088-0d41-6d84b430a529";

  static SECURE_API_KEY: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZDU3ODgwNTJmMjU0NDg2Yjg3NTg5ODY3NzEwNzNjOCIsImlhdCI6MTcxNzU3MDYzMCwibmJmIjoxNzE3NTcwNjMwLCJleHAiOjE3NDkxMDY1NjAsInZlciI6IjIuMC4wIiwic2NvcGVfaWQiOiIwMzNlNThmYWI0MDE0ZTNhYWU5YWRmMmQ1MTFkZGM5ZiIsInByb2plY3RfY29udGFpbmVyX2lkIjoiZjhjYWEwZDdhZDZjMDBlZjVlNjg5Y2M5MTk0ZDAzODQiLCJhdWQiOiJkZWxpdmVyLmtvbnRlbnQuYWkifQ.PwOXFM43byfFBhUaVGhCUJCThpjapUd-kwZe5BHi7mM";

  static KontentClient: any = new KontentDelivery.DeliveryClient({
    projectId: Globals.PROJECT_ID,
    globalQueryConfig: {
      useSecuredMode: true, // Queries the Delivery API using secure access.
    },
    secureApiKey: Globals.SECURE_API_KEY,
    typeResolvers: TypeResolver,
  });

  static SITE_NAME = "DIFAC";

  static BASE_URL: string =
    process.env.NODE_ENV === "production"
      ? "https://cifac.vercel.app/"
      : "http://localhost:4000/";

  static ALLOW_COOKIE: string = `${Globals.PROJECT_ID}-allow-cookie`;

  static LANG_COOKIE: string = `${Globals.PROJECT_ID}-lang-cookie`;

  static CURRENT_LANG: string = "English";

  static CURRENT_LANG_CODENAME: string = "default";
}
