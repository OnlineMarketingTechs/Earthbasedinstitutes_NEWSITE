import ServiceTabs1 from "@/components/elements/ServiceTabs1";
import Layout from "@/components/layout/Layout";
import AuditSlider1 from "@/components/slider/AuditSlider1";
import ServiceSlider1 from "@/components/slider/ServiceSlider1";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
import Link from "next/link";
import classes from "@/public/assets/css/ebi.module.css";
export default function Home() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="Programs"
          pageTitle="Tution and Financial Aid"
          pageImage="/assets/images/EBI-about-earth-based-institue.webp"
        />

        <div className="auto-container">
          <h2 className="text-center pt-5 pb-3">TUITION AND FINANCIAL AID</h2>
          <div className={`text ${classes.fontsize}`}>
            Tuition for most Earth-Based Institute (EBI) courses is payable via
            our secure online registration shopping cart. See individual course
            listings for specific tuition requirements and fees. Visit our
            Course Listings for a complete list of offerings, fees, and
            discounts.
            <br /> <br />
            <ul className="ml-5">
              <li className={classes.fontsize}>select a course</li>
              <li className={classes.fontsize}>
                then enroll via our safe and secure online cart
              </li>
            </ul>
          </div>

          <h4 className={`${classes.tuitionh4}`}>CERTIFICATION PROGRAMS</h4>
          <div className={`text pb-5 ${classes.fontsize}`}>
            Our certification programs—Nature-Connected Coaching℠ (NCC) and the
            follow-up Transformation Wilderness Guide (TWG) courses—have limited
            class sizes and fill up quickly, so we strongly recommend early
            registration. A non-refundable deposit of $2,500 is required to hold
            your seat in the NCC program or to be placed on a waiting list.
            <br /> <br />
            Deposits and tuition are non-refundable, but transferable.
          </div>
        </div>

        <div className={` ${classes.tuitionbg}`}>
          <div className="auto-container">
            <h4 className={`${classes.tuitionh4}`}>FINANCIAL AID</h4>
            <div className={`text ${classes.fontsize}`}>
              Earth-based Institute (EBI) is committed to helping you reach your
              goals. Our low-residency certification program is designed to
              allow you to keep working during the certification process. We
              offer financial aid, including:
              <br /> <br />
              <ul className="ml-5">
                <li className={classes.fontsize}>scholarships</li>
                <li className={classes.fontsize}>payment plans and loans</li>
                <li className={classes.fontsize}>
                  AmeriCorps Education Awards
                </li>
                <li className={classes.fontsize}>
                  early registration discounts
                </li>
                <li className={classes.fontsize}>work exchange positions</li>
              </ul>
            </div>

            <h4 className={`${classes.tuitionh4}`}>SCHOLARSHIPS</h4>
            <div className={`text ${classes.fontsize}`}>
              EBI offers a tuition reduction scholarship of up to $2,500 for the
              Nature-Connected Coaching℠ program. Scholarships are limited to
              two per cohort (cohorts range from 8-16 students).
              <br /> <br />
              Think of an EBI scholarship as our way of investing in your future
              by reducing your tuition. The application is a business plan that
              shows forward thinking about how our NCC program will start or
              improve your business.
              <br /> <br />
              <ul className="ml-5">
                <li className={classes.fontsize}>
                  applications are due 30 days after registration or 30 days
                  before the start of your program, whichever comes first
                </li>
                <li className={classes.fontsize}>
                  awarded scholarships are deducted from tuition balance due
                </li>
                <li className={classes.fontsize}>anyone can apply</li>
                <li className={classes.fontsize}>
                  scholarships are awarded based on vision and professional
                  motivation, not financial need
                </li>
              </ul>
            </div>
            <h4 className={`${classes.tuitionh4}`}>PAYMENT PLANS AND LOANS</h4>
            <div className={`text ${classes.fontsize}`}>
              Once you have paid the initial deposit of $2,500, we offer monthly
              installment payment plans of 6-24 months. Payment plans are
              administered through TFC Tuition Financing. Interest rates and
              fees are based on loan length, not credit score. Payments begin 30
              days before the start of your program.
              <br /> <br />
              <ul className="ml-5 pb-5">
                <li className={classes.fontsize}>
                  applications are due 30 days after registration or 30 days
                  before the start of your program, whichever comes first
                </li>
                <li className={classes.fontsize}>
                  awarded scholarships are deducted from tuition balance due
                </li>
                <li className={classes.fontsize}>anyone can apply</li>
                <li className={classes.fontsize}>
                  scholarships are awarded based on vision and professional
                  motivation, not financial need
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="auto-container">
          <h4 className={`${classes.tuitionh4}`}>
            AMERICORP EDUCATION AWARDS AND THE GI BILL
          </h4>
          <div className={`text ${classes.fontsize}`}>
            Once you have paid the initial deposit of $2,500, we offer monthly
            installment payment plans of 6-24 months. Payment plans are
            administered through TFC Tuition Financing. Interest rates and fees
            are based on loan length, not credit score. Payments begin 30 days
            before the start of your program.
          </div>
          <div className={`text-center mt-5 mb-2 ${classes.marginbtm}`}>
            <Link href="/" className="theme-btn btn-style-four">
              <span className="btn-title">More Details</span>
            </Link>
          </div>
          <div className={`text pb-5 ${classes.fontsize}`}>
            At this time, you may only use the GI Bill to pay for an EBI course
            if you are registered as an on-campus student at WSCU.
          </div>
        </div>
      </Layout>
    </>
  );
}
