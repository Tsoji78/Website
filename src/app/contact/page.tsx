import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Rabovel",
  description: "This is Contact Page for Rabovel",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description=" Feel free to contact us about anything and be sure to get a delightful response."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
