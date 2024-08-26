"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Breadcrumb_Services_Quote from "@/components/layout/Breadcrumb-Services-Quote";
import AwardSlider1 from "@/components/slider/AwardSlider1";
// import bg from "@/public/assets/images/EBI-about-earth-based-institue.jpeg";
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
          pageTitle="PERSONALIZED COACHING SERVICES"
          pageImage="/assets/ebi_images/ebi-personal-coaching-services.webp"
          quote="For individual, family, and personal growth"
          //   btn="Admissions"
        />
        <div className="auto-container">
          <div className={`text pt-5 pb-5 ${classes.fontsize}`}>
            Earth-Based Institute (EBI) offers thought-provoking, creative,
            personalized ways for you to connect to nature and find clarity.
            Open to everyone, these experiences are tailored to your specific
            needs in one-on-one or small group settings.
          </div>

          <h4 className="h2 pb-5 pt-5">Wilderness Trips</h4>
          <div className={classes.admissions}>
            <div className={classes.boxwidth}>
              {/* <h4 className="h2 mb-5">Online Registration</h4> */}
              <div className={`text ${classes.fontsize}`}>
                The transformational power of being in physical contact with
                nature is key to personal growth, self-discovery, and spiritual
                renewal.
                <br /> <br />
                EBI offers Wilderness Directions, our customized nature
                trips—these wilderness experiences are designed for one or two
                individuals lead by an EBI-certified Nature-Connected Coach (1-7
                days, personalized to your needs)
              </div>
            </div>

            <div className={classes.boxwidth}>
              {/* <h4 className="h2 mb-5">Certified Coaching Programs</h4> */}
              <div className={`text ${classes.fontsize}`}>
                Earth-Based Institute coaching can improve your life—supporting
                you through challenging circumstances and major transitions.
                <br /> <br />
                We offer two kinds of professional life coaching:
                <ul>
                  <li className={`ml-4 ${classes.fontsize}`}>
                    {" "}
                    <br />
                    Life Coaching for individuals in transition
                  </li>
                  <li className={`ml-4 ${classes.fontsize}`}>
                    Parent and Family Coaching for families struggling to stay
                    connected through challenging times
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.coachingbg}>
          <div className="auto-contitaner mt-5 pt-5">
            <h4 className="h2 pt-5 text-center">
              Intensive Business Mentoring
            </h4>
            <div className={`text auto-container pt-5 ${classes.fontsize}`}>
              EBI is committed to helping you a grow your profitable
              nature-connected business. In addition to the career development
              modules built into our Nature-Connected Coaching℠ certification
              program, EBI now offers three levels of affordable, individualized
              business coaching:
              <ul className="pt-3 pb-3">
                <li className={classes.fontsize}>3-month business launcher</li>
                <li className={classes.fontsize}>4-month business launcher</li>
                <li className={classes.fontsize}>6-month business launcher</li>
              </ul>
              You have vision and passion; we will help you make confident
              decisions and set achievable goals to put you on the path to
              success.
            </div>
            <div className="text-center mt-5 pb-5">
              <Link href="/" className="theme-btn btn-style-four">
                <span className="btn-title">CONTACT US TO LEARN MORE</span>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
