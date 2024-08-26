import Link from "next/link";
import About from "@/components/sections/home2/About";
import Layout from "@/components/layout/Layout";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
import Banner from "@/components/sections/home2/Banner";
import Client from "@/components/sections/home2/Client";
import Contact from "@/components/sections/home2/Contact";
import Cta from "@/components/sections/home2/Cta";
import Features from "@/components/sections/home2/Features";
import ClientSlider1 from "@/components/slider/ClientSlider1";
import ClientSlider2 from "@/components/slider/ClientSlider2";
import ClientSlider3 from "@/components/slider/ClientSlider3";
import AboutSlider6 from "@/components/slider/AboutSlider6";
import AuditSlider1 from "@/components/slider/AuditSlider1";
import AwardSlider1 from "@/components/slider/AwardSlider1";
import GallerySlider9 from "@/components/slider/GallerySlider9";
import ServiceSlider1 from "@/components/slider/ServiceSlider1";
import TeamSlider12 from "@/components/slider/TeamSlider12";
import TeamSlider2 from "@/components/slider/TeamSlider2";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";

export default function NewTwo() {
  return (
    <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
      <Breadcrumb_Services
        breadcrumbTitle="About Earth-Based Institute"
        pageTitle="About Earth-Based Institute"
        pageImage="/assets/images/EBI-about-earth-based-institue.jpeg"
      />
      <About />
      <Banner />
      <Client />
      <Contact />
      <Cta />
      <Features />
      <ClientSlider1 />
      <ClientSlider2 />
      <ClientSlider3 />
      <AboutSlider6 />
      <AuditSlider1 />
      <AwardSlider1 />
      <GallerySlider9 />
      <ServiceSlider1 />
      <TeamSlider2 />
      <TestimonialSlider1 />
    </Layout>
  );
}
