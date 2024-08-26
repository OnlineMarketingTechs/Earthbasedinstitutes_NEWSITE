"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Breadcrumb_Services_blt from "@/components/layout/Breadcrumb-Services-Bullets-Points";
import AwardSlider1 from "@/components/slider/AwardSlider1";
// import bg from "@/public/assets/images/EBI-about-earth-based-institue.jpeg";
import Link from "next/link";
import { useState } from "react";
import FaqSection from "@/components/elements/FAQ";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
import classes from "@/public/assets/css/ebi.module.css";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services_blt
          breadcrumbTitle="About"
          pageTitle="WILDERNESS DIRECTIONS TRIPS"
          pageImage="/assets/ebi_images/EBI-wilderness-direction-trips.webp"
          bltTitle="WHEN YOU"
          listItemOne="have a love for nature"
          listItemTwo="want clarity, direction, and healing"
          listItemThree="can commit to 1-7 days in the wilderness"
          listItemFour="want support on current life issues and struggles"

          //   btn="Admissions"
        />
        <div className="auto-container">
          <div className={`text pt-5 pb-5 ${classes.fontsize}`}>
            Earth-Based Institute (EBI) Wilderness Directions is a guided
            personalized wilderness experience for one or two people, a family,
            or a small group. The entire experience, from location to duration
            (typically 1-7 days) is customized to individual needs and focused
            on personal growth. Previous wilderness experience is not required.
          </div>

          <section className="services-details">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8 content-side">
                  {/*Theme Carousel*/}
                  {/* <div className="image-slide">
                    <img
                      src="/assets/ebi_images/nature-connected-coaching-whitebk-398x414.png"
                      alt=""
                    /> */}

                  {/* <div className="content">
                      <h4>
                        Transform your life and career through a powerful <br />{" "}
                        immersion in nature, community and action
                      </h4>
                    </div> */}
                  {/* </div> */}
                  <h2>A Personalized Wilderness Growth Experience</h2>
                  <div className={`text ${classes.fontsize}`}>
                    This intensive experience provides clarity and direction for
                    those seeking life or career changes. It can be used to
                    enhance and support current growth, or serve as a singular
                    life-changing experience. Wilderness Directions is an
                    effective tool for self-reflection, metaphor, and healing.
                    The wilderness experience is often used in support of other
                    therapies.
                  </div>
                  <h2 className="pt-5">
                    What to expect from EBI Wilderness Directions
                  </h2>
                  <div className="row mb-5 pt-5">
                    <div className="col-md-5">
                      {/* <h2>PHASE 1</h2> */}
                      <div className="icon">
                        <span className="flaticon-chart" />
                      </div>
                    </div>
                    <div className="col-md-7">
                      {/* <div className="text">
                        <p>
                          How all this mistaken idea of denouncing pleasure and
                          praising pain was born and we will give you a complete
                          the account of the system &amp; expound.
                        </p>
                        <p>
                          Complete account of the system, and expound the actual
                          teachings of the great explorer of the truth.{" "}
                        </p>
                      </div> */}
                      <ul className="list">
                        <li>
                          <i className="fa fa-check" />a safe, thoughtful, and
                          dynamic approach
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          pre- and post-experience support
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          integration of Gestalt psychology, life coaching and
                          wilderness guiding
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          basic wilderness skills (if appropriate)
                        </li>
                      </ul>
                      <div className="text">
                        For more information about creating a personalized
                        wilderness experience:
                      </div>
                      <div className="text-center mt-5 pb-5">
                        <Link href="/" className="theme-btn btn-style-four">
                          <span className="btn-title">
                            CONTACT US TO LEARN MORE
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* <h2>Explore our audit &amp; assurance services</h2> */}
                  {/*Theme Carousel*/}
                  {/* <ServiceSlider1 /> */}
                  {/* <h2>Confidence in future</h2>
                  <div className="text">
                    Denouncing pleasure and praising pain was will give you a
                    complete who chooses to enjoy a pleasure that has no
                    annoying consequences,.
                  </div>
                  <ServiceTabs1 /> */}
                </div>
                <aside className="col-lg-4">
                  <div className="service-sidebar">
                    <div className="widget widget_categories_two">
                      <div className="widget-content">
                        <ul className="categories-list clearfix">
                          <li>
                            <Link href="/nature-connected-coaching">
                              Wilderness Direction Trips
                              <span />
                            </Link>
                          </li>
                          {/* <li>
                            <Link href="/your-bee-line-strategy">
                              New Course- Your Bee-line strategy
                              <span />
                            </Link>
                          </li> */}
                          <li>
                            <Link href="/nature-connected-leadership">
                              Life Coaching Services
                              <span />
                            </Link>
                          </li>
                          <li>
                            <Link href="/wilderness-quest">
                              Intensive Business Mentoring
                              <span />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* <h4 className="text-center pb-5">
                      STAND OUT FROM THE CROWD AND TAKE YOUR CAREER TO THE NEXT
                      LEVEL.
                    </h4> */}
                    <div
                      className="widget widget_brochur mb-3"
                      style={{
                        backgroundColor: "rgb(37, 43, 60)",
                        // backgroundImage:
                        //   "url(assets/images/background/bg-27.jpg)",
                      }}
                    >
                      {/* <div className="widget-content">
                        <div className="icon">
                          <img src="/assets/images/icons/icon-60.png" alt="" />
                        </div> */}
                      <div
                        className={` text-center text-white ${classes.fontsize}`}
                      >
                        “Look deep into nature, and then you will understand
                        everything better.”
                        <br /> <br />
                        —Albert Einstein
                      </div>
                    </div>
                    <div
                      className={`widget widget_brochur mt-3 ${classes.ctabtnbg}`}
                    >
                      <div
                        className={`text-center ${classes.textcolor} ${classes.fontsize}`}
                      >
                        The Earth-Based Institute Wilderness Quest is an 8-10
                        day, small-group wilderness experience culminating in a
                        rite-of-passage ceremony.
                      </div>
                      <div className="link-btn mt-5 ml-5">
                        <Link
                          href="#"
                          className="theme-btn btn-style-one text-white"
                        >
                          <span className="btn-title">Wilderness Quest</span>
                        </Link>
                      </div>
                    </div>
                    {/* <div
                      className="widget widget_brochur"
                      style={{
                        backgroundImage:
                          "url(assets/images/background/bg-27.jpg)",
                      }}
                    >
                      <div className="widget-content">
                        <div className="icon">
                          <img src="/assets/images/icons/icon-60.png" alt="" />
                        </div>
                        <h5>Case Studies</h5>
                        <h4>Audit &amp; Assuarance</h4>
                        <Link href="#">
                          <i className="flaticon-right" />
                          Download (2.5 mb)
                        </Link>
                      </div>
                    </div>
                    <div
                      className="widget widget_contact"
                      style={{
                        backgroundImage:
                          "url(assets/images/background/bg-25.jpg)",
                      }}
                    >
                      <div className="widget-content">
                        <img src="/assets/images/icons/icon-55.png" alt="" />
                        <h4>Do you need any help?</h4>
                        <div className="phone-number">
                          <Link href="tel:+1 80055544678">
                            +1 800 555 44 678
                          </Link>
                        </div>
                        <div className="email">
                          <Link href="mailto:supportteam@Envolve.com">
                            supportteam@Envolve.com
                          </Link>
                        </div>
                        <div className="link-btn">
                          <Link
                            href="#"
                            className="theme-btn btn-style-one text-white"
                          >
                            <span className="btn-title">APPOINTMENT</span>
                          </Link>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
