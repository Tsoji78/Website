import AboutSectionOne from "@/components/About/AboutSectionOne";
//import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Rabovel",
  description: "This is About Page for Rabovel",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
