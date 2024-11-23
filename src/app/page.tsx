import AboutSectionOne from "@/components/About/AboutSectionOne";
//import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta/Cta"
// import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rabovel",
  description: "This is the website for the Rabovelt Startup",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Cta/>
      
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
