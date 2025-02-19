import "@testing-library/jest-dom";

declare module "app/case/[slug]/page" {
    import { FC } from "react";
    const Page: FC;
    export default Page;
  }
  