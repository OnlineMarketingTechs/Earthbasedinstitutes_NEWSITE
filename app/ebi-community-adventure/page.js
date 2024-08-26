import ServiceTabs1 from "@/components/elements/ServiceTabs1";
import Layout from "@/components/layout/Layout";
import AuditSlider1 from "@/components/slider/AuditSlider1";
import ServiceSlider1 from "@/components/slider/ServiceSlider1";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="Programs"
          pageTitle="EBI Community Adventure"
          pageImage="/assets/images/EBI-about-earth-based-institue.webp"
        />

        <div className="error-section">
          <div className="auto-container">
            <div className="text-center">
              <div className="image">
                <img src="assets/ebi_images/Nature-Coaching-30.webp" alt="" />
              </div>
              <div className="content">
                <h1>Page Comming Soon</h1>
                <div className="link-btn">
                  <Link href="/" className="theme-btn btn-style-one">
                    <span className="btn-title">BACK TO HOME</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <section className="services-details">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8 content-side">
                  {/*Theme Carousel*/}
        {/* <AuditSlider1 />
                  <div className="row mb-5">
                    <div className="col-md-5">
                      <h2>
                        Providing <br /> world class service <br />{" "}
                        experiences!..
                      </h2>
                      <div className="icon">
                        <span className="flaticon-chart" />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="text">
                        <p>
                          How all this mistaken idea of denouncing pleasure and
                          praising pain was born and we will give you a complete
                          the account of the system &amp; expound.
                        </p>
                        <p>
                          Complete account of the system, and expound the actual
                          teachings of the great explorer of the truth.{" "}
                        </p>
                      </div>
                      <ul className="list">
                        <li>
                          <i className="fa fa-check" />
                          Leading your business to evolution
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Sharing expertise. Building relationships
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Growing your business sense
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Financially smart. Service from the heart
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Bring your life experiences to us
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h2>Explore our audit &amp; assurance services</h2> */}
        {/*Theme Carousel*/}
        {/* <ServiceSlider1 />
                  <h2>Confidence in future</h2>
                  <div className="text">
                    Denouncing pleasure and praising pain was will give you a
                    complete who chooses to enjoy a pleasure that has no
                    annoying consequences,.
                  </div>
                  <ServiceTabs1 />
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
                          <li>
                            <Link href="/your-bee-line-strategy">
                              New Course- Your Bee-line strategy
                              <span />
                            </Link>
                          </li>
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
                    <div
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
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section> */}
        {/* Feature Section Two */}
        {/* <section className="feature-section-two mt-0">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-6 feature-block-two style-two">
                  <div className="shape-box">
                    <div className="inner-box">
                      <div className="icon">
                        <img src="/assets/images/icons/icon-9.png" alt="" />
                      </div>
                      <h4>Become a Partner of Envolve</h4>
                      <div className="text">
                        To take a trivial example, which of us undertakes <br />
                        laborious physical exercise.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 feature-block-two style-two">
                  <div className="shape-box">
                    <div className="inner-box">
                      <div className="icon">
                        <img src="/assets/images/icons/icon-10.png" alt="" />
                      </div>
                      <h4>Career Opportunities in Envolve</h4>
                      <div className="text">
                        Who chooses to enjoy a pleasure that has no one <br />
                        annoying consequences.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}
      </Layout>
    </>
  );
}
