"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
import AwardSlider1 from "@/components/slider/AwardSlider1";
// import bg from "@/public/assets/images/EBI-about-earth-based-institue.jpeg";
import Link from "next/link";
import { useState } from "react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
import VideoPopup from "@/components/elements/VideoPopup";
import classes from "@/public/assets/css/ebi.module.css";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="Certifications"
          pageTitle="ALIGNING CAREERS WITH VALUES"
          pageImage="/assets/ebi_images/guide-training-e1507589914836.webp"
        />

        {/* About Section One */}
        <section className="about-section-two alternat-2">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="content-box">
                  <div className="sec-title style-four">
                    <h2>THE TRAINING YOU NEED FOR THE CAREER YOU WANT</h2>
                    <span className="text-decoration-four" />
                  </div>
                  <div className="content-block">
                    <div className="text">
                      Do you have a calling to work in, around, and for nature?
                      Are you committed to helping others? Earth-Based Institute
                      offers several online courses as well low-residency
                      certification programs for those drawn to a professional
                      outdoor career:
                      <br /> <br />
                      Nature-Connected Coaching℠ (NCC) Transformational
                      Wilderness Guiding (TWG)
                      <br /> <br />
                      These low-residency programs teach participants to combine
                      the skills and techniques of professional life coaching
                      with transformational wilderness expertise. No previous
                      experience necessary—just a passion for connecting with
                      nature and a strong desire to develop your career as a
                      coach.
                    </div>
                  </div>
                  {/*Testimonial Carousel*/}
                  {/* <Link href="/index-6" className="theme-btn btn-style-four">
                    <span className="btn-title">More Details</span>
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div
                // className="image-box wow fadeInLeft"
                // data-wow-delay="0ms"
                // data-wow-duration="1500ms"
                >
                  <div
                  // video-column
                    className={` ${classes.certificationbgimg1}`}
                  >
                    {/* <div className="curve-text">
                      <div className="icon-box">
                        <i className="flaticon-null-1" />
                      </div>
                      <ReactCurvedText
                        width="500"
                        height="500"
                        cx="90"
                        cy="90"
                        rx="90"
                        ry="90"
                        // zIndex="-1;"
                        startOffset="0"
                        reversed={true}
                        text="World’s #1 Consultancy . Works where it matters"
                        textProps={{ style: { fontSize: "18" } }}
                        textPathProps={{ fill: "#ffffff" }}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                      />
                    </div> */}
                    <div className="video-btn">
                      <VideoPopup />
                    </div>
                  </div>
                  {/* <img
                    className="lazy-image owl-lazy"
                    src="/assets/ebi_images/EBI-who-we-are-earth-based-institute.png"
                    alt=""
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={classes.sectionbg1}>
          <div className="auto-container">
            <h2 className={`text-center pb-3 h1 ${classes.padding5}`}>
              LIMITLESS POSSIBILITES
            </h2>
            <div className="h4 text-center pb-5">
              EBI students have gone on to apply their nature-connected training
              in a wide variety of fields
            </div>

            <div className={`row ${classes.gap}`}>
              <div className="h4">
                Business Coaching
                <br /> <br />
                Adventure Therapy
                <br /> <br />
                Career Counseling
                <br /> <br />
                Community Development
              </div>
              <div className="h4">
                Ecopsychology
                <br /> <br />
                Nature Therapy
                <br /> <br />
                Outdoor Education
                <br /> <br />
                Outdoor Leadership
              </div>
              <div className="h4">
                Wellness
                <br /> <br />
                Wilderness Therapy
                <br /> <br />
                Workshop Facilitation
                <br /> <br />
                Integration Coaching
              </div>
            </div>
          </div>
        </section>
        <section className="about-section-two alternat-2">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div
                // className="image-box wow fadeInLeft"
                // data-wow-delay="0ms"
                // data-wow-duration="1500ms"
                >
                  <div
                    className={`video-column ${classes.certificationbgimg2}`}
                  >
                    {/* <div className="curve-text">
                      <div className="icon-box">
                        <i className="flaticon-null-1" />
                      </div>
                      <ReactCurvedText
                        width="500"
                        height="500"
                        cx="90"
                        cy="90"
                        rx="90"
                        ry="90"
                        // zIndex="-1;"
                        startOffset="0"
                        reversed={true}
                        text="World’s #1 Consultancy . Works where it matters"
                        textProps={{ style: { fontSize: "18" } }}
                        textPathProps={{ fill: "#ffffff" }}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                      />
                    </div> */}
                    {/* <div className="video-btn">
                      <VideoPopup />
                    </div> */}
                  </div>
                  {/* <img
                    className="lazy-image owl-lazy"
                    src="/assets/ebi_images/EBI-who-we-are-earth-based-institute.png"
                    alt=""
                  /> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content-box">
                  {/* <div className="sec-title style-four">
                    <h2>THE TRAINING YOU NEED FOR THE CAREER YOU WANT</h2>
                    <span className="text-decoration-four" />
                  </div> */}
                  <div className="content-block">
                    <div className="text">
                      Our coaching certification program is accredited by the
                      International Coach Federation (ICF) as a Level 2 training
                      program. This means that our graduates obtain an
                      internationally recognized credential as a
                      Nature-Connected Coach, ensuring the highest quality
                      education.
                      <br /> <br />
                      Learn more about ICF and our certification
                    </div>
                  </div>
                  {/*Testimonial Carousel*/}
                  {/* <Link href="/index-6" className="theme-btn btn-style-four">
                    <span className="btn-title">More Details</span>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={classes.sectionbg2}>
          <h4 className="pt-5 text-center h4">
            TURN YOUR PASSION FOR NATURE & HELPING OTHERS INTO A CAREER
          </h4>
          <div className="text-center mt-5">
            <Link href="/" className="theme-btn btn-style-four">
              <span className="btn-title">More Details</span>
            </Link>
          </div>
        </section>
        {/* Award Section Three */}
        {/* <section className="award-section-three">
          <div className="auto-container">
            <div className="sec-title text-center">
              <h2>Our awards and achivements</h2>
              <div className="text-decoration">
                <span className="left" />
                <span className="right" />
              </div>
            </div>
            <div className="row">
              <AwardSlider1 />
            </div>
          </div>
        </section> */}
        {/* Feature Section Two */}

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}
