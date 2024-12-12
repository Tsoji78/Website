import AboutSectionOne from "@/components/About/AboutSection";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
//import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta/Cta"
import Stocks from "@/components/Stocks";
//import Video from "@/components/Video";
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
      {/* <Testimonials /> */}
      <Stocks/>
      <Brands />      
      {/* <Video /> */}
      <Cta/>
      <AboutSectionOne />
      <Contact />
    </>
  );
}
