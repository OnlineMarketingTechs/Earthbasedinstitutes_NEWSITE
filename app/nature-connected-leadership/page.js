import ServiceTabs1 from "@/components/elements/ServiceTabs1";
import Layout from "@/components/layout/Layout";
import AuditSlider1 from "@/components/slider/AuditSlider1";
import ServiceSlider1 from "@/components/slider/ServiceSlider1";
import ProgramsMenu from "@/components/ServiceSidbar";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="Programs"
          pageTitle="Nature-Connected Leadership"
          pageImage="/assets/ebi_images/Nature-Coaching-20.webp"
        />

        <div>
          <section className="services-details">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8 content-side">
                  {/*Theme Carousel*/}
                  <div className="image-slide">
                    <img
                      src="/assets/images/Nature-Connected-Leadership.webp"
                      alt=""
                    />

                    <div className="content">
                      <h4>
                        Transform your life and career through a powerful <br />{" "}
                        immersion in nature, community and action
                      </h4>
                    </div>
                  </div>
                  <h2>JOIN US FOR THIS THREE-PART, LIVE, ONLINE TRAINING</h2>
                  <div className="row mb-5">
                    <div className="col-md-5">
                      <h2>LEVEL ONE</h2>
                      <div className="icon">
                        <span className="flaticon-chart" />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="text">
                        <p>
                          Learn the skills to embody a growth mindset and master
                          the tools of a Nature-Connected Leader <br />
                        </p>
                        <p>
                          <br />
                          Thursday Evenings <br />
                          July 28-September 8, 2022
                        </p>
                      </div>
                      <ul className="list">
                        <li>
                          <i className="fa fa-check" />
                          Weekly Live sessions
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Weekly Small Group Meetings*
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Private Facebook group
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Lifetime access to recorded sessions and the NCL
                          community
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Direct email access to instructors
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          20% discount off 1:1 coaching with a certified coach
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          20% discount off the Fall Wilderness Quest
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Value: $2500
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col-md-5">
                      <h2>LEVEL TWO</h2>
                      <div className="icon">
                        <span className="flaticon-chart" />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="text">
                        <p>
                          Bring your gifts and leadership skills to the world!
                          Learn how to listen and authentically connect with
                          others from a place of cohesion and harmony. <br />
                        </p>
                        <p>
                          <br />
                          Thursday Evenings <br />
                          October 6- November 17, 2022
                        </p>
                      </div>
                      <ul className="list">
                        <li>
                          <i className="fa fa-check" />
                          Weekly Live sessions
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Weekly Small Group Meetings*
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Private Facebook group
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Lifetime access to recorded sessions and the NCL
                          community
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Direct email access to instructors
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          3, free coaching sessions with one of our hand
                          selected students
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          20% discount on 1:1 coaching with a certified coach
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Value: $2500
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col-md-5">
                      <h2>LEVEL THREE</h2>
                      <div className="icon">
                        <span className="flaticon-chart" />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="text">
                        <p>
                          Put your vision into action through the support of
                          coaching and community. <br />
                        </p>
                        <p>
                          <br />
                          Thursday Evenings, 2x/Month <br />
                          December 8, 2022 – March 2, 2023
                        </p>
                      </div>
                      <ul className="list">
                        <li>
                          <i className="fa fa-check" />
                          1:1 coaching with Daniel and Michael included!
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Biweekly live sessions
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Weekly Small Group Meetings*
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Private facebook group
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Lifetime access to recorded sessions and the NCL
                          community
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Direct email access to instructors
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          20% discount off the Summer ’23 Wilderness Quest
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Value: $3500
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*Theme Carousel*/}
                  {/* <ServiceSlider1 /> */}
                  <h2 className="pt-5">WHO IS THIS PROGRAM FOR?</h2>
                  <div className="text pb-5">
                    Whether you are already a leader for others, at work or at
                    home, or are just now feeling called to bring forward more
                    of your gifts to the world, this program will be a great
                    fit. This course will give you the tools and motivation to
                    bring your leadership skills from good to great through
                    experiential learning, group support and accountability.
                  </div>
                  <h2 className="mt-5">
                    THE PERFECT FIT IS SOMEONE WHO FEELS...
                  </h2>
                  <div className="text">
                    <ul className="list">
                      <li>
                        <i className="fa fa-check" />A strong desire to make a
                        positive impact on your community, family, and world.
                      </li>
                      <li>
                        <i className="fa fa-check" />A willingness to let go of
                        who you have been and step into a new version of
                        yourself.
                      </li>
                      <li>
                        <i className="fa fa-check" />A commitment to break
                        through old unhealthy patterns and habits so that you
                        can start to create a lifestyle of radical leadership.
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        Ready to turn your hopes wishes and dreams into visions,
                        plans, and actions.
                      </li>
                    </ul>
                  </div>
                  <div className="text text-center mt-5">
                    "This course is a beautiful place to begin to journey with
                    Earth-Based Institute. My experience was expansive,
                    affirming and life changing! The course provided a framework
                    for me to step into leadership, and also provided skills to
                    help others step into leadership for themselves. Now more
                    than ever, the collective NEEDS leaders , who operate from a
                    place of deep connection."
                  </div>
                  <div className="text text-center pb-5">
                    Suez Nields
                    <br />
                    NCL & NCC Grad
                  </div>
                  <ServiceTabs1 />
                </div>
                <aside className="col-lg-4">
                  <div className="service-sidebar">
                    <ProgramsMenu/>
                    {/* <div className="widget widget_categories_two">
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
                          {/* <li>
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
                    </div>  */}
                    <h2 className="text-center pb-4">YOUR INSTRUCTORS</h2>
                    <div className="team-block-four ">
                      <div className="inner-box">
                        <div className="image">
                          <img
                            src="/assets/ebi-staff-and-instructors/leadership-instructor-1.webp"
                            alt="Image of EBI founder and CEO Michael Jospé"
                          />
                          {/* <div className="social-links-wrapper">
                            <div className="icon">
                              <span className="flaticon-share-1" />
                            </div>
                            <ul className="social-links">
                              <li>
                                <Link href="#">
                                  <span className="fab fa-facebook-f" />
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <span className="fab fa-twitter" />
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <span className="fab fa-google-plus-g" />
                                </Link>
                              </li>
                            </ul>
                          </div> */}
                        </div>
                        <div className="lower-content">
                          <div className="author-title">
                            <h4>
                              MICHAEL JOSPÉ, MA, <br />
                              PCC
                            </h4>
                            <div className="designation">Ceo &amp; Founder</div>
                          </div>
                          {/* <div className="text">
                            Earth-Based Institute (EBI) was Founded by Michael
                            Jospé. As a professional coach, educator and
                            wilderness guide, Michael is passionate about
                            helping people learn about themselves while being
                            out in nature.
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div className="team-block-four ">
                      <div className="inner-box">
                        <div className="image">
                          <img
                            src="/assets/ebi-staff-and-instructors/Leaderdship-Instructor-2.webp"
                            alt="Image of EBI founder and CEO Michael Jospé"
                          />
                          {/* <div className="social-links-wrapper">
                            <div className="icon">
                              <span className="flaticon-share-1" />
                            </div>
                            <ul className="social-links">
                              <li>
                                <Link href="#">
                                  <span className="fab fa-facebook-f" />
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <span className="fab fa-twitter" />
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <span className="fab fa-google-plus-g" />
                                </Link>
                              </li>
                            </ul>
                          </div> */}
                        </div>
                        <div className="lower-content">
                          <div className="author-title">
                            <h4>
                              MICHAEL JOSPÉ, MA, <br />
                              PCC
                            </h4>
                            <div className="designation">Ceo &amp; Founder</div>
                          </div>
                          {/* <div className="text">
                            Earth-Based Institute (EBI) was Founded by Michael
                            Jospé. As a professional coach, educator and
                            wilderness guide, Michael is passionate about
                            helping people learn about themselves while being
                            out in nature.
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div
                      className="widget widget_brochur"
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
                        "My personal leadership has been reawakened to the point
                        where it can't be denied or ignored. EBI puts a deep
                        level of care and attention into every one of their
                        students, creating an inclusive, supportive and
                        family-like environment. It's like coming home...and the
                        training sets you up to welcome others home."
                      </div>
                      <h4 className="text-center text-white">
                        David Fontaine
                        <br /> David Fontaine NCL, NCC & TWG Grad
                      </h4>
                      {/* </div> */}
                    </div>
                    <h2 className="text-center pb-4 pt-5">WHAT TO EXPECT</h2>
                    <div
                      className="widget widget_contact"
                      style={{
                        backgroundImage:
                          "url(/assets/ebi_images/ebi-leadership.webp)",
                      }}
                    >
                      <div className="widget-content">
                        <img src="/assets/images/icons/icon-55.png" alt="" />
                        <h4>TRANSFORMATION</h4>
                        <div className="text text-white">
                          Through experiential education and nature immersion
                          our curriculum will guide you into a greater sense of
                          of direction and confidence as a leader. Our focus is
                          on helping you realize your goals and take conscious
                          action on turning them into reality.
                          <br />
                          No more being a passive bystander! Become an active
                          player.
                        </div>
                        <div className="link-btn">
                          <Link
                            href="#"
                            className="theme-btn btn-style-one text-white"
                          >
                            <span className="btn-title">GET MORE DETAILS</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="widget widget_contact"
                      style={{
                        backgroundImage: "url(/assets/ebi_images/ebi-04.webp)",
                      }}
                    >
                      <div className="widget-content">
                        <img src="/assets/images/icons/icon-55.png" alt="" />
                        <h4>1:1 COACHING</h4>
                        <div className="text text-white">
                          Coaching is a perfect compliment to this training and
                          collaborating with one of our qualified
                          Nature-Connected coaches will be available throughout
                          the training at a discounted rate. The hardest person
                          to see is yourself and having a Nature-Connected Coach
                          working with you will help you see solutions and
                          opportunities that may have been hidden from your
                          awareness.
                        </div>
                        <div className="link-btn">
                          <Link
                            href="#"
                            className="theme-btn btn-style-one text-white"
                          >
                            <span className="btn-title">GET MORE DETAILS</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="widget widget_contact"
                      style={{
                        backgroundImage: "url(/assets/ebi_images/EBI-21.webp)",
                      }}
                    >
                      <div className="widget-content">
                        <img src="/assets/images/icons/icon-55.png" alt="" />
                        <h4>COMMUNITY</h4>
                        <div className="text text-white">
                          This program is community-focused. Outside of the live
                          instructional sessions, you will work together with
                          other like-hearted members in small groups focused on
                          supporting each other’s success. Some of the greatest
                          transformational experiences and breakthroughs for
                          past students have been during these small group
                          gatherings. Trust, compassion, and authenticity are
                          the key to this wonderful opportunity.
                        </div>
                        <div className="link-btn">
                          <Link
                            href="#"
                            className="theme-btn btn-style-one text-white"
                          >
                            <span className="btn-title">GET MORE DETAILS</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="widget widget_brochur"
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
                        "EBI changed my life. I learned skills to bring more
                        depth to my coaching practice. I also became more
                        connected to myself, to nature and to a greater sense of
                        meaning in my life and work. The mentors and teachers at
                        EBI were so supportive and skilled. Attending EBI was
                        the best career decision I've ever made."
                      </div>
                      <h4 className="text-center text-white">
                        Sarah Hope <br />
                        NCL & NCC Grad
                      </h4>
                      {/* </div> */}
                    </div>
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
