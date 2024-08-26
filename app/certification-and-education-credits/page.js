"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
import AwardSlider1 from "@/components/slider/AwardSlider1";

import Link from "next/link";
import { useState } from "react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
import classes from "@/public/assets/css/ebi.module.css";
import Image from "next/image";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="About"
          pageTitle="Certification And Education Credits"
          pageImage="/assets/images/EBI-about-earth-based-institue.webp"
        />
        <div className="auto-container mb-5">
          <h2 className="pt-4 pb-3">Certifications</h2>
          <div className={`"text ${classes.fontsize}`}>
            Earth-Based Institute (EBI) offers two certifications for those
            drawn to a professional outdoor career
          </div>
          <div className={`row pt-5 pb-3 ${classes.rowcontainer}`}>
            <div>
              <h4 className="text-center mt-3 mb-3">NATURE-CONNECTED COACH℠</h4>
              <Image
                src="/assets/ebi_images/nature-connected-coaching-whitebk-398x414.png"
                alt="Nature-connected coaching certification."
                height={500}
                width={500}
              />
            </div>
            <div>
              <h4 className="text-center mt-3 mb-3">
                TRANSFORMATIONAL WILDERNESS GUIDE
              </h4>
              <Image
                src="/assets/ebi_images/twgncclogo-300x296.png"
                alt="Nature-connected coaching certification."
                height={450}
                width={450}
              />
            </div>
          </div>
          <div className={`text ${classes.fontsize}`}>
            Nature-Connected Coaching is a Level 2 accredited program by the
            International Coach Federation (ICF), the world’s largest coaching
            organization. Upon successful completion graduates are qualified to
            obtain a Professional Certified Coach credential. No experience nor
            prior training is required to enroll in the NCC program.
            <br /> <br />
            Transformational Wilderness Guiding (TWG) is an advanced training
            for those who wish to work with clients and groups in remote
            wilderness locations. NCC certification is the prerequisite for TWG.
          </div>
        </div>
        <div className={`text pt-3 pb-3 ${classes.bgsection}`}>
          <div className="auto-container">
            <h5 className={`text-center mt-5 mb-3 ${classes.fontsize}`}>
              ICF offers the only globally recognized, independent credentialing
              program for coach practitioners.
            </h5>
            <div className={`text ${classes.fontsize}`}>
              ICF is an independent certification body that offers credentials
              for programs that train professional coaches. It is the world’s
              largest membership organization for professional coaches.
              Earth-based Institute training programs meet the high standards
              and guidelines set by ICF. Our programs have undergone a rigorous
              review process and demonstrated that our curricula aligns with the
              ICF:
            </div>
            <ul className="ml-5">
              <li className={classes.fontsize}>
                Core Competencies for coaches
              </li>
              <li className={classes.fontsize}>Code of Ethics and standards</li>
              <li className={classes.fontsize}>
                Internationally recognized individual credentialing program
              </li>
            </ul>
          </div>
        </div>
        <div className="auto-container">
          <h3 className="text-center mt-5 mb-3">
            WHAT DOES CERTIFICATION MEAN FOR YOU?
          </h3>
          <div className={`text mb-5 ${classes.fontsize}`}>
            {" "}
            Completing our coach training will result in both a certification as
            a Nature-Connected Coach (NCC) and an ICF professional credential as
            an certified coach.
            <br /> <br />
            The combination of these two ensure that you are receiving the
            highest quality coach education combined with a unique approach that
            positions you in a niche market. As an ICF credentialed coach you
            are able to work with clients globally and apply Nature-Connected
            Coaching to many different modalities, such as Life Coaching,
            Wellness Coaching, and Business Coaching.
            <br /> <br />
            The NCC program offers you over 315 hours of coach training that
            includes our unique nature-connected approach with over 251 hours of
            direct synchronous instruction in professional coaching skills and
            competencies. Obtaining this credential goes way beyond just the
            education. It shows the world that you have both the experience and
            skill set to truly support your clients' success. With this
            certification you can proudly call yourself a Professional Coach,
            separating your from others in the field who call themselves
            "coaches" without formal training.
            <br /> <br />
            EBI follows and teaches the ICF Code of Ethics and it is our
            intention to hold diversity, inclusion, belonging, and justice as
            core values influencing the decisions we make and actions we take
            within our organization.
          </div>
          <div className="text-center mt-5 mb-5">
            <Link href="/" className="theme-btn btn-style-four">
              <span className="btn-title">More Details</span>
            </Link>
          </div>
        </div>

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
