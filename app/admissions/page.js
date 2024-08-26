"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Breadcrumb_Services_Quote_btn from "@/components/layout/Breadcrumb-Services-Quote-btn";
import AwardSlider1 from "@/components/slider/AwardSlider1";
import Link from "next/link";
import { useState } from "react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
import classes from "@/public/assets/css/ebi.module.css";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services_Quote_btn
          breadcrumbTitle="About"
          pageTitle="Admissions"
          pageImage="/assets/ebi_images/ebi-admissions-page-graphic.webp"
          quote="“The secret to getting ahead is getting started.”—Mark Twain"
          btn="Admissions"
        />
        <div className="auto-container">
          <div className={`text pt-5 pb-5 ${classes.fontsize}`}>
            Earth-based Institute (EBI) students come from a wide array of
            backgrounds and education levels. Our only prerequisite is a passion
            for nature—a trait shared by all EBI students, affiliates,
            instructors, and staffers.
          </div>

          <div className={classes.admissions}>
            <div className={classes.boxwidth}>
              <h4 className={`h2 mb-5 ${classes.fontsize}`}>
                Online Registration
              </h4>
              <div className={`text ${classes.fontsize}`}>
                The application process for most of courses is simple:
                <ul>
                  <li>select a course</li>
                  <li>then enroll via our safe and secure online cart</li>
                </ul>
              </div>
            </div>

            <div className={classes.boxwidth}>
              <h4 className="h2 mb-5">Certified Coaching Programs</h4>
              <div className={`text ${classes.fontsize}`}>
                Our certified Nature-Connected Coaching℠ (NCC) core program
                requires a bit more information from you to get started. When
                you select Nature-Connected Coaching℠ from the Course Listings,
                you will be asked to complete a more detailed questionnaire and
                provide three references. After you have applied, we will
                contact you to schedule an interview. When your are accepted
                into the program, you will be invited to register.
                <br /> <br />
                Once you have completed NCC program, you may choose to continue
                on with Transformational Wilderness Guide (TWG) certification.
                Simply login and add TWG to your cart.
              </div>
              <div className={`row pt-5 ml-1 ${classes.gap2}`}>
                <div>
                  <div className="text">Financial aid is available.</div>
                  <div className="text-center mb-2">
                    <Link href="/" className="theme-btn btn-style-four">
                      <span className="btn-title">About Financial Aid</span>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="text">Questions?</div>
                  <div className="text-center mb-2">
                    <Link href="/" className="theme-btn btn-style-four">
                      <span className="btn-title">Get Started Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.admissionsbg}>
          <div className="auto-contitaner mt-5 pt-5">
            <h4 className={`h2 pt-5 text-center ${classes.fontsize}`}>
              Life Coaching Services
            </h4>
            <div className={`text auto-container pt-5 ${classes.fontsize}`}>
              In addition to our certification programs and other courses, EBI
              offers a number of personalized services:
              <ul className="pt-3 pb-3">
                <li className={classes.fontsize}>
                  Life Coaching for individuals, as well as parents and families
                </li>
                <li className={classes.fontsize}>
                  Wilderness Directions—a 1-7 day personalized wilderness
                  experience
                </li>
                <li className={classes.fontsize}>
                  Intensive Business Mentoring—beyond the 25 hours of business
                  coaching built into the NCC training program, EBI offers
                  personalized mentoring to launch and grow your business
                </li>
              </ul>
              Contact us so we can customize these services to your individual
              needs.
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
