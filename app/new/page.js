import Link from "next/link";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About.js";
import Banner from "@/components/sections/home1/Banner";
// import Chooseus from "@/components/sections/home1/WhyChooseUs";
import Cases from "@/components/sections/home1/Cases";
// import Contact from "@/components/sections/home1/Contact";
import Cta from "@/components/sections/home1/Cta";
import Feature from "@/components/sections/home1/Feature";
// import Highlights from "@/components/sections/home1/Highlights";
import News from "@/components/sections/home1/News";
// import Project from "@/components/sections/home1/Project";
// import Service from "@/components/sections/home1/Service";
// import Team from "@/components/sections/home1/Team";
import Clients from "@/components/sections/home1/Clients";
import Funfacts from "@/components/sections/home1/Funfacts";
import Features from "@/components/sections/home1/Features";
import Pricing from "@/components/sections/home1/Pricing";
import Process from "@/components/sections/home1/Process";
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs";

export default function New() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="About Earth-Based Institute"
          pageTitle="About Earth-Based Institute"
          pageImage="/assets/images/EBI-about-earth-based-institue.jpeg"
        />

        <Banner />
        <Feature />
        <About />
        <Pricing />
        <Process />
        <WhyChooseUs />

        {/* <Clients /> */}
        <Funfacts />
        <Features />

        {/* <Chooseus /> */}
        {/* <News /> */}
        <Cta />
        {/* <Cases /> */}
      </Layout>
    </>
  );
}
