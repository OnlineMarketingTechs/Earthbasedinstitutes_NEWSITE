"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Breadcrumb_Services_Quote from "@/components/layout/Breadcrumb-Services-Quote";
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
        <Breadcrumb_Services_Quote
          breadcrumbTitle="About"
          pageTitle="Transformational Wilderness Guiding"
          pageImage="/assets/ebi_images/transformational-wilderness-guide-scaled.webp"
          quote="“The wilderness is healing, a therapy for the soul.”—Nicholas Kristof"
        />
        <div className="auto-container">
          <div className={`text pt-5 pb-5 ${classes.fontsize}`}>
            Earth-based Institute (EBI) offers two levels of certified coaching.
            Nature-Connected Coaching℠ is the core program. Transformational
            Wilderness Guiding is a second, optional level of certification.
            <br /> <br />
            The Transformation Wilderness Guiding (TWG) certification is geared
            to those seeking to work with clients in remote wilderness. It
            teaches and reinforces the leadership and process skills necessary
            to support a wide variety of learning and therapeutic goals in the
            backcountry.
          </div>
        </div>

        <div className={classes.guidingsectionbg1}>
          <div className={`auto-container  pt-5 pb-5 ${classes.fontsize}`}>
            This program provides leadership training to develop skills that
            involve wilderness adventure and provide a non-pathological approach
            to guiding personal and professional transformation.
          </div>
          <div className="auto-container">
            <div className={classes.twgcontainer}>
              <h4 className={`text-center pb-3 ${classes.fontsize}`}>
                The TWG program has two pathways
              </h4>
              <ul className="pb-5">
                <li className={`ml-5 ${classes.fontsize}`}>
                  <br />
                  Wilderness Quest Guide Pathway
                  <br /> <br />
                </li>
                <li className={`ml-5 ${classes.fontsize}`}>
                  Wilderness Retreat Facilitation Pathway
                </li>
              </ul>
            </div>

            <div className={classes.fontsize}>
              Students must complete the Nature-Connected Coaching℠ program
              before beginning the Transformational Wilderness Guide
              certification program. For the Quest Guide Pathway, students must
              have completed the Wilderness Quest before beginning the
              certification program. Previous experience and training will be
              considered.
            </div>

            <div className={`row ${classes.rowgap}`}>
              <div className="text-center mt-5 mb-5">
                <Link href="/" className="theme-btn btn-style-four">
                  <span className="btn-title">More Details</span>
                </Link>
              </div>
              <div className="text-center mt-5 mb-5">
                <Link href="/" className="theme-btn btn-style-four">
                  <span className="btn-title">More Details</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="auto-container">
          <h4 className="text-center pt-5">
            TURN YOUR PASSION FOR NATURE & HELPING OTHERS INTO A CAREER
          </h4>
          <div className={`text-center mt-5 mb-5 ${classes.marginbtm}`}>
            <Link href="/" className="theme-btn btn-style-four">
              <span className="btn-title">More Details</span>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
