"use client";
import ServiceTabs1 from "@/components/elements/ServiceTabs1";
import Layout from "@/components/layout/Layout";
import AuditSlider1 from "@/components/slider/AuditSlider1";
import ServiceSlider1 from "@/components/slider/ServiceSlider1";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
import FAQ from "../faq/page";
import Link from "next/link";
import { useState } from "react";
import FaqSection from "@/components/elements/FAQ";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="Programs"
          pageTitle="Nature-Connected Coaching"
          pageImage="/assets/images/EBI-hands.webp"
        />

        <div>
          <section className="services-details">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8 content-side">
                  {/*Theme Carousel*/}
                  <div className="image-slide">
                    <img
                      src="/assets/ebi_images/nature-connected-coaching-whitebk-398x414.webp"
                      alt=""
                    />

                    {/* <div className="content">
                      <h4>
                        Transform your life and career through a powerful <br />{" "}
                        immersion in nature, community and action
                      </h4>
                    </div> */}
                  </div>
                  <h2>
                    COllABORATE WITH NATURE TO SUPPORT YOUR CLIENT'S
                    TRANSFORMATIONAL GOALS
                  </h2>
                  <div className="text">
                    Since 2008, Earth-Based Institute (EBI) offers two levels of
                    certified coaching. Nature-Connected Coaching (NCC) is the
                    core program. Transformational Wilderness Guiding is a
                    second level of certification. Since 2008, Earth-Based
                    Institute (EBI) offers two levels of certified coaching.
                    Nature-Connected Coaching (NCC) is the core program.
                    Transformational Wilderness Guiding is a second level of
                    certification.
                  </div>
                  <div className="text">
                    The low-residency Nature-Connected Coaching program is
                    designed to help you master the skills of Professional
                    Coaching through a unique nature-focused approach that is
                    not found anywhere else.{" "}
                  </div>
                  <h2 className="pt-5">
                    TWO PHASE APPROACH TO A SUCCESSFUL CAREER
                  </h2>
                  <div className="row mb-5 pt-5">
                    <div className="col-md-5">
                      <h2>PHASE 1</h2>
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
                          <i className="fa fa-check" />
                          Complete our coaching curriculum and obtain your NCC
                          certification.
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Learn unique nature immersion and awareness practices.
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Work closely with a mentor to build your confidence as
                          a coach.
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Develop deep listening and questioning skills.
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Understand the neuroscience behind NCC.
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Gain advanced tools like Gestalt Therapy, Trauma
                          Informed Coaching, working with grief and loss, and
                          Partswork from leading instructors in the field.
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Start your coaching business and begin working with
                          paid clients in the first month.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row mb-5 pt-5">
                    <div className="col-md-5">
                      <h2>PHASE 2</h2>
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
                          <i className="fa fa-check" />
                          Obtain your ICF Credential through our Mentor Coaching
                          program.
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Grow and build your business through 1-on-1 and group
                          business coaching only for NCC students.
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Become an active member in our NCC Alumni Community.
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Retake intensives for free to stay connected and
                          up-to-date with the current curriculum.
                        </li>
                      </ul>
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
                              Nature-Connected Coaching
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
                              Nature-Connected Leadership <span />
                            </Link>
                          </li>
                          <li>
                            <Link href="/wilderness-quest">
                              Wilderness Quest
                              <span />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ebi-community-adventure">
                              EBI Community Adventure <span />
                            </Link>
                          </li>
                          <li>
                            <Link href="/other-programs">
                              Other Programs <span />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="text-center pb-5">
                      STAND OUT FROM THE CROWD AND TAKE YOUR CAREER TO THE NEXT
                      LEVEL.
                    </h4>
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
                      <div className="text text-center text-white">
                        There are a lot of people out there that call themselves
                        a "coach," but only those who meet the standards of the
                        ICF can call themselves a Professional Certified Coach.
                      </div>
                    </div>
                    <img src="assets/images/EBI-icf.webp" className="ml-5" />
                    <div
                      className="widget widget_brochur mt-3"
                      style={{
                        backgroundColor: "rgb(37, 43, 60)",
                        // backgroundImage:
                        //   "url(assets/images/background/bg-27.jpg)",
                      }}
                    >
                      <div className="text-white text-center">
                        Nature-Connected Coaching is an ICF Level 2 accredited
                        coaching program. The International Coach Federation
                        (ICF) is the largest organization of Professional
                        Certified Coaches in the world and provides
                        accreditation to programs like ours, ensuring students
                        are receiving the very best training possible.
                        <br /> <br />
                        The NCC program is approved by the ICF for over 315
                        hours of coach training.
                        <br /> <br />
                        NCC is for students who are looking for a comprehensive
                        professional training and who are willing to work hard
                        to launch their career as a coach.
                        <br /> <br />
                        This program is not for those looking for a quick and
                        easy coach certification.
                        <br />
                      </div>
                      <div className="link-btn mt-5 ml-5">
                        <Link
                          href="#"
                          className="theme-btn btn-style-one text-white"
                        >
                          <span className="btn-title">GET MORE DETAILS</span>
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
              <h2 className="pt-5">FREQUENTLY ASKED QUESTIONS</h2>
              <FaqSection />
            </div>
          </section>
          {/* Feature Section Two */}
        </div>
      </Layout>
    </>
  );
}
